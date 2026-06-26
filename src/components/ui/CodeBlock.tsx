import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "lua", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-border/60 bg-[#1e1e1e] overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
        <div className="text-xs font-mono text-zinc-400">
          {title || language.toLowerCase()}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-zinc-400 hover:text-zinc-100 hover:bg-white/10"
          onClick={handleCopy}
        >
          {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
        </Button>
      </div>
      <div className="p-4 overflow-x-auto text-sm">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "0.875rem",
            fontFamily: "var(--app-font-mono)",
          }}
          codeTagProps={{
            style: { fontFamily: "var(--app-font-mono)" }
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
