import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { themeScript } from "@/shared/lib/theme-script";
import "./globals.css";
const body = localFont({
  src: "../public/fonts/dm-sans-variable.ttf",
  variable: "--font-body",
  display: "swap",
  weight: "100 1000",
});
const heading = localFont({
  src: "../public/fonts/manrope-variable.ttf",
  variable: "--font-heading",
  display: "swap",
  weight: "200 800",
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fbff" },
    { media: "(prefers-color-scheme: dark)", color: "#091b2e" },
  ],
};

export const metadata: Metadata = {
  applicationName: "Thamires Queiroz",
  appleWebApp: {
    capable: true,
    title: "Thamires Queiroz",
    statusBarStyle: "default",
  },
  icons: { apple: "/icons/apple-touch-icon.png" },
  title: "Thamires Queiroz | Química, análises e qualidade",
  description:
    "Conheça a trajetória de Thamires Ribeiro de Queiroz em análises físico-químicas, água e efluentes, análise instrumental e qualidade laboratorial.",
  openGraph: {
    title: "Thamires Queiroz | Portfólio profissional",
    description:
      "Análises físico-químicas, água e efluentes e qualidade laboratorial.",
    locale: "pt_BR",
    type: "website",
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={body.variable + " " + heading.variable + " h-full antialiased"}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
