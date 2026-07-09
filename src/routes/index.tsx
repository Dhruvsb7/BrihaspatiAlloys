import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Flame, Hammer, Cog, ShieldCheck, Award, Clock, Phone, Mail, MapPin, Quote, Check } from "lucide-react";
import logoAsset from "@/assets/brihaspati-logo.jpg.asset.json";
import heroImg from "@/assets/hero-foundry.jpg";
import ingotsImg from "@/assets/about-ingots.jpg";
import castingImg from "@/assets/service-casting.jpg";
import partsImg from "@/assets/service-parts.jpg";
import alloyImg from "@/assets/service-alloy.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
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
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#testimonials" className="transition-colors hover:text-foreground">Clients</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-copper px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-copper-glow hover:shadow-[var(--shadow-glow)]"
        >
          Request a Quote
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Molten non-ferrous metal being poured at Brihaspati Alloys"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pt-24 pb-32 md:pt-40 md:pb-48 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/5 px-3 py-1 text-xs uppercase tracking-widest text-copper">
            <span className="h-1.5 w-1.5 rounded-full bg-molten animate-ember" />
            Est. 1978 · Non-Ferrous Specialists
          </div>

          <h1 className="text-balance font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Cast in <em className="copper-text font-light italic">bronze.</em>
            <br />
            Forged for <em className="font-light italic">the impossible.</em>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A working foundry pouring brass, bronze, copper and aluminium alloys for engineers,
            architects and manufacturers who refuse to compromise on tolerance, finish, or lead time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:bg-copper-glow"
            >
              Get a Casting Quote
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
            <Stat number="46" suffix="yrs" label="Continuous pouring since 1978" />
            <Stat number="2,400" suffix="+" label="Parts shipped every month" />
            <Stat number="99.4" suffix="%" label="On-time delivery rate" />
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
  const items = ["Aerospace", "Marine Engineering", "Architecture", "Rail & Transit", "Heritage Restoration", "Precision Manufacturing"];
  return (
    <section className="border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-copper">Trusted across</span>
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
      icon: Flame,
      title: "Sand & Investment Casting",
      copy: "Small-batch and prototype pours from 50g to 250kg. Bronze, brass, aluminium, gunmetal — cast to spec with certified alloy chemistry.",
      image: alloyImg,
      bullets: ["50g – 250kg part range", "Certified alloy chemistry", "48-hour prototype turnaround"],
    },
    {
      icon: Cog,
      title: "Precision Machining & Finishing",
      copy: "In-house CNC, hand-fettling and finishing bays. Your part leaves ready to install — polished, plated, or patinated.",
      image: partsImg,
      bullets: ["±0.02mm tolerance capability", "Polishing, plating, patina", "One vendor, one PO"],
    },
    {
      icon: Hammer,
      title: "Restoration & Bespoke Work",
      copy: "Replication of heritage fittings, architectural bronze and one-off components from photos, sketches, or original samples.",
      image: castingImg,
      bullets: ["Reverse-engineered from samples", "Period-correct alloys", "Conservation-grade finish"],
    },
  ];

  return (
    <section id="services" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-copper">Capabilities</p>
            <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Three disciplines.
              <br />
              <em className="copper-text font-light italic">One foundry floor.</em>
            </h2>
          </div>
          <p className="text-muted-foreground md:col-span-5">
            From a single prototype to a repeating production run, we handle the entire process under one
            roof — pattern-making, pouring, machining and finish. No handoffs. No surprises.
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
                  height={1200}
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

function About() {
  const pillars = [
    { icon: Award, title: "ISO 9001 Certified", copy: "Full quality management with material certificates on every pour." },
    { icon: ShieldCheck, title: "Traceable Alloys", copy: "Every ingot logged, every heat batch documented, no ambiguity." },
    { icon: Clock, title: "Reliable Lead Times", copy: "Prototypes in 48h, production runs slotted to your calendar." },
  ];

  return (
    <section id="about" className="relative overflow-hidden border-y border-border/50 bg-card/40 py-32 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-copper/10 blur-3xl" />
            <img
              src={ingotsImg}
              alt="Stacked copper ingots ready for pouring at Brihaspati Alloys"
              loading="lazy"
              width={1200}
              height={1400}
              className="w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background p-6 shadow-2xl sm:block">
              <div className="font-display text-4xl">1978</div>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">First pour</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-copper">The Foundry</p>
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            A family-run foundry with <em className="copper-text font-light italic">industrial standards.</em>
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground">
            <p>
              Three generations of casters have worked our floor. That continuity means the person answering
              your first call is the same person watching your metal pour — and the same person signing your
              certificate of conformance.
            </p>
            <p>
              We specialise exclusively in non-ferrous work: brass, bronze, gunmetal, aluminium and copper alloys.
              That focus is why aerospace primes, marine engineers and heritage architects keep our number on speed dial.
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
  const items = [
    {
      quote: "Brihaspati turned around a 40-part bronze prototype run in under a week. The finish came off the truck ready to fit — no rework, no drama.",
      name: "Elena Marsh",
      role: "Lead Engineer, Halcyon Marine",
    },
    {
      quote: "We've used four foundries in twelve years. Brihaspati is the only one that consistently hits our tolerance and our schedule. They're now our sole supplier.",
      name: "David Okafor",
      role: "Procurement Director, Wren & Sons",
    },
    {
      quote: "They replicated a 1920s bronze balustrade from a single photograph. The result was indistinguishable from the original. Extraordinary craft.",
      name: "Priya Chandran",
      role: "Heritage Architect, RIBA",
    },
  ];

  return (
    <section id="testimonials" className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-copper">Client Voices</p>
          <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            The people who <em className="copper-text font-light italic">rely on our pours.</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={i}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-copper/50"
            >
              <Quote className="h-8 w-8 text-copper/40" strokeWidth={1.5} />
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
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
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-copper">Start the Conversation</p>
        <h2 className="text-balance font-display text-5xl leading-[1] tracking-tight sm:text-6xl md:text-7xl">
          Send us your drawing.
          <br />
          <em className="copper-text font-light italic">We'll send back a quote in 24 hours.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
          No minimum order. No procurement runaround. Just a real caster on the other end of the line,
          ready to talk about your part.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:quotes@vulcanfoundry.co"
            className="group inline-flex items-center gap-2 rounded-full bg-copper px-8 py-4 text-base font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:bg-copper-glow"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+441234567890"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium hover:border-copper hover:text-copper"
          >
            <Phone className="h-4 w-4" /> +44 (0) 1234 567 890
          </a>
        </div>

        <div className="mx-auto mt-20 grid max-w-3xl gap-6 border-t border-border/60 pt-12 sm:grid-cols-3">
          <ContactItem icon={Mail} label="Email" value="quotes@vulcanfoundry.co" />
          <ContactItem icon={Phone} label="Direct line" value="+44 1234 567 890" />
          <ContactItem icon={MapPin} label="Foundry" value="Sheffield, United Kingdom" />
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
          <span className="font-display text-base">Brihaspati Alloys</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Brihaspati Alloys Ltd. Pouring non-ferrous since 1978.
        </p>
      </div>
    </footer>
  );
}
