'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="section relative overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      <div className="shell">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Left — Text */}
          <div>
            <motion.p variants={item} className="eyebrow mb-6">
              01 / About
            </motion.p>

            <motion.h2
              variants={item}
              className="font-semibold leading-[0.95] mb-8"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                letterSpacing: '-0.035em',
                color: 'var(--foreground)',
              }}
            >
              A CSE student
              <br />
              <span style={{ color: 'var(--accent)' }}>who likes building.</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="leading-relaxed mb-8"
              style={{
                color: 'var(--muted)',
                fontSize: '1.0625rem',
                maxWidth: '480px',
                lineHeight: 1.6,
              }}
            >
              I&apos;m currently pursuing B.Tech in Computer Science &amp; Engineering at
              JIIT Noida. I focus on building practical technology products,
              exploring AI, and turning ideas into real-world solutions through
              hackathons and hands-on development.
            </motion.p>

            <motion.div variants={item} className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                <GraduationCap size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <span className="font-mono text-xs">JIIT Noida — B.Tech CSE</span>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                <MapPin size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <span className="font-mono text-xs">Noida, India</span>
              </div>
            </motion.div>
          </div>

          {/* Right — What I do card */}
          <motion.div variants={item}>
            <div
              className="card p-8 relative overflow-hidden"
            >
              {/* Interests */}
              <p className="eyebrow mb-6">What I&apos;m into</p>
              <div className="flex flex-col gap-5">
                {[
                  { label: 'Building', desc: 'Practical AI-powered products & web applications' },
                  { label: 'Learning', desc: 'Full-stack development, algorithms, and system design' },
                  { label: 'Competing', desc: 'Hackathons at IITs, IIITs, and tech events' },
                  { label: 'Exploring', desc: 'Startup ideas & real-world problem solving' },
                ].map((interest) => (
                  <div key={interest.label} className="flex gap-4">
                    <span
                      className="font-mono text-xs font-semibold mt-1 shrink-0"
                      style={{
                        color: 'var(--accent)',
                        letterSpacing: '0.06em',
                        minWidth: '5.5rem',
                      }}
                    >
                      {interest.label}
                    </span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.9375rem' }}>
                      {interest.desc}
                    </span>
                  </div>
                ))}
              </div>

              <div className="divider my-6" />

              {/* Bottom detail */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="eyebrow text-xs mb-1" style={{ color: 'var(--subtle)' }}>
                    Currently
                  </p>
                  <p className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>
                    Building &amp; Learning
                  </p>
                </div>
                <div className="chip">
                  <span className="status-dot" />
                  <span className="text-xs">Open to work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
