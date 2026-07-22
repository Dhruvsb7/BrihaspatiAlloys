import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Flame, Cog, Hammer, Layers, Disc, ShieldCheck, Award, Clock,
  Phone, Mail, MapPin, Quote, Check, Star, Beaker, Microscope, Ruler, FileCheck,
  Zap, Package, Truck, Factory, Ship, Wind, Building2, Sparkles, Plus, Minus,
  Waves, Gauge, Droplets, Wrench,
} from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/brihaspati-logo.jpg.asset.json";
import heroAsset from "@/assets/foundry-hero.jpg.asset.json";
import aboutAsset from "@/assets/foundry-about.jpg.asset.json";
import stainlessAsset from "@/assets/stainless-casting.png.asset.json";
import co2Asset from "@/assets/co2-casting.jpg.asset.json";
import gravityAsset from "@/assets/gravity-casting.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Announcement />
      <Nav />
      <Hero />
      <Marquee />
      <TrustBar />
      <Services />
      <Process />
      <Capabilities />
      <Products />
      <Alloys />
      <Quality />
      <Specs />
      <About />
      <Industries />
      <WhyUs />
      <Certifications />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Announcement() {
  return (
    <div className="relative z-[60] w-full border-b border-copper/20 bg-obsidian/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-molten animate-ember" />
          <span className="hidden sm:inline">Now booking Q1 2026 pours · Batches shipping pan-India &amp; export</span>
          <span className="sm:hidden">Booking Q1 2026 · Pan-India &amp; export</span>
        </div>
        <a href="#contact" className="hidden items-center gap-1 text-copper transition-colors hover:text-copper-glow md:inline-flex">
          Request drawing review <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="Brihaspati Alloys"
            width={48}
            height={56}
            className="h-10 w-auto rounded-sm object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-medium tracking-tight">
              Brihaspati<span className="text-copper">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Non-Ferrous Foundry</span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#process" className="transition-colors hover:text-foreground">Process</a>
          <a href="#products" className="transition-colors hover:text-foreground">Products</a>
          <a href="#alloys" className="transition-colors hover:text-foreground">Alloys</a>
          <a href="#quality" className="transition-colors hover:text-foreground">Quality</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-copper px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-copper-glow hover:shadow-[var(--shadow-glow)]"
        >
          Enquire
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroAsset.url} alt="Molten metal pour at Brihaspati Alloys foundry" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.68 0.14 45 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.68 0.14 45 / 0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pt-24 pb-32 md:pt-32 md:pb-40 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/5 px-3 py-1 text-xs uppercase tracking-widest text-copper">
            <span className="h-1.5 w-1.5 rounded-full bg-molten animate-ember" />
            Precision · Reliability · Quality
          </div>

          <h1 className="text-balance font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Non-Ferrous Metal Foundry in <em className="copper-text font-light italic">Kittur, Belagavi.</em>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Brihaspati Alloys specialises in stainless steel casting, copper alloy casting,
            CO₂ sand casting, gravity die casting and industrial metal components manufacturing —
            engineered for demanding industries across India and abroad.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:bg-copper-glow"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-copper hover:text-copper"
            >
              Explore Capabilities
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-border/60 pt-8 text-xs uppercase tracking-widest text-muted-foreground">
            <MicroStat k="ISO-aligned" v="Quality system" />
            <MicroStat k="0.5 – 500 kg" v="Cast weight range" />
            <MicroStat k="24 – 72 hr" v="Quote turnaround" />
          </div>
        </div>

        <div className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-32 space-y-8 border-l border-copper/30 pl-8">
            <Stat number="10,000" suffix=" m²" label="Modern manufacturing facility" />
            <Stat number="7" suffix="+" label="Casting processes under one roof" />
            <Stat number="5.0" suffix="★" label="Rated on Google, IndiaMART & Justdial" />
            <Stat number="20+" label="Alloy grades poured in-house" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MicroStat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-copper">{k}</div>
      <div className="mt-1 normal-case tracking-normal text-[13px] text-foreground/80">{v}</div>
    </div>
  );
}

