import { Children, type ReactNode } from "react";

function rowSpans(count: number, columns: number) {
  if (columns === 2 && count > 2 && count % 2 === 1) {
    return [...Array<number>(count - 3).fill(6), 4, 4, 4];
  }
  const rows = Math.ceil(count / columns);
  const base = Math.floor(count / rows);
  const extra = count % rows;
  return Array.from({ length: rows }, (_, row) =>
    Array<number>(base + (row < extra ? 1 : 0)).fill(
      12 / (base + (row < extra ? 1 : 0)),
    ),
  ).flat();
}
const tabletSpans: Record<number, string> = {
  4: "sm:col-span-4",
  6: "sm:col-span-6",
  12: "sm:col-span-12",
};
const desktopSpans: Record<number, string> = {
  3: "xl:col-span-3",
  4: "xl:col-span-4",
  6: "xl:col-span-6",
  12: "xl:col-span-12",
};

export function MediaGrid({
  children,
  columns = 3,
  balanced = false,
}: {
  children: ReactNode;
  columns?: 3 | 4;
  balanced?: boolean;
}) {
  if (balanced) {
    const items = Children.toArray(children);
    if (items.length === 0) return null;
    const tablet = rowSpans(items.length, 2);
    const desktop = rowSpans(items.length, columns);
    return (
      <div className="grid grid-cols-12 gap-4">
        {items.map((item, index) => (
          <div
            key={typeof item === "object" && "key" in item ? item.key : index}
            className={
              "col-span-12 min-w-0 [&>figure]:h-full " +
              tabletSpans[tablet[index]] +
              " " +
              desktopSpans[desktop[index]]
            }
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div
      className={
        "grid gap-4 sm:auto-rows-fr sm:grid-cols-2 " +
        (columns === 4 ? "xl:grid-cols-4" : "xl:grid-cols-3")
      }
    >
      {children}
    </div>
  );
}
