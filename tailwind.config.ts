/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: 'var(--background)' },
        fg: { DEFAULT: 'var(--foreground)' },
        muted: 'var(--muted)',
        subtle: 'var(--subtle)',
        line: 'var(--line)',
        surface: { DEFAULT: 'var(--surface)', 2: 'var(--surface-2)' },
        accent: 'var(--accent)',
        'btn-bg': 'var(--btn-bg)',
        'btn-fg': 'var(--btn-fg)',
        panel: 'var(--panel)',
      },
      fontFamily: {
        sans: ['var(--font-onest)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        hero: 'clamp(2.625rem, 7.5vw, 4.75rem)',
        section: 'clamp(2.75rem, 7.5vw, 6.5rem)',
        'card-title': ['1.9rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.035em',
        tight: '-0.02em',
        eyebrow: '0.06em',
        mono: '0.12em',
      },
      borderRadius: {
        pill: '9999px',
      },
      maxWidth: {
        shell: '88rem',
      },
      animation: {
        'dot-pulse': 'dotPulse 2.2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s var(--e-soft) forwards',
        'slide-up': 'slideUp 0.9s var(--e-line) forwards',
      },
      keyframes: {
        dotPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(143, 191, 122, 0.5)' },
          '50%': { boxShadow: '0 0 0 8px rgba(143, 191, 122, 0)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
