export const colors = {
    primary: {
        main: "#5932E6",
        light: "#7c5cff",
        pink: "#E032E6",
        dark: "#020314",
        contrastText: "#ffffff",
    },
    secondary: {
        main: "#8632E6",
        light: "#a366ff",
        contrastText: "#ffffff",
    },
    neutral: {
        white: "#ffffff",
        background: "#f4f6f8",
        surface: "#ffffff",
        text: "#2d3436",
        textLight: "#636e72",
        border: "#dfe6e9",
    },
    status: {
        success: "#00b894",
        error: "#d63031",
        warning: "#fdcb6e",
        info: "#0984e3",
    },
};

export const spacing = {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "3rem", // 48px
    xxxl: "4rem", // 64px
};

export const borderRadius = {
    sm: "4px",
    md: "8px",
    lg: "16px",
    pill: "999px",
    circle: "50%",
};

export const typography = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    sizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        xxl: "2rem",
    },
    weights: {
        regular: 400,
        medium: 500,
        bold: 700,
    },
};

export const breakpoints = {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1440px",
};

export const media = {
    mobile: `@media (max-width: ${breakpoints.mobile})`,
    tablet: `@media (max-width: ${breakpoints.tablet})`,
    desktop: `@media (max-width: ${breakpoints.desktop})`,
};

export const shadows = {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
};

export const theme = {
    colors,
    spacing,
    borderRadius,
    typography,
    breakpoints,
    media,
    shadows,
};
