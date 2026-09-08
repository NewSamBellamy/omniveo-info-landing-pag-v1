import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Link rows */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              OmniVeo
            </span>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              An early-stage, open-source AI lab. Tools for the people who make
              things.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-2.5">
              <p className="font-mono text-[11px] tracking-widest text-neutral-600">
                LAB
              </p>
              <a href="#build" className="text-sm text-neutral-400 hover:text-white transition-colors">
                What We Build
              </a>
              <a href="#stage" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Current Stage
              </a>
              <a href="#origin" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Origin
              </a>
              <a href="#team" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Team
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="font-mono text-[11px] tracking-widest text-neutral-600">
                CONTACT
              </p>
              <a
                href="mailto:shannon@omniveo.info"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                shannon@omniveo.info
              </a>
              <a
                href="https://github.com/NewSamBellamy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a href="#waitlist" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Join the waitlist
              </a>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="pointer-events-none mt-14 select-none overflow-hidden" aria-hidden="true">
          <p className="bg-gradient-to-b from-neutral-600 via-neutral-800 to-transparent bg-clip-text text-center font-display text-[18vw] font-bold leading-[0.85] tracking-[-0.05em] text-transparent">
            OmniVeo
          </p>
        </div>

        {/* Legal row */}
        <div className="mt-6 flex flex-col items-center gap-2 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
          <span className="text-xs text-neutral-600">
            © 2026 OmniVeo. Open source foundations.
          </span>
          <span className="font-mono text-[11px] text-neutral-700">
            omniveo.info
          </span>
        </div>
      </div>
    </footer>
  );
}
