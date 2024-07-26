const white = "#FFFFFF";

const primary = "#161622";
const secondary = {
  DEFAULT: "#FF9C01",
  100: "#FF9001",
  200: "#FF8E01",
};
const black = {
  DEFAULT: "#000",
  100: "#1E1E2D",
  200: "#232533",
};

const gray = {
  50: "#F9FAFB",
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#CDCDE0",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

export const colors = {
  primary,
  white,
  ...black,
  ...gray,
  ...secondary,
};

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    icon: "#687076",
    tabIconDefault: "#687076",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
  },
};
