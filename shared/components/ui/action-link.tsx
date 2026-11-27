import type { ComponentProps } from "react";
type Variant = "primary" | "secondary" | "inverse" | "ghostInverse";
const variants: Record<Variant, string> = {
  primary: "bg-accent text-surface hover:opacity-85 dark:text-[#071d36]",
  secondary: "border border-line bg-surface text-foreground hover:bg-soft",
  inverse: "bg-showcase-button text-showcase-button-text hover:opacity-85",
  ghostInverse:
    "border border-showcase-line text-showcase-foreground hover:bg-showcase-foreground/5",
};
const sizes = {
  regular: "min-h-13 gap-3 px-6 py-3.5 text-sm",
  compact: "min-h-11 gap-2 px-3 py-2.5 text-xs sm:px-4 sm:text-sm",
};
export function ActionLink({
  className = "",
  variant = "primary",
  size = "regular",
  ...props
}: ComponentProps<"a"> & { variant?: Variant; size?: keyof typeof sizes }) {
  return (
    <a
      {...props}
      className={
        "inline-flex items-center justify-center rounded-full font-semibold " +
        sizes[size] +
        " " +
        variants[variant] +
        " " +
        className
      }
    />
  );
}
