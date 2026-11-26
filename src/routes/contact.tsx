import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight, Send, BriefcaseBusiness } from "lucide-react";
import { InquiryForm, Reveal } from "@/components/site";
import {
  COMPANY_ADDRESS_CITY,
  COMPANY_ADDRESS_LINE1,
  COMPANY_LANDLINE,
  COMPANY_NAME,
  COMPANY_OWNER_EMAIL,
  COMPANY_PRIMARY_MOBILE,
  COMPANY_SECONDARY_EMAIL,
  COMPANY_SECONDARY_MOBILE,
} from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Muthu International | Kidswear Manufacturer" },
      {
        name: "description",
        content:
          "Contact Muthu International Private Limited to discuss kidswear products, manufacturing capabilities and domestic business opportunities across India.",
      },
      { property: "og:title", content: "Let's Talk | Muthu International Private Ltd" },
      {
        property: "og:description",
        content:
          "Our team welcomes product enquiries and opportunities for long-term business relationships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <section
        className="relative isolate overflow-hidden border-b border-[#226192]/15 bg-[#EAE6DE] pt-36 pb-28 sm:pt-40 sm:pb-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,97,146,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(34,97,146,0.055) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <div className="page-shell hero-copy">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#226192]/20 bg-[#FFFFFF]/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#226192]">
            <span className="size-2 rounded-full bg-[#EF8557]" />
            Connect With Us
          </div>
          <h1 className="mt-7 max-w-[13ch] text-[clamp(3rem,7vw,4.25rem)] leading-[0.98] tracking-[-0.035em] text-[#252525]">
            Get in Touch with Muthu International.
          </h1>
          <p className="mt-7 max-w-[48rem] text-lg leading-[1.65] text-[#252525]/80 sm:text-[21px]">
            Whether you are exploring our kidswear collections, enquiring about a product or looking
            for wholesale and manufacturing opportunities, our team is here to help you with clear
            information and personal assistance.
          </p>
          <a
            href="#enquiry"
            className="group mt-9 inline-flex h-14 items-center gap-4 bg-[#226192] px-7 text-xs font-bold uppercase tracking-[0.16em] text-[#FFFFFF] transition-all duration-300 hover:bg-[#EF8557]"
          >
            Send an enquiry
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="page-shell">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EF8557]">
                Direct Access
              </p>
              <h2 className="mt-4 text-4xl leading-[1.08] text-[#226192] sm:text-5xl">
                We&apos;re Just a Conversation Away.
              </h2>
            </div>
          </Reveal>

          <div className="grid border-y border-[#226192]/18 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal className="border-b border-[#226192]/18 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
              <a href={`tel:${COMPANY_PRIMARY_MOBILE.replace(/[^+0-9]/g, "")}`} className="group flex min-h-72 flex-col p-6 sm:p-8">
                <Phone className="size-6 text-[#EF8557]" />
                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-[#226192]">Call Our Team</p>
                <div className="mt-4 space-y-1 text-base leading-relaxed text-[#252525]/85">
                  <p>{COMPANY_PRIMARY_MOBILE}</p>
                  <p>{COMPANY_SECONDARY_MOBILE}</p>
                  <p>Landline: {COMPANY_LANDLINE}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-bold uppercase tracking-[0.12em] text-[#226192]">
                  Call now <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>

            <Reveal className="border-b border-[#226192]/18 sm:even:border-l sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
              <a href={`mailto:${COMPANY_OWNER_EMAIL}`} className="group flex min-h-72 flex-col p-6 sm:p-8">
                <Mail className="size-6 text-[#EF8557]" />
                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-[#226192]">Email Us</p>
                <div className="mt-4 space-y-1 break-all text-base leading-relaxed text-[#252525]/85">
                  <p>{COMPANY_OWNER_EMAIL}</p>
                  <p>{COMPANY_SECONDARY_EMAIL}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-bold uppercase tracking-[0.12em] text-[#226192]">
                  Write to us <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>

            <Reveal className="border-b border-[#226192]/18 sm:border-b-0 sm:odd:border-r lg:border-r lg:last:border-r-0">
              <div className="flex min-h-72 flex-col p-6 sm:p-8">
                <MapPin className="size-6 text-[#EF8557]" />
                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-[#226192]">Visit Our Office</p>
                <div className="mt-4 space-y-1 text-base leading-relaxed text-[#252525]/85">
                  <p>{COMPANY_NAME}</p>
                  <p>{COMPANY_ADDRESS_LINE1}</p>
                  <p>{COMPANY_ADDRESS_CITY}</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex min-h-72 flex-col p-6 sm:p-8">
                <BriefcaseBusiness className="size-6 text-[#EF8557]" />
                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-[#226192]">Business Enquiries</p>
                <p className="mt-4 text-base leading-relaxed text-[#252525]/85">Bulk, wholesale and manufacturing opportunities.</p>
                <div className="mt-auto flex flex-col items-start gap-3 pt-8">
                  <Link to="/wholesale" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#226192]">
                    Wholesale <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/request-quote" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#226192]">
                    Request Quote <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM — CLEAN WIDE LAYOUT ═══ */}
      <section id="enquiry" className="scroll-mt-32 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left info panel */}
            <div className="lg:col-span-4">
              <Reveal>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EF8557]">
                  Send An Enquiry
                </span>
                <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-4xl">
                  Connect with our team.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#252525]/80">
                  Please complete the form. For formal pricing quotes, yarn requirements, or
                  timeline estimates, please indicate your product silhouette and projected volumes.
                </p>

                <div className="mt-8 border-l-4 border-[#EF8557] bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#226192]">
                    Our focus
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#252525]/80">
                    Kidswear manufacturing, fresh designs and quality-focused customer partnerships.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right form */}
            <div className="lg:col-span-8">
              <div className="border border-[#226192]/10 bg-white p-8 shadow-sm sm:p-12">
                <div className="flex items-center gap-3 border-b border-[#226192]/10 pb-6">
                  <div className="flex size-10 items-center justify-center bg-[#EF8557] text-white">
                    <Send className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase tracking-tight text-[#226192]">
                      Business Enquiry Form
                    </h3>
                    <p className="text-xs text-[#252525]/60">
                      We'll respond within 24–48 business hours
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <InquiryForm kind="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
