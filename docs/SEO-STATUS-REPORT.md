# Portfolio SEO Status Report

**Site:** https://kunalkhandelwal.dev  
**Owner:** Kunal Khandelwal  
**Stack:** Next.js App Router  
**Report date:** August 8, 2026  
**Overall SEO health:** Strong (production-ready foundation)

---

## 1. Executive Summary

The portfolio has a solid SEO foundation for a personal developer site:

| Area | Status |
|------|--------|
| Root metadata (title, description, OG, Twitter) | Implemented |
| Page-level metadata (About, Works, Blog, Contact, Credentials) | Implemented |
| Dynamic project case study SEO | Implemented |
| Dynamic blog post SEO | Implemented |
| Sitemap (`/sitemap.xml`) | Implemented |
| Robots (`/robots.txt`) | Implemented |
| Structured data (JSON-LD) | Implemented |
| Analytics (GA4 + GTM) | Implemented |
| MDX-driven indexable content | Implemented |

**Verdict:** Core technical SEO is in place. Remaining gains come from content volume, dedicated OG images, Search Console monitoring, and a few structured-data enhancements.

---

## 2. Site Configuration

| Setting | Value |
|---------|-------|
| Canonical base URL | `https://kunalkhandelwal.dev` |
| Site name | Kunal Khandelwal |
| Language | `en` (`lang="en"` on `<html>`) |
| Locale (Open Graph) | `en_IN` |
| Default OG image | `/profileimg.png` |
| `metadataBase` | Set in root layout |

**Source files:** `src/lib/site.ts`, `src/app/layout.tsx`

---

## 3. Root / Global Metadata

**File:** `src/app/layout.tsx`

| Field | Current value |
|-------|----------------|
| Title | Kunal Khandelwal \| Software Engineer |
| Description | Software engineer building full-stack applications, backend systems and infrastructure with TypeScript, React, Next.js, NestJS, PostgreSQL, Redis and Docker. |
| Canonical | `/` (resolves via `metadataBase`) |
| Open Graph | title, description, url, siteName, type=`website`, locale, images |
| Twitter | `summary_large_image` + title, description, images |
| Authors / Creator | Kunal Khandelwal |

**Note:** Root `keywords` metadata was removed / is not currently set at the root level. Page layouts for Works, Blog, About, Contact, and Credentials still define keywords.

---

## 4. Static Page Metadata Matrix

| Route | Title | Canonical | Open Graph | Keywords |
|-------|-------|-----------|------------|----------|
| `/` | Kunal Khandelwal \| Software Engineer | Yes | Yes + Twitter | No (root) |
| `/works` | Works \| Kunal Khandelwal | Yes | Yes | Yes |
| `/blog` | Blog \| Kunal Khandelwal | Yes | Yes | Yes |
| `/about` | About \| Kunal Khandelwal | Yes | Yes (`profile`) | Yes |
| `/credentials` | Credentials \| Kunal Khandelwal | Yes | Yes (`profile`) | Yes |
| `/contact` | Contact \| Kunal Khandelwal | Yes | Yes | Yes |

**Source files:**
- `src/app/works/layout.tsx`
- `src/app/blog/layout.tsx`
- `src/app/about/layout.tsx`
- `src/app/credentials/layout.tsx`
- `src/app/contact/layout.tsx`

---

## 5. Dynamic Project Case Studies (`/works/[id]`)

**Content source:** `content/projects/*.mdx`  
**SEO helpers:** `src/lib/project.ts`, `src/lib/project-seo.ts`  
**Metadata:** `src/app/works/[id]/layout.tsx` via `generateMetadata`  
**JSON-LD:** Injected in `src/app/works/[id]/page.tsx`

### Frontmatter contract

```yaml
title:
slug:
category:
description:
client:
website:
image:
stack:
```

### Generated metadata

| Field | Behavior |
|-------|----------|
| Title | `{Project Title} \| Kunal Khandelwal` |
| Description | From `frontmatter.description` |
| Canonical | `https://kunalkhandelwal.dev/works/{slug}` |
| Robots | `index: true`, `follow: true` |
| Open Graph | title, description, url, type=`article`, images |
| Twitter | `summary_large_image` |
| JSON-LD | `CreativeWork` (author Person) |

### Indexed case studies (4)

