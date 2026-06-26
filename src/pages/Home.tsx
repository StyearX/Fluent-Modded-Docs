import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Zap, Package, Palette } from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { T } from "@/contexts/LanguageContext";
import planetLogo from "@assets/1000795637-removebg-preview_1782449270662.png";

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
            Fluent<span className="text-primary">Modded</span>
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

      {/* FluentPro UI Preview — faithful Ash Gray mockup */}
      <section className="mt-4">
        <h2 className="text-2xl font-bold mb-6">
          <T en="Experience the UI" id="Rasakan UI-nya" />
        </h2>

        {/* Window frame — Ash Gray theme */}
        <div
          className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-[#3C3C48] select-none max-w-[580px] mx-auto"
          style={{ background: "#2A2A32", fontFamily: "var(--app-font-sans)" }}
        >
          {/* ── Title bar ── */}
          <div className="flex items-center px-3 py-2.5 border-b border-[#3C3C48]" style={{ background: "#2F2F3A" }}>
            <img src={planetLogo} alt="FluentPro logo" className="w-5 h-5 mr-2 opacity-90" />
            <span className="text-white text-sm font-semibold mr-1">FluentPro</span>
            <span className="text-[#8A8AA0] text-sm">Full Showcase</span>
            <div className="ml-auto flex items-center gap-2">
              <div className="flex items-center gap-1 border border-[#4C4C5A] rounded px-2 py-0.5">
                <span className="text-[10px] text-[#A0A0B0]">📱</span>
                <span className="text-[10px] text-[#A0A0B0]">Mobile</span>
              </div>
              <div className="flex items-center gap-1.5 ml-1">
                <div className="w-3 h-3 rounded-full bg-[#3C3C48] hover:bg-[#4C4C5A]" />
                <div className="w-3 h-3 rounded-full bg-[#3C3C48] hover:bg-[#4C4C5A]" />
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80 hover:bg-[#ff5f57]" />
              </div>
            </div>
          </div>

          {/* ── Body ── */}
          <div className="flex" style={{ minHeight: 360 }}>
            {/* Sidebar */}
            <div className="w-40 flex flex-col border-r border-[#3C3C48] shrink-0" style={{ background: "#2F2F3A" }}>
              {/* Planet logo */}
              <div className="flex justify-center pt-5 pb-3">
                <img src={planetLogo} alt="Logo" className="w-14 h-14 opacity-90" />
              </div>

              {/* User info */}
              <div className="mx-2 mb-3 rounded-lg border border-[#3C3C48] p-2.5 flex items-center gap-2" style={{ background: "#35353F" }}>
                <div className="w-8 h-8 rounded-full bg-[#4C4C5A] flex items-center justify-center shrink-0 overflow-hidden">
                  <span className="text-[10px] text-[#8A8AA0]">👤</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold" style={{ color: "#e05555" }}>Welcome</div>
                  <div className="text-[10px]" style={{ color: "#8A8AA0" }}>@5/api</div>
                </div>
                <div className="text-[#8A8AA0] text-xs">👁</div>
              </div>

              {/* Search */}
              <div className="mx-2 mb-3 rounded border border-[#3C3C48] flex items-center gap-1.5 px-2 py-1.5" style={{ background: "#2A2A35" }}>
                <span className="text-[#8A8AA0] text-xs">🔍</span>
                <span className="text-[10px] text-[#8A8AA0]">Search...</span>
              </div>

              {/* Tabs */}
              <div className="flex-1 overflow-y-auto px-1.5 space-y-0.5">
                {[
                  { icon: "≡", label: "Elements",   active: false },
                  { icon: "⚙", label: "Settings",   active: true  },
                  { icon: "⊞", label: "Components", active: false },
                  { icon: "✦", label: "Icons",      active: false },
                  { icon: "⊞", label: "Floating",   active: false },
                ].map((tab) => (
                  <div
                    key={tab.label}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors relative"
                    style={{
                      background: tab.active ? "#3C3C48" : "transparent",
                      borderLeft: tab.active ? "2px solid #A0A0B0" : "2px solid transparent",
                    }}
                  >
                    <span className="text-xs" style={{ color: tab.active ? "#E0E0F0" : "#8A8AA0" }}>{tab.icon}</span>
                    <span className="text-xs flex-1" style={{ color: tab.active ? "#E0E0F0" : "#8A8AA0" }}>{tab.label}</span>
                    {/* Bookmark icon */}
                    <svg className="w-3 h-3" viewBox="0 0 16 16" fill={tab.active ? "#D4A017" : "none"} stroke={tab.active ? "#D4A017" : "#8A8AA0"} strokeWidth="1.5">
                      <path d="M3 2h10v12l-5-3-5 3V2z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Content — Settings page */}
            <div className="flex-1 overflow-y-auto p-4" style={{ background: "#2A2A32" }}>
              <h2 className="text-lg font-bold mb-3" style={{ color: "#E0E0F0" }}>Settings</h2>

              {/* Section header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs" style={{ color: "#8A8AA0" }}>🖥</span>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#8A8AA0" }}>Interface</span>
              </div>

              {/* Setting rows */}
              <div className="space-y-1.5">
                {/* Theme dropdown */}
                <div className="rounded-lg px-3 py-2.5 flex items-center justify-between border border-[#3C3C48]" style={{ background: "#2A2A35" }}>
                  <div>
                    <div className="text-xs font-medium" style={{ color: "#E0E0F0" }}>Theme</div>
                    <div className="text-[10px]" style={{ color: "#8A8AA0" }}>Changes the interface theme.</div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded border border-[#3C3C48] px-2 py-1" style={{ background: "#35353F" }}>
                    <span className="text-xs" style={{ color: "#E0E0F0" }}>Ash Gray</span>
                    <span className="text-[10px]" style={{ color: "#8A8AA0" }}>▾</span>
                  </div>
                </div>

                {/* Toggles */}
                {[
                  { label: "Animated Window",      desc: "Enables shine/stroke animation on theme." },
                  { label: "Transparency",          desc: "Makes the interface transparent." },
                  { label: "Disable Background Images", desc: "Hides theme background images." },
                  { label: "Acrylic",               desc: "Requires Roblox graphics quality 8+." },
                ].map((row) => (
                  <div key={row.label} className="rounded-lg px-3 py-2.5 flex items-center justify-between border border-[#3C3C48]" style={{ background: "#2A2A35" }}>
                    <div>
                      <div className="text-xs font-medium" style={{ color: "#E0E0F0" }}>{row.label}</div>
                      <div className="text-[10px]" style={{ color: "#8A8AA0" }}>{row.desc}</div>
                    </div>
                    {/* Toggle — on state */}
                    <div className="relative w-8 h-4 rounded-full shrink-0" style={{ background: "#3C3C48" }}>
                      <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full" style={{ background: "#A0A0B0" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
