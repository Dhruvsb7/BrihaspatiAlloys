import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Flame, Cog, Hammer, Layers, Disc, ShieldCheck, Award, Clock, Phone, Mail, MapPin, Quote, Check, Star } from "lucide-react";
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
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Capabilities />
      <About />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="Brihaspati Alloys"
            width={48}
            height={56}
            className="h-10 w-auto rounded-sm object-contain"
          />
          <span className="font-display text-lg font-medium tracking-tight">Brihaspati<span className="text-copper">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#capabilities" className="transition-colors hover:text-foreground">Capabilities</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-copper px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-copper-glow hover:shadow-[var(--shadow-glow)]"
        >
          Enquire Now
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pt-24 pb-32 md:pt-40 md:pb-48 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/5 px-3 py-1 text-xs uppercase tracking-widest text-copper">
            <span className="h-1.5 w-1.5 rounded-full bg-molten animate-ember" />
            Precision · Reliability · Quality
          </div>

          <h1 className="text-balance font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Non-Ferrous Metal Foundry in <em className="copper-text font-light italic">Kittur, Belagavi.</em>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Brihaspati Cast Pvt. Ltd. specialises in stainless steel casting, copper alloy casting,
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
        </div>

        <div className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-32 space-y-8 border-l border-copper/30 pl-8">
            <Stat number="10,000" suffix=" m²" label="Modern manufacturing facility" />
            <Stat number="7" suffix="+" label="Casting processes under one roof" />
            <Stat number="5.0" suffix="★" label="Rated on Google, IndiaMART & Justdial" />
          </div>
        </div>
      </div>
    </section>
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

function TrustBar() {
  const items = ["Marine", "General Engineering", "Process Industries", "Pumps & Valves", "Power & Energy", "Heavy Machinery"];
  return (
    <section className="border-y border-border/50 bg-card/30">
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
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-copper">Our Specialised Services</p>
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
          {services.map((s) => (
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
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-copper">Process Versatility</p>
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
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-copper">Company Profile</p>
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            A technologically advanced <em className="copper-text font-light italic">non-ferrous foundry.</em>
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground">
            <p>
              At Brihaspati Cast Pvt. Ltd., we specialise in manufacturing non-ferrous sand castings
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

function Testimonials() {
  return (
    <section id="testimonials" className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-copper">Customer Reviews</p>
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
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="Brihaspati Alloys"
            width={40}
            height={48}
            className="h-8 w-auto rounded-sm object-contain"
          />
          <span className="font-display text-base">Brihaspati Cast Pvt. Ltd.</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Brihaspati Cast Pvt. Ltd. · Non-Ferrous Metal Foundry, Kittur, Belagavi.
        </p>
      </div>
    </footer>
  );
}
