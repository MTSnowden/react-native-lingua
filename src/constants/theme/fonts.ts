// Maps each font family name to its asset file, for use with `useFonts` in
// `_layout.tsx`. Keys must match the PostScript names used in `fontFamily`
// (typography.ts) and the `--font-*` tokens in `global.css`.

export const fontAssets = {
  "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
  "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
  "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
  "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
};
