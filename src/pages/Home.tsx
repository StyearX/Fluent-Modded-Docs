import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Zap, Package, Palette } from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { T } from "@/contexts/LanguageContext";
import planetLogo from "@assets/1000795637-removebg-preview_1782449270662.png";
import ashGrayScreenshot from "@assets/Ash Gray.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-10">
      {/* Hero */}
      <section className="pt-10 md:pt-16 pb-8 border-b border-border/40">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
            v1.4.1 <T en="is now available" id="sudah tersedia" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground">
            fluent<span className="text-primary">Pro</span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed">
            <T
              en="A precise, modern, and dark-tech UI library for Roblox exploit scripts. Featuring 19 built-in themes, solar icon support, and comprehensive elements."
              id="Library UI yang presisi, modern, dan dark-tech untuk script exploit Roblox. Dilengkapi 19 tema bawaan, dukungan ikon solar, dan elemen yang komprehensif."
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link href="/getting-started">
              <Button size="lg" className="h-12 px-8 w-full sm:w-auto">
                <T en="Get Started" id="Mulai" /> <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/themes">
              <Button size="lg" variant="outline" className="h-12 px-8 w-full sm:w-auto">
                <T en="Explore Themes" id="Jelajahi Tema" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 p-6 rounded-xl border border-border/50 bg-card">
            <Terminal className="h-6 w-6 text-primary mb-2" />
            <h3 className="text-xl font-bold">
              <T en="Quick Install" id="Instalasi Cepat" />
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              <T
                en="One loadstring — FluentPro includes all managers as globals."
                id="Satu loadstring — FluentPro menyertakan semua manajer sebagai global."
              />
            </p>
            <CodeBlock
              code={`local Fluent = loadstring(game:HttpGet(
    "https://github.com/StyearX/Fluent-Modded" ..
    "/releases/download/Fluent/FluentPro"
))()`}
              language="lua"
            />
          </div>
          <div className="flex flex-col gap-2 p-6 rounded-xl border border-border/50 bg-card">
            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mb-2">
              <div className="h-3 w-3 rounded-full bg-primary" />
            </div>
            <h3 className="text-xl font-bold">
              <T en="19 Built-in Themes" id="19 Tema Bawaan" />
            </h3>
            <p className="text-sm text-muted-foreground">
              <T
                en="From AMOLED to Arctic Frost — switch instantly or register your own palette."
                id="Dari AMOLED hingga Arctic Frost — ganti seketika atau daftarkan palet kamu sendiri."
              />
            </p>
            <div className="mt-auto pt-4 flex gap-2 flex-wrap">
              {["AMOLED", "Neon Cyber", "Arctic Frost", "Blood Red", "Cotton Candy"].map((t) => (
                <span key={t} className="px-2 py-1 rounded bg-secondary text-xs font-medium">{t}</span>
              ))}
              <span className="px-2 py-1 rounded bg-secondary text-xs font-medium text-muted-foreground">+14…</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 p-5 rounded-xl border border-border/50 bg-card">
            <Zap className="h-5 w-5 text-primary mb-1" />
            <h3 className="font-bold"><T en="18 UI Elements" id="18 Elemen UI" /></h3>
            <p className="text-sm text-muted-foreground">
              <T en="Toggle, Slider, Input, Dropdown, Colorpicker, Keybind, Viewport, and more." id="Toggle, Slider, Input, Dropdown, Colorpicker, Keybind, Viewport, dan lainnya." />
            </p>
          </div>
          <div className="flex flex-col gap-2 p-5 rounded-xl border border-border/50 bg-card">
            <Package className="h-5 w-5 text-primary mb-1" />
            <h3 className="font-bold"><T en="Bundled Managers" id="Manajer Terpaket" /></h3>
            <p className="text-sm text-muted-foreground">
              <T en="SaveManager, InterfaceManager, FloatingButtonManager, MediaManager — all inside FluentPro." id="Semua manajer sudah ada di dalam FluentPro." />
            </p>
          </div>
          <div className="flex flex-col gap-2 p-5 rounded-xl border border-border/50 bg-card">
            <Palette className="h-5 w-5 text-primary mb-1" />
            <h3 className="font-bold"><T en="Custom Themes" id="Tema Kustom" /></h3>
            <p className="text-sm text-muted-foreground">
              <T en="Register any color scheme with RegisterCustomTheme." id="Daftarkan skema warna apa pun dengan RegisterCustomTheme." />
            </p>
          </div>
        </div>
      </section>

      {/* FluentPro UI Preview — real Ash Gray screenshot */}
      <section className="mt-4">
        <h2 className="text-2xl font-bold mb-6">
          <T en="Experience the UI" id="Rasakan UI-nya" />
        </h2>

        <div className="relative mx-auto max-w-[640px]">
          {/* Subtle glow behind the screenshot */}
          <div
            className="absolute inset-0 rounded-2xl blur-2xl opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 60%, #6366f1 0%, transparent 70%)" }}
          />
          <img
            src={ashGrayScreenshot}
            alt="fluentPro — Ash Gray theme screenshot"
            className="relative w-full h-auto rounded-2xl shadow-2xl shadow-black/60 select-none"
            draggable={false}
          />
          {/* Badge */}
          <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/80 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground shadow">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            Ash Gray theme
          </div>
        </div>
      </section>
    </div>
  );
}