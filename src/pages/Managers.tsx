import { CodeBlock } from "@/components/ui/CodeBlock";
import { T } from "@/contexts/LanguageContext";

export default function Managers() {
  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          <T en="Managers" id="Manajer" />
        </h1>
        <p className="text-muted-foreground text-lg">
          <T
            en="Built-in utilities bundled with FluentPro for saving data, managing the UI, floating buttons, and media caching."
            id="Utilitas bawaan yang sudah termasuk dalam FluentPro untuk menyimpan data, mengelola UI, floating button, dan cache media."
          />
        </p>
        <div className="mt-3 rounded-lg border border-blue-500/30 bg-blue-500/5 px-4 py-3 text-sm text-blue-400">
          <T
            en="FluentPro automatically makes SaveManager, InterfaceManager, FloatingButtonManager, and MediaManager available as globals when loaded. Call them directly — no separate loadstring or local aliases needed."
            id="FluentPro secara otomatis menyediakan SaveManager, InterfaceManager, FloatingButtonManager, dan MediaManager sebagai global saat dimuat. Panggil langsung — tidak perlu loadstring terpisah atau alias lokal."
          />
        </div>
      </div>

      {/* SaveManager */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">SaveManager</h2>
        <p className="text-muted-foreground">
          <T
            en="Automatically handles saving and loading user configurations and element values to the local device."
            id="Secara otomatis menangani penyimpanan dan pemuatan konfigurasi pengguna serta nilai elemen ke perangkat lokal."
          />
        </p>
        <CodeBlock language="lua" title="savemanager.lua" code={`SaveManager:SetLibrary(Fluent)
SaveManager:SetFolder("MyHub/Config")
SaveManager:BuildConfigSection(Tabs.Settings)
SaveManager:IgnoreThemeSettings()
SaveManager:LoadAutoloadConfig()`} />
        <div className="rounded-lg border border-border/40 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-muted/40">
                <th className="text-left px-3 py-2 font-medium text-muted-foreground">Method</th>
                <th className="text-left px-3 py-2 font-medium text-muted-foreground">
                  <T en="Description" id="Deskripsi" />
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { m: ":SetLibrary(Fluent)",        en: "Link SaveManager to your Fluent instance",            id: "Hubungkan SaveManager ke instance Fluent kamu" },
                { m: ":SetFolder(name)",            en: "Set the folder name used for saving files",           id: "Atur nama folder untuk menyimpan file" },
                { m: ":BuildConfigSection(tab)",    en: "Add a config load/save/delete UI to a tab",           id: "Tambahkan UI load/save/hapus config ke tab" },
                { m: ":IgnoreThemeSettings()",      en: "Don't save/load theme setting changes",               id: "Jangan simpan/muat perubahan tema" },
                { m: ":LoadAutoloadConfig()",       en: "Load the config marked as autoload on start",         id: "Muat config yang ditandai autoload saat mulai" },
              ].map((row, i, arr) => (
                <tr key={row.m} className={i < arr.length - 1 ? "border-b border-border/30" : ""}>
                  <td className="px-3 py-2 font-mono text-xs text-primary">{row.m}</td>
                  <td className="px-3 py-2 text-sm text-muted-foreground"><T en={row.en} id={row.id} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* InterfaceManager */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">InterfaceManager</h2>
        <p className="text-muted-foreground">
          <T
            en="Manages UI settings, keybinds, and tab favorites across sessions."
            id="Mengelola pengaturan UI, keybind, dan favorit tab lintas sesi."
          />
        </p>
        <CodeBlock language="lua" title="interfacemanager.lua" code={`InterfaceManager:SetLibrary(Fluent)
InterfaceManager:SetFolder("MyHub")
InterfaceManager:BuildInterfaceSection(Tabs.Settings)`} />
        <div className="rounded-lg border border-border/40 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-muted/40">
                <th className="text-left px-3 py-2 font-medium text-muted-foreground">Method</th>
                <th className="text-left px-3 py-2 font-medium text-muted-foreground">
                  <T en="Description" id="Deskripsi" />
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { m: ":SetLibrary(Fluent)",              en: "Link InterfaceManager to your Fluent instance",              id: "Hubungkan InterfaceManager ke instance Fluent kamu" },
                { m: ":SetFolder(name)",                  en: "Folder name for storing UI preferences",                     id: "Nama folder untuk menyimpan preferensi UI" },
                { m: ":BuildInterfaceSection(tab)",       en: "Add theme, keybind, and favorite controls to a tab",         id: "Tambahkan kontrol tema, keybind, dan favorit ke tab" },
              ].map((row, i, arr) => (
                <tr key={row.m} className={i < arr.length - 1 ? "border-b border-border/30" : ""}>
                  <td className="px-3 py-2 font-mono text-xs text-primary">{row.m}</td>
                  <td className="px-3 py-2 text-sm text-muted-foreground"><T en={row.en} id={row.id} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FloatingButtonManager */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">FloatingButtonManager</h2>
        <p className="text-muted-foreground">
          <T
            en="Create draggable floating buttons that stay visible even when the main UI is minimized."
            id="Buat tombol floating yang bisa di-drag dan tetap terlihat meski UI utama diminimize."
          />
        </p>
        <CodeBlock language="lua" title="floatingbutton.lua" code={`FloatingButtonManager:SetLibrary(Fluent)
FloatingButtonManager:SetFolder("MyHub/Floating")

FloatingButtonManager:AddButton("main", Window.Root, false, true)
FloatingButtonManager:BuildConfigSection(Tabs.Settings)
FloatingButtonManager:LoadAutoloadConfig()`} />
        <div className="rounded-lg border border-border/40 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-muted/40">
                <th className="text-left px-3 py-2 font-medium text-muted-foreground">Method</th>
                <th className="text-left px-3 py-2 font-medium text-muted-foreground">
                  <T en="Description" id="Deskripsi" />
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { m: ":SetLibrary(Fluent)",                  en: "Link FloatingButtonManager to your Fluent instance",      id: "Hubungkan FloatingButtonManager ke instance Fluent kamu" },
                { m: ":SetFolder(name)",                      en: "Folder name for storing button configs",                  id: "Nama folder untuk menyimpan konfigurasi tombol" },
                { m: ":AddButton(id, frame, locked, circle)", en: "Register a floating button linked to a UI frame",        id: "Daftarkan floating button yang terhubung ke frame UI" },
                { m: ":BuildConfigSection(tab)",              en: "Add button position/visibility UI to a tab",              id: "Tambahkan UI posisi/visibilitas tombol ke tab" },
                { m: ":LoadAutoloadConfig()",                 en: "Restore saved button positions on start",                 id: "Pulihkan posisi tombol tersimpan saat mulai" },
              ].map((row, i, arr) => (
                <tr key={row.m} className={i < arr.length - 1 ? "border-b border-border/30" : ""}>
                  <td className="px-3 py-2 font-mono text-xs text-primary">{row.m}</td>
                  <td className="px-3 py-2 text-sm text-muted-foreground"><T en={row.en} id={row.id} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MediaManager */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">MediaManager</h2>
        <p className="text-muted-foreground">
          <T
            en="Handles downloading and caching remote assets (images, audio) to the local device for faster loads."
            id="Menangani pengunduhan dan penyimpanan cache aset jarak jauh (gambar, audio) ke perangkat lokal untuk pemuatan lebih cepat."
          />
        </p>
        <CodeBlock language="lua" title="mediamanager.lua" code={`MediaManager:SetFolder("MyHub/MediaCache")`} />
        <div className="rounded-lg border border-border/40 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-muted/40">
                <th className="text-left px-3 py-2 font-medium text-muted-foreground">Method</th>
                <th className="text-left px-3 py-2 font-medium text-muted-foreground">
                  <T en="Description" id="Deskripsi" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 font-mono text-xs text-primary">:SetFolder(name)</td>
                <td className="px-3 py-2 text-sm text-muted-foreground">
                  <T en="Folder name for cached media files" id="Nama folder untuk file media yang di-cache" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Complete Setup */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">
          <T en="Complete Setup Example" id="Contoh Setup Lengkap" />
        </h2>
        <p className="text-muted-foreground">
          <T
            en="Full boilerplate combining all four managers. Since FluentPro exposes them as globals, call each one directly."
            id="Boilerplate lengkap menggabungkan semua empat manajer. Karena FluentPro menyediakannya sebagai global, panggil langsung masing-masing."
          />
        </p>
        <CodeBlock language="lua" title="boilerplate.lua" code={`local Fluent = loadstring(game:HttpGet(
    "https://github.com/StyearX/Fluent-Modded/releases/download/Fluent/FluentPro"
))()

local Window = Fluent:CreateWindow({
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
})

local Tabs = {
    Main     = Window:AddTab({ Title = "Main",     Icon = "solar/home-bold" }),
    Settings = Window:AddTab({ Title = "Settings", Icon = "solar/settings-bold" }),
}

local secControls = Tabs.Main:AddSection("Controls")

SaveManager:SetLibrary(Fluent)
InterfaceManager:SetLibrary(Fluent)
FloatingButtonManager:SetLibrary(Fluent)

InterfaceManager:SetFolder("MyHub")
SaveManager:SetFolder("MyHub/Config")
FloatingButtonManager:SetFolder("MyHub/Floating")
MediaManager:SetFolder("MyHub/MediaCache")

InterfaceManager:BuildInterfaceSection(Tabs.Settings)
SaveManager:BuildConfigSection(Tabs.Settings)
FloatingButtonManager:AddButton("main", Window.Root, false, true)
FloatingButtonManager:BuildConfigSection(Tabs.Settings)

SaveManager:LoadAutoloadConfig()

Fluent:Notify({
    Title    = "My Hub",
    Content  = "Loaded successfully!",
    Duration = 5,
})`} />
      </div>
    </div>
  );
}
