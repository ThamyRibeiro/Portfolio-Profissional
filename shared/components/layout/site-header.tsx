"use client";
import { useSyncExternalStore } from "react";
import { Brand } from "./brand";
import { PageContainer } from "./page-container";
import { MobileNavigation } from "./mobile-navigation";
import { navigationItems } from "./navigation";
import { ThemeToggle } from "@/shared/components/ui/theme-toggle";
const subscribeHash = (callback: () => void) => {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
};
const getHash = () => window.location.hash || "#inicio";

export function SiteHeader() {
  const activeHref = useSyncExternalStore(
    subscribeHash,
    getHash,
    () => "#inicio",
  );
  return (
    <header className="sticky top-0 z-50 pb-3 pt-3">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-60 focus:rounded-xl focus:bg-surface focus:p-3"
      >
        Pular para o conteúdo
      </a>
      <PageContainer>
        <div className="flex h-18 items-center justify-between gap-4 rounded-3xl border border-line/70 bg-surface/90 px-4 shadow-[0_8px_30px_-20px_#12345955] backdrop-blur-xl sm:px-7">
          <Brand />
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-1 rounded-full bg-soft/70 p-1 lg:flex"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}

                aria-current={activeHref === item.href ? "location" : undefined}
                className={
                  "rounded-full px-5 py-2.5 text-sm " +
                  (activeHref === item.href
                    ? "bg-surface font-medium text-accent shadow-sm"
                    : "text-muted hover:text-accent")
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavigation items={navigationItems} activeHref={activeHref} />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