function Stat({ number, suffix, label }: { number: string; suffix?: string; label: string }) {
  return (
    <div>
      <div className="font-display text-5xl font-light tracking-tight">
        {number}
        {suffix && <span className="text-copper">{suffix}</span>}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function Marquee() {
  const alloys = [
    "LTB · Leaded Tin Bronze", "PB1 · Phosphor Bronze", "PB2 · Phosphor Bronze",
    "LG2 · Gunmetal", "HTB · High Tensile Brass", "Aluminium Bronze AB1/AB2",
    "Nickel Aluminium Bronze", "Manganese Bronze", "Silicon Bronze",
    "Monel 400", "Monel K-500", "Inconel 600", "Inconel 625", "Hastelloy C-276",
    "SS304 · CF8", "SS316 · CF8M", "Duplex CD4MCu",
    "Cupro-Nickel 90/10", "Cupro-Nickel 70/30",
  ];
  return (
    <div className="relative overflow-hidden border-y border-border/50 bg-obsidian/60 py-4">
      <div className="flex animate-[marquee_45s_linear_infinite] gap-10 whitespace-nowrap text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {[...alloys, ...alloys].map((a, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="text-foreground/70">{a}</span>
            <span className="text-copper/60">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

function TrustBar() {
  const items = ["Marine", "General Engineering", "Process Industries", "Pumps & Valves", "Power & Energy", "Heavy Machinery"];
  return (
    <section className="border-b border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-copper">Serving</span>
          {items.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-copper">
      <span className="font-mono text-copper/60">{index}</span>
      <span className="h-px w-8 bg-copper/40" />
      <span>{title}</span>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Stainless Steel Castings",
      copy: "High-performance stainless steel castings engineered for superior corrosion resistance, strength and durability in demanding industrial applications.",
      image: stainlessAsset.url,
      bullets: ["Corrosion-resistant grades", "High strength & durability", "Critical-application ready"],
    },
    {
      icon: Flame,
      title: "CO₂ Sand Casting",
      copy: "A precision sand casting process using CO₂-hardened moulds to achieve excellent surface finish, dimensional accuracy and consistent quality.",
      image: co2Asset.url,
      bullets: ["Strong, rigid moulds", "Complex geometries", "Consistent dimensional accuracy"],
    },
    {
      icon: Cog,
      title: "Gravity Die Casting",
      copy: "Metal casting using permanent moulds and gravity filling to produce dense, high-quality components with excellent mechanical properties.",
      image: gravityAsset.url,
      bullets: ["Dense, defect-free parts", "Superior mechanical properties", "Excellent repeatability"],
    },
  ];

  return (
    <section id="services" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel index="01 / 07" title="Our Specialised Services" />
            <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Stainless steel &amp; copper alloy <em className="copper-text font-light italic">casting excellence.</em>
            </h2>
          </div>
          <p className="text-muted-foreground md:col-span-5">
            From complex non-ferrous castings to high-precision sand and centrifugal casting solutions,
            we deliver consistent, high-performance components for demanding industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, idx) => (
            <article
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-copper/60 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1000}
                  height={750}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-lg bg-background/80 backdrop-blur-md">
                  <s.icon className="h-5 w-5 text-copper" strokeWidth={1.75} />
                </div>
                <div className="absolute right-5 top-5 rounded-full border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-md">
                  0{idx + 1}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl leading-tight tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper" strokeWidth={2.25} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { icon: FileCheck, t: "Enquiry & DFM", d: "Drawing review, alloy recommendation, tolerance study." },
    { icon: Hammer, t: "Pattern & Tooling", d: "Wood, resin or metal patterns matched to volume and finish." },
    { icon: Layers, t: "Mould Preparation", d: "CO₂ / no-bake / shell mould as the part demands." },
    { icon: Flame, t: "Melting & Pour", d: "Charge control, temperature-logged pour, controlled cooling." },
    { icon: Wrench, t: "Fettling & Machining", d: "Runner removal, heat treatment, dimensional machining." },
    { icon: Microscope, t: "Inspection & NDT", d: "Spectro, DP, UT and dimensional sign-off on every batch." },
    { icon: Package, t: "Packing & Dispatch", d: "VCI-wrapped, batch-tagged, full material traceability." },
  ];

  return (
    <section id="process" className="relative border-t border-border/50 bg-card/20 py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <SectionLabel index="02 / 07" title="From Drawing to Dispatch" />
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            A seven-stage <em className="copper-text font-light italic">manufacturing workflow.</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Every job passes through the same disciplined sequence — the reason first-time-right rates stay high
            and rework stays low, no matter the alloy or geometry.
          </p>
        </div>

        <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <span className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent lg:block" />
          {steps.map((s, i) => (
            <li key={s.t} className="relative rounded-2xl border border-border bg-background/60 p-6 transition-colors hover:border-copper/50">
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-copper/30 bg-copper/10">
                  <s.icon className="h-5 w-5 text-copper" strokeWidth={1.75} />
                </div>
                <span className="font-mono text-xs tracking-widest text-muted-foreground">STEP · 0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-lg tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Capabilities() {
  const caps = [
    { icon: Flame, title: "CO₂ Sand Casting", copy: "Strong, rigid moulds with good surface finish, suitable for complex geometries and consistent dimensional accuracy." },
    { icon: Layers, title: "No-Bake Mould Casting", copy: "Ideal for large and complex castings, offering excellent mould strength, design flexibility and reduced tooling constraints." },
    { icon: Cog, title: "Gravity Die Casting", copy: "Permanent moulds produce dense, high-quality components with superior mechanical properties and repeatability." },
    { icon: Hammer, title: "Shell Mould Casting", copy: "Excellent surface finish and dimensional precision, suitable for intricate components and tighter tolerances." },
    { icon: Disc, title: "Centrifugal Casting", copy: "Defect-free, high-density components with superior mechanical strength, especially for cylindrical and hollow parts." },
    { icon: ShieldCheck, title: "Copper & Stainless Alloys", copy: "Copper alloy and stainless steel castings for marine, industrial and process applications requiring corrosion and wear resistance." },
  ];
  return (
    <section id="capabilities" className="relative border-t border-border/50 py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-3xl">
          <SectionLabel index="03 / 07" title="Process Versatility" />
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Copper &amp; non-ferrous casting <em className="copper-text font-light italic">manufacturer in India.</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Multiple casting processes let us select the most suitable method for your component size,
            complexity, alloy and performance requirements — with strict metallurgy control and reduced defects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caps.map((c) => (
            <div key={c.title} className="group rounded-2xl border border-border bg-card/60 p-7 transition-colors hover:border-copper/50">
              <c.icon className="h-6 w-6 text-copper" strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-xl tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    {
      icon: Wrench,
      title: "Valve Casting",
      copy: "Butterfly, gate, check and specialty high-pressure valve components — engineered for pressure, corrosion and long service life across critical industrial applications.",
      tags: ["Butterfly", "Gate", "Check", "High-pressure"],
    },
    {
      icon: Cog,
      title: "General Engineering Casting",
      copy: "Custom-engineered components for OEMs across pumps, gearboxes, hydraulics and mechanical assemblies — machined to drawing and delivered inspection-ready.",
      tags: ["Impellers", "Housings", "Brackets", "Bushes"],
    },
    {
      icon: Disc,
      title: "Centrifugal Casting",
      copy: "Copper alloy and stainless steel cylindrical parts with dense, defect-free structure — ideal for sleeves, bushes, liners and rotating components.",
      tags: ["Sleeves", "Bushes", "Liners", "Rings"],
    },
    {
      icon: Cog,
      title: "Gravity Die Casting",
      copy: "Permanent-mould copper alloy castings with excellent surface finish and dimensional accuracy, suited to medium-volume engineering parts.",
      tags: ["Copper", "Bronze", "Brass"],
    },
    {
      icon: Hammer,
      title: "Shell Mould Casting",
      copy: "Fine surface finish and tight tolerance components — copper alloy and stainless steel — for intricate geometries requiring repeatable quality.",
      tags: ["Precision", "Intricate", "Repeatable"],
    },
    {
      icon: Flame,
      title: "CO₂ Mould Casting",
      copy: "Rigid CO₂-cured sand moulds producing sound copper alloy and stainless steel castings for medium-to-large engineering components.",
      tags: ["Medium", "Large", "Sound"],
    },
    {
      icon: Layers,
      title: "No-Bake Mould Casting",
      copy: "Chemically bonded sand system for large, complex castings — excellent mould strength, dimensional stability and reduced tooling constraints.",
      tags: ["Large", "Complex", "Flexible"],
    },
  ];

  return (
    <section id="products" className="relative border-t border-border/50 bg-card/20 py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <SectionLabel index="04 / 08" title="Product Range" />
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Precision castings <em className="copper-text font-light italic">engineered to spec.</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            From valve bodies and impellers to centrifugally cast sleeves and large no-bake components —
            we manufacture the full product range in copper, bronze, nickel and stainless steel alloys.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.title} className="group flex flex-col rounded-2xl border border-border bg-background/60 p-7 transition-colors hover:border-copper/50">
              <p.icon className="h-6 w-6 text-copper" strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-xl tracking-tight">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border/70 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function Alloys() {
  const groups = [
    {
      family: "Copper Alloys",
      note: "Marine, pumps, valves, bearings",
      items: [
        { g: "LTB2 / LTB4 · Leaded Tin Bronze", s: "IS 318 / BS 1400" },
        { g: "LG2 · Gunmetal", s: "IS 318 / BS 1400" },
        { g: "Cupro-Nickel 90/10", s: "C70600" },
        { g: "Cupro-Nickel 70/30", s: "C71500" },
        { g: "HTB1 · High Tensile Brass", s: "BS 1400 HTB1" },
        { g: "HTB3 · High Tensile Brass", s: "BS 1400 HTB3" },
      ],
    },
    {
      family: "Bronze",
      note: "Bearings, bushes, gears, marine fittings",
      items: [
        { g: "PB1 · Phosphor Bronze", s: "BS 1400 PB1" },
        { g: "PB2 · Phosphor Bronze", s: "BS 1400 PB2" },
        { g: "Aluminium Bronze · AB1", s: "BS 1400 AB1" },
        { g: "Aluminium Bronze · AB2", s: "BS 1400 AB2" },
        { g: "Manganese Bronze", s: "C86300" },
        { g: "Silicon Bronze", s: "C87300" },
      ],
    },
    {
      family: "Nickel Alloys",
      note: "Corrosion & high-temperature service",
      items: [
        { g: "Nickel Aluminium Bronze (NAB)", s: "C95800 / C95500" },
        { g: "Monel 400", s: "UNS N04400" },
        { g: "Monel K-500", s: "UNS N05500" },
        { g: "Inconel 600", s: "UNS N06600" },
        { g: "Inconel 625", s: "UNS N06625" },
        { g: "Hastelloy C-276", s: "UNS N10276" },
      ],
    },
    {
      family: "Stainless Steel",
      note: "Process, food, chemical, marine",
      items: [
        { g: "CF8 · SS304", s: "ASTM A351" },
        { g: "CF8M · SS316", s: "ASTM A351" },
        { g: "CF3 · SS304L", s: "ASTM A351" },
        { g: "CF3M · SS316L", s: "ASTM A351" },
        { g: "CA15 · SS410", s: "ASTM A217" },
        { g: "Duplex CD4MCu", s: "ASTM A890" },
      ],
    },
  ];

  return (
    <section id="alloys" className="relative border-t border-border/50 py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <SectionLabel index="04 / 07" title="Alloy Portfolio" />
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Twenty-plus grades <em className="copper-text font-light italic">poured in-house.</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Charge composition is planned per heat and verified on a bench-top spectrometer before pour.
            Traceability documents follow every batch to dispatch.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {groups.map((grp) => (
            <div key={grp.family} className="rounded-2xl border border-border bg-card/60 p-8">
              <div className="flex items-baseline justify-between border-b border-border/60 pb-5">
                <h3 className="font-display text-2xl tracking-tight">{grp.family}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{grp.note}</span>
              </div>
              <ul className="mt-2 divide-y divide-border/40">
                {grp.items.map((it) => (
                  <li key={it.g} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-foreground">{it.g}</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{it.s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Working with a grade not listed? <a href="#contact" className="text-copper underline-offset-4 hover:underline">Send your spec</a> — bespoke chemistries are welcomed.
        </p>
      </div>
    </section>
  );
}

function Quality() {
  const tests = [
    { icon: Beaker, t: "Optical Emission Spectrometer", d: "Full chemistry check per heat before every pour." },
    { icon: Gauge, t: "Universal Tensile Testing", d: "UTS, yield, elongation reported on request." },
    { icon: Zap, t: "Brinell / Rockwell Hardness", d: "Sampled per batch to spec requirements." },
    { icon: Waves, t: "Ultrasonic Testing (UT)", d: "Volumetric flaw detection on critical castings." },
    { icon: Droplets, t: "Dye Penetrant (DP)", d: "Surface indication check on machined faces." },
    { icon: Microscope, t: "Metallography", d: "Micro-structure verification for grain integrity." },
  ];

  return (
    <section id="quality" className="relative border-t border-border/50 bg-card/20 py-32 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel index="05 / 07" title="Quality Assurance" />
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Tested at every <em className="copper-text font-light italic">critical step.</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Our in-house lab keeps chemistry, mechanicals and NDT under one roof — reducing turnaround
            and eliminating third-party dependencies for routine documentation.
          </p>
          <div className="mt-8 rounded-xl border border-copper/30 bg-copper/5 p-5 text-sm text-foreground/85">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-copper">
              <Sparkles className="h-3.5 w-3.5" /> Documentation supplied
            </div>
            <p className="mt-2 leading-relaxed">
              Material test certificate · Chemical analysis report · Dimensional inspection sheet ·
              NDT report on request.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {tests.map((t) => (
            <div key={t.t} className="rounded-xl border border-border bg-background/60 p-6">
              <t.icon className="h-5 w-5 text-copper" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-lg tracking-tight">{t.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Specs() {
  const rows = [
    { k: "Cast weight range", v: "0.5 kg — 500 kg / piece" },
    { k: "Maximum envelope", v: "1500 × 1200 × 800 mm" },
    { k: "General tolerance", v: "CT8 – CT10 (ISO 8062)" },
    { k: "Machined tolerance", v: "±0.05 mm (post-machining)" },
    { k: "Surface finish", v: "Ra 6.3 – 12.5 μm as-cast" },
    { k: "Minimum wall", v: "4 mm (copper alloys) · 5 mm (SS)" },
    { k: "Batch sizes", v: "Prototype (1) to serial (1000+ / month)" },
    { k: "Lead time", v: "2 – 6 weeks depending on tooling" },
  ];

  return (
    <section id="specs" className="relative border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="—" title="Technical Envelope" />
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Our casting capacity, at a glance.</h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Rev. 2026 · Sheet 01</span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card/60">
          <dl className="divide-y divide-border/50">
            {rows.map((r) => (
              <div key={r.k} className="grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-5 sm:items-center sm:gap-6">
                <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground sm:col-span-2">{r.k}</dt>
                <dd className="font-mono text-sm text-foreground sm:col-span-3">{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function About() {
  const pillars = [
    { icon: Award, title: "Quality Control", copy: "Severe quality control applied at every stage of casting and finishing." },
    { icon: ShieldCheck, title: "Full Traceability", copy: "Complete material traceability across every heat and every batch." },
    { icon: Clock, title: "Dependable Delivery", copy: "Skilled professionals and strict process control ensure on-time delivery." },
  ];

  return (
    <section id="about" className="relative overflow-hidden border-y border-border/50 bg-card/40 py-32 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-copper/10 blur-3xl" />
            <img
              src={aboutAsset.url}
              alt="Brihaspati Non-Ferrous Metal Foundry — facility in Kittur, Belagavi"
              loading="lazy"
              width={1200}
              height={1400}
              className="w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background p-6 shadow-2xl sm:block">
              <div className="font-display text-4xl">2023</div>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Established</p>
            </div>
            <div className="absolute -left-6 top-8 hidden rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur sm:block">
              <div className="text-xs uppercase tracking-widest text-copper">Located</div>
              <div className="mt-1 font-display text-xl">Kittur · Belagavi</div>
              <div className="mt-0.5 text-xs text-muted-foreground">KIADB Industrial Area</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionLabel index="06 / 07" title="Company Profile" />
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            A technologically advanced <em className="copper-text font-light italic">non-ferrous foundry.</em>
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground">
            <p>
              At Brihaspati Alloys, we specialise in manufacturing non-ferrous sand castings
              including CO₂ sand casting and no-bake mould casting, gravity die casting, shell mould
              casting and centrifugal casting in copper alloys and stainless steel — always as per
              customer requirements.
            </p>
            <p>
              Established in 2023, our 10,000 sq. mt. facility in Kittur, Belagavi, Karnataka combines
              modern infrastructure, skilled professionals and strict quality control to support
              customers across global markets. Driven by quality, innovation and precision, we aim to
              be a trusted global partner for high-performance casting solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-background/50 p-5">
                <p.icon className="h-5 w-5 text-copper" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-lg tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const inds = [
    { icon: Ship, t: "Marine & Shipbuilding", d: "Propeller components, seawater pump parts, valve bodies in NAB and gunmetal." },
    { icon: Droplets, t: "Pumps & Valves", d: "Impellers, casings, gland rings, seats — cast to hydraulic-tight tolerance." },
    { icon: Factory, t: "Process & Chemical", d: "Corrosion-resistant SS316 / CF8M pump internals, agitator hubs, flanges." },
    { icon: Wind, t: "Power & Energy", d: "Bearing housings, generator brush rings, cooling-loop hardware." },
    { icon: Building2, t: "General Engineering", d: "Bushes, worm-wheels, thrust washers — batch production for OEMs." },
    { icon: Truck, t: "Heavy Machinery", d: "Wear-plates, gear blanks, bronze bushings for earth-movers and mills." },
  ];
  return (
    <section id="industries" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <SectionLabel index="—" title="Industries We Serve" />
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Trusted where <em className="copper-text font-light italic">failure isn't an option.</em>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inds.map((i) => (
            <div key={i.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 transition-all hover:-translate-y-1 hover:border-copper/50">
              <i.icon className="h-6 w-6 text-copper" strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-xl tracking-tight">{i.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
              <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-copper/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const benefits = [
    "Uncompromising quality control at every stage of casting and finishing.",
    "Stable and repeatable casting processes with strict metallurgy control.",
    "High-integrity castings with reduced defects and full traceability.",
    "Optimised cost without compromising performance or lead time.",
    "Skilled professionals backed by modern infrastructure in a 10,000 sq. mt. facility.",
    "Complete freedom to select alloys — copper, bronze, brass, stainless steel and more.",
  ];
  return (
    <section id="why-us" className="relative border-t border-border/50 py-32 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel index="07 / 07" title="Benefits of Working with Us" />
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            A rapidly growing <em className="copper-text font-light italic">high-integrity</em> casting partner.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Brihaspati Alloys focuses on delivering reliable, precision-engineered components that meet stringent
            quality and performance requirements across global industries — from marine and pumps to process
            industries and heavy machinery.
          </p>
        </div>
        <ul className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-5">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-copper" strokeWidth={2.25} />
              <span className="text-sm leading-relaxed text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Certifications() {
  const standards = ["ASTM", "BS 1400", "IS 318", "DIN 1705", "JIS H5120", "ISO 8062"];
  return (
    <section className="border-y border-border/50 bg-obsidian/60 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-copper">
          <span>Castings supplied to international standards</span>
          <span className="h-px flex-1 bg-copper/20" />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
          {standards.map((s) => (
            <div key={s} className="flex items-center gap-3">
              <Ruler className="h-5 w-5 text-copper/70" strokeWidth={1.5} />
              <span className="font-display text-xl tracking-tight text-foreground/80">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <SectionLabel index="—" title="Customer Reviews" />
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Rated <em className="copper-text font-light italic">5.0 stars</em> by our customers.
          </h2>
          <div className="mt-6 flex items-center gap-3 text-muted-foreground">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-copper text-copper" />)}
            </div>
            <span className="text-sm">Based on reviews on Google, IndiaMART and Justdial.</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { quote: "Consistent quality and reliable delivery. Their CO₂ sand castings meet our tight specs every single time.", name: "Procurement Head", role: "Pump Manufacturer, Maharashtra" },
            { quote: "Excellent finish on copper alloy castings for our marine components. Traceability and documentation are spot-on.", name: "Engineering Manager", role: "Marine Equipment Supplier" },
            { quote: "Responsive team, fair pricing, and repeatable results across multiple production runs. A dependable supplier.", name: "Sourcing Lead", role: "Industrial Valves, Karnataka" },
          ].map((t, i) => (
            <figure key={i} className="relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-copper/50">
              <Quote className="h-8 w-8 text-copper/40" strokeWidth={1.5} />
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-8 border-t border-border/60 pt-5">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="mt-0.5 text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What is the minimum order quantity?", a: "There's no fixed MOQ. We happily take on single-piece prototypes as well as serial production of 1000+ per month." },
    { q: "Can you match a bespoke chemistry?", a: "Yes — share the spec or reference standard and we'll adjust charge composition, verify on the spectrometer and pour to your exact grade." },
    { q: "Do you supply machined castings?", a: "Yes. In-house turning, milling and drilling brings castings to final ±0.05 mm dimensions where required, along with heat treatment." },
    { q: "What documentation is included?", a: "Standard packs include the Material Test Certificate, chemistry report and dimensional inspection sheet. NDT reports (UT / DP) supplied on request." },
    { q: "Do you export?", a: "Yes — we regularly ship pan-India and to international customers. Packing is VCI-wrapped, palletised and batch-tagged for full traceability." },
    { q: "What are typical lead times?", a: "Prototype: 2 – 3 weeks. Repeat production: 3 – 6 weeks depending on tooling, alloy availability and machining scope." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative border-t border-border/50 bg-card/20 py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <SectionLabel index="—" title="Frequently Asked" />
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Answers before you <em className="copper-text font-light italic">pick up the phone.</em>
          </h2>
        </div>
        <ul className="divide-y divide-border/60 rounded-2xl border border-border bg-background/60">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-card/60"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-copper">0{i + 1}</span>
                    <span className="font-display text-lg tracking-tight">{f.q}</span>
                  </div>
                  {isOpen ? <Minus className="h-4 w-4 text-copper" /> : <Plus className="h-4 w-4 text-copper" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pl-16 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-copper/20 via-background to-background" />
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-molten/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-copper/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-copper">Let's Connect</p>
        <h2 className="text-balance font-display text-5xl leading-[1] tracking-tight sm:text-6xl md:text-7xl">
          Send us your drawing.
          <br />
          <em className="copper-text font-light italic">We'll get back with a quote.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
          Manufacturer of copper alloy, stainless steel alloy castings and machined components.
          Talk to us about your part — no minimum order, no runaround.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:brihaspati.industries@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-copper px-8 py-4 text-base font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:bg-copper-glow"
          >
            Email Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+918310432701"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium hover:border-copper hover:text-copper"
          >
            <Phone className="h-4 w-4" /> +91 83104 32701
          </a>
        </div>

        <div className="mx-auto mt-20 grid max-w-3xl gap-6 border-t border-border/60 pt-12 sm:grid-cols-3">
          <ContactItem icon={Mail} label="Email" value="brihaspati.industries@gmail.com" />
          <ContactItem icon={Phone} label="Phone" value="+91 83104 32701" />
          <ContactItem icon={MapPin} label="Foundry" value="Plot No. 70, Road No. 8, KIADB Industrial Area, Kittur, Belagavi, Karnataka 591115" />
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-copper" /> Mon – Sat · 09:00 – 18:00 IST</span>
          <span className="hidden h-3 w-px bg-border sm:inline" />
          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-copper" /> GSTIN available on request</span>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="text-left">
      <Icon className="h-4 w-4 text-copper" strokeWidth={2} />
      <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm text-foreground">{value}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <img
                src={logoAsset.url}
                alt="Brihaspati Alloys"
                width={40}
                height={48}
                className="h-8 w-auto rounded-sm object-contain"
              />
              <span className="font-display text-base">Brihaspati Alloys</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Non-ferrous metal foundry in Kittur, Belagavi. Copper alloy, stainless steel and
              precision-machined castings for industries that don't tolerate compromise.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-copper">Explore</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground">Services</a></li>
              <li><a href="#process" className="hover:text-foreground">Process</a></li>
              <li><a href="#alloys" className="hover:text-foreground">Alloy portfolio</a></li>
              <li><a href="#quality" className="hover:text-foreground">Quality assurance</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-copper">Reach us</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-copper" /> brihaspati.industries@gmail.com</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-copper" /> +91 83104 32701</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-copper" /> KIADB Industrial Area, Kittur, Belagavi 591115</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brihaspati Alloys · Non-Ferrous Metal Foundry, Kittur, Belagavi.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Crafted in Karnataka · Poured with care
          </p>
        </div>
      </div>
    </footer>
  );
}
