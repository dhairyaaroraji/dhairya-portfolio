'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'JavaScript', 'Python', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Figma'],
  },
  {
    title: 'Concepts',
    skills: ['DSA', 'Problem Solving', 'AI / ML', 'UI/UX Design', 'REST APIs', 'Responsive Design'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="section relative overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      <div className="shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="eyebrow mb-6">04 / Skills</p>
          <h2
            className="font-semibold leading-[0.95]"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-0.035em',
              color: 'var(--foreground)',
              maxWidth: '600px',
            }}
          >
            Tools I build{' '}
            <span style={{ color: 'var(--accent)' }}>with.</span>
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: ci * 0.1,
              }}
            >
              <p
                className="font-mono text-xs font-semibold mb-4"
                style={{
                  color: 'var(--accent)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 font-mono text-xs"
          style={{ color: 'var(--subtle)' }}
        >
          + always learning more
        </motion.p>
      </div>
    </section>
  );
}
