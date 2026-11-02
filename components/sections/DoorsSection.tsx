'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, Sparkles, Trophy } from 'lucide-react';

interface DoorConfig {
  id: string;
  name: string;
  category: string;
  color: string;
  colorDark: string;
  wallLamp: string;
}

const doors: DoorConfig[] = [
  {
    id: 'projects',
    name: 'WEB DEVELOPER',
    category: 'Engineering & Web Products',
    color: '#22304A', // Exact Door 1 Navy
    colorDark: '#1C2840',
    wallLamp: 'rgba(34, 48, 74, 0.28)',
  },
  {
    id: 'ai-dev',
    name: 'APP DEVELOPER',
    category: 'Autonomous Systems & AI',
    color: '#4A3540', // Exact Door 2 Burgundy/Plum
    colorDark: '#3F2D37',
    wallLamp: 'rgba(74, 53, 64, 0.28)',
  },
  {
    id: 'ui-ux',
    name: 'UI/UX DESIGNER',
    category: 'Interface & Interaction Architecture',
    color: '#7A8670', // Exact Door 3 Muted Sage
    colorDark: '#66705D',
    wallLamp: 'rgba(122, 134, 112, 0.28)',
  },
  {
    id: 'achievements',
    name: 'GRAPHIC DESIGNER',
    category: 'Hackathons, Selections & Creative Studio',
    color: '#A4552C', // Exact Door 4 Terracotta Orange
    colorDark: '#8C4826',
    wallLamp: 'rgba(164, 85, 44, 0.28)',
  },
];

