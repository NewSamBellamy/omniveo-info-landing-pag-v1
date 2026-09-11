import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CurrentStage() {
  return (
    <section id="stage" className="relative scroll-mt-24 pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-neutral-900 p-8 shadow-[0_32px_80px_-32px_rgba(0,0,0,0.45)] sm:p-14"
        >
          {/* Soft warm glow inside the dark card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
              Where we are
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              First products{" "}
              <em className="font-serif font-normal italic">coming soon.</em>
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-neutral-300">
              <p>
                We don't have anything on the shelf yet — and we're not going to
                pretend otherwise. The last year and a half went into research,
                prototypes, and figuring out what's actually worth building.
              </p>
              <p>
                Going forward, everything we ship will be free and open-source
                from day one. Our goal is a steady rhythm, not a big launch: a
                new tool roughly every 4 to 8 weeks, built for people who make
                things and shaped by the community using them.
              </p>
              <p>
                Want to try the first ones early? Join the waitlist — we'll
                email you the moment a build is ready.
              </p>
            </div>
            
            {/* Release Rhythm Visual Strip */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="flex items-center gap-4 sm:gap-6 text-sm font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-400/80 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                  <span className="text-neutral-200">Tool 01</span>
                </div>
                <div className="h-px w-8 sm:w-12 bg-white/10" />
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <span>Tool 02</span>
                </div>
                <div className="h-px w-8 sm:w-12 bg-white/10" />
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <span>Tool 03</span>
                </div>
                <div className="hidden sm:block h-px w-12 bg-white/10" />
                <span className="hidden sm:inline-block italic text-neutral-500">
                  Every 4–8 weeks
                </span>
              </div>
            </div>

            <a
              href="#waitlist"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200"
            >
              Join Waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
