'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  tech?: string[];
  status: 'Completed' | 'Prototype' | 'In Development' | 'Concept';
  statusEmoji: string;
  github?: string;
  live?: string;
  visualTheme: {
    badgeBg: string;
    badgeColor: string;
    gradient: string;
    iconSymbol: string;
    accentLine: string;
  };
}

export const allProjects: Project[] = [
  // 01. ROVUN
  {
    id: 'rovun',
    name: 'ROVUN',
    tagline: 'AI-Powered Road Safety & Accident Response',
    category: 'Intelligent Safety Concept',
    description:
      'An intelligent road-safety concept exploring accident detection, GPS-based emergency alerts, response coordination, and safety analytics.',
    status: 'Concept',
    statusEmoji: '💡',
    tech: ['Three.js', 'React', 'WebGL', 'Next.js'],
    github: 'https://github.com/dhairyaaroraji/roadshield-ai',
    live: 'https://roadshield-ai-five.vercel.app/',
    visualTheme: {
      badgeBg: 'rgba(164, 85, 44, 0.15)',
      badgeColor: '#A4552C',
      gradient: 'linear-gradient(135deg, #4A2518 0%, #6E3722 60%, #30170F 100%)',
      iconSymbol: 'AI',
      accentLine: '#D47A4A',
    },
  },
  // 02. FEYD
  {
    id: 'feyd',
    name: 'FEYD',
    tagline: 'Autonomous Academic Operating System',
    category: 'Autonomous Systems & AI',
    description:
      'An AI-powered academic platform designed to simplify student workflows, planning, scheduling, and academic resource management.',
    status: 'Prototype',
    statusEmoji: '🔧',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    github: 'https://github.com/dhairyaaroraji/FEYD',
    live: 'https://feyd.vercel.app/',
    visualTheme: {
      badgeBg: 'rgba(34, 48, 74, 0.15)',
      badgeColor: '#22304A',
      gradient: 'linear-gradient(135deg, #1C2840 0%, #2A3B5C 60%, #151F33 100%)',
      iconSymbol: 'OS',
      accentLine: '#4A6FA5',
    },
  },
  // 03. Jal Setu
  {
    id: 'jal-setu',
    name: 'Jal Setu',
    tagline: 'Smart Water Security Platform',
    category: 'Resource Sustainability Concept',
    description:
      'A smart water-security platform concept combining household water monitoring, intelligent flow control, and actionable conservation insights.',
    status: 'Concept',
    statusEmoji: '💡',
    visualTheme: {
      badgeBg: 'rgba(34, 78, 92, 0.15)',
      badgeColor: '#224E5C',
      gradient: 'linear-gradient(135deg, #142830 0%, #1F3E4A 60%, #0E1B21 100%)',
      iconSymbol: 'H2O',
      accentLine: '#3CA1BF',
    },
  },
  // 04. Stock X
  {
    id: 'stock-x',
    name: 'Stock X',
    tagline: 'Stock Analysis Project',
    category: 'Market Intelligence & Analytics',
    description:
      'A project focused on stock-market information, tracking trends, and structured financial data analysis.',
    status: 'In Development',
    statusEmoji: '🚧',
    visualTheme: {
      badgeBg: 'rgba(78, 138, 66, 0.15)',
      badgeColor: '#4E8A42',
      gradient: 'linear-gradient(135deg, #1B331E 0%, #294D2E 60%, #132415 100%)',
      iconSymbol: 'FX',
      accentLine: '#5FAF52',
    },
  },
  // 05. Where Is My Bus?
  {
    id: 'where-is-my-bus',
    name: 'Where Is My Bus?',
    tagline: 'Real-Time Public Transport Tracking Concept',
    category: 'Transit & Location Systems',
    description:
      'A public transportation tracking concept exploring live GPS-based bus updates, passenger route information, and estimated arrival predictions.',
    status: 'Concept',
    statusEmoji: '💡',
    visualTheme: {
      badgeBg: 'rgba(56, 95, 122, 0.15)',
      badgeColor: '#385F7A',
      gradient: 'linear-gradient(135deg, #192D3B 0%, #274559 60%, #12202A 100%)',
      iconSymbol: 'GPS',
      accentLine: '#548FB8',
    },
  },
  // 06. Q - Get in queue
  {
    id: 'q-app',
    name: 'Q - Get in queue',
    tagline: 'QR-Code Solution for LUMINA Hackathon',
    category: 'Hackathon Prototype',
    description:
      'A QR-code-based utility prototype developed in connection with the LUMINA hackathon to streamline digital access, queuing, and verification.',
    status: 'Prototype',
    statusEmoji: '🔧',
    tech: ['Node.js', 'React', 'TypeScript', 'Socket.IO'],
    visualTheme: {
      badgeBg: 'rgba(122, 134, 112, 0.15)',
      badgeColor: '#7A8670',
      gradient: 'linear-gradient(135deg, #2B3326 0%, #414D3A 60%, #1E241A 100%)',
      iconSymbol: 'Q',
      accentLine: '#8EA181',
    },
  },
  // 07. Study Buddy CSE
  {
    id: 'study-buddy-cse',
    name: 'Study Buddy CSE',
    tagline: 'Academic Resource Platform for CSE Students',
    category: 'Academic Education Platform',
    description:
      'A student-focused platform intended to organize and simplify access to computer science learning resources, study materials, and subject guides.',
    status: 'In Development',
    statusEmoji: '🚧',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/dhairyaaroraji/Study-Buddy-CSE',
    live: 'https://study-buddy-cse.vercel.app/',
    visualTheme: {
      badgeBg: 'rgba(74, 53, 64, 0.15)',
      badgeColor: '#4A3540',
      gradient: 'linear-gradient(135deg, #33202B 0%, #4D3041 60%, #24161E 100%)',
      iconSymbol: 'CS',
      accentLine: '#9E6D89',
    },
  },
  // 08. Interview AI
  {
    id: 'interview-ai',
    name: 'Interview AI',
    tagline: 'AI-Powered Interview Preparation',
    category: 'AI Preparation Tool',
    description:
      'An AI-driven project designed to explore technical interview practice, question preparation, and structured evaluation for engineering students.',
    status: 'In Development',
    statusEmoji: '🚧',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI SDK'],
    github: 'https://github.com/dhairyaaroraji/interviewai',
    live: 'https://interviewerai-sepia.vercel.app/',
    visualTheme: {
      badgeBg: 'rgba(92, 75, 115, 0.15)',
      badgeColor: '#5C4B73',
      gradient: 'linear-gradient(135deg, #251D30 0%, #3C2E4F 60%, #191421 100%)',
      iconSymbol: 'AI',
      accentLine: '#8770A8',
    },
  },
  // 09. Placement Ready
  {
    id: 'placement-ready',
    name: 'Placement Ready',
    tagline: 'Campus Placement Preparation Project',
    category: 'Career Preparation System',
    description:
      'A structured platform concept built to assist college students in preparing for campus recruitment drives, coding rounds, and technical topics.',
    status: 'In Development',
    statusEmoji: '🚧',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Clerk'],
    github: 'https://github.com/dhairyaaroraji/Placement-Ready',
    live: 'https://placement-ready-alpha.vercel.app/',
    visualTheme: {
      badgeBg: 'rgba(107, 92, 92, 0.15)',
      badgeColor: '#6B5C5C',
      gradient: 'linear-gradient(135deg, #2D2525 0%, #453939 60%, #1E1919 100%)',
      iconSymbol: 'PR',
      accentLine: '#A89292',
    },
  },
];