export default function DoorsSection() {
  const [activeDoor, setActiveDoor] = useState<string | null>(null);
  const [hoveredDoor, setHoveredDoor] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveDoor(null);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="doors"
      className="relative z-20 pt-24 pb-0 overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg, rgba(0,0,0,0.03) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.06) 100%),
          linear-gradient(180deg, var(--wall-hi) 0%, var(--wall) 65%)
        `,
      }}
    >
      <div className="shell flex flex-col items-center">
        {/* Section Heading matching exact reference typography */}
        <div className="text-center mb-16">
          <h2
            className="font-bold leading-[0.98] tracking-tight text-center"
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
              letterSpacing: '-0.04em',
              color: 'var(--foreground)',
            }}
          >
            Magic happens <br className="hidden sm:inline" />
            behind the doors
          </h2>
          <p className="font-mono text-xs text-subtle mt-4 uppercase tracking-widest">
            Click on any door to enter
          </p>
        </div>

        {/* 4 Arched Architectural Doors Row */}
        <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-end justify-center pt-4 pb-0">
          {doors.map((door) => {
            const isOpen = activeDoor === door.id;
            const isHovered = hoveredDoor === door.id;

            return (
              <div
                key={door.id}
                onMouseEnter={() => setHoveredDoor(door.id)}
                onMouseLeave={() => setHoveredDoor(null)}
                className="relative flex flex-col items-center group cursor-pointer"
                style={{ perspective: '1200px' }}
                onClick={() => setActiveDoor(isOpen ? null : door.id)}
              >
                {/* Overhead Sconce Lamp Glow */}
                <div
                  className="absolute -top-12 w-48 h-48 rounded-full pointer-events-none transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${door.wallLamp} 0%, transparent 70%)`,
                    opacity: isHovered || isOpen ? 1 : 0.45,
                  }}
                />

                {/* Classical Arched Door Frame Casing */}
                <div
                  className="relative w-full max-w-[245px] aspect-[1/2.25] rounded-t-full p-2 sm:p-2.5 flex items-stretch shadow-2xl"
                  style={{
                    background: `
                      linear-gradient(90deg, rgba(0,0,0,0.12), rgba(255,255,255,0.2) 8%, transparent 16%, transparent 84%, rgba(0,0,0,0.18)),
                      var(--casing)
                    `,
                    boxShadow: `
                      inset 0 0 0 1px rgba(255,255,255,0.25),
                      0 20px 45px -10px rgba(0,0,0,0.38),
                      0 0 0 1px rgba(0,0,0,0.08)
                    `,
                  }}
                >
                  {/* Door Leaf (Swings on brass hinges in 3D perspective) */}
                  <div
                    className="relative w-full h-full rounded-t-full overflow-hidden transition-all duration-700 origin-left flex flex-col items-center justify-between py-10 px-3.5 select-none"
                    style={{
                      transform: isOpen
                        ? 'rotateY(-68deg) translateZ(6px)'
                        : isHovered
                        ? 'rotateY(-12deg)'
                        : 'rotateY(0deg)',
                      transformStyle: 'preserve-3d',
                      background: `
                        linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%),
                        repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 3px, rgba(0,0,0,0.12) 3px, rgba(0,0,0,0.12) 6px),
                        ${door.color}
                      `,
                      boxShadow: isOpen
                        ? '16px 0 36px rgba(0,0,0,0.65), inset -2px 0 4px rgba(255,255,255,0.25)'
                        : 'inset 0 0 0 1px rgba(255,255,255,0.12), inset -3px 0 8px rgba(0,0,0,0.45)',
                    }}
                  >
                    {/* Interior Warm Room Light when door opens */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-amber-100/25 to-transparent pointer-events-none transition-opacity duration-500"
                      style={{ opacity: isOpen ? 1 : 0 }}
                    />

                    {/* Heavy Engraved Brass Plaque with screws */}
                    <div
                      className="relative z-10 w-full py-2.5 px-2 rounded-md shadow-md text-center border"
                      style={{
                        background: 'linear-gradient(180deg, #fff3cf 0%, #d4af37 40%, #997825 100%)',
                        borderColor: '#7a5e18',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.7)',
                      }}
                    >
                      <span
                        className="block font-bold text-[11px] sm:text-xs tracking-wider text-[#241a05] drop-shadow-sm"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                      >
                        {door.name}
                      </span>
                    </div>

                    {/* Brass Hardware: Turned Escutcheon, Spring Lever & Keyhole */}
                    <div className="absolute right-3.5 top-[56%] flex flex-col items-center gap-2 pointer-events-none">
                      {/* Lever handle with depression physics */}
                      <div
                        className="relative w-11 h-2.5 rounded-full transition-transform duration-300"
                        style={{
                          transform: isHovered || isOpen ? 'rotate(-25deg)' : 'rotate(0deg)',
                          transformOrigin: '90% 50%',
                          background: 'linear-gradient(180deg, #fff7dc 0%, #d4af37 50%, #7d5b1e 100%)',
                          boxShadow: '0 3px 6px rgba(0,0,0,0.5)',
                        }}
                      >
                        <div
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border border-[#7d5b1e]"
                          style={{
                            background: 'radial-gradient(circle, #ffe69c, #9c752c)',
                          }}
                        />
                      </div>

                      {/* Keyhole */}
                      <div
                        className="w-2.5 h-3.5 rounded-full flex flex-col items-center justify-center p-0.5 shadow-inner"
                        style={{ background: '#7d5b1e' }}
                      >
                        <div className="w-1 h-1 rounded-full bg-black" />
                        <div className="w-0.5 h-1.5 bg-black" />
                      </div>
                    </div>

                    {/* Pill indicator */}
                    <div className="relative z-10 text-[9px] font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-black/45 text-white/85 border border-white/10 uppercase">
                      {isOpen ? 'Open' : 'Enter'}
                    </div>
                  </div>

                  {/* Room Interior view through the opened door */}
                  <div
                    className="absolute inset-2.5 rounded-t-full -z-10 flex flex-col items-center justify-center p-3 text-center"
                    style={{
                      background: 'radial-gradient(circle at 50% 40%, #FFFDF7 0%, #D8CFBE 100%)',
                      boxShadow: 'inset 0 10px 25px rgba(0,0,0,0.55)',
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection(
                          door.id === 'projects'
                            ? 'projects'
                            : door.id === 'ai-dev'
                            ? 'skills'
                            : door.id === 'ui-ux'
                            ? 'about'
                            : 'hackathons'
                        );
                      }}
                      className="px-3 py-1.5 bg-[#1A1818] text-[#EAE6DF] rounded-full text-[11px] font-semibold hover:scale-105 transition-transform shadow-md"
                    >
                      Enter →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Architectural Studio Baseboard / Floor Trim matching Reference */}
      <div
        className="w-full h-8 relative z-10 border-t border-black/10"
        style={{
          background: `
            linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0.12) 100%),
            var(--base)
          `,
          boxShadow: '0 -2px 6px rgba(0,0,0,0.06)',
        }}
      />
      {/* Perspective Hardwood Floor Plane */}
      <div
        className="w-full h-16 relative z-10"
        style={{
          background: `
            linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 35%),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 2px, transparent 2px, transparent 120px),
            var(--floor)
          `,
        }}
      />

      {/* Door Modal Panels */}
      <AnimatePresence>
        {activeDoor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveDoor(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto card p-6 sm:p-10 shadow-2xl"
              style={{ background: 'var(--panel)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveDoor(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-line text-muted hover:text-foreground transition-colors"
                aria-label="Close door view"
              >
                <X size={18} />
              </button>

              {/* Door 1: WEB DEVELOPER / PROJECTS */}
              {activeDoor === 'projects' && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 size={20} style={{ color: 'var(--accent)' }} />
                    <span className="eyebrow">Door 1 · Web Developer</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-foreground mb-3">
                    Selected Web &amp; System Projects
                  </h3>
                  <p className="text-muted text-sm mb-6 leading-relaxed">
                    Explore all 9 of my engineering works, autonomous platforms, and hackathon prototypes:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { name: 'ROVUN', type: 'AI Road Safety & Accident Response', status: '💡 Concept' },
                      { name: 'FEYD', type: 'Autonomous Academic OS', status: '🔧 Prototype' },
                      { name: 'Jal Setu', type: 'Smart Water Security Platform', status: '💡 Concept' },
                      { name: 'Stock X', type: 'Stock Analysis & Insights', status: '🚧 In Development' },
                      { name: 'Where Is My Bus?', type: 'Real-Time Public Transit Tracking', status: '💡 Concept' },
                      { name: 'Q - Get in queue', type: 'QR Queue & Triage Prototype', status: '🔧 Prototype' },
                      { name: 'Study Buddy CSE', type: 'Academic Resources for CSE', status: '🚧 In Development' },
                      { name: 'Interview AI', type: 'AI Technical Mock Interviews', status: '🚧 In Development' },
                      { name: 'Placement Ready', type: 'Placement Prep Platform', status: '🚧 In Development' },
                    ].map((proj) => (
                      <div
                        key={proj.name}
                        className="p-4 rounded-xl border border-line bg-surface/50 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-foreground">{proj.name}</span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-surface-2 border border-line">{proj.status}</span>
                        </div>
                        <p className="text-xs text-muted">{proj.type}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => scrollToSection('projects')}
                      className="pill pill--dark"
                    >
                      Jump to Detailed Projects Section →
                    </button>
                  </div>
                </div>
              )}

              {/* Door 2: APP DEVELOPER / AI */}
              {activeDoor === 'ai-dev' && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={20} style={{ color: 'var(--accent)' }} />
                    <span className="eyebrow">Door 2 · App Developer</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-foreground mb-3">
                    AI &amp; Autonomous App Systems
                  </h3>
                  <p className="text-muted text-sm mb-6 leading-relaxed">
                    AI tools, full-stack frameworks, and intelligent workflow systems:
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="font-mono text-xs font-semibold text-accent uppercase block mb-2">
                        Core Programming
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'TypeScript', 'C++', 'JavaScript', 'C'].map((s) => (
                          <span key={s} className="chip">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-mono text-xs font-semibold text-accent uppercase block mb-2">
                        Frameworks &amp; AI
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {['Next.js', 'React', 'Node.js', 'REST APIs', 'Agentic AI'].map((s) => (
                          <span key={s} className="chip">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => scrollToSection('skills')}
                      className="pill pill--dark"
                    >
                      View Skills Section →
                    </button>
                  </div>
                </div>
              )}

              {/* Door 3: UI/UX DESIGNER */}
              {activeDoor === 'ui-ux' && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={20} style={{ color: 'var(--accent)' }} />
                    <span className="eyebrow">Door 3 · UI/UX Designer</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-foreground mb-3">
                    Interface Design &amp; Architectural UX
                  </h3>
                  <p className="text-muted text-sm mb-6 leading-relaxed">
                    Crafting tactile, memorable user experiences, editorial typographic layouts, and accessible design systems.
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => scrollToSection('about')}
                      className="pill pill--dark"
                    >
                      Read About Dhairya →
                    </button>
                  </div>
                </div>
              )}

              {/* Door 4: GRAPHIC DESIGNER / ACHIEVEMENTS */}
              {activeDoor === 'achievements' && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy size={20} style={{ color: 'var(--accent)' }} />
                    <span className="eyebrow">Door 4 · Graphic &amp; Hackathon Chamber</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-foreground mb-3">
                    Hackathons &amp; Achievements
                  </h3>
                  <p className="text-muted text-sm mb-6 leading-relaxed">
                    Audited records of hackathon selections, project builds, and participation milestones:
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      { event: 'Cmd + Shift + Create 2026 — HackShift', host: 'IIIT Delhi (Aarambh · Team Lead)', status: '🎯 Selected' },
                      { event: 'Hackyard Build 2026', host: 'IIT Guwahati (ROVUN Build)', status: '🎯 Selected' },
                      { event: 'Code4Nature', host: 'Environmental Hackathon (NOVASTACKS)', status: '📌 Shortlisted' },
                      { event: 'JAI 2026 — Agentic AI Summit', host: 'JIIT Noida', status: '📋 Participated' },
                      { event: "HACKIN' SUMMER 2026", host: 'Developer Students Club, JIIT', status: '📋 Participated' },
                      { event: 'Multimodal AI Hackathon', host: 'IIT Mandi', status: '📋 Participated' },
                    ].map((item) => (
                      <div
                        key={item.event}
                        className="p-3.5 rounded-xl border border-line bg-surface/50 flex items-center justify-between"
                      >
                        <div>
                          <p className="font-semibold text-foreground text-sm">{item.event}</p>
                          <p className="text-xs text-accent">{item.host}</p>
                        </div>
                        <span className="chip text-xs font-mono">{item.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => scrollToSection('certificates')}
                      className="pill pill--outline"
                    >
                      Certificates
                    </button>
                    <button
                      onClick={() => scrollToSection('hackathons')}
                      className="pill pill--dark"
                    >
                      View Achievements →
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
