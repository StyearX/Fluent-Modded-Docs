import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Badge } from "@/components/ui/badge";
import { T, useLang } from "@/contexts/LanguageContext";

interface SpecialProp {
  name: string;
  type: string;
  default?: string;
  en: string;
  id: string;
}

interface ElementDef {
  id: string;
  name: string;
  en: string;
  id_: string;
  code: string;
  collapsible?: boolean;
  specialProps?: SpecialProp[];
}

const ELEMENTS: ElementDef[] = [
  {
    id: "AddSection",
    name: "Section",
    en: "Creates a labeled group inside a Tab. All UI elements (Toggle, Slider, Input, etc.) must be added to a Section, not directly to a Tab.",
    id_: "Membuat grup berlabel di dalam Tab. Semua elemen UI (Toggle, Slider, Input, dll.) harus ditambahkan ke Section, bukan langsung ke Tab.",
    collapsible: false,
    code: `local secControls = tabs.Main:AddSection("Basic Controls")
local secCombat   = tabs.Main:AddSection("Combat")

secControls:AddToggle("MyToggle", {
    Title    = "Enable Feature",
    Default  = false,
    Callback = function(v) print("Toggle:", v) end,
})

secCombat:AddSlider("Speed", {
    Title    = "Walk Speed",
    Default  = 16, Min = 0, Max = 100,
    Callback = function(v)
        game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = v
    end,
})`,
    specialProps: [
      { name: "Title", type: "string", en: "The label shown above the section group. Pass an empty string for an unlabeled section.", id: "Label yang ditampilkan di atas grup section. Gunakan string kosong untuk section tanpa label." },
    ],
  },
  {
    id: "AddToggle",
    name: "Toggle",
    en: "A boolean on/off switch. Fires a callback on every state change.",
    id_: "Sakelar boolean on/off. Callback dipanggil setiap kali state berubah.",
    collapsible: true,
    code: `local Toggle = secControls:AddToggle("MyToggle", {
    Title    = "Enable Feature",
    Icon     = "solar/shield-bold",
    Default  = false,
    Callback = function(value)
        print("Toggle is now:", value)
    end,
})

print(Toggle.Value)
Toggle:SetValue(true)`,
    specialProps: [
      { name: "Default", type: "boolean", default: "false", en: "Initial on/off state when the UI is created.", id: "State awal on/off saat UI dibuat." },
      { name: "Icon",    type: "string",                    en: 'Solar icon name: "solar/<name>". See the Icons page for all names.', id: 'Nama ikon Solar: "solar/<nama>". Lihat halaman Ikon untuk semua nama.' },
    ],
  },
  {
    id: "AddSlider",
    name: "Slider",
    en: "A draggable slider that produces a numeric value between Min and Max.",
    id_: "Slider yang bisa di-drag untuk menghasilkan nilai numerik antara Min dan Max.",
    collapsible: true,
    code: `local Slider = secControls:AddSlider("MySlider", {
    Title    = "Volume",
    Icon     = "solar/volume-loud-bold",
    Default  = 50,
    Min      = 0,
    Max      = 100,
    Rounding = 1,
    Suffix   = "%",
    Callback = function(value)
        print("Slider value:", value)
    end,
})

print(Slider.Value)
Slider:SetValue(75)`,
    specialProps: [
      { name: "Min",      type: "number", default: "0",   en: "Minimum value of the slider range.", id: "Nilai minimum rentang slider." },
      { name: "Max",      type: "number", default: "100", en: "Maximum value of the slider range.", id: "Nilai maksimum rentang slider." },
      { name: "Rounding", type: "number", default: "1",   en: "Decimal places. 0 = integer, 2 = two decimals.", id: "Desimal. 0 = bilangan bulat, 2 = dua desimal." },
      { name: "Suffix",   type: "string",                 en: 'Unit label appended after the value, e.g. "%" or "ms".', id: 'Label satuan setelah nilai, misal "%" atau "ms".' },
    ],
  },
  {
    id: "AddInput",
    name: "Input",
    en: "A text field. Can restrict to numbers and optionally fire only when the user presses Enter.",
    id_: "Field teks. Bisa dibatasi hanya angka dan opsional hanya callback saat Enter ditekan.",
    collapsible: true,
    code: `local Input = secControls:AddInput("MyInput", {
    Title       = "Player Name",
    Icon        = "solar/user-bold",
    Placeholder = "Type here...",
    Numeric     = false,
    Finished    = false,
    MaxLength   = 50,
    Callback    = function(value)
        print("Input value:", value)
    end,
})

print(Input.Value)
Input:SetValue("Hello")`,
    specialProps: [
      { name: "Numeric",     type: "boolean", default: "false", en: "Only numeric characters accepted when true.", id: "Hanya angka yang diterima saat true." },
      { name: "Finished",    type: "boolean", default: "false", en: "Callback fires only on Enter/focus-leave when true.", id: "Callback dipanggil hanya saat Enter/kehilangan fokus jika true." },
      { name: "MaxLength",   type: "number",                    en: "Maximum character count. No limit if omitted.", id: "Jumlah karakter maksimum. Tidak ada batas jika dihilangkan." },
      { name: "Placeholder", type: "string",                    en: "Hint text shown inside the field when empty.", id: "Teks petunjuk di dalam field saat kosong." },
    ],
  },
  {
    id: "AddDropdown",
    name: "Dropdown",
    en: "A selection menu. Supports single or multi-select, and can render outside the window to prevent clipping.",
    id_: "Menu pemilihan. Mendukung single atau multi-select, dan bisa render di luar window untuk mencegah clipping.",
    collapsible: true,
    code: `local Dropdown = secControls:AddDropdown("MyDropdown", {
    Title                 = "Select Option",
    Icon                  = "solar/list-bold",
    Values                = { "Apple", "Banana", "Cherry" },
    Default               = "Apple",
    Multi                 = false,
    DropdownOutsideWindow = false,
    Callback              = function(value)
        print(value)
    end,
})

Dropdown:SetValues({ "Red", "Green", "Blue" })

print(Dropdown.Value)
Dropdown:SetValue("Banana")`,
    specialProps: [
      { name: "Multi",                 type: "boolean",        default: "false", en: "Multi-select mode. Callback receives a table of strings.", id: "Mode multi-select. Callback menerima tabel string." },
      { name: "DropdownOutsideWindow", type: "boolean",        default: "false", en: "Render list outside the window frame to prevent bottom clipping.", id: "Render list di luar frame window untuk mencegah clipping bawah." },
      { name: "Default",               type: "string | table",                   en: "Initial value. String in single mode, table in Multi mode.", id: "Nilai awal. String di single mode, tabel di Multi mode." },
    ],
  },
  {
    id: "AddColorpicker",
    name: "Colorpicker",
    en: "Inline color picker with hue, saturation, brightness, and optional transparency slider.",
    id_: "Color picker inline dengan kontrol hue, saturasi, kecerahan, dan slider transparansi opsional.",
    collapsible: true,
    code: `local Picker = secControls:AddColorpicker("MyColor", {
    Title        = "Accent Color",
    Icon         = "solar/palette-bold",
    Default      = Color3.fromRGB(255, 80, 120),
    Transparency = 0,
    Callback     = function(color, transparency)
        print("Color:", color)
        print("Transparency:", transparency)
    end,
})

print(Picker.Value, Picker.Transparency)
Picker:SetValueRGB(Color3.fromRGB(0, 200, 255))`,
    specialProps: [
      { name: "Default",      type: "Color3", default: "Color3.new(1,1,1)", en: "Initial color shown in the picker.", id: "Warna awal yang ditampilkan di picker." },
      { name: "Transparency", type: "number", default: "0",                 en: "Initial alpha (0=opaque, 1=invisible). Shows an extra transparency slider.", id: "Alpha awal (0=opak, 1=tak terlihat). Menampilkan slider transparansi tambahan." },
    ],
  },
  {
    id: "AddKeybind",
    name: "Keybind",
    en: "Lets the user bind a keyboard key. Toggle mode flips active state on each press; Hold mode fires while key is held.",
    id_: "Biarkan pengguna mengikat tombol keyboard. Mode Toggle membalik state aktif setiap tekan; Mode Hold aktif selama tombol ditahan.",
    collapsible: true,
    code: `local Keybind = secControls:AddKeybind("MyKeybind", {
    Title    = "Toggle Aimbot",
    Icon     = "solar/keyboard-bold",
    Default  = Enum.KeyCode.LeftAlt,
    Mode     = "Toggle",
    Callback = function(state)
        print("Keybind state:", state)
    end,
})

print(Keybind.Value)
print(Keybind.Active)
Keybind:SetValue(Enum.KeyCode.E)`,
    specialProps: [
      { name: "Mode",    type: '"Toggle" | "Hold"',       default: '"Toggle"', en: 'Toggle: flips on each press. Hold: fires true while held, false on release.', id: 'Toggle: balik setiap tekan. Hold: true selama ditahan, false saat dilepas.' },
      { name: "Default", type: "Enum.KeyCode | string",                        en: 'Initial key. Enum.KeyCode or string like "LeftAlt", "E".', id: 'Tombol awal. Enum.KeyCode atau string seperti "LeftAlt", "E".' },
    ],
  },
  {
    id: "AddButton",
    name: "Button",
    en: "A pressable button that executes a callback. Commonly used to trigger actions or show notifications.",
    id_: "Tombol yang bisa ditekan untuk menjalankan callback. Umum digunakan untuk memicu aksi atau menampilkan notifikasi.",
    collapsible: true,
    code: `secControls:AddButton({
    Title    = "Teleport to Spawn",
    Icon     = "solar/map-point-bold",
    Callback = function()
        Fluent:Notify({
            Title    = "Teleported",
            Content  = "Moved to spawn.",
            Duration = 3,
        })
    end,
})`,
    specialProps: [
      { name: "Icon", type: "string", en: 'Solar icon name "solar/<name>" displayed left of the label.', id: 'Nama ikon Solar "solar/<nama>" di sebelah kiri label.' },
    ],
  },
  {
    id: "AddParagraph",
    name: "Paragraph",
    en: "A read-only text block for labels, tips, or descriptions inside a section.",
    id_: "Blok teks hanya-baca untuk label, tips, atau deskripsi di dalam section.",
    collapsible: true,
    code: `local Para = secControls:AddParagraph({
    Title   = "Info",
    Content = "This is a read-only paragraph for tips or warnings.",
})

Para:SetContent("New text here.")`,
    specialProps: [
      { name: "Content", type: "string", en: "Body text shown below the Title. Update at runtime with :SetContent().", id: "Teks isi di bawah Judul. Perbarui saat runtime dengan :SetContent()." },
    ],
  },
  {
    id: "AddCode",
    name: "Code Block",
    en: "Displays a syntax-highlighted code snippet with an optional copy button.",
    id_: "Menampilkan cuplikan kode dengan sorotan sintaks dan tombol salin opsional.",
    collapsible: true,
    code: `secControls:AddCode({
    Title  = "Example Script",
    Code   = 'print("Hello, world!")',
    OnCopy = function()
        Fluent:Notify({
            Title    = "Copied",
            Content  = "Code copied to clipboard.",
            Duration = 2,
        })
    end,
})`,
    specialProps: [
      { name: "Code",   type: "string",   en: "The Luau source code string to display.", id: "String kode Luau yang akan ditampilkan." },
      { name: "OnCopy", type: "function", en: "Callback fired after the user clicks the copy button.", id: "Callback dipanggil setelah pengguna mengklik tombol salin." },
    ],
  },
  {
    id: "AddImage",
    name: "Image",
    en: "Embeds an image from a Roblox asset ID or HTTP URL, with optional aspect ratio locking and corner rounding.",
    id_: "Menyematkan gambar dari ID aset Roblox atau URL HTTP, dengan penguncian rasio aspek dan pembulatan sudut opsional.",
    collapsible: true,
    code: `secControls:AddImage({
    Image       = "rbxassetid://6894586021",
    AspectRatio = "16:9",
    Radius      = 8,
})`,
    specialProps: [
      { name: "Image",       type: "string", en: 'rbxassetid:// string or HTTPS image URL.', id: 'String rbxassetid:// atau URL gambar HTTPS.' },
      { name: "AspectRatio", type: "string", en: 'Lock to a ratio like "16:9", "4:3", "1:1". Natural size if omitted.', id: 'Kunci ke rasio seperti "16:9", "4:3", "1:1". Ukuran alami jika dihilangkan.' },
      { name: "Radius",      type: "number", default: "0", en: "Corner radius in pixels. 0 = sharp corners.", id: "Radius sudut dalam piksel. 0 = sudut tajam." },
    ],
  },
  {
    id: "AddCollapsibleSection",
    name: "Collapsible Section",
    en: "A collapsible group added directly on a Tab (not a Section). Can contain most elements. Opens/closes independently.",
    id_: "Grup yang bisa dilipat, ditambahkan langsung ke Tab (bukan Section). Bisa berisi sebagian besar elemen. Buka/tutup secara independen.",
    collapsible: false,
    code: `local Collapsible = tabs.Main:AddCollapsibleSection({
    Title = "Advanced Options",
    Open  = false,
})

Collapsible:AddToggle("advToggle", {
    Title    = "Debug Mode",
    Default  = false,
    Callback = function(v) print(v) end,
})

Collapsible:AddSlider("advSlider", {
    Title   = "Render Distance",
    Default = 50, Min = 0, Max = 100,
})

Collapsible:SetOpen(true)`,
    specialProps: [
      { name: "Open", type: "boolean", default: "false", en: "Whether the section starts expanded (true) or collapsed (false).", id: "Apakah section dimulai dalam keadaan terbuka (true) atau tertutup (false)." },
    ],
  },
  {
    id: "AddGroup",
    name: "Group (multi-column)",
    en: "Creates a multi-column layout inside a Section. Returns column containers — add elements to each column.",
    id_: "Membuat tata letak multi-kolom di dalam Section. Mengembalikan wadah kolom — tambahkan elemen ke setiap kolom.",
    collapsible: true,
    code: `local Cols = secControls:AddGroup({ Columns = 2 })

Cols[1]:AddToggle("leftToggle", {
    Title    = "Left Option",
    Default  = false,
    Callback = function(v) print("Left:", v) end,
})

Cols[2]:AddToggle("rightToggle", {
    Title    = "Right Option",
    Default  = true,
    Callback = function(v) print("Right:", v) end,
})`,
    specialProps: [
      { name: "Columns", type: "number", default: "2", en: "Number of equal-width columns to split into.", id: "Jumlah kolom lebar-sama untuk dibagi." },
    ],
  },
  {
    id: "AddVideo",
    name: "Video",
    en: "Embeds a video player using a Roblox asset ID.",
    id_: "Menyematkan pemutar video menggunakan ID aset Roblox.",
    collapsible: true,
    code: `secControls:AddVideo({
    Video    = "rbxassetid://12345678",
    AutoPlay = false,
})`,
    specialProps: [
      { name: "Video",    type: "string",  en: "rbxassetid:// URL of the video asset.", id: "URL rbxassetid:// dari aset video." },
      { name: "AutoPlay", type: "boolean", default: "false", en: "Start playing automatically when the section is visible.", id: "Mulai putar otomatis saat section terlihat." },
    ],
  },
  {
    id: "AddAudio",
    name: "Audio",
    en: "Embeds an audio player supporting Roblox asset IDs and HTTP audio URLs.",
    id_: "Menyematkan pemutar audio yang mendukung ID aset Roblox dan URL audio HTTP.",
    collapsible: true,
    code: `secControls:AddAudio({
    Audio    = "rbxassetid://12345678",
    AutoPlay = true,
})

secControls:AddAudio({
    Audio    = "https://example.com/audio.mp3",
    AutoPlay = false,
})`,
    specialProps: [
      { name: "Audio",    type: "string",  en: "rbxassetid:// or HTTPS URL of the audio file.", id: "rbxassetid:// atau URL HTTPS dari file audio." },
      { name: "AutoPlay", type: "boolean", default: "false", en: "Begin playback automatically.", id: "Mulai putar otomatis." },
    ],
  },
  {
    id: "AddViewport",
    name: "Viewport",
    en: "Embeds a live 3D viewport. Accepts a Roblox Model/BasePart with optional camera and interaction.",
    id_: "Menyematkan viewport 3D langsung. Menerima Model/BasePart Roblox dengan kamera dan interaksi opsional.",
    collapsible: true,
    code: `secControls:AddViewport({
    Model          = workspace.MyModel,
    Interactive    = true,
    SetAspectRatio = "16:9",
})

local cam = Instance.new("Camera")
cam.CFrame = CFrame.new(0, 5, 10) * CFrame.Angles(0, math.pi, 0)

secControls:AddViewport({
    Model       = workspace.MyModel,
    Camera      = cam,
    Interactive = false,
})`,
    specialProps: [
      { name: "Model",          type: "Model | BasePart", en: "The 3D object to render inside the viewport.", id: "Objek 3D yang akan dirender di dalam viewport." },
      { name: "Camera",         type: "Camera",           en: "Optional custom Camera. Default orbiting camera used if omitted.", id: "Kamera kustom opsional. Kamera orbit default digunakan jika dihilangkan." },
      { name: "Interactive",    type: "boolean",          default: "false", en: "Allow user to orbit/zoom the model with mouse.", id: "Izinkan pengguna orbit/zoom model dengan mouse." },
      { name: "SetAspectRatio", type: "string",           en: 'Lock viewport to a ratio like "16:9".', id: 'Kunci viewport ke rasio seperti "16:9".' },
    ],
  },
  {
    id: "AddDiscord",
    name: "Discord Widget",
    en: "Renders a Discord server invite widget showing member count and a join button.",
    id_: "Merender widget undangan server Discord yang menampilkan jumlah member dan tombol bergabung.",
    collapsible: true,
    code: `secControls:AddDiscord({
    InviteCode = "abc123",
})`,
    specialProps: [
      { name: "InviteCode", type: "string", en: 'The invite code from discord.gg/InviteCode.', id: 'Kode undangan dari discord.gg/KodeUndangan.' },
    ],
  },
  {
    id: "AddDivider",
    name: "Divider",
    en: "Inserts a thin horizontal line to visually separate elements inside a section.",
    id_: "Menyisipkan garis horizontal tipis untuk memisahkan elemen secara visual di dalam section.",
    collapsible: true,
    code: `secControls:AddToggle("toggle1", { Title = "Option A", Default = false })

secControls:AddDivider()

secControls:AddToggle("toggle2", { Title = "Option B", Default = false })`,
  },
  {
    id: "AddSpace",
    name: "Space",
    en: "Inserts empty vertical spacing between elements.",
    id_: "Menyisipkan spasi vertikal kosong antar elemen.",
    collapsible: true,
    code: `secControls:AddToggle("toggle1", { Title = "Option A", Default = false })

secControls:AddSpace({ Size = 20 })

secControls:AddToggle("toggle2", { Title = "Option B", Default = false })`,
    specialProps: [
      { name: "Size", type: "number", en: "Height of the gap in pixels.", id: "Tinggi celah dalam piksel." },
    ],
  },
];

