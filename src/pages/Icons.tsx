import { CodeBlock } from "@/components/ui/CodeBlock";

const ICON_PACKS = [
  { name: "Solar Icons",    prefix: "solar/",    desc: "Modern, clean, and rounded icons." },
  { name: "Gravity UI",     prefix: "gravity/",  desc: "Sharp and minimalist icons." },
  { name: "Lucide",         prefix: "lucide/",   desc: "Beautiful and consistent icon set." },
  { name: "Craft",          prefix: "craft/",    desc: "Detailed technical icons." },
  { name: "Geist",          prefix: "geist/",    desc: "Vercel's precise icon library." },
  { name: "SF Symbols",     prefix: "sfsymbols/",desc: "Apple's system icons." },
  { name: "Heroicons",      prefix: "hero/",     desc: "Hand-crafted by the Tailwind makers." },
  { name: "Google Material",prefix: "gmi/",      desc: "Classic Google material design icons." }
];

export default function Icons() {
  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Icon Packs</h1>
        <p className="text-muted-foreground text-lg">
          Fluent-Modded comes with 8 comprehensive icon libraries built-in.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">Usage</h2>
        <p className="text-muted-foreground">
          Icons are referenced using the format{" "}
          <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">pack-prefix/icon-name</code>.
        </p>
        <CodeBlock code={`Tab:AddButton({ Title = "Home",    Icon = "solar/home-bold" })
Tab:AddButton({ Title = "Archive", Icon = "gravity/archive" })
Tab:AddButton({ Title = "Close",   Icon = "lucide/x" })`} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-border/40 pb-2">Available Packs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {ICON_PACKS.map((pack) => (
            <div key={pack.prefix} className="flex flex-col p-4 rounded-xl border border-border/50 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{pack.name}</h3>
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded text-primary">{pack.prefix}</span>
              </div>
              <p className="text-sm text-muted-foreground">{pack.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary">
        <p className="text-sm font-medium">
          Note: Use <code className="bg-background/50 px-1 py-0.5 rounded mx-1">FluentPro</code> to access all icon packs.
        </p>
      </div>
    </div>
  );
}
