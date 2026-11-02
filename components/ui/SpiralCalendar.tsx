'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  'AI Developer',
  'Full-Stack Developer',
  'Student Innovator',
  'Building Intelligent Products',
];

export default function SpiralCalendar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cal my-2">
      <div className="cal__body">
        {/* Dark leather desk calendar stand */}
        <div className="cal__stand" />

        {/* Thick paper stack depth effect */}
        <div className="cal__stack">
          <div className="cal__page">
            {/* Metallic spiral binder holes */}
            <div className="cal__holes">
              {[...Array(12)].map((_, i) => (
                <i key={i} />
              ))}
            </div>

            {/* Brass spiral rings */}
            <div className="cal__rings">
              {[...Array(12)].map((_, i) => (
                <i key={i} />
              ))}
            </div>

            {/* Flipping page role content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[index]}
                initial={{ opacity: 0, rotateX: -45, y: -8 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: 45, y: 8 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="cal__word"
              >
                {roles[index]}
              </motion.div>
            </AnimatePresence>

            {/* Page number */}
            <div className="cal__no">
              0{index + 1} / 0{roles.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