| Slug | Title | Category | Image |
|------|-------|----------|-------|
| `admatrica` | Admatrica | Freelance | `/images/works/admatrica.png` |
| `arabazaar` | AraBazaar | Founding Engineer | `/images/works/arabazaar.png` |
| `rentforreel` | Rent for Reel | Freelance | `/images/works/r4r.png` |
| `thequantumwhale` | The Quantum Whale | Freelance | `/images/works/qw.png` |

### Gaps

- Only **4 of ~20** works-grid projects have MDX case studies (others are outbound-only and not in sitemap as detail pages).
- OG images use project screenshots, not dedicated 1200×630 social cards.
- No `datePublished` / `dateModified` in project frontmatter yet.

---

## 6. Dynamic Blog Posts (`/blog/[slug]`)

**Content source:** `content/blogs/*.mdx`  
**SEO helpers:** `src/lib/blog.ts`, `src/lib/blog-seo.ts`  
**Metadata:** `src/app/blog/[slug]/layout.tsx` via `generateMetadata`  
**JSON-LD:** Injected in `src/app/blog/[slug]/page.tsx`

### Frontmatter contract

```yaml
title:
slug:
tag:
description:
date:
dateLabel:
readTime:
image:
tldr:          # optional
preKnowledge:  # optional
published:
```

### Generated metadata

| Field | Behavior |
|-------|----------|
| Title | `{Post Title} \| Kunal Khandelwal` |
| Description | From `frontmatter.description` |
| Canonical | `https://kunalkhandelwal.dev/blog/{slug}` |
| Robots | `index: true`, `follow: true` |
| Open Graph | article + `publishedTime` + images |
| Twitter | `summary_large_image` |
| JSON-LD | `Article` |

### Published posts (2)

| Slug | Title | Date | Image |
|------|-------|------|-------|
| `integrating-plaid-in-production` | How I Learned Plaid While Building a Finance Application | June 25, 2026 | `/plaid.png` |
| `http-query-method-explained-why-get-and-post-arent-always-enough` | Why GET and POST Aren't Always Enough… | July 8, 2026 | `/httpquery.png` |

Drafts with `published: false` are excluded from listing, metadata indexing (noindex), and sitemap.

---

## 7. Sitemap

**Endpoint:** `https://kunalkhandelwal.dev/sitemap.xml`  
**File:** `src/app/sitemap.ts`

### Included URLs

**Static (6):**
1. `/`
2. `/works`
3. `/blog`
4. `/about`
5. `/credentials`
6. `/contact`

**Projects (dynamic):** all MDX filenames under `content/projects/` → `/works/{slug}`

**Blogs (dynamic):** published MDX under `content/blogs/` via `getPublishedBlogSlugs()` → `/blog/{slug}`

### Safeguards

- Blog drafts (`published: false`) are excluded.
- Project URLs are generated only from real `.mdx` files (no `/works/undefined`).
- `lastModified` uses file mtime where available.

### Current approximate sitemap size

6 static + 4 projects + 2 blogs = **12 URLs**

---

## 8. Robots.txt

**Endpoint:** `https://kunalkhandelwal.dev/robots.txt`  
**File:** `src/app/robots.ts`

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://kunalkhandelwal.dev/sitemap.xml
```

Project and blog pages are crawlable. API and Next internals are blocked.

---

## 9. Structured Data (JSON-LD)

| Schema | Where | Purpose |
|--------|--------|---------|
| `Person` | Root layout (`PERSON_JSON_LD`) | Identity, job title, `sameAs`, `knowsAbout` |
| `WebSite` | Root layout (`WEBSITE_JSON_LD`) | Site entity linked to Person via `@id` |
| `CreativeWork` | Project detail pages | Case study rich context |
| `Article` | Blog detail pages | Article headline, dates, author |

`Person` and `WebSite` are cross-linked with `@id` (`/#person`, `/#website`), which is a good practice.

### Missing (recommended next)

- `BreadcrumbList` on `/works/[id]` and `/blog/[slug]`
- `ItemList` on `/works` and `/blog` listing pages
- Optional `ProfilePage` for `/about`

---

## 10. Analytics & Tracking (SEO-adjacent)

| Tool | ID | Status |
|------|-----|--------|
| Google Analytics 4 | `G-XGFPCV10CX` | Loaded in root layout |
| Google Tag Manager | `GTM-KB7M5KBL` | Loaded in root layout |