function PropBadge({ type }: { type: string }) {
  return (
    <Badge variant="outline" className="font-mono text-[11px] text-primary border-primary/30 bg-primary/5 px-1.5 py-0">
      {type}
    </Badge>
  );
}

function CollapsibleBadge({ ok }: { ok: boolean }) {
  const { lang } = useLang();
  return ok ? (
    <Badge variant="outline" className="text-[10px] border-green-500/40 text-green-500 bg-green-500/5 px-1.5 py-0">
      {lang === "id" ? "✓ Bisa di Collapsible" : "✓ Works in CollapsibleSection"}
    </Badge>
  ) : (
    <Badge variant="outline" className="text-[10px] border-amber-500/40 text-amber-500 bg-amber-500/5 px-1.5 py-0">
      {lang === "id" ? "Tab saja" : "Tab-level only"}
    </Badge>
  );
}

export default function Elements() {
  const { lang } = useLang();

  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          <T en="Elements Reference" id="Referensi Elemen" />
        </h1>
        <p className="text-muted-foreground text-lg">
          <T
            en="Complete documentation for all UI elements, including Special Properties and Luau examples. Elements are always added on a section (secName:Add...), except AddCollapsibleSection which is added on a tab (tabs.Name:Add...)."
            id="Dokumentasi lengkap untuk semua elemen UI, termasuk Special Properties dan contoh Luau. Elemen selalu ditambahkan ke section (secName:Add...), kecuali AddCollapsibleSection yang ditambahkan ke tab (tabs.Name:Add...)."
          />
        </p>
      </div>

      <Accordion type="multiple" className="w-full space-y-2">
        {ELEMENTS.map((el) => (
          <AccordionItem
            key={el.id}
            value={el.id}
            className="border-border/40 bg-card rounded-lg overflow-hidden border"
          >
            <AccordionTrigger className="px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-colors hover:no-underline">
              <div className="flex flex-wrap items-center gap-2 text-left">
                <span className="font-mono text-sm font-semibold text-primary">{el.id}</span>
                <span className="text-sm text-muted-foreground hidden sm:inline-block">— {el.name}</span>
                {el.collapsible !== undefined && <CollapsibleBadge ok={el.collapsible} />}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-5 pt-2 space-y-5">
              <p className="text-sm text-muted-foreground">
                {lang === "id" ? el.id_ : el.en}
              </p>

              <CodeBlock code={el.code} language="lua" title={`${el.id}.lua`} />

              {el.specialProps && el.specialProps.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <T en="Special Properties" id="Properti Khusus" />
                    <span className="text-xs font-normal text-muted-foreground">
                      ({el.specialProps.length})
                    </span>
                  </h4>
                  <div className="rounded-lg border border-border/40 overflow-hidden">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border/40 bg-muted/40">
                          <th className="text-left px-3 py-2 font-medium text-muted-foreground w-[110px]">
                            <T en="Property" id="Properti" />
                          </th>
                          <th className="text-left px-3 py-2 font-medium text-muted-foreground hidden sm:table-cell w-[130px]">Type</th>
                          <th className="text-left px-3 py-2 font-medium text-muted-foreground hidden md:table-cell w-[70px]">
                            <T en="Default" id="Default" />
                          </th>
                          <th className="text-left px-3 py-2 font-medium text-muted-foreground">
                            <T en="Description" id="Deskripsi" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {el.specialProps.map((prop, i, arr) => (
                          <tr key={prop.name} className={i < arr.length - 1 ? "border-b border-border/30" : ""}>
                            <td className="px-3 py-2.5 font-mono text-[12px] font-semibold text-foreground align-top">
                              {prop.name}
                            </td>
                            <td className="px-3 py-2.5 align-top hidden sm:table-cell">
                              <PropBadge type={prop.type} />
                            </td>
                            <td className="px-3 py-2.5 text-xs text-muted-foreground font-mono align-top hidden md:table-cell">
                              {prop.default ?? <span className="opacity-40 italic">—</span>}
                            </td>
                            <td className="px-3 py-2.5 text-xs text-muted-foreground leading-relaxed align-top">
                              {lang === "id" ? prop.id : prop.en}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