function ProjectVisualCover({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const numStr = String(index + 1).padStart(2, '0');

  return (
    <div
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden flex flex-col justify-between p-6 select-none transition-transform duration-500 group-hover:scale-[1.01]"
      style={{
        background: project.visualTheme.gradient,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 12px 28px -10px rgba(0,0,0,0.3)',
      }}
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient Top Glow */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-30 blur-2xl"
        style={{ background: project.visualTheme.accentLine }}
      />

      {/* Top Bar of Cover with Project Number */}
      <div className="relative z-10 flex items-center justify-between">
        <span
          className="font-mono text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full text-white/90 border border-white/20"
          style={{ background: 'rgba(0,0,0,0.35)' }}
        >
          {project.category}
        </span>
        <span className="font-mono text-xs font-bold text-white/70 tracking-widest">
          {numStr} / 09
        </span>
      </div>

      {/* Center Cover Monogram / Typographic Hero */}
      <div className="relative z-10 my-auto py-2">
        <h4
          className="font-bold text-3xl sm:text-4xl text-white tracking-tight"
          style={{ letterSpacing: '-0.03em', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
        >
          {project.name}
        </h4>
        <p className="text-white/70 text-xs sm:text-sm font-medium mt-1 line-clamp-1">
          {project.tagline}
        </p>
      </div>

      {/* Bottom Cover Accent Strip */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
          Studio Archive
        </span>
        <div
          className="w-12 h-0.5 rounded-full"
          style={{ background: project.visualTheme.accentLine }}
        />
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  const hasLinks = Boolean(project.github || project.live);
  const numStr = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: Math.min(index * 0.05, 0.4),
      }}
      className="card p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex flex-col gap-4">
        {/* Project Specific Architectural Cover Visual */}
        <ProjectVisualCover project={project} index={index} />

        {/* Title, Tagline & Status Badge */}
        <div className="flex items-start justify-between gap-3 pt-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-semibold text-accent">
                {numStr}.
              </span>
              <h3
                className="font-bold text-2xl text-foreground group-hover:text-accent transition-colors"
                style={{ letterSpacing: '-0.025em', lineHeight: 1.1 }}
              >
                {project.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-accent font-medium">
              {project.tagline}
            </p>
          </div>

          <span
            className="chip text-[11px] font-mono shrink-0"
            style={{
              padding: '0.3rem 0.75rem',
            }}
          >
            <span className="mr-1">{project.statusEmoji}</span>
            {project.status}
          </span>
        </div>

        {/* Verified Description */}
        <p
          className="text-sm leading-relaxed text-muted"
          style={{ lineHeight: 1.6 }}
        >
          {project.description}
        </p>

        {/* Verified Technology Badges */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-line bg-surface-2 text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Links (Only rendered when verified URLs exist) */}
      {hasLinks && (
        <div className="flex items-center gap-3 pt-5 mt-4 border-t border-line">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill--outline text-xs py-2 px-4 flex items-center gap-1.5"
            >
              <Github size={13} />
              <span>Repository</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill--dark text-xs py-2 px-4 flex items-center gap-1.5"
            >
              <span>Live Demo</span>
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="section relative overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg, var(--wall) 0%, var(--wall-hi) 50%, var(--surface) 100%)
        `,
      }}
    >
      <div className="shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="eyebrow text-xs">Selected Work</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-bold leading-[0.96] tracking-tight"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
                letterSpacing: '-0.035em',
                color: 'var(--foreground)',
              }}
            >
              Engineered &amp; <br />
              <span style={{ color: 'var(--accent)' }}>Built.</span>
            </h2>

            <p className="max-w-xs text-xs sm:text-sm font-mono text-subtle leading-relaxed">
              All 9 engineering products, prototypes, and concepts built during academic exploration and hackathons.
            </p>
          </div>
        </motion.div>

        {/* 9 Project Cards Grid in exact requested sequence */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {allProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
