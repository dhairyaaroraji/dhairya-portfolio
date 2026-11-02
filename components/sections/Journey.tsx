'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface StoryItem {
  period: string;
  year: string;
  title: string;
  company: string;
  points: string[];
}

const storyList: StoryItem[] = [
  {
    period: 'NOV 2026 — NOW',
    year: '2026',
    title: 'Independent Full-Stack & AI Developer',
    company: 'Self-Directed · Noida / Remote',
    points: [
      'Building AI-powered software concepts, academic productivity platforms, and full-stack applications.',
      'Exploring hackathons, product development, and practical applications of emerging technologies.',
    ],
  },
  {
    period: 'OCT 2026',
    year: '2026',
    title: 'National Hackathons & Innovation',
    company: 'IITs & IIITs · Hackathon Journey',
    points: [
      'Selected for the JAI Agentic AI International Summit & Hackathon.',
      'Selected for IIIT Delhi HackShift.',
      'Participated in the IIT Guwahati ROVUN Hackyard Build and explored multimodal AI through the IIT Mandi hackathon.',
      'Developing project concepts, prototypes, and product presentations through competitive innovation events.',
    ],
  },
  {
    period: '2026 — PRESENT',
    year: '2026',
    title: 'AI & Full-Stack Project Development',
    company: 'Independent Projects',
    points: [
      'Developing FEYD, an Autonomous Academic Operating System, and ROVUN, an AI-powered road-safety concept.',
      'Exploring full-stack development, AI integration, interactive interfaces, and software product design.',
      'Working on projects including Stock X, Study Buddy CSE, Interview AI, and Where Is My Bus?',
    ],
  },
  {
    period: '2026 — PRESENT',
    year: '2026',
    title: 'B.Tech — Computer Science & Engineering',
    company: 'Jaypee Institute of Information Technology (JIIT), Noida',
    points: [
      'Pursuing undergraduate studies in Computer Science and Engineering.',
      'Building foundations in programming, mathematics, algorithms, and computer science.',
      'Applying classroom learning through independent projects, hackathons, and practical experimentation.',
    ],
  },
];

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Compute year digits for the roller counter
  const currentYear = storyList[activeIndex]?.year || '2026';
  const digits = currentYear.split('');

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative z-10 py-32 overflow-hidden border-t"
      style={{
        background: `
          repeating-linear-gradient(42deg, rgba(26,24,24,0.018) 0 1px, transparent 1px 14px),
          linear-gradient(176deg, var(--wall-hi) 0%, var(--wall) 50%, var(--surface) 100%)
        `,
        borderColor: 'var(--line)',
      }}
    >
      <div className="shell">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Sticky Time Dial / Giant Year Counter (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start select-none">
            {/* Eyebrow with clock icon */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="eyebrow text-xs">My Story</span>
            </div>

            {/* Headline matching screenshot 2 & 3 */}
            <h2
              className="font-bold leading-[0.98] tracking-tight mb-8"
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
                letterSpacing: '-0.04em',
                color: 'var(--foreground)',
              }}
            >
              Let&apos;s go <br />
              back in time.
            </h2>

            {/* Giant Architectural Year with Circular Radar/Dial Background */}
            <div className="relative w-full max-w-[28rem] aspect-square flex flex-col items-center justify-center my-2">
              {/* Radial clock/compass rings */}
              <div
                className="absolute inset-0 rounded-full border border-line opacity-40 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.02) 100%)',
                }}
              />
              <div
                className="absolute inset-8 rounded-full border border-dashed border-line opacity-30 pointer-events-none animate-[spin_120s_linear_infinite]"
              />
              <div
                className="absolute inset-20 rounded-full border border-line opacity-20 pointer-events-none"
              />

              {/* The Giant Digits (.dg roller style) */}
              <div
                className="relative z-10 flex items-center font-bold text-foreground"
                style={{
                  fontSize: 'clamp(5rem, 10vw, 8.5rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                {digits.map((digit, idx) => (
                  <div key={idx} className="dg">
                    <div
                      className="dg__c"
                      style={{
                        transform: `translateY(-${parseInt(digit, 10)}em)`,
                      }}
                    >
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                        <i key={n}>{n}</i>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Date subline & Progress bar matching screenshot */}
              <div className="relative z-10 flex flex-col items-center mt-3 gap-2">
                <span className="font-mono text-xs text-subtle tracking-wider uppercase">
                  {storyList[activeIndex]?.period}
                </span>

                <div className="flex items-center gap-3 mt-1">
                  <span className="font-mono text-xs font-semibold text-accent">
                    0{activeIndex + 1}
                  </span>
                  <span className="font-mono text-xs text-subtle">
                    / 0{storyList.length}
                  </span>
                  <div className="w-20 h-1 rounded-full bg-line overflow-hidden">
                    <div
                      className="h-full bg-foreground transition-all duration-500 rounded-full"
                      style={{
                        width: `${((activeIndex + 1) / storyList.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Dot-on-Rail Vertical Chapter Rail (7 cols) */}
          <div className="lg:col-span-7 relative pt-4 pl-4 sm:pl-8">
            {/* The Vertical Rail Line */}
            <div
              className="absolute left-4 sm:left-8 top-8 bottom-8 w-[2px]"
              style={{
                background: 'linear-gradient(180deg, var(--foreground) 0%, var(--line) 75%, transparent 100%)',
              }}
            />

            {/* Chapter Items List */}
            <div className="flex flex-col gap-16 relative z-10">
              {storyList.map((item, i) => (
                <motion.div
                  key={item.title + item.period}
                  onMouseEnter={() => setActiveIndex(i)}
                  onViewportEnter={() => setActiveIndex(i)}
                  viewport={{ amount: 0.5 }}
                  className="group relative pl-8 sm:pl-12 cursor-default"
                >
                  {/* Dot on the rail */}
                  <div
                    className="absolute -left-[5px] sm:-left-[5px] top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300"
                    style={{
                      background: activeIndex === i ? 'var(--foreground)' : 'var(--background)',
                      borderColor: activeIndex === i ? 'var(--foreground)' : 'var(--accent)',
                      boxShadow: activeIndex === i ? '0 0 0 4px rgba(26,24,24,0.1)' : 'none',
                    }}
                  />

                  {/* Period Eyebrow */}
                  <span className="font-mono text-[11px] font-semibold text-accent tracking-wider uppercase block mb-1">
                    {item.period}
                  </span>

                  {/* Role Title */}
                  <h3
                    className="font-bold text-2xl sm:text-3xl tracking-tight text-foreground mb-1 group-hover:text-accent transition-colors"
                    style={{ letterSpacing: '-0.025em' }}
                  >
                    {item.title}
                  </h3>

                  {/* Company / Institution */}
                  <p className="font-semibold text-sm text-muted mb-4">
                    {item.company}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 text-sm sm:text-[15px] text-muted leading-relaxed max-w-xl">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-accent mt-0.5 select-none">—</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
