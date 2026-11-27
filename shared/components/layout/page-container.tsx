import type { ComponentProps } from "react";

export function PageContainer({
  className = "",
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={
        "mx-auto w-full max-w-340 px-4 sm:px-6 lg:px-8 " + className
      }
    />
  );
}
