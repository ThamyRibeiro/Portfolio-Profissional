export function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: string;
  tone?: "neutral" | "accent";
}) {
  return (
    <span
      className={
        "inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5 text-xs leading-5 " +
        (tone === "accent" ? "bg-accent/10 text-accent" : "bg-soft text-muted")
      }
    >
      <span
        aria-hidden="true"
        className="size-1.5 shrink-0 rounded-full bg-current"
      />
      {children}
    </span>
  );
}
