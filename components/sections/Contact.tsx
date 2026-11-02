'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react';

const EMAIL = 'dhairyaarora20@gmail.com';
const GITHUB = 'https://github.com/dhairyaaroraji';
const LINKEDIN = 'https://www.linkedin.com/in/dhairya-arora-5b277a426';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section relative overflow-hidden"
      style={{
        background: 'var(--surface)',
        borderRadius: '2rem 2rem 0 0',
      }}
    >
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="eyebrow mb-8">08 / Contact</p>

          <h2
            className="font-semibold leading-[0.95] mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              letterSpacing: '-0.035em',
              color: 'var(--foreground)',
            }}
          >
            Have an idea?
            <br />
            <span style={{ color: 'var(--accent)' }}>Let&apos;s build it.</span>
          </h2>

          <p
            className="max-w-lg mx-auto leading-relaxed"
            style={{
              color: 'var(--muted)',
              fontSize: '1.0625rem',
              lineHeight: 1.6,
            }}
          >
            I&apos;m open to interesting projects, hackathons, collaborations
            and conversations about tech.
          </p>
        </motion.div>

        {/* Email button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex justify-center mb-12"
        >
          <button
            onClick={copyEmail}
            className="card group flex items-center gap-4 px-8 py-5 cursor-pointer"
            style={{ borderRadius: '9999px' }}
          >
            <Mail size={20} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            <span
              className="font-mono font-semibold"
              style={{
                fontSize: 'clamp(0.85rem, 2vw, 1.15rem)',
                color: 'var(--foreground)',
                letterSpacing: '-0.01em',
              }}
            >
              {EMAIL}
            </span>
            <span style={{ color: 'var(--muted)' }}>
              {copied ? (
                <Check size={18} style={{ color: 'var(--green-dot)' }} />
              ) : (
                <Copy size={18} />
              )}
            </span>
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="flex justify-center gap-4"
        >
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill--outline text-sm"
            aria-label="GitHub"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill--outline text-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="pill pill--dark text-sm pill--arrow"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center mt-10"
        >
          <div className="flex items-center gap-2" style={{ color: 'var(--subtle)' }}>
            <span className="status-dot" />
            <span className="text-sm">Available for new projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
