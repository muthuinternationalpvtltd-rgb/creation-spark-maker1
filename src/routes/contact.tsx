import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight, Send, BriefcaseBusiness, ExternalLink, Clock } from "lucide-react";
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
import { buildSeoHead } from "@/lib/seo";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/ftatMFEkx6qjgJp29?g_st=aw";
const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Muthu%20International%20Private%20Limited%2C%2014%2F2%20Asher%20Nagar%2C%20North%201st%20Street%2C%20Avinashi%20Road%2C%20Tirupur%20641603&t=&z=16&ie=UTF8&iwloc=&output=embed";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSeoHead({
      title: "Contact Muthu International Private Limited | Tirupur Kidswear Manufacturer",
      description:
        "Contact Muthu International Private Limited in Tirupur, Tamil Nadu to discuss kidswear products, wholesale supply, private label manufacturing, and factory visits.",
      path: "/contact",
      ogTitle: "Contact Muthu International Private Limited",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
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
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-72 flex-col p-6 sm:p-8"
              >
                <MapPin className="size-6 text-[#EF8557]" />
                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-[#226192]">Visit Our Office</p>
                <div className="mt-4 space-y-1 text-base leading-relaxed text-[#252525]/85">
                  <p>{COMPANY_NAME}</p>
                  <p>{COMPANY_ADDRESS_LINE1}</p>
                  <p>{COMPANY_ADDRESS_CITY}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-bold uppercase tracking-[0.12em] text-[#226192]">
                  View on Google Maps <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
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

      {/* ═══ FACTORY & OFFICE LOCATION MAP ═══ */}
      <section id="location" className="border-y border-[#226192]/15 bg-[#FFFFFF] py-16 sm:py-24">
        <div className="page-shell">
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EF8557]">
                  Find Us
                </p>
                <h2 className="mt-3 text-3xl leading-[1.08] text-[#226192] sm:text-4xl">
                  Factory &amp; Head Office Location
                </h2>
              </div>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 border border-[#226192] bg-[#226192] px-5 text-xs font-bold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors hover:border-[#EF8557] hover:bg-[#EF8557] self-start sm:self-auto"
              >
                <MapPin className="size-4" />
                Open in Google Maps
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </Reveal>

          <div className="grid border border-[#226192]/20 lg:grid-cols-12">
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#F7F4EE] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#226192]/20">
              <div className="space-y-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EF8557]">
                    Registered Address
                  </p>
                  <p className="mt-2 font-semibold text-base text-[#226192]">{COMPANY_NAME}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#252525]/80">
                    {COMPANY_ADDRESS_LINE1}
                    <br />
                    {COMPANY_ADDRESS_CITY}
                  </p>
                </div>

                <div className="border-t border-[#226192]/15 pt-5">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#226192]">
                    <Clock className="size-4 text-[#EF8557]" />
                    <span>Visiting Hours</span>
                  </div>
                  <p className="mt-2 text-sm text-[#252525]/80">
                    Monday – Saturday: 9:30 AM – 6:30 PM IST
                  </p>
                  <p className="mt-1 text-xs text-[#252525]/60">
                    Appointments recommended for factory tours and sample reviews.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#226192]/15">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#226192] hover:text-[#EF8557] transition-colors"
                >
                  Get Directions <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 min-h-[340px] sm:min-h-[420px] bg-[#EAE6DE]">
              <iframe
                title="Muthu International Private Limited Location Map"
                src={GOOGLE_MAPS_EMBED_URL}
                className="h-full w-full min-h-[340px] sm:min-h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
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
