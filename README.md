# Dhairya Arora — Personal Portfolio

A premium, futuristic 3D personal portfolio built with Next.js 14, React Three Fiber, Framer Motion and Tailwind CSS.

## ✨ Features

- **3D Interactive Hero** — Glass orb with glowing rings and particle field (React Three Fiber)
- **Custom Cursor** — Spring-physics cursor with pointer-state detection
- **Glassmorphism** — Consistent glass surface system throughout
- **Framer Motion Animations** — Scroll-triggered reveals, stagger animations, magnetic buttons
- **3D Card Tilt** — Skills and project cards with perspective tilt on hover
- **Responsive** — Excellent at 390px → 1920px
- **Performance** — Lazy-loaded 3D, respects `prefers-reduced-motion`
- **SEO** — Full Open Graph + Twitter Card metadata
- **Vercel Ready** — One-click deploy

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Install

```bash
cd dhairya-portfolio
npm install
```

### Dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
dhairya-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global design system styles
├── components/
│   ├── Navbar.tsx          # Glass nav with scroll state + mobile menu
│   ├── sections/
│   │   ├── Hero.tsx        # Hero split layout + lazy 3D scene
│   │   ├── About.tsx       # About + glassmorphism stats card
│   │   ├── Skills.tsx      # 12 glass skill cards with 3D tilt
│   │   ├── Projects.tsx    # 3 premium project cards
│   │   ├── Journey.tsx     # Animated timeline
│   │   ├── Contact.tsx     # Dramatic contact section + email copy
│   │   └── Footer.tsx      # Copyright + back to top
│   ├── three/
│   │   └── HeroScene.tsx   # R3F scene: glass orb + rings + particles
│   └── ui/
│       ├── MagneticButton.tsx   # Magnetic physics button
│       └── CustomCursor.tsx     # Custom cursor with spring physics
├── hooks/
│   ├── useMousePosition.ts
│   └── useScrollReveal.ts
├── lib/
│   └── utils.ts
└── public/
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#050505` / `#0A0A0A` / `#111111` |
| Text | `#FFFFFF` / `#A1A1AA` |
| Accent | `#C7FF4A` (lime) |
| Secondary accent | `#8FAF35` |
| Glass BG | `rgba(255,255,255,0.05)` |
| Glass border | `rgba(255,255,255,0.10)` |
| Font (sans) | Manrope |
| Font (mono) | DM Mono |

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import repo → Deploy

No environment variables needed.

## 📬 Contact

Dhairya Arora — [dhairyaarora20@gmail.com](mailto:dhairyaarora20@gmail.com)  
GitHub — [github.com/dhairyaaroraji](https://github.com/dhairyaaroraji)  
LinkedIn — [linkedin.com/in/dhairya-arora-5b277a426](https://www.linkedin.com/in/dhairya-arora-5b277a426)
