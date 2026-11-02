'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import SpiralCalendar from '@/components/ui/SpiralCalendar';

const ArchitecturalSculpture = dynamic(
  () => import('@/components/three/ArchitecturalSculpture'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[460px] flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-line animate-pulse opacity-20" />
      </div>
    ),
  }
);

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] lg:min-h-screen flex flex-col justify-between overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg, var(--wall-hi) 0%, var(--wall) 100%)
        `,
      }}
    >
      {/* Subtle architectural wall spotlight vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 30%, rgba(255,255,255,0.4) 0%, transparent 80%)',
        }}
      />

      {/* Main hero grid */}
      <div className="shell relative z-10 w-full pt-32 lg:pt-36 pb-8 flex-1 flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full">
          {/* LEFT: Editorial Typography & Spiral Notebook (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Eyebrow Label with Green Pulse Dot */}
            <div className="flex items-center gap-2.5">
              <span className="status-dot" />
              <span className="eyebrow text-xs">
                Student Innovator · JIIT Noida
              </span>
            </div>

            {/* Oversized Headline matching Reference Style */}
            <h1
              className="font-bold leading-[0.94] tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 6.2rem)',
                letterSpacing: '-0.04em',
                color: 'var(--foreground)',
              }}
            >
              Hi, I&apos;m Dhairya.
              <br />
              <span style={{ color: 'var(--accent)', fontWeight: 400 }}>
                I am a
              </span>
            </h1>

            {/* Realistic 3D Flipping Spiral Notebook Element */}
            <div className="w-full max-w-[26rem] my-1">
              <SpiralCalendar />
            </div>

            {/* Pill CTAs matching Reference Button System */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => scrollTo('doors')}
                className="pill pill--dark flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="pill pill--outline"
              >
                Let&apos;s Connect
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/dhairyaaroraji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full transition-all duration-300 border border-line text-muted hover:text-foreground hover:scale-105"
                aria-label="GitHub profile"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhairya-arora-5b277a426"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full transition-all duration-300 border border-line text-muted hover:text-foreground hover:scale-105"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT: 3D Architectural Sculpture (Zero human photos) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Pedestal Aura Glow */}
            <div
              className="absolute w-80 h-80 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />

            <ArchitecturalSculpture />
          </div>
        </div>
      </div>

      {/* Bottom Architectural Studio Rail */}
      <div
        className="relative z-10 border-t w-full"
        style={{ borderColor: 'var(--line)' }}
      >
        <div className="shell py-3.5 flex items-center justify-between text-xs tracking-wider font-mono text-subtle">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2">
              <span className="status-dot" style={{ width: 6, height: 6 }} />
              AVAILABLE FOR WORK
            </span>
            <span className="hidden sm:inline opacity-40">·</span>
            <span className="hidden sm:inline">NOIDA, INDIA</span>
          </div>

          <div className="hidden md:flex items-center gap-2 opacity-60">
            <span>STUDENT INNOVATOR · JIIT</span>
          </div>

          <button
            onClick={() => scrollTo('doors')}
            className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer"
          >
            <span>SCROLL TO EXPLORE</span>
            <span className="animate-bounce">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