**SPA page views:** `usePageView` tracks client navigations on Works, Blog, project detail, and blog detail pages.

**Engagement events:**
- Project outbound clicks (`trackProjectClick`)
- Case study clicks (`trackCaseStudyClick`)
- Blog post clicks (`trackBlogPostClick`)
- Project website clicks from detail pages (`trackProjectWebsiteClick`)
- Contact form / social clicks (contact page)

---

## 11. Scoring Snapshot

| Category | Score (1–10) | Notes |
|----------|--------------|-------|
| Technical metadata | 9 | Strong titles, descriptions, canonicals, OG/Twitter |
| Crawlability | 9 | robots + sitemap + MDX-driven URLs |
| Structured data | 8 | Person/WebSite/Article/CreativeWork present |
| Content depth | 6 | Only 4 case studies + 2 blog posts indexed |
| Social sharing assets | 6 | Custom images on posts; project OG not 1200×630-optimized |
| Internal linking | 7 | Home → works/blog; case-study cards highlighted |
| Monitoring | — | Depends on Search Console setup (manual) |

**Overall: ~8/10 technical SEO** for a personal portfolio; content volume is the main limiter for organic reach.

---

## 12. Risks & Gaps

1. **Thin content surface** — few indexable long-form URLs vs many external-only projects.
2. **Default OG image** — `/profileimg.png` may not be ideal 1200×630 for LinkedIn/Twitter.
3. **No BreadcrumbList** — weaker hierarchical signals for case studies/posts.
4. **Works listing Twitter/OG** — listing layouts have OG but not always full Twitter cards.
5. **ESLint warnings** — root layout uses raw `<script>` for GA (Next prefers `next/script`); does not block SEO but is a hygiene item.
6. **Duplicate analytics** — both GTM and direct gtag may double-count if GTM also loads GA; verify in GTM config.

---

## 13. Recommended Next Actions

### High priority
1. Submit `https://kunalkhandelwal.dev/sitemap.xml` in Google Search Console.
2. Request indexing for new `/works/*` and `/blog/*` URLs after each publish.
3. Add more MDX case studies for top portfolio projects (Codefolder, Envesty, StudyByU, etc.).
4. Publish 1–2 blog posts per month to grow indexable topical coverage.

### Medium priority
5. Create dedicated 1200×630 OG images per case study and post.
6. Add `BreadcrumbList` JSON-LD to detail pages.
7. Add `ItemList` JSON-LD to `/works` and `/blog`.
8. Add `datePublished` / `dateModified` to project frontmatter.

### Lower priority
9. Migrate GA/GTM scripts to `next/script`.
10. Validate JSON-LD with Google Rich Results Test.
11. Audit LinkedIn share previews with the LinkedIn Post Inspector.
12. Consider `hreflang` only if you add non-English content later (not needed now).

---

## 14. File Map (SEO-related)

```
src/app/layout.tsx                 # Root metadata + Person/WebSite JSON-LD + GA/GTM
src/app/sitemap.ts                 # Dynamic sitemap
src/app/robots.ts                  # Robots rules
src/app/*/layout.tsx               # Static page metadata
src/app/works/[id]/layout.tsx      # Project generateMetadata
src/app/works/[id]/page.tsx        # CreativeWork JSON-LD
src/app/blog/[slug]/layout.tsx     # Blog generateMetadata
src/app/blog/[slug]/page.tsx       # Article JSON-LD
src/lib/site.ts                    # SITE_URL, Person/WebSite schemas
src/lib/project.ts / project-seo.ts
src/lib/blog.ts / blog-seo.ts
src/lib/gtag.ts                    # Analytics helpers
content/projects/*.mdx             # Case study content
content/blogs/*.mdx                # Blog content
```

---

## 15. Conclusion

Your portfolio SEO setup is **production-ready** for App Router:

- Absolute canonicals and social metadata on dynamic MDX pages
- Sitemap and robots correctly expose indexable content
- Person + WebSite + Article + CreativeWork structured data
- Analytics wired for listing and detail engagement

The biggest opportunity is **more indexable content** (additional case studies and blog posts), followed by dedicated social images and Breadcrumb/ItemList schema.

---

*Generated for kunalkhandelwal.dev — August 8, 2026*
