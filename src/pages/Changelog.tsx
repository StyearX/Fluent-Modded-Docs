import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const RELEASES = [
  {
    version: "v1.4.1",
    date: "Latest",
    type: "patch",
    changes: [
      "Fixed issue with SaveManager not ignoring theme settings correctly",
      "Minor UI adjustments to AMOLED theme",
      "Added new window options: UserInfoTop, UserInfoTitle, UserInfoSubtitle, UserInfoColor, TitleIcon, Icons, Font"
    ]
  },
  {
    version: "v1.4.0 Overhaul",
    date: "Major Update",
    type: "major",
    changes: [
      "Added 8 new built-in themes including Cosmic Violet and Galaxy Purple",
      "Introduced FluentPro — all managers (SaveManager, InterfaceManager, FloatingButtonManager, MediaManager) are now globals",
      "Added MediaManager for caching images and audio",
      "Added AddCollapsibleSection element",
      "Added Tab Favorites system with InterfaceManager persistence",
      "Improved performance of blur effects (Acrylic) on lower-end devices"
    ]
  },
  {
    version: "v1.3.0",
    date: "Update",
    type: "minor",
    changes: [
      "Added AddVideo and AddAudio elements",
      "Integrated FloatingButtonManager",
      "Added 3 new Icon Packs (Geist, Craft, SF Symbols)",
      "Improved slider precision and rounding options"
    ]
  },
  {
    version: "v1.2.9",
    date: "Patch",
    type: "patch",
    changes: [
      "Fixed dropdown scrolling issues",
      "Corrected text clipping in AddParagraph",
      "Added SetAspectRatio option to AddViewport"
    ]
  },
  {
    version: "v1.2.0",
    date: "Update",
    type: "minor",
    changes: [
      "Added AddCode element with copy functionality",
      "Added AddImage and AddViewport (3D) elements",
      "Added Custom Theme registration API"
    ]
  },
  {
    version: "v1.1.0",
    date: "Update",
    type: "minor",
    changes: [
      "Initial integration of Solar and Gravity icon packs",
      "Added AddGroup for multi-column layouts",
      "UI padding and spacing refinements"
    ]
  }
];

export default function Changelog() {
  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Changelog</h1>
        <p className="text-muted-foreground text-lg">
          History of updates and improvements to Fluent-Modded.
        </p>
      </div>

      <div className="relative border-l border-border/60 ml-3 md:ml-4 space-y-12 pb-8">
        {RELEASES.map((release, i) => (
          <div key={release.version} className="relative pl-8 md:pl-10">
            <div className={cn(
              "absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-card",
              i === 0 ? "border-primary bg-primary text-primary-foreground" : "border-muted"
            )}>
              {i === 0 ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-2 w-2 fill-muted-foreground text-muted-foreground" />}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
              <h2 className="text-2xl font-bold tracking-tight">{release.version}</h2>
              <div className="flex items-center gap-2">
                <span className={cn(
                  "px-2 py-0.5 rounded text-xs font-medium",
                  release.type === 'major' ? "bg-primary/20 text-primary" :
                  release.type === 'minor' ? "bg-blue-500/20 text-blue-500" :
                  "bg-muted text-muted-foreground"
                )}>
                  {release.date}
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {release.changes.map((change, j) => (
                <li key={j} className="text-muted-foreground flex gap-3">
                  <span className="text-border mt-1.5">•</span>
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
