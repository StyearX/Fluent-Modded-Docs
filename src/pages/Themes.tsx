import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FLUENT_THEMES, getThemeCode } from "@/lib/themes";
import { THEME_SCREENSHOTS } from "@/lib/themeImages";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { cn } from "@/lib/utils";
import { T } from "@/contexts/LanguageContext";

export default function Themes() {
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null);

  const toggleTheme = (name: string) =>
    setExpandedTheme(expandedTheme === name ? null : name);

  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          <T en="Themes" id="Tema" />
        </h1>
        <p className="text-muted-foreground text-lg">
          <T
            en="Explore all 19 built-in color schemes or register your own custom theme."
            id="Jelajahi semua 19 skema warna bawaan atau daftarkan tema kustom kamu."
          />
        </p>
      </div>

      {/* Built-in theme cards */}
      <div className="grid gap-3">
        {FLUENT_THEMES.map((theme) => {
          const isExpanded = expandedTheme === theme.name;
          const screenshot = THEME_SCREENSHOTS[theme.name];

          return (
            <div
              key={theme.name}
              className={cn(
                "rounded-xl border transition-all duration-300 overflow-hidden bg-card",
                isExpanded
                  ? "border-primary/50 shadow-lg shadow-primary/10"
                  : "border-border/40 hover:border-border"
              )}
            >
              {/* Header row */}
              <button
                onClick={() => toggleTheme(theme.name)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-8 h-8 rounded-full shadow-sm shrink-0 border border-white/10"
                    style={{ background: theme.colors.Accent }}
                  />
                  <h3 className="text-base font-semibold">{theme.name}</h3>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-300",
                    isExpanded && "rotate-180 text-primary"
                  )}
                />
              </button>

              {/* Expanded body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-4 pb-5 sm:px-5 border-t border-border/30 pt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">

                      {/* Screenshot / preview */}
                      <div className="flex flex-col gap-3">
                        <div className="text-sm font-medium text-muted-foreground">
                          <T en="Preview" id="Pratinjau" />
                        </div>
                        {screenshot ? (
                          <div className="rounded-lg overflow-hidden border border-border/40 shadow-md">
                            <img
                              src={screenshot}
                              alt={`${theme.name} theme preview`}
                              className="w-full h-auto object-contain"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div
                            className="rounded-lg border border-border/40 flex items-center justify-center text-muted-foreground text-sm"
                            style={{ background: theme.colors.AcrylicMain, height: 180 }}
                          >
                            No preview
                          </div>
                        )}

                        {/* Color swatches */}
                        <div className="flex flex-wrap gap-2">
                          {(
                            [
                              { label: "Accent",  color: theme.colors.Accent },
                              { label: "Main",    color: theme.colors.AcrylicMain },
                              { label: "Tab",     color: theme.colors.Tab },
                              { label: "Element", color: theme.colors.Element },
                              { label: "Text",    color: theme.colors.Text },
                            ] as const
                          ).map((s) => (
                            <div
                              key={s.label}
                              className="flex items-center gap-1.5 bg-muted/50 rounded px-2 py-1"
                            >
                              <div
                                className="w-3 h-3 rounded-full border border-white/10 shadow-sm"
                                style={{ background: s.color }}
                              />
                              <span className="text-[10px] font-medium text-muted-foreground uppercase">
                                {s.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Luau code block */}
                      <div className="flex flex-col min-w-0">
                        <div className="text-sm font-medium text-muted-foreground mb-1">
                          <T en="Luau Configuration" id="Konfigurasi Luau" />
                        </div>
                        <div className="overflow-hidden">
                          <CodeBlock
                            code={getThemeCode(theme)}
                            language="lua"
                            title={`${theme.name}.lua`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Apply built-in theme */}
      <div className="space-y-4 pt-8 border-t border-border/40">
        <h2 className="text-2xl font-semibold">
          <T en="Applying a Built-in Theme" id="Menerapkan Tema Bawaan" />
        </h2>
        <p className="text-muted-foreground">
          <T
            en="Pass the theme name when creating your window, or switch at any time with SetTheme."
            id="Masukkan nama tema saat membuat window, atau ganti kapan saja dengan SetTheme."
          />
        </p>
        <CodeBlock
          language="lua"
          title="apply-theme.lua"
          code={`local Window = Fluent:CreateWindow({
    Title = "My Hub",
    Theme = "Neon Cyber",
})

-- Switch theme at runtime
Fluent:SetTheme("AMOLED")`}
        />
      </div>

      {/* Custom theme */}
      <div className="space-y-4 pt-8 border-t border-border/40">
        <h2 className="text-2xl font-semibold">
          <T en="Creating a Custom Theme" id="Membuat Tema Kustom" />
        </h2>
        <p className="text-muted-foreground">
          <T
            en="Register any custom color scheme with RegisterCustomTheme, then apply it by name."
            id="Daftarkan skema warna kustom dengan RegisterCustomTheme, lalu terapkan berdasarkan namanya."
          />
        </p>
        <CodeBlock
          language="lua"
          title="custom-theme.lua"
          code={`Fluent:RegisterCustomTheme("MyTheme", {
    Accent              = Color3.fromRGB(0, 200, 255),
    AcrylicMain         = Color3.fromRGB(10, 10, 20),
    AcrylicBorder       = Color3.fromRGB(30, 30, 50),
    AcrylicGradient     = ColorSequence.new(
                            Color3.fromRGB(10, 10, 20),
                            Color3.fromRGB(5, 5, 10)
                          ),
    AcrylicNoise        = 0.8,
    TitleBarLine        = Color3.fromRGB(30, 30, 50),
    Tab                 = Color3.fromRGB(15, 15, 28),
    Element             = Color3.fromRGB(12, 12, 24),
    ElementBorder       = Color3.fromRGB(30, 30, 50),
    InElementBorder     = Color3.fromRGB(40, 40, 60),
    ElementTransparency = 0.85,
    ToggleSlider        = Color3.fromRGB(30, 30, 50),
    ToggleToggled       = Color3.fromRGB(0, 200, 255),
    SliderRail          = Color3.fromRGB(30, 30, 50),
    DropdownFrame       = Color3.fromRGB(12, 12, 20),
    DropdownHolder      = Color3.fromRGB(8, 8, 16),
    DropdownBorder      = Color3.fromRGB(30, 30, 50),
    DropdownOption      = Color3.fromRGB(16, 16, 28),
    Keybind             = Color3.fromRGB(16, 16, 28),
    Input               = Color3.fromRGB(10, 10, 20),
    InputFocused        = Color3.fromRGB(6, 6, 14),
    InputIndicator      = Color3.fromRGB(30, 30, 50),
    InputIndicatorFocus = Color3.fromRGB(0, 200, 255),
    Text                = Color3.fromRGB(220, 240, 255),
    SubText             = Color3.fromRGB(100, 140, 180),
    Hover               = Color3.fromRGB(20, 20, 36),
    ShineEnabled        = true,
    StrokeShine         = false,
})

local Window = Fluent:CreateWindow({
    Title = "My Hub",
    Theme = "MyTheme",
})`}
        />

        {/* Color field reference table */}
        <div className="rounded-lg border border-border/40 overflow-hidden">
          <div className="px-4 py-3 bg-muted/40 border-b border-border/40 text-sm font-medium">
            <T en="Color Field Reference" id="Referensi Field Warna" />
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-muted/20">
                <th className="text-left px-3 py-2 font-medium text-muted-foreground w-52">Field</th>
                <th className="text-left px-3 py-2 font-medium text-muted-foreground">
                  <T en="Description" id="Deskripsi" />
                </th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  { f: "Accent",                       en: "Primary highlight color — toggles, sliders, active indicators",           id: "Warna sorotan utama — toggle, slider, indikator aktif" },
                  { f: "AcrylicMain",                  en: "Main window background",                                                    id: "Latar belakang window utama" },
                  { f: "AcrylicBorder",                en: "Window/panel border color",                                                 id: "Warna border window/panel" },
                  { f: "AcrylicGradient",              en: "Background gradient (ColorSequence top→bottom)",                           id: "Gradien latar belakang (ColorSequence atas→bawah)" },
                  { f: "AcrylicNoise",                 en: "Noise overlay intensity (0–1)",                                             id: "Intensitas overlay noise (0–1)" },
                  { f: "Tab",                          en: "Tab sidebar background",                                                    id: "Latar belakang sidebar tab" },
                  { f: "Element",                      en: "Element card background",                                                   id: "Latar belakang kartu elemen" },
                  { f: "ElementBorder",                en: "Outer element border",                                                      id: "Border luar elemen" },
                  { f: "InElementBorder",              en: "Inner element divider lines",                                               id: "Garis pemisah dalam elemen" },
                  { f: "ElementTransparency",          en: "Element transparency (0 = opaque, 1 = invisible)",                         id: "Transparansi elemen (0 = opak, 1 = tak terlihat)" },
                  { f: "ToggleSlider",                 en: "Toggle off-state track color",                                             id: "Warna track toggle kondisi off" },
                  { f: "ToggleToggled",                en: "Toggle on-state fill (usually same as Accent)",                            id: "Warna isian toggle kondisi on (biasanya sama dengan Accent)" },
                  { f: "SliderRail",                   en: "Slider track background",                                                  id: "Latar belakang track slider" },
                  { f: "DropdownFrame / Holder / Border / Option", en: "Dropdown popup colors",                                      id: "Warna popup dropdown" },
                  { f: "Keybind",                      en: "Keybind element background",                                               id: "Latar belakang elemen keybind" },
                  { f: "Input / InputFocused",         en: "Input field background (normal / focused)",                                id: "Latar belakang input field (normal / fokus)" },
                  { f: "InputIndicator / InputIndicatorFocus", en: "Input underline color (normal / focused)",                       id: "Warna garis bawah input (normal / fokus)" },
                  { f: "Text / SubText",               en: "Primary and secondary text colors",                                        id: "Warna teks utama dan sekunder" },
                  { f: "Hover",                        en: "Hover highlight background",                                               id: "Latar belakang sorotan hover" },
                  { f: "ShineEnabled",                 en: "Enable shine animation on elements",                                       id: "Aktifkan animasi shine pada elemen" },
                  { f: "StrokeShine",                  en: "Enable stroke shine effect",                                               id: "Aktifkan efek stroke shine" },
                ] as const
              ).map((row, i, arr) => (
                <tr key={row.f} className={i < arr.length - 1 ? "border-b border-border/30" : ""}>
                  <td className="px-3 py-2 font-mono text-xs text-primary align-top">{row.f}</td>
                  <td className="px-3 py-2 text-xs text-muted-foreground">
                    <T en={row.en} id={row.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
