import { CodeBlock } from "@/components/ui/CodeBlock";
import { T, useLang } from "@/contexts/LanguageContext";

export default function GettingStarted() {
  const { lang } = useLang();
  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          <T en="Getting Started" id="Mulai" />
        </h1>
        <p className="text-muted-foreground text-lg">
          <T
            en="Learn how to install and set up Fluent-Modded in your scripts."
            id="Pelajari cara memasang dan menggunakan Fluent-Modded di script kamu."
          />
        </p>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">
          <T en="Installation" id="Instalasi" />
        </h2>
        <p className="text-muted-foreground">
          <T
            en="Load FluentPro with a single loadstring. It returns the Fluent library and automatically sets up SaveManager, InterfaceManager, FloatingButtonManager, and MediaManager as globals."
            id="Muat FluentPro dengan satu loadstring. Library ini mengembalikan Fluent dan secara otomatis menyiapkan SaveManager, InterfaceManager, FloatingButtonManager, dan MediaManager sebagai global."
          />
        </p>
        <CodeBlock
          code={`local Fluent = loadstring(game:HttpGet(
    "https://github.com/StyearX/Fluent-Modded/releases/download/Fluent/FluentPro"
))()`}
          language="lua"
          title="load.lua"
        />
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-sm text-amber-400">
          <span className="font-semibold">
            <T en="Note:" id="Catatan:" />
          </span>{" "}
          <T
            en="FluentLite has been discontinued. Use FluentPro for all new scripts."
            id="FluentLite sudah tidak didukung lagi. Gunakan FluentPro untuk semua script baru."
          />
        </div>
      </div>

      {/* Creating a Window */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">
          <T en="Creating a Window" id="Membuat Window" />
        </h2>
        <p className="text-muted-foreground">
          <T
            en="Initialize the main UI window with your desired configuration. All options below are optional except Title."
            id="Buat window UI utama dengan konfigurasi yang kamu inginkan. Semua opsi di bawah bersifat opsional kecuali Title."
          />
        </p>
        <CodeBlock
          language="lua"
          title="window.lua"
          code={`local Window = Fluent:CreateWindow({
    Title           = "My Hub",
    SubTitle        = "by me",
    TabWidth        = 160,
    Size            = UDim2.fromOffset(580, 460),
    Acrylic         = true,
    Theme           = "AMOLED",
    MinimizeKey     = Enum.KeyCode.LeftControl,
    Search          = true,
    UserInfoTop     = false,
    UserInfo        = false,
    UserInfoTitle   = "Welcome",
    UserInfoSubtitle = LocalPlayer.DisplayName,
    UserInfoColor   = Color3.fromRGB(96, 205, 255),
    TitleIcon       = "solar/home-bold",
    Icons           = "solar/planet-bold",
    Font            = "GothamSSm",
})`}
        />
        <div className="overflow-x-auto rounded-lg border border-border/40">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-border/60 bg-muted/50">
                <th className="px-4 py-3 font-medium">
                  <T en="Option" id="Opsi" />
                </th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">
                  <T en="Default" id="Default" />
                </th>
                <th className="px-4 py-3 font-medium">
                  <T en="Description" id="Deskripsi" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {[
                { k: "Title",            t: "string",       d: '""',          en: "Window title text shown in the header bar (required)", id: "Teks judul window di header bar (wajib)" },
                { k: "SubTitle",         t: "string",       d: '""',          en: "Subtitle text shown below the title", id: "Teks subjudul di bawah judul" },
                { k: "TabWidth",         t: "number",       d: "160",         en: "Width of the tab sidebar in pixels", id: "Lebar sidebar tab dalam piksel" },
                { k: "Size",             t: "UDim2",        d: "500×480",     en: "Total window size", id: "Ukuran total window" },
                { k: "Acrylic",          t: "boolean",      d: "false",       en: "Acrylic blur background. Requires Roblox graphics quality 8+", id: "Background blur akrilik. Butuh kualitas grafis Roblox 8+" },
                { k: "Theme",            t: "string",       d: '"AMOLED"',    en: "Starting theme name. See the Themes page for all names.", id: "Nama tema awal. Lihat halaman Tema untuk semua nama." },
                { k: "MinimizeKey",      t: "Enum.KeyCode", d: "—",           en: "Key that toggles minimize/show. Omit to disable.", id: "Tombol untuk minimize/show. Hilangkan untuk menonaktifkan." },
                { k: "Search",           t: "boolean",      d: "false",       en: "Show a search bar in the tab sidebar", id: "Tampilkan search bar di sidebar tab" },
                { k: "UserInfoTop",      t: "boolean",      d: "false",       en: "Show player avatar and name at the TOP of the sidebar", id: "Tampilkan avatar dan nama pemain di ATAS sidebar" },
                { k: "UserInfo",         t: "boolean",      d: "false",       en: "Show player avatar and name at the BOTTOM of the sidebar", id: "Tampilkan avatar dan nama pemain di BAWAH sidebar" },
                { k: "UserInfoTitle",    t: "string",       d: "DisplayName", en: "Custom display name shown in the user info panel (overrides player's DisplayName)", id: "Nama tampilan kustom di panel info pengguna (menggantikan DisplayName pemain)" },
                { k: "UserInfoSubtitle", t: "string",       d: '"@"..Name',   en: "Custom username shown in the user info panel (overrides @Name)", id: "Username kustom di panel info pengguna (menggantikan @Name)" },
                { k: "UserInfoColor",    t: "Color3",       d: "—",           en: "Accent color applied to the user info panel border and avatar ring", id: "Warna aksen pada border panel info pengguna dan ring avatar" },
                { k: "TitleIcon",        t: "string",       d: "—",           en: 'Icon shown next to the title in the title bar. Accepts icon pack paths (e.g. "solar/home-bold")', id: 'Ikon di sebelah judul pada title bar. Menerima path icon pack (mis. "solar/home-bold")' },
                { k: "Icons",            t: "string",       d: "—",           en: "Icon displayed at the top of the tab sidebar (same as TabLogo). Accepts icon pack paths", id: "Ikon di bagian atas sidebar tab (sama dengan TabLogo). Menerima path icon pack" },
                { k: "Font",             t: "string",       d: '"GothamSSm"', en: 'Font family applied to all UI text (e.g. "GothamSSm", "Montserrat", "Ubuntu")', id: 'Font yang diterapkan ke semua teks UI (mis. "GothamSSm", "Montserrat", "Ubuntu")' },
              ].map((row) => (
                <tr key={row.k}>
                  <td className="px-4 py-2.5 font-mono text-xs text-primary whitespace-nowrap">{row.k}</td>
                  <td className="px-4 py-2.5 text-muted-foreground text-xs whitespace-nowrap">{row.t}</td>
                  <td className="px-4 py-2.5 text-muted-foreground text-xs font-mono whitespace-nowrap">{row.d}</td>
                  <td className="px-4 py-2.5 text-sm">{lang === "id" ? row.id : row.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabs & Sections */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">
          <T en="Adding Tabs & Sections" id="Menambah Tab & Section" />
        </h2>
        <p className="text-muted-foreground">
          <T
            en="Tabs are added on the Window. Sections are added on a tab variable. Elements are added on a section variable."
            id="Tab ditambahkan ke Window. Section ditambahkan ke variabel tab. Elemen ditambahkan ke variabel section."
          />
        </p>
        <CodeBlock
          language="lua"
          title="tabs.lua"
          code={`local Tabs = {
    Main     = Window:AddTab({ Title = "Main",     Icon = "solar/home-bold" }),
    Settings = Window:AddTab({ Title = "Settings", Icon = "solar/settings-bold" }),
}

local secControls = Tabs.Main:AddSection("Basic Controls")
local secCombat   = Tabs.Main:AddSection("Combat")

secControls:AddToggle("MyToggle", {
    Title    = "Enable Feature",
    Default  = false,
    Callback = function(value)
        print("Toggle:", value)
    end,
})

secCombat:AddSlider("Speed", {
    Title    = "Walk Speed",
    Default  = 16, Min = 0, Max = 100,
    Callback = function(v)
        game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = v
    end,
})`}
        />
      </div>

      {/* Managers */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">
          <T en="Setting Up Managers" id="Mengatur Manajer" />
        </h2>
        <p className="text-muted-foreground">
          <T
            en="FluentPro automatically sets SaveManager, InterfaceManager, FloatingButtonManager, and MediaManager as globals when it loads. Call their methods directly — no loadstring or local alias needed."
            id="FluentPro secara otomatis menyiapkan SaveManager, InterfaceManager, FloatingButtonManager, dan MediaManager sebagai global saat dimuat. Panggil metodenya langsung — tidak perlu loadstring atau alias lokal."
          />
        </p>
        <CodeBlock
          language="lua"
          title="managers.lua"
          code={`SaveManager:SetLibrary(Fluent)
InterfaceManager:SetLibrary(Fluent)

InterfaceManager:SetFolder("MyHub")
SaveManager:SetFolder("MyHub/Config")

InterfaceManager:BuildInterfaceSection(Tabs.Settings)
SaveManager:BuildConfigSection(Tabs.Settings)

SaveManager:LoadAutoloadConfig()`}
        />
      </div>

      {/* Tab Favorites */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">
          <T en="Tab Favorites" id="Favorit Tab" />
        </h2>
        <p className="text-muted-foreground">
          <T
            en="Hover over any tab in the sidebar and click the bookmark icon to pin it. Pinned tabs appear at the top. Favorites are saved automatically by InterfaceManager."
            id="Arahkan ke tab mana saja di sidebar dan klik ikon bookmark untuk menyematkannya. Tab yang disematkan muncul di atas. Favorit disimpan otomatis oleh InterfaceManager."
          />
        </p>
      </div>
    </div>
  );
}
