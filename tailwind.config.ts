import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'neutral-100': 'var(--neutral-100)',
        'neutral-200': 'var(--neutral-200)',
        'neutral-300': 'var(--neutral-300)',
        'neutral-400': 'var(--neutral-400)',
        'neutral-500': 'var(--neutral-500)',
        'neutral-600': 'var(--neutral-600)',
        'neutral-700': 'var(--neutral-700)',
        'neutral-800': 'var(--neutral-800)',
        'neutral-900': 'var(--neutral-900)',
      },

      /* 고정형 Typography를 적용하고 싶은 경우 사용 */
      // fontSize: {
      //   title1: ['40px', { lineHeight: '1.2', fontWeight: '700' }],
      //   title2: ['32px', { lineHeight: '1.2', fontWeight: '700' }],
      //   title3: ['24px', { lineHeight: '1.2', fontWeight: '700' }],
      //   label1: ['18px', { lineHeight: '1.35', fontWeight: '700' }],
      //   label2: ['16px', { lineHeight: '1.35', fontWeight: '700' }],
      //   label3: ['14px', { lineHeight: '1.35', fontWeight: '700' }],
      //   body1: ['18px', { lineHeight: '1.5', fontWeight: '500' }],
      //   body2: ['16px', { lineHeight: '1.5', fontWeight: '500' }],
      //   body3: ['14px', { lineHeight: '1.5', fontWeight: '500' }],
      //   caption: ['12px', { lineHeight: '1.35', fontWeight: '500' }],
      // },

      /* Clamp Typography를 적용하고 싶은 경우 사용 */
      // fontSize: {
      //   title1: ['clamp(32px, 2.5vw, 40px)', { lineHeight: '1.2', fontWeight: '700' }],
      //   title2: ['clamp(24px, 2vw, 32px)', { lineHeight: '1.2', fontWeight: '700' }],
      //   label1: ['clamp(16px, 1.2vw, 18px)', { lineHeight: '1.35', fontWeight: '700' }],
      //   label2: ['clamp(14px, 1vw, 16px)', { lineHeight: '1.35', fontWeight: '700' }],
      //   body1: ['clamp(16px, 1.2vw, 18px)', { lineHeight: '1.5', fontWeight: '500' }],
      //   body2: ['clamp(14px, 1vw, 16px)', { lineHeight: '1.5', fontWeight: '500' }],
      //   caption: ['12px', { lineHeight: '1.35', fontWeight: '500' }],
      // },
    },
  },
  plugins: [],
};

export default config;
