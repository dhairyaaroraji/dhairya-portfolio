'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Hackathon {
  event: string;
  institution: string;
  dates?: string;
  team?: string;
  role?: string;
  teamMembers?: string[];
  project?: string;
  status: 'Selected' | 'Shortlisted' | 'Participant' | 'Winner';
  statusEmoji: string;
  hasCertificate?: boolean;
  certificateUrl?: string;
}

const hackathons: Hackathon[] = [
  {
    event: 'Cmd + Shift + Create 2026 — HackShift',
    institution: 'IIIT Delhi',
    dates: '17–18 October 2026',
    team: 'Aarambh',
    role: 'Team Lead',
    teamMembers: ['Devashish Srivastava'],
    status: 'Selected',
    statusEmoji: '🎯',
    hasCertificate: true,
    certificateUrl: '/certificates/hackshift-iiitd-certificate.jpg',
  },
  {
    event: 'Hackyard Build 2026',
    institution: 'IIT Guwahati',
    dates: '24–25 October 2026',
    project: 'ROVUN',
    teamMembers: ['Tanush Mishra', 'Devashish Srivastava'],
    status: 'Selected',
    statusEmoji: '🎯',
    hasCertificate: false,
  },
  {
    event: 'Code4Nature',
    institution: 'Environmental Innovation Hackathon',
    project: 'NOVASTACKS',
    status: 'Shortlisted',
    statusEmoji: '📌',
    hasCertificate: false,
  },
  {
    event: 'JAI 2026 — Jaypee Agentic AI International Summit',
    institution: 'Jaypee Institute of Information Technology (JIIT), Noida',
    dates: '30–31 October 2026',
    status: 'Participant',
    statusEmoji: '📋',
    hasCertificate: true,
    certificateUrl: '/certificates/agentic-ai-summit-certificate.jpg',
  },
  {
    event: "HACKIN' SUMMER 2026",
    institution: 'Developer Students Club (DSC), JIIT',
    dates: '26–28 September 2026',
    team: 'IonX',
    status: 'Participant',
    statusEmoji: '📋',
    hasCertificate: true,
    certificateUrl: '/certificates/hackin-summer-dsc-certificate.png',
  },
  {
    event: 'Multimodal AI Hackathon',
    institution: 'IIT Mandi',
    status: 'Participant',
    statusEmoji: '📋',
    hasCertificate: false,
  },
];

export default function Hackathons() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="hackathons"
      ref={ref}
      className="section relative overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg, var(--surface) 0%, var(--wall) 100%)
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
            <span className="eyebrow text-xs">Hackathons &amp; Achievements</span>
          </div>

          <h2
            className="font-bold leading-[0.96] tracking-tight"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              letterSpacing: '-0.035em',
              color: 'var(--foreground)',
            }}
          >
            Where I&apos;ve{' '}
            <span style={{ color: 'var(--accent)' }}>competed &amp; built.</span>
          </h2>
          <p className="font-mono text-xs text-subtle mt-3 max-w-xl">
            Verified competitive milestones, round selections, and participation records across national collegiate hackathons.
          </p>
        </motion.div>

        {/* Hackathon cards */}
        <div className="flex flex-col gap-4">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.event}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.08 + i * 0.06,
              }}
              className="card p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:shadow-lg hover:border-accent/30"
            >
              {/* Left — Event info */}
              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3
                    className="font-bold text-lg sm:text-xl text-foreground"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {h.event}
                  </h3>
                  {h.dates && (
                    <span className="font-mono text-xs text-subtle px-2 py-0.5 rounded-md bg-surface-2 border border-line">
                      {h.dates}
                    </span>
                  )}
                </div>

                <p className="text-sm font-semibold text-accent">
                  {h.institution}
                </p>

                {/* Event Details & Metadata */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted pt-1">
                  {h.project && (
                    <span>
                      <strong className="text-foreground">Submission:</strong> {h.project}
                    </span>
                  )}
                  {h.team && (
                    <span>
                      <strong className="text-foreground">Team:</strong> {h.team}
                      {h.role && ` (${h.role})`}
                    </span>
                  )}
                  {h.teamMembers && h.teamMembers.length > 0 && (
                    <span>
                      <strong className="text-foreground">Team Members:</strong> {h.teamMembers.join(', ')}
                    </span>
                  )}
                </div>

                {/* Certificate verified indicator if present */}
                {h.hasCertificate && h.certificateUrl && (
                  <div className="pt-1">
                    <a
                      href="#certificates"
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono text-accent hover:underline"
                    >
                      <span>📜 Certificate Recorded</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                )}
              </div>

              {/* Right — Status badge */}
              <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                <span className="chip text-xs font-mono font-medium py-1 px-3">
                  <span className="mr-1.5">{h.statusEmoji}</span>
                  {h.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Footer Note */}
        <div className="mt-8 pt-4 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-subtle">
          <span>Status Taxonomy: Selected · Shortlisted · Participant</span>
          <span>Verified records: IIIT Delhi · IIT Guwahati · IIT Mandi · JIIT</span>
        </div>
      </div>
    </section>
  );
}
