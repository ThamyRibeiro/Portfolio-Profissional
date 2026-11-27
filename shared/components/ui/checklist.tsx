import { Check } from "lucide-react";

function ChecklistColumn({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={"grid gap-3 " + className}>
      {items.map((item) => (
        <li
          key={item}
          className="flex min-w-0 items-start gap-3 text-sm leading-6 text-muted"
        >
          <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Check size={12} strokeWidth={1.8} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
export function Checklist({
  items,
  columns = "one",
  className = "",
}: {
  items: string[];
  columns?: "one" | "two";
  className?: string;
}) {
  if (columns === "one")
    return <ChecklistColumn items={items} className={className} />;
  return (
    <div
      className={
        "grid items-start gap-3 sm:grid-cols-2 sm:gap-x-5 " + className
      }
    >
      <ChecklistColumn items={items.filter((_, index) => index % 2 === 0)} />
      <ChecklistColumn items={items.filter((_, index) => index % 2 === 1)} />
    </div>
  );
}
