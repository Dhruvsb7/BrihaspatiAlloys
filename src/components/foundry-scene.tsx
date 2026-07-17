import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// ----- Scroll progress hook (0..1 across page) -----
function useScrollProgress() {
  const ref = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

// ----- Molten metal stream (shader on cylinder) -----
const moltenVert = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPos;
  uniform float uTime;
  void main() {
    vUv = uv;
    vPos = position;
    vec3 p = position;
    float wob = sin(p.y * 6.0 + uTime * 3.0) * 0.04 * (1.0 - uv.y);
    p.x += wob;
    p.z += cos(p.y * 5.0 + uTime * 2.5) * 0.04 * (1.0 - uv.y);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;
const moltenFrag = /* glsl */ `
  varying vec2 vUv;
  uniform float uTime;
  void main() {
    float t = uUv_y(vUv.y);
    vec3 hot = vec3(1.0, 0.95, 0.55);
    vec3 mid = vec3(1.0, 0.55, 0.15);
    vec3 cool = vec3(0.75, 0.15, 0.05);
    float flicker = 0.85 + 0.15 * sin(uTime * 6.0 + vUv.y * 30.0);
    vec3 col = mix(hot, mid, smoothstep(0.0, 0.5, vUv.y));
    col = mix(col, cool, smoothstep(0.5, 1.0, vUv.y));
    col *= flicker;
    float edge = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x);
    col += (1.0 - edge) * vec3(0.3, 0.1, 0.0);
    gl_FragColor = vec4(col, 1.0);
  }
  float uUv_y(float y) { return y; }
`;

function MoltenStream() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  useFrame((s) => {
    if (mat.current) mat.current.uniforms.uTime.value = s.clock.elapsedTime;
  });
  return (
    <group position={[0, 0, 0]}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.18, 5.5, 48, 40, true]} />
        <shaderMaterial
          ref={mat}
          uniforms={uniforms}
          vertexShader={moltenVert}
          fragmentShader={moltenFrag}
          side={THREE.DoubleSide}
          transparent={false}
          toneMapped={false}
        />
      </mesh>
      {/* glow halo */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.55, 0.4, 5.5, 32, 1, true]} />
        <meshBasicMaterial color={new THREE.Color("#ff7a1c")} transparent opacity={0.18} side={THREE.DoubleSide} depthWrite={false} blending={THREE.AdditiveBlending} toneMapped={false} />
      </mesh>
      <pointLight position={[0, 0, 0]} color={"#ff8a2a"} intensity={40} distance={12} decay={2} />
    </group>
  );
}

// ----- Sparks -----
function Sparks({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.4;
      positions[i * 3 + 1] = -2.5 + Math.random() * 1.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
      seeds[i * 3] = Math.random() * 2 - 1;
      seeds[i * 3 + 1] = 1 + Math.random() * 2.5;
      seeds[i * 3 + 2] = Math.random() * 2 - 1;
    }
    return { positions, seeds };
  }, [count]);

  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.elapsedTime;
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const life = ((t * seeds[i * 3 + 1] + i * 0.13) % 2.4) / 2.4;
      arr[i * 3] = seeds[i * 3] * life * 1.8;
      arr[i * 3 + 1] = -2.5 + life * (2 + seeds[i * 3 + 1]);
      arr[i * 3 + 2] = seeds[i * 3 + 2] * life * 1.8;
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={"#ffb066"} size={0.05} sizeAttenuation transparent opacity={0.9} depthWrite={false} blending={THREE.AdditiveBlending} toneMapped={false} />
    </points>
  );
}

// ----- Cast components floating around -----
function CastPieces() {
  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8} position={[-3.2, 0.8, -1]}>
        <mesh castShadow>
          <torusGeometry args={[0.55, 0.18, 24, 64]} />
          <meshStandardMaterial color={"#b06a3b"} metalness={1} roughness={0.28} />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.5} floatIntensity={1.0} position={[3.4, -0.4, -0.5]}>
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 0.35, 8]} />
          <meshStandardMaterial color={"#c8834a"} metalness={1} roughness={0.22} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.9} floatIntensity={0.7} position={[2.6, 1.6, -2]}>
        <mesh>
          <icosahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial color={"#8f5a34"} metalness={1} roughness={0.35} />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.9} position={[-2.8, -1.4, -1.5]}>
        <mesh>
          <torusKnotGeometry args={[0.35, 0.11, 128, 16]} />
          <meshStandardMaterial color={"#a8683a"} metalness={1} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={1.1} position={[0, -2.3, 1]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.9, 1.35, 64]} />
          <MeshTransmissionMaterial
            thickness={0.4}
            roughness={0.15}
            transmission={0.9}
            ior={1.4}
            color={"#ff9a3d"}
            attenuationColor={"#ff5b13"}
            attenuationDistance={1.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

// ----- Scroll-driven camera rig -----
function CameraRig({ scroll }: { scroll: React.MutableRefObject<number> }) {
  const { camera, pointer } = useThree();
  const target = useMemo(() => new THREE.Vector3(0, 0, 0), []);
  useFrame(() => {
    const p = scroll.current;
    // Camera path: swings around molten stream then pulls back
    const angle = p * Math.PI * 1.6 - 0.2;
    const radius = 6.5 - p * 1.2;
    const height = 1.2 - p * 2.5 + Math.sin(p * 6) * 0.4;
    const tx = Math.sin(angle) * radius + pointer.x * 0.6;
    const tz = Math.cos(angle) * radius;
    camera.position.lerp(new THREE.Vector3(tx, height + pointer.y * 0.4, tz), 0.06);
    target.set(0, -p * 0.8, 0);
    camera.lookAt(target);
  });
  return null;
}

function Scene({ scroll }: { scroll: React.MutableRefObject<number> }) {
  return (
    <>
      <color attach="background" args={["#100807"]} />
      <fog attach="fog" args={["#0c0605", 8, 22]} />
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 6, 4]} intensity={0.6} color={"#ffcf9a"} />
      <CameraRig scroll={scroll} />
      <MoltenStream />
      <Sparks />
      <CastPieces />
      <Environment preset="warehouse" environmentIntensity={0.35} />
    </>
  );
}

export function FoundryScene() {
  const scroll = useScrollProgress();
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,120,40,0.35),transparent_60%),radial-gradient(ellipse_at_top,rgba(255,180,80,0.15),transparent_50%)]" />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 1.2, 6.5], fov: 45 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.15;
        }}
        fallback={null}
        onError={() => setFailed(true)}
      >
        <Scene scroll={scroll} />
      </Canvas>
    </div>
  );
}

export default FoundryScene;
