import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  Moon, Sun, Github, Menu, X,
  BookOpen, Layers, Palette, Sparkles, Settings2, ScrollText, Settings,
  Monitor,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useLang, type Lang } from "@/contexts/LanguageContext";

interface NavLeaf {
  title: { en: string; id: string };
  href: string;
  icon: React.ReactNode;
}

interface NavGroup {
  title: { en: string; id: string };
  items: NavLeaf[];
}

type NavItem = NavLeaf | NavGroup;

const NAV_ITEMS: NavItem[] = [
  {
    title: { en: "Getting Started", id: "Mulai" },
    href: "/getting-started",
    icon: <BookOpen className="h-4 w-4 shrink-0" />,
  },
  {
    title: { en: "Reference", id: "Referensi" },
    items: [
      { title: { en: "Elements",  id: "Elemen"  }, href: "/elements",  icon: <Layers    className="h-4 w-4 shrink-0" /> },
      { title: { en: "Themes",    id: "Tema"     }, href: "/themes",    icon: <Palette   className="h-4 w-4 shrink-0" /> },
      { title: { en: "Icons",     id: "Ikon"     }, href: "/icons",     icon: <Sparkles  className="h-4 w-4 shrink-0" /> },
      { title: { en: "Managers",  id: "Manajer"  }, href: "/managers",  icon: <Settings2 className="h-4 w-4 shrink-0" /> },
    ],
  },
  {
    title: { en: "Changelog", id: "Perubahan" },
    href: "/changelog",
    icon: <ScrollText className="h-4 w-4 shrink-0" />,
  },
];

export function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-screen-2xl mx-auto px-4 flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                FluentModded
              </span>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <div className="md:hidden flex-1 flex justify-center">
            <Link href="/" className="font-bold text-lg tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              FluentModded
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-1">
            <a href="https://github.com/StyearX/Fluent-Modded" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <SettingsMenu />
          </div>
        </div>
      </header>

      <div className="max-w-screen-2xl mx-auto w-full flex-1 px-4 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside
          className={cn(
            "fixed inset-x-0 top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-border/50 bg-background/95 backdrop-blur md:sticky md:block",
            isMobileOpen && "block"
          )}
        >
          <div className="h-full py-6 pr-6 lg:py-8">
            <SidebarNav items={NAV_ITEMS} />
          </div>
        </aside>

        <main className="relative py-6 lg:py-8">
          <div className="mx-auto w-full min-w-0 max-w-3xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarNav({ items }: { items: NavItem[] }) {
  const [location] = useLocation();
  const { lang } = useLang();

  return (
    <div className="w-full">
      {items.map((item, index) => {
        if ("items" in item) {
          return (
            <div key={index} className="pb-4">
              <div className="mb-1 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
                {lang === "id" ? item.title.id : item.title.en}
              </div>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {item.items.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.href}
                    className={cn(
                      "group flex w-full items-center gap-2.5 rounded-md border border-transparent px-2 py-1.5 transition-colors",
                      location === subItem.href
                        ? "font-medium text-foreground bg-accent/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                    )}
                  >
                    <span className={cn(location === subItem.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground")}>
                      {subItem.icon}
                    </span>
                    {lang === "id" ? subItem.title.id : subItem.title.en}
                  </Link>
                ))}
              </div>
            </div>
          );
        }

        const leaf = item as NavLeaf;
        return (
          <div key={index} className="pb-2">
            <Link
              href={leaf.href}
              className={cn(
                "group flex w-full items-center gap-2.5 rounded-md border border-transparent px-2 py-1.5 text-sm font-semibold transition-colors",
                location === leaf.href
                  ? "text-primary bg-accent/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
              )}
            >
              <span className={cn(location === leaf.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground")}>
                {leaf.icon}
              </span>
              {lang === "id" ? leaf.title.id : leaf.title.en}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

function SettingsMenu() {
  const { setTheme, theme } = useTheme();
  const { lang, setLang } = useLang();

  const themes = [
    { value: "dark",   label: { en: "Dark",   id: "Gelap"  }, icon: <Moon className="h-4 w-4" /> },
    { value: "light",  label: { en: "Light",  id: "Terang" }, icon: <Sun className="h-4 w-4" /> },
    { value: "system", label: { en: "System", id: "Sistem" }, icon: <Monitor className="h-4 w-4" /> },
  ];

  const langs: { value: Lang; label: string; flag: string }[] = [
    { value: "en", label: "English",   flag: "🇺🇸" },
    { value: "id", label: "Indonesia", flag: "🇮🇩" },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-3" align="end">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {lang === "id" ? "Tampilan" : "Appearance"}
            </p>
            <div className="grid grid-cols-3 gap-1">
              {themes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTheme(t.value)}
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-md px-2 py-2 text-xs transition-colors",
                    theme === t.value
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  {t.icon}
                  <span>{lang === "id" ? t.label.id : t.label.en}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {lang === "id" ? "Bahasa" : "Language"}
            </p>
            <div className="grid grid-cols-2 gap-1">
              {langs.map((l) => (
                <button
                  key={l.value}
                  onClick={() => setLang(l.value)}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-2 text-xs transition-colors",
                    lang === l.value
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
