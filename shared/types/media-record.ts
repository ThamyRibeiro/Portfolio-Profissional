export type MediaRecord = {
  src: string;
  title: string;
} & (
  | { kind: "image"; alt: string }
  | { kind: "video"; poster: string; duration: number; posterTime?: number }
);
