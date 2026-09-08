import { motion } from "framer-motion";
import { Github } from "lucide-react";

const NAV_LINKS = [
  { label: "What We Build", href: "#build" },
  { label: "Current Stage", href: "#stage" },
  { label: "Origin", href: "#origin" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Wordmark */}
        <a
          href="#top"
          className="font-semibold tracking-tight text-white text-base"
        >
          OmniVeo
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/NewSamBellamy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OmniVeo on GitHub"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
          <a
            href="#waitlist"
            className="rounded-lg bg-white px-4 py-1.5 text-xs font-medium text-black hover:bg-neutral-200 transition-all"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </motion.header>
  );
}
