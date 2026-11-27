import type { ReactNode } from "react";
export function IconBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={
        "inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent " +
        className
      }
    >
      {children}
    </span>
  );
}
