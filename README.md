# Rabdos AI Website

A modern, responsive Next.js website for Rabdos AI built with TypeScript and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository** (or you're already here!)

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

You should see your website running locally! 🎉

## 📦 Project Structure

```
rabdos-website/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with metadata and SEO
│   └── page.tsx          # Home page component
├── public/               # Static assets (images, fonts, etc.)
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🎨 Features

- ⚡ **Next.js 14** with App Router
- 🎯 **TypeScript** for type safety
- 💅 **Tailwind CSS** for styling
- 🌙 **Dark mode** support
- 📱 **Fully responsive** design
- 🔍 **SEO optimized** with metadata
- ♿ **Accessible** UI components

## 🚢 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/rabdos-website.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign up/login

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)

6. **Click "Deploy"** 🚀

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to link your project
```

## 🌐 Adding Your Custom Domain (rabdos.ai)

After deployment on Vercel:

1. **Go to your project** in Vercel Dashboard

2. **Click "Settings" → "Domains"**

3. **Add your domain:** `rabdos.ai` and `www.rabdos.ai`

4. **Follow Vercel's instructions** to update your domain's nameservers or DNS records

   **Option A: Use Vercel Nameservers (Simpler)**
   - Go to your domain registrar
   - Update nameservers to Vercel's nameservers

   **Option B: Add DNS Records (Keep current DNS)**
   - Add A record pointing to Vercel's IP
   - Add CNAME record for www subdomain

5. **Wait for DNS propagation** (can take 24-48 hours, usually faster)

6. **Done!** Your site will be live at `rabdos.ai` ✨

## 📝 Customization

### Update Content

Edit `app/page.tsx` to change the content of your landing page:
- Hero section text and CTAs
- Features descriptions
- About section content
- Contact information

### Update SEO & Metadata

Edit `app/layout.tsx` to update:
- Site title and description
- Open Graph tags (social media previews)
- Keywords
- Twitter card metadata

### Update Styling

Edit `app/globals.css` and `tailwind.config.ts` to:
- Change color schemes
- Update fonts
- Modify spacing and sizing
- Add custom utility classes

### Add New Pages

Create new files in the `app` directory:
```
app/
├── about/
│   └── page.tsx          # Creates /about route
├── blog/
│   └── page.tsx          # Creates /blog route
└── contact/
    └── page.tsx          # Creates /contact route
```

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Documentation](https://vercel.com/docs)

## 🤝 Need Help?

- Check the [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
- Visit [Vercel Support](https://vercel.com/support)

---

Built with ❤️ by Rabdos AI

