// src/styles/colors.ts
export const anglokomColors = {
// Kolory główne z logo Anglokom
    primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#1e40af', // główny niebieski z logo
        700: '#1e3a8a', // hover
        800: '#1e3a8a',
        900: '#1e40af',
        DEFAULT: '#1e40af',
        hover: '#1e3a8a',
        light: '#3b82f6',
        dark: '#1e3a8a',
    },

    secondary: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4', // główny turkusowy z logo
        600: '#0891b2', // hover
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
        DEFAULT: '#06b6d4',
        hover: '#0891b2',
        light: '#22d3ee',
        dark: '#0e7490',
    },

    accent: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b', // główny szary z logo
        600: '#475569', // hover
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        DEFAULT: '#64748b',
        hover: '#475569',
        light: '#94a3b8',
        dark: '#334155',
    },

    text: {
        primary: '#374151',   // ciemny szary dla głównego tekstu
        secondary: '#6b7280', // średni szary dla pomocniczego tekstu
        light: '#9ca3af',     // jasny szary dla mało ważnych tekstów
        muted: '#d1d5db',     // bardzo jasny szary
        white: '#ffffff',     // biały tekst
        dark: '#111827',      // bardzo ciemny tekst
    },

    background: {
        DEFAULT: '#ffffff',   // białe tło
        gray: '#f9fafb',      // jasne szare tło
        muted: '#f3f4f6',     // średnie szare tło
        dark: '#111827',      // ciemne tło
        card: '#ffffff',      // tło kart
        modal: '#ffffff',     // tło modali
    },

    border: {
        DEFAULT: '#e5e7eb',   // domyślne obramowanie
        hover: '#d1d5db',     // obramowanie przy hover
        focus: '#3b82f6',     // obramowanie przy focus
        muted: '#f3f4f6',     // bardzo jasne obramowanie
        dark: '#374151',      // ciemne obramowanie
    },

    success: {
        DEFAULT: '#10b981',
        hover: '#059669',
        light: '#6ee7b7',
        dark: '#047857',
    },

    warning: {
        DEFAULT: '#f59e0b',
        hover: '#d97706',
        light: '#fcd34d',
        dark: '#b45309',
    },

    error: {
        DEFAULT: '#ef4444',
        hover: '#dc2626',
        light: '#fca5a5',
        dark: '#b91c1c',
    },

    info: {
        DEFAULT: '#3b82f6',
        hover: '#2563eb',
        light: '#93c5fd',
        dark: '#1d4ed8',
    }
};

// Export dla łatwiejszego importowania
export const colors = anglokomColors;

// CSS Custom Properties string do wklejenia w globals.css
export const cssVariables = `
/* Anglokom Brand Colors */
--primary: ${anglokomColors.primary.DEFAULT};
--primary-hover: ${anglokomColors.primary.hover};
--primary-light: ${anglokomColors.primary.light};
--primary-dark: ${anglokomColors.primary.dark};

--secondary: ${anglokomColors.secondary.DEFAULT};
--secondary-hover: ${anglokomColors.secondary.hover};
--secondary-light: ${anglokomColors.secondary.light};
--secondary-dark: ${anglokomColors.secondary.dark};

--accent: ${anglokomColors.accent.DEFAULT};
--accent-hover: ${anglokomColors.accent.hover};
--accent-light: ${anglokomColors.accent.light};
--accent-dark: ${anglokomColors.accent.dark};

--text-primary: ${anglokomColors.text.primary};
--text-secondary: ${anglokomColors.text.secondary};
--text-light: ${anglokomColors.text.light};
--text-muted: ${anglokomColors.text.muted};
--text-white: ${anglokomColors.text.white};
--text-dark: ${anglokomColors.text.dark};

--background: ${anglokomColors.background.DEFAULT};
--background-gray: ${anglokomColors.background.gray};
--background-muted: ${anglokomColors.background.muted};
--background-dark: ${anglokomColors.background.dark};
--background-card: ${anglokomColors.background.card};

--border: ${anglokomColors.border.DEFAULT};
--border-hover: ${anglokomColors.border.hover};
--border-focus: ${anglokomColors.border.focus};
--border-muted: ${anglokomColors.border.muted};
--border-dark: ${anglokomColors.border.dark};

--success: ${anglokomColors.success.DEFAULT};
--success-hover: ${anglokomColors.success.hover};
--warning: ${anglokomColors.warning.DEFAULT};
--warning-hover: ${anglokomColors.warning.hover};
--error: ${anglokomColors.error.DEFAULT};
--error-hover: ${anglokomColors.error.hover};
--info: ${anglokomColors.info.DEFAULT};
--info-hover: ${anglokomColors.info.hover};
`;

// Tailwind CSS config extension
export const tailwindColors = {
    primary: anglokomColors.primary,
    secondary: anglokomColors.secondary,
    accent: anglokomColors.accent,
    'text-primary': anglokomColors.text.primary,
    'text-secondary': anglokomColors.text.secondary,
    'text-light': anglokomColors.text.light,
    'text-muted': anglokomColors.text.muted,
    'bg-main': anglokomColors.background.DEFAULT,
    'bg-gray': anglokomColors.background.gray,
    'bg-muted': anglokomColors.background.muted,
    'bg-dark': anglokomColors.background.dark,
    'bg-card': anglokomColors.background.card,
    'border-main': anglokomColors.border.DEFAULT,
    'border-hover': anglokomColors.border.hover,
    'border-focus': anglokomColors.border.focus,
    success: anglokomColors.success,
    warning: anglokomColors.warning,
    error: anglokomColors.error,
    info: anglokomColors.info,
};

// Utility functions
export const getColorWithOpacity = (color: string, opacity: number): string => {
    return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
};

export const getHoverColor = (colorKey: keyof typeof anglokomColors): string => {
    const color = anglokomColors[colorKey];
    return (color as any).hover || (color as any).DEFAULT || '';
};

// Predefined color combinations
export const colorCombinations = {
    primaryButton: {
        background: anglokomColors.primary.DEFAULT,
        text: anglokomColors.text.white,
        hover: anglokomColors.primary.hover,
        border: anglokomColors.primary.DEFAULT,
    },
    secondaryButton: {
        background: anglokomColors.secondary.DEFAULT,
        text: anglokomColors.text.white,
        hover: anglokomColors.secondary.hover,
        border: anglokomColors.secondary.DEFAULT,
    },
    outlineButton: {
        background: 'transparent',
        text: anglokomColors.primary.DEFAULT,
        hover: anglokomColors.primary.DEFAULT,
        hoverText: anglokomColors.text.white,
        border: anglokomColors.primary.DEFAULT,
    },
    card: {
        background: anglokomColors.background.card,
        text: anglokomColors.text.primary,
        border: anglokomColors.border.DEFAULT,
        shadow: getColorWithOpacity(anglokomColors.accent.DEFAULT, 0.1),
    },
    navbar: {
        background: anglokomColors.background.DEFAULT,
        text: anglokomColors.text.primary,
        textHover: anglokomColors.primary.DEFAULT,
        border: anglokomColors.border.DEFAULT,
        underline: anglokomColors.secondary.DEFAULT,
    },
};