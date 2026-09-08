import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-1.5 md:items-start">
          <span className="font-display text-base font-semibold tracking-tight text-white">
            OmniVeo
          </span>
          <span className="text-xs text-neutral-500">
            © 2026 OmniVeo. Open source foundations.
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 md:items-end">
          <a
            href="mailto:shannon@omniveo.info"
            className="text-xs text-neutral-400 hover:text-white transition-colors"
          >
            shannon@omniveo.info
          </a>
          <a
            href="https://github.com/NewSamBellamy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            github.com/NewSamBellamy
          </a>
        </div>
      </div>
    </footer>
  );
}
