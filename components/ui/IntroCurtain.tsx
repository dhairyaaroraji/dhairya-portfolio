'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroCurtain() {
  const [count, setCount] = useState(1);
  const [isDone, setIsDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Flag body as intro active
    document.body.setAttribute('data-intro-active', 'true');

    const duration = 1600; // 1.6s counting duration
    const startTime = performance.now();

    let rafId: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth custom ease-out curve for dramatic count up
      // Fast start, steady progression, slight deceleration near 100
      const eased = Math.min(1, Math.pow(progress, 0.85));
      const current = Math.floor(1 + eased * 99);

      setCount(current);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(100);
        // Short pause at 100 before sliding up
        setTimeout(() => {
          setIsDone(true);
          document.body.removeAttribute('data-intro-active');
          window.dispatchEvent(new CustomEvent('intro:complete'));
        }, 160);
      }
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.removeAttribute('data-intro-active');
    };
  }, []);

  if (removed) return null;

  return (
    <AnimatePresence onExitComplete={() => setRemoved(true)}>
      {!isDone && (
        <motion.div
          key="intro-curtain"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.95,
              ease: [0.76, 0, 0.24, 1], // Luxury editorial curtain slide-up
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between pointer-events-auto select-none overflow-hidden"
          style={{
            backgroundColor: '#0E0D0C',
            backgroundImage: `
              radial-gradient(circle at 12% 88%, rgba(180, 110, 50, 0.08) 0%, transparent 45%),
              radial-gradient(circle at 88% 12%, rgba(255, 255, 255, 0.03) 0%, transparent 35%)
            `,
          }}
        >
          {/* Top Bar matching reference */}
          <div className="w-full px-6 sm:px-10 md:px-14 pt-8 md:pt-10 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 font-medium tracking-wide text-[#E7E3DC]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block animate-pulse" />
              <span>Dhairya Arora · Portfolio</span>
            </div>
            <div className="font-mono text-xs text-[#8E8880] tracking-wider hidden sm:block">
              Web · App · UI/UX · Graphic design
            </div>
          </div>

          {/* Center ambient space */}
          <div className="flex-1" />

          {/* Bottom Left Counter matching reference frame_01.png */}
          <div className="w-full px-6 sm:px-10 md:px-14 pb-8 sm:pb-12 md:pb-16 flex flex-col items-start">
            <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.26em] uppercase text-[#7D7770] font-semibold mb-2">
              OPENING UP THE WORK
            </div>
            <div className="text-7xl sm:text-8xl md:text-9xl font-bold font-mono tracking-tighter text-[#FAF7F2] leading-none select-none tabular-nums">
              {String(count).padStart(3, '0')}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
