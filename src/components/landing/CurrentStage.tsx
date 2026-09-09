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
                We don't have anything on the shelf yet. The past year and a
                half went into research, prototypes, and learning what's
                actually worth building. Now we're turning that work into our
                first real products.
              </p>
              <p>
                Want to try them early? Join the waitlist — we'll reach out
                when the first builds are ready.
              </p>
            </div>
            <a
              href="#waitlist"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200"
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
