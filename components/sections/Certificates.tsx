'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FileText, ExternalLink, X, Eye, CheckCircle2 } from 'lucide-react';

interface CredentialRecord {
  id: string;
  event: string;
  institution: string;
  date?: string;
  team?: string;
  status: 'Selected' | 'Shortlisted' | 'Participated';
  statusDescription: string;
  hasScan: boolean;
  imageUrl?: string;
}

const credentials: CredentialRecord[] = [
  {
    id: 'hackshift',
    event: 'Cmd + Shift + Create 2026 — HackShift',
    institution: 'IIIT Delhi (Unstop)',
    date: '17–18 October 2026',
    team: 'Aarambh (Team Lead)',
    status: 'Selected',
    statusDescription: 'Selected team in HackShift 2026; Official Participation Certificate recorded with team member Devashish Srivastava',
    hasScan: true,
    imageUrl: '/certificates/hackshift-iiitd-certificate.jpg',
  },
  {
    id: 'agentic-ai-summit',
    event: 'Jaypee Agentic AI International Summit 2026',
    institution: 'Jaypee Institute of Information Technology (JIIT), Noida',
    date: '30–31 October 2026',
    status: 'Participated',
    statusDescription: 'Official Certificate of Participation in Jaypee Agentic AI International Summit 2026',
    hasScan: true,
    imageUrl: '/certificates/agentic-ai-summit-certificate.jpg',
  },
  {
    id: 'hackin-summer',
    event: "HACKIN' SUMMER 2026",
    institution: 'Developer Students Club (DSC), JIIT',
    date: '26–28 September 2026',
    team: 'IonX',
    status: 'Participated',
    statusDescription: "Official Certificate of Participation in HACKIN' SUMMER 2026, organised by Developer Students Club (DSC)",
    hasScan: true,
    imageUrl: '/certificates/hackin-summer-dsc-certificate.png',
  },
  {
    id: 'hackyard-build',
    event: 'Hackyard Build 2026',
    institution: 'IIT Guwahati',
    date: '24–25 October 2026',
    team: 'ROVUN (with Tanush Mishra & Devashish Srivastava)',
    status: 'Selected',
    statusDescription: 'Selected project build for IIT Guwahati Hackyard 2026 with ROVUN submission',
    hasScan: false,
  },
  {
    id: 'code4nature',
    event: 'Code4Nature',
    institution: 'Environmental Innovation Hackathon',
    team: 'NOVASTACKS',
    status: 'Shortlisted',
    statusDescription: 'NOVASTACKS shortlisted in Code4Nature Hackathon',
    hasScan: false,
  },
  {
    id: 'multimodal-ai',
    event: 'Multimodal AI Hackathon',
    institution: 'IIT Mandi',
    status: 'Participated',
    statusDescription: 'Participant Record in Multimodal AI Hackathon at IIT Mandi',
    hasScan: false,
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<CredentialRecord | null>(null);

  return (
    <>
      <section
        id="certificates"
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
            className="mb-14"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="eyebrow text-xs">06 / Credentials &amp; Certificates</span>
            </div>

            <h2
              className="font-bold leading-[0.96] tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                letterSpacing: '-0.035em',
                color: 'var(--foreground)',
              }}
            >
              Verified credentials &amp;{' '}
              <span style={{ color: 'var(--accent)' }}>milestones.</span>
            </h2>
            <p className="font-mono text-xs text-subtle mt-3 max-w-xl">
              Official certificates and hackathon milestones. Click any card to inspect the high-resolution certificate scan and documentation.
            </p>
          </motion.div>

          {/* Certificate grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((record, i) => (
              <motion.button
                key={record.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1 + i * 0.07,
                }}
                onClick={() => setSelected(record)}
                className="card p-5 sm:p-6 text-left flex flex-col gap-4 cursor-pointer group hover:border-accent/40 transition-all hover:shadow-lg"
              >
                {/* Visual preview box: Real image thumbnail if scan exists, or archival placeholder */}
                <div
                  className="w-full aspect-[4/3] rounded-xl relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none bg-surface border border-line"
                >
                  {record.imageUrl ? (
                    <div className="relative w-full h-full overflow-hidden rounded-lg group-hover:scale-[1.02] transition-transform duration-300">
                      <img
                        src={record.imageUrl}
                        alt={record.event}
                        className="w-full h-full object-cover object-center rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                        <span className="font-mono text-[10px] text-white flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
                          <Eye size={12} /> Inspect Scan
                        </span>
                        <span className="chip text-[10px] bg-accent/90 text-white font-mono">
                          Verified
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between relative z-10">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
                          {record.institution}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-surface-2 border border-line flex items-center justify-center text-muted">
                          <FileText size={13} />
                        </div>
                      </div>

                      <div className="relative z-10 my-auto text-center py-2">
                        <p className="font-serif italic text-lg font-bold text-foreground tracking-tight">
                          {record.event}
                        </p>
                        <p className="text-[11px] text-muted mt-1.5 font-mono uppercase tracking-wider">
                          {record.statusDescription}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-muted relative z-10 pt-2 border-t border-line/60">
                        <span className="chip text-[10px] py-0.5 px-2">
                          {record.status === 'Selected'
                            ? '🎯 Selected'
                            : record.status === 'Shortlisted'
                            ? '📌 Shortlisted'
                            : '📋 Participated'}
                        </span>
                        <span className="text-subtle text-[10px]">
                          {record.hasScan ? 'Scan Attached' : 'Certificate Pending'}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Info */}
                <div>
                  <h3
                    className="font-semibold mb-1 group-hover:text-accent transition-colors"
                    style={{
                      fontSize: '1.125rem',
                      color: 'var(--foreground)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {record.event}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                    {record.institution}
                  </p>
                  {record.team && (
                    <p className="font-mono text-xs text-subtle mt-1">
                      Team: {record.team}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-line/50">
                  <span className="chip text-xs font-mono font-medium">
                    {record.status === 'Selected'
                      ? '🎯 Selected'
                      : record.status === 'Shortlisted'
                      ? '📌 Shortlisted'
                      : '📋 Participated'}
                  </span>
                  <span className="font-mono text-xs text-accent flex items-center gap-1 group-hover:underline">
                    {record.hasScan ? 'View Scan' : 'View Record'} →
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 pt-4 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-subtle"
          >
            <span>Verified certificates: IIIT Delhi · JIIT Noida · Developer Students Club</span>
            <span>All credentials match issued institutional records</span>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal / Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-surface-2"
                style={{
                  border: '1px solid var(--line)',
                  color: 'var(--muted)',
                }}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Record preview */}
              <div
                className="w-full rounded-xl mb-6 relative overflow-hidden flex flex-col justify-between p-2 select-none border border-line bg-surface"
              >
                {selected.imageUrl ? (
                  <div className="relative w-full rounded-lg overflow-hidden bg-black/10">
                    <img
                      src={selected.imageUrl}
                      alt={selected.event}
                      className="w-full max-h-[60vh] object-contain mx-auto rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] flex flex-col justify-between p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                        {selected.institution}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-surface-2 border border-line flex items-center justify-center text-muted">
                        <FileText size={16} />
                      </div>
                    </div>

                    <div className="text-center py-4">
                      <span className="chip text-xs mb-3 inline-block font-mono">
                        {selected.status === 'Selected'
                          ? '🎯 Selected'
                          : selected.status === 'Shortlisted'
                          ? '📌 Shortlisted'
                          : '📋 Participated'}
                      </span>
                      <h4 className="font-serif italic text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                        {selected.event}
                      </h4>
                      <p className="text-sm text-accent font-medium mt-2">
                        {selected.institution}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-muted pt-4 border-t border-line">
                      <span>Status: {selected.status}</span>
                      <span className="text-subtle">Digital scan pending upload</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3
                    className="font-bold mb-1 text-xl sm:text-2xl"
                    style={{
                      color: 'var(--foreground)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {selected.event}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {selected.institution}
                  </p>
                  {selected.date && (
                    <p className="font-mono text-xs text-subtle mt-1">
                      Event Date: {selected.date}
                    </p>
                  )}
                  {selected.team && (
                    <p className="font-mono text-xs text-subtle">
                      Team: {selected.team}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="chip text-xs font-mono font-medium">
                    {selected.status === 'Selected'
                      ? '🎯 Selected'
                      : selected.status === 'Shortlisted'
                      ? '📌 Shortlisted'
                      : '📋 Participated'}
                  </span>
                  {selected.imageUrl && (
                    <a
                      href={selected.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill pill--outline text-xs py-1.5 px-3 flex items-center gap-1.5"
                    >
                      <ExternalLink size={13} /> Full Scan
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs text-muted mt-4 pt-3 border-t border-line/60 font-mono leading-relaxed">
                {selected.statusDescription}. This credential is officially certified by the host institution.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
