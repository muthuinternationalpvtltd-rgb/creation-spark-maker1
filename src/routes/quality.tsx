import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  ShieldCheck,
  AlertCircle,
  FileCheck,
  Scale,
  Scissors,
  Sparkles,
  Box,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/quality")({
  head: () =>
    buildSeoHead({
      title: "Kidswear Quality Control & Compliance | Muthu International Private Limited",
      description:
        "Learn about Muthu International Private Limited's commitment to consistent kidswear quality, child-safe standards, and statutory compliance in Tirupur.",
      path: "/quality",
      ogTitle: "Quality in Every Garment | Muthu International Private Limited",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Quality", path: "/quality" },
      ],
    }),
  component: QualityPage,
});

const qualityStages = [
  {
    title: "Product Requirements",
    desc: "Understand the garment style, customer needs and intended use.",
    icon: Scale,
  },
  {
    title: "Design Coordination",
    desc: "Coordinate new styles from our in-house design team with manufacturing operations.",
    icon: FileCheck,
  },
  {
    title: "Production Planning",
    desc: "Organize manufacturing work across our two operational factories.",
    icon: Sparkles,
  },
  {
    title: "Modern Machinery",
    desc: "Use modern machinery to support the garment manufacturing process.",
    icon: Scissors,
  },
  {
    title: "Experienced Workforce",
    desc: "A team of over 100 employees supports manufacturing and business operations.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Commitment",
    desc: "Coordinate design and manufacturing processes while working toward consistent product quality.",
    icon: Sparkles,
  },
  {
    title: "Applicable Requirements",
    desc: "Maintain applicable statutory and industry requirements relevant to business operations.",
    icon: FileCheck,
  },
  {
    title: "Customer Relationships",
    desc: "Build long-term relationships through quality, reliable business practices and cooperation.",
    icon: Box,
  },
];

function QualityPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ EDITORIAL HERO WITH FRAMED INSPECTION VISUAL ═══ */}
      <section className="relative overflow-hidden bg-[#EAE6DE] pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#226192]/15">
        <div className="page-shell relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 border border-[#226192]/20 bg-[#FFFFFF] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#226192] shadow-sm">
                  <span className="size-1.5 bg-[#EF8557]" />
                  Quality &amp; Compliance · 8-Stage Verification
                </div>

                <h1 className="mt-6 text-4xl font-bold uppercase leading-tight tracking-tight text-[#252525] sm:text-6xl lg:text-7xl">
                  Quality In Every
                  <br />
                  <span className="text-[#EF8557]">Garment.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
                  We focus on consistent product quality, customer requirements, and applicable
                  statutory and industry standards across every stage of production.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="border border-[#226192] bg-[#226192] font-bold text-[#FFFFFF] shadow-sm hover:bg-[#1B4E75]"
                  >
                    <Link to="/manufacturing" className="flex items-center gap-2">
                      <span>Explore Manufacturing</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#226192]/30 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]"
                  >
                    <Link to="/request-quote">
                      <span>Request Quality Dossier</span>
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right: Framed Quality Visual */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden border border-[#226192]/25 bg-[#FFFFFF] p-3 shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={images.pageQuality}
                      alt="Quality control inspection at Muthu International"
                      className="size-full object-cover transition-transform duration-700 hover:scale-105"
                      fetchPriority="high"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-widest text-[#226192]">
                    <span>0% Azo Dyes · Child-Safe</span>
                    <span className="text-[#EF8557]">100% Piece Inspection</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUALITY PROCESS — NUMBERED GRID WITH ICONS ═══ */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Quality Protocol"
            title="A quality-focused approach."
            text="Our manufacturing approach coordinates design and production processes and aims to meet customer requirements through dependable business practices."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualityStages.map((q, idx) => {
              const Icon = q.icon;
              return (
                <Reveal key={q.title}>
                  <div className="group relative flex h-full flex-col overflow-hidden border border-[#226192]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#EF8557] hover:shadow-xl">
                    {/* Large watermark number */}
                    <span className="pointer-events-none absolute -right-2 -top-4 font-['Space_Grotesk'] text-[80px] font-extrabold leading-none text-[#226192]/[0.04] transition-all duration-500 group-hover:text-[#EF8557]/[0.08]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="flex size-10 items-center justify-center border border-[#226192]/15 bg-[#EAE6DE] text-[#226192] transition-all group-hover:bg-[#226192] group-hover:text-white">
                      <Icon className="size-4" />
                    </div>

                    <h3 className="mt-5 font-['Space_Grotesk'] text-base font-bold uppercase tracking-tight text-[#226192] group-hover:text-[#EF8557]">
                      {q.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-[#252525]/75">
                      {q.desc}
                    </p>

                    <div className="mt-4 h-0.5 w-8 bg-[#EF8557]/30 transition-all duration-300 group-hover:w-full group-hover:bg-[#EF8557]" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ COMMITMENT — SPLIT PANEL WITH ACCENT ═══ */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20">
        <div className="page-shell">
          <div className="grid overflow-hidden shadow-lg lg:grid-cols-12">
            {/* Left content */}
            <div className="bg-white p-10 lg:col-span-7 lg:p-14">
              <Reveal>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EF8557]">
                  Our commitment
                </span>
                <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  Quality is part of every relationship
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#252525]/85">
                  We understand that quality, comfort and consistency matter in children's clothing.
                  Our team works to meet customer requirements and build lasting relationships
                  through reliable manufacturing practices.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-[#226192]">
                  {[
                    "Kidswear as our core specialization",
                    "In-house design and development",
                    "Modern manufacturing facilities",
                    "Applicable requirements and standards",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="size-4 shrink-0 text-[#EF8557]" />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right accent panel */}
            <div className="bg-gradient-to-br from-[#226192] to-[#1a4d75] p-10 text-white lg:col-span-5 lg:p-14">
              <Reveal>
                <div className="flex items-center gap-2">
                  <AlertCircle className="size-5 text-[#EF8557]" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Manufacturing Profile
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  Established domestic kidswear manufacturer serving customers across India.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="border-l-2 border-[#EF8557] pl-4 text-sm text-white/90">
                    Established in 2000 · Two operational factories · 100+ employees
                  </div>
                  <p className="text-xs text-white/50">
                    In-house design team · Dedicated warehouse · Modern machinery
                  </p>
                </div>

                {/* Mini stats */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {[
                    { num: "25+", label: "Years" },
                    { num: "2", label: "Factories" },
                    { num: "100+", label: "Team" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-['Space_Grotesk'] text-xl font-extrabold text-[#EF8557]">
                        {s.num}
                      </p>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
