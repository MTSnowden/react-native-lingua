// Color tokens from the design system (see prompt_material/01-design-system.png).
// Mirrors the `--color-*` tokens in `global.css`. Use these only where
// NativeWind className isn't supported (see AGENTS.md Style Exception Rules),
// e.g. SafeAreaView, StatusBar, or platform config.

export const brand = {
  purple: "#6C4EF5",
  deepPurple: "#5B3BF6",
  blue: "#4D8BFF",
  green: "#21C16B",
} as const;

export const semantic = {
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",
} as const;

export const neutral = {
  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export const colors = {
  brand,
  semantic,
  neutral,
} as const;
