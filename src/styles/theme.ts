export const theme = {
  colors: {
    primary: "#FF7582",
    secondary: "#725A7A",
    accent: "#C56C68",
    background: {
      start: "#355C7D",
      middle: "#725A7A",
      end: "#C56C68",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
      accent: "rgba(255, 117, 130, 0.9)",
    },
  },
  shadows: {
    card: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    hover: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
  },
  transitions: {
    default: "0.3s ease",
    fast: "0.15s ease",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
    round: "50%",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
};

export type Theme = typeof theme;
