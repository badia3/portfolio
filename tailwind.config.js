/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#05060B',
          soft: '#0A0C14',
          raised: '#11141F',
          high: '#161A28',
        },
        signal: {
          DEFAULT: '#4C7DFF',
          bright: '#84A7FF',
          deep: '#2C4FBF',
          ink: '#101A38',
        },
        violet: {
          DEFAULT: '#9A6BFF',
          deep: '#5B3BA8',
        },
        live: '#34D399',
        bone: '#EDEEF2',
        mist: '#8A90A3',
        faint: '#5A6274',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.6rem, 6.4vw, 5.25rem)', { lineHeight: '0.98', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.25rem, 5.6vw, 4.25rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(1.75rem, 3.6vw, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.028em' }],
        micro: ['0.6875rem', { lineHeight: '1.1', letterSpacing: '0.22em' }],
      },
      maxWidth: {
        shell: '84rem',
        prose: '46rem',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.22, 1, 0.36, 1)',
        swift: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
      opacity: {
        4: '0.04',
        6: '0.06',
        8: '0.08',
        12: '0.12',
        14: '0.14',
        16: '0.16',
        18: '0.18',
        22: '0.22',
        24: '0.24',
        28: '0.28',
        32: '0.32',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
        96: '0.96',
        98: '0.98',
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -30px rgba(0,0,0,0.9)',
        lift: '0 30px 80px -40px rgba(0,0,0,0.95)',
        glow: '0 0 0 1px rgba(76,125,255,0.35), 0 20px 60px -24px rgba(76,125,255,0.45)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.82)' },
        },
        'trace-run': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'sweep': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.4s cubic-bezier(0.4,0,0.2,1) infinite',
        'trace-run': 'trace-run 7s linear infinite',
        'float-soft': 'float-soft 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        sweep: 'sweep 3.6s cubic-bezier(0.4,0,0.2,1) infinite',
      },
    },
  },
  plugins: [],
}
