# Rabdos AI Website Architecture

Minimal Next.js 14 website with App Router architecture.

## 📁 Project Structure

```
rabdos-website/
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata & SEO
│   ├── page.tsx             # Homepage (all sections in one file)
│   └── globals.css          # Global styles + Tailwind imports
├── public/                  # Static assets
│   └── team/                # Founder photos
│       ├── robert-ghrist.jpeg
│       ├── mayur-naik.png
│       ├── oscar-xu.jpeg
│       └── shreya-arya.jpeg
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.mjs       # PostCSS configuration
└── package.json             # Dependencies
```

## 🎯 Design Decisions

### Single Page Application
- All content in `app/page.tsx` for simplicity
- Sections: Navigation, Hero, Features, About, Team, Contact, Footer
- Smooth scrolling with anchor links (#about, #features, #team, #contact)

### Styling Approach
- **Tailwind CSS** for utility-first styling
- **No custom CSS classes** - all styles inline with Tailwind
- **Dark mode** via CSS variables and Tailwind's dark: modifier
- **Responsive** with mobile-first approach (sm:, md:, lg: breakpoints)

### Image Handling
- Next.js Image component for optimization
- Images in `/public/team/` for static serving
- Auto-optimization to WebP/AVIF formats

### No Dependencies Beyond Essentials
- Next.js 14.2.33
- React 18.3.1
- Tailwind CSS 3.4.14
- TypeScript 5.x
- No UI libraries, no animation libraries, no extras

## 🔧 Key Files

### `app/page.tsx`
Main page component with all sections:
- Uses Next.js Image component for founder photos
- All sections clearly commented
- Links to external founder webpages with target="_blank"
- Contact email: contact@rabdos.ai

### `app/layout.tsx`
Root layout defining:
- Page metadata (title, description, OG tags)
- SEO configuration
- HTML structure

### `app/globals.css`
Minimal global styles:
- Tailwind directives
- CSS variables for dark mode
- Base font and smoothing

### `tailwind.config.ts`
Tailwind configuration:
- Content paths for purging
- Color variables
- No custom plugins

## 🎨 Color Palette

### Brand Colors
- Primary: Blue (#3B82F6 - blue-600)
- Secondary: Purple (#9333EA - purple-600)
- Accent: Pink (#DB2777 - pink-600)

### Founder Role Colors
- Robert (Co-CEO): Purple
- Mayur (Co-CEO): Blue
- Oscar (CTO): Pink
- Shreya (CRO): Cyan

## 📝 Content Sections

### 1. Navigation (Fixed)
- Logo: "Rabdos AI"
- Links: About, Features, Team, Contact
- CTA Button: "Get Started"

### 2. Hero
- Headline: "Frontier-Level Math Problem Generation"
- Subheadline: Description of the platform
- CTA Buttons: "Get in Touch", "Learn More"

### 3. Features ("Why Rabdos")
- Controllable Difficulty
- Beyond IMO Complexity
- Scalable Generation

### 4. About
- Company mission and approach
- Technical details about the platform

### 5. Team
- 4 founder cards with photos, names, titles, descriptions
- Clickable links to personal webpages
- Hover effects on photos and names

### 6. Contact
- Gradient CTA section
- Email link and feature exploration

### 7. Footer
- Company description
- Navigation links
- Social media links (Twitter, LinkedIn)
- Copyright notice

## 🚀 Maintenance Guide

### Adding Content
1. Edit `app/page.tsx` directly
2. Find the relevant section (clearly commented)
3. Update text, links, or structure
4. All styling is inline with Tailwind classes

### Updating Founder Information
1. Replace images in `/public/team/`
2. Update links and text in Team section of `app/page.tsx`
3. Keep image filenames consistent or update `src` props

### Changing Colors
1. Edit Tailwind classes in `app/page.tsx`
2. For theme colors, update `tailwind.config.ts`
3. For dark mode colors, update `app/globals.css`

### SEO Updates
1. Edit metadata in `app/layout.tsx`
2. Update title, description, keywords, OG tags

## ⚠️ Important Notes

### What NOT to Do
- ❌ Don't add unnecessary dependencies
- ❌ Don't create separate component files (keep it simple)
- ❌ Don't add CSS files (use Tailwind)
- ❌ Don't commit `.DS_Store` or `node_modules`
- ❌ Don't modify `next-env.d.ts` (auto-generated)

### What to Keep Clean
- ✅ All images in `/public/team/`
- ✅ Single page in `app/page.tsx`
- ✅ Minimal globals.css
- ✅ Keep .gitignore up to date

## 📦 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel dashboard
3. Auto-deploys on push to main
4. Add custom domain in Vercel settings

### DNS Configuration (Namecheap)
- A Record: `@` → `76.76.21.21`
- CNAME Record: `www` → `cname.vercel-dns.com`

---

**Last Updated:** November 2025  
**Framework:** Next.js 14 (App Router)  
**Styling:** Tailwind CSS 3  
**Type Safety:** TypeScript 5

