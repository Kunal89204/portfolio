export const GRID_ICON_URL =
  "https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg";

export const gridEnterMotion = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 1, delay: 0.2, ease: "easeOut" as const },
};

export const profileEnterMotion = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, delay: 0.2, ease: "easeOut" as const },
};
