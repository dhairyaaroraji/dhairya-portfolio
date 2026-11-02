'use client';

import { useRef, useCallback, ReactNode, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  strength?: number;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function MagneticButton({
  children,
  className,
  style,
  strength = 0.3,
  onClick,
  href,
  target,
  rel,
  'aria-label': ariaLabel,
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      posRef.current = { x, y };
      ref.current.style.transform = `translate(${x}px, ${y}px)`;
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    posRef.current = { x: 0, y: 0 };
    ref.current.style.transform = 'translate(0px, 0px)';
    ref.current.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = 'transform 0.1s ease';
  }, []);

  const inner = (
    <div
      ref={ref}
      className={cn('magnetic-btn', className)}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
