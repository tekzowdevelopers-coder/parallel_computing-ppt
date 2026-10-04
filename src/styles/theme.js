// Design tokens for the OpenMP Workshop presentation
export const theme = {
  colors: {
    bg: '#0a0f1e',
    surface: '#0f1629',
    card: '#141c33',
    cardHover: '#1a2340',

    text: '#f8fafc',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',

    cyan: '#06b6d4',
    cyanGlow: '#22d3ee',
    cyanLight: '#67e8f9',
    cyanDark: '#0891b2',

    blue: '#3b82f6',
    purple: '#8b5cf6',
    green: '#10b981',
    red: '#ef4444',
    amber: '#f59e0b',
    pink: '#ec4899',
  },

  timing: {
    textEntrance: 0.4,
    diagramTransition: 0.6,
    conceptAnimation: 1.0,
    sectionTransition: 1.4,
    stagger: 0.15,
    fast: 0.2,
  },

  // Framer Motion variants
  variants: {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
    },
    slideUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    slideRight: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    },
    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
      },
    },
    staggerItem: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    },
  },
};

export default theme;
