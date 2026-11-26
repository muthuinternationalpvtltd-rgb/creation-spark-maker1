import {
  COMPANY_ADDRESS_LINE1,
  COMPANY_NAME,
  COMPANY_OWNER_EMAIL,
  COMPANY_PRIMARY_MOBILE,
  brandsList,
} from "./ecommerce";
import { collections, products } from "./content";

export const SITE_URL = "https://muthu-international-private-limited.com";
export const SITE_NAME = COMPANY_NAME;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/hero-studio.jpg`;

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  return withLeading.replace(/\/+$/, "");
}

export function getCanonicalUrl(path: string): string {
  const normalized = normalizePath(path);
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

function toAbsoluteUrl(urlOrPath?: string): string {
  if (!urlOrPath) return DEFAULT_OG_IMAGE;
  if (urlOrPath.startsWith("http://") || urlOrPath.startsWith("https://")) return urlOrPath;
  const normalized = urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`;
  return `${SITE_URL}${normalized}`;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon.svg`,
    email: COMPANY_OWNER_EMAIL,
    telephone: COMPANY_PRIMARY_MOBILE,
    foundingDate: "2000",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_ADDRESS_LINE1,
      addressLocality: "Tirupur",
      addressRegion: "Tamil Nadu",
      postalCode: "641603",
      addressCountry: "IN",
    },
    brand: brandsList.map((b) => ({
      "@type": "Brand",
      name: b.name,
      url: getCanonicalUrl(`/brands/${b.slug}`),
      description: b.description,
    })),
  };
}

export function buildBrandJsonLd(brand: (typeof brandsList)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: brand.name,
    url: getCanonicalUrl(`/brands/${brand.slug}`),
    description: brand.description,
    slogan: brand.tagline,
    logo: `${SITE_URL}/favicon.svg`,
    manufacturer: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: `${SITE_URL}/`,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY_ADDRESS_LINE1,
        addressLocality: "Tirupur",
        addressRegion: "Tamil Nadu",
        postalCode: "641603",
        addressCountry: "IN",
      },
    },
  };
}

export function buildBrandProductListJsonLd(
  brand: (typeof brandsList)[number],
  brandProducts: { name: string; slug: string; price: number; description: string; image: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${brand.name} Kidswear Collection`,
    description: brand.description,
    url: getCanonicalUrl(`/brands/${brand.slug}`),
    numberOfItems: brandProducts.length,
    itemListElement: brandProducts.slice(0, 10).map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        name: p.name,
        url: getCanonicalUrl(`/products/${p.slug}`),
        description: p.description,
        brand: { "@type": "Brand", name: brand.name },
        manufacturer: { "@type": "Organization", name: COMPANY_NAME },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: p.price,
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_NAME,
    url: `${SITE_URL}/`,
  };
}

export interface SeoHeadOptions {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article" | "product";
  ogImage?: string;
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  extraJsonLd?: Record<string, unknown>[];
}

export function buildSeoHead({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogType = "website",
  ogImage,
  noindex = false,
  breadcrumbs,
  extraJsonLd,
}: SeoHeadOptions) {
  const canonicalUrl = getCanonicalUrl(path);
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDesc = ogDescription || description;
  const resolvedImage = toAbsoluteUrl(ogImage);

  const meta = [
    { title },
    { name: "description", content: description },
    {
      name: "robots",
      content: noindex ? "noindex, nofollow" : "index, follow",
    },
    { property: "og:title", content: resolvedOgTitle },
    { property: "og:description", content: resolvedOgDesc },
    { property: "og:type", content: ogType },
    { property: "og:url", content: canonicalUrl },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: resolvedImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: resolvedOgTitle },
    { name: "twitter:description", content: resolvedOgDesc },
    { name: "twitter:image", content: resolvedImage },
  ];

  const links = noindex ? [] : [{ rel: "canonical", href: canonicalUrl }];

  const jsonLdSchemas: Record<string, unknown>[] = [];
  if (breadcrumbs && breadcrumbs.length > 0) {
    jsonLdSchemas.push(buildBreadcrumbJsonLd(breadcrumbs));
  }
  if (extraJsonLd && extraJsonLd.length > 0) {
    jsonLdSchemas.push(...extraJsonLd);
  }

  const scripts = jsonLdSchemas.map((schema) => ({
    type: "application/ld+json",
    children: JSON.stringify(schema),
  }));

  return {
    meta,
    links,
    ...(scripts.length > 0 ? { scripts } : {}),
  };
}

interface SitemapEntry {
  path: string;
  changefreq: "weekly" | "monthly";
  priority: string;
}

const STATIC_PUBLIC_ROUTES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/brands", changefreq: "weekly", priority: "0.9" },
  { path: "/collections", changefreq: "weekly", priority: "0.9" },
  { path: "/products", changefreq: "weekly", priority: "0.9" },
  { path: "/manufacturing", changefreq: "monthly", priority: "0.8" },
  { path: "/oem-private-label", changefreq: "monthly", priority: "0.8" },
  { path: "/quality", changefreq: "monthly", priority: "0.8" },
  { path: "/design-development", changefreq: "monthly", priority: "0.8" },
  { path: "/sustainability", changefreq: "monthly", priority: "0.7" },
  { path: "/gallery", changefreq: "monthly", priority: "0.7" },
  { path: "/wholesale", changefreq: "monthly", priority: "0.8" },
  { path: "/request-quote", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function getPublicSitemapEntries(): SitemapEntry[] {
  const seen = new Set<string>();
  const entries: SitemapEntry[] = [];

  const pushEntry = (entry: SitemapEntry) => {
    const normalized = normalizePath(entry.path);
    if (seen.has(normalized)) return;
    seen.add(normalized);
    entries.push({ ...entry, path: normalized });
  };

  for (const route of STATIC_PUBLIC_ROUTES) {
    pushEntry(route);
  }
  for (const brand of brandsList) {
    pushEntry({ path: `/brands/${brand.slug}`, changefreq: "weekly", priority: "0.8" });
  }
  for (const col of collections) {
    pushEntry({ path: `/collections/${col.slug}`, changefreq: "weekly", priority: "0.8" });
  }
  for (const prod of products) {
    pushEntry({ path: `/products/${prod.slug}`, changefreq: "weekly", priority: "0.7" });
  }

  return entries;
}

export function buildSitemapXml(lastmod = "2026-11-26"): string {
  const entries = getPublicSitemapEntries();
  const urlsXml = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(getCanonicalUrl(entry.path))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;
}
