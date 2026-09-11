import { motion } from "framer-motion";
import { Github } from "lucide-react";

const NAV_LINKS = [
  { label: "What We Build", href: "#build" },
  { label: "Roadmap", href: "#stage" },
  { label: "Origin", href: "#origin" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between rounded-full border border-black/[0.08] bg-white/80 pl-5 pr-2 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_12px_32px_-16px_rgba(0,0,0,0.18)] backdrop-blur-md">
        {/* Wordmark */}
        <a
          href="#top"
          className="font-display text-base font-semibold tracking-tight text-neutral-900"
        >
          OmniVeo
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/NewSamBellamy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OmniVeo on GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.45)] transition-colors hover:bg-neutral-700"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </motion.header>
  );
}
