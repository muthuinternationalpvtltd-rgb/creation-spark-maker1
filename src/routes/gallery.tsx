import { createFileRoute } from "@tanstack/react-router";
import { Camera, Filter } from "lucide-react";
import { CTASection, GalleryWithLightbox, Reveal, SectionHeading } from "@/components/site";
import { gallery, images } from "@/lib/content";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () =>
    buildSeoHead({
      title: "Manufacturing & Kidswear Gallery | Muthu International Private Limited",
      description:
        "Visual archive of Muthu International Private Limited: explore factory stitching lines, printing stations, embroidery detail, and finished kidswear styles in Tirupur, India.",
      path: "/gallery",
      ogTitle: "Inside Muthu International | Manufacturing Gallery",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" },
      ],
    }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ SIGNATURE WARM IVORY & DEEP BLUE MOSAIC HERO ═══ */}
      <section className="relative overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="page-shell relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#226192]/25 bg-[#FFFFFF] px-4 py-1.5 text-xs font-bold tracking-widest text-[#226192] uppercase shadow-sm">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <span>Visual Portfolio</span>
              </div>

              <h1 className="mt-6 font-['Space_Grotesk'] text-4xl font-extrabold uppercase leading-tight tracking-tight text-[#226192] sm:text-5xl lg:text-6xl">
                Kidswear, Design
                <br />
                <span className="text-[#EF8557]">& Manufacturing.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#252525]/85">
                A visual journey through our children's clothing collections, in-house design
                direction, and modern manufacturing facilities in Tirupur.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#226192]">
                <Filter className="size-4 text-[#EF8557]" />
                <span>Filter by category below</span>
              </div>
            </div>

            {/* Right: Mini mosaic preview */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 row-span-2 aspect-square overflow-hidden">
                  <img
                    src={images.pageGallery}
                    alt="Kidswear collection flatlay"
                    className="size-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={images.editorial}
                    alt="Editorial kidswear"
                    className="size-full object-cover opacity-70 transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={images.factory}
                    alt="Factory production"
                    className="size-full object-cover opacity-70 transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -left-4 size-24 border-l-2 border-b-2 border-[#EF8557]/30" />
            </div>
          </div>
        </div>

        {/* Abstract background shapes */}
        <div className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-[#226192]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 size-64 rounded-full bg-[#EF8557]/5 blur-3xl" />
      </section>

      {/* ═══ GALLERY GRID WITH LIGHTBOX ═══ */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Inside Muthu International"
            title="A look inside Muthu International."
            text="Filter by production category. Click any visual for high-resolution inspection."
          />

          <GalleryWithLightbox items={gallery} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
