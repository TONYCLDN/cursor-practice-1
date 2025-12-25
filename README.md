# AI Consultancy Website

A world-class AI consultancy website built with Next.js, Tailwind CSS, and the "Editorial Terminal" design aesthetic.

## 🎨 Design System

**Color Palette:** Deep Obsidian & Volt
- Background: `#050505` (Deepest Black)
- Surface: `#111111` (Elevated cards)
- Accent: `#DFFF00` (Volt Green)
- Text Primary: `#FFFFFF`
- Text Secondary: `#A1A1AA`
- Border: `#27272A`

**Typography:**
- Headings: Space Grotesk
- Body: Inter
- Code: JetBrains Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Resend API key (for contact form)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TONYCLDN/cursor-practice-1.git
cd cursor-practice-1
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Resend API key:
```
RESEND_API_KEY=re_your_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
/
├── app/
│   ├── components/          # Shared components (Navigation, Footer)
│   ├── lab/                # Case studies with MDX
│   ├── services/           # Services page
│   ├── process/            # Process/Sprint models page
│   ├── contact/            # Contact form
│   ├── api/contact/        # API route for form submission
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── mdx-components.tsx  # MDX styling
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Typography:** Google Fonts (Space Grotesk, Inter, JetBrains Mono)
- **Content:** MDX with rehype-pretty-code for syntax highlighting
- **Forms:** Resend + React Email
- **Language:** TypeScript

## 📄 Pages

1. **Home** (`/`) - Hero, service pillars, terminal animation
2. **Services** (`/services`) - Detailed service descriptions
3. **The Lab** (`/lab`) - Case studies with code snippets
4. **Process** (`/process`) - Sprint models and timeline
5. **Contact** (`/contact`) - "Audit My Business" form

## 🎯 Features

- ✅ Premium micro-interactions with volt green glow effects
- ✅ Floating label inputs with focus states
- ✅ Terminal-style loading animations
- ✅ MDX-powered case studies with syntax highlighting
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with metadata
- ✅ Contact form with Resend integration

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Build for Production

```bash
npm run build
npm start
```

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery.

1. Sign up for Resend at https://resend.com
2. Create an API key
3. Add to `.env.local`:
```
RESEND_API_KEY=re_your_key_here
```

4. Update the recipient email in `/app/api/contact/route.ts`:
```typescript
to: ['your-email@example.com'], // Replace with your email
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  background: '#050505',
  surface: '#111111',
  accent: '#DFFF00',
  // ...
}
```

### Typography

Fonts are configured in `app/layout.tsx`. To change fonts, import different Google Fonts and update the configuration.

## 📝 License

This project was built as a demonstration of AI-assisted development.

## 🤖 Built With

Generated with [Claude Code](https://claude.com/claude-code)

---

**Need help?** Open an issue or contact us through the website.
