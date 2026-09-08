import { motion } from "framer-motion";

export default function CurrentStage() {
  return (
    <section id="stage" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="ov-card max-w-4xl mx-auto rounded-2xl bg-neutral-950 p-8 shadow-2xl sm:p-12"
        >
          <p className="font-mono text-xs tracking-widest text-neutral-500">
            CURRENT STAGE
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We are in the lab.
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-neutral-400">
            <p>
              We do not have commercial products on the shelf right now. We are
              an early-stage lab running research, testing prototypes, and
              building our foundations in public across three time zones.
            </p>
            <p>
              If you are a founder trying to launch, a builder hacking on an
              idea, or a creator looking for better tooling, drop your email
              into the waitlist above. We will reach out when early test builds
              are ready for feedback.
            </p>
          </div>
          <a
            href="#waitlist"
            className="mt-8 inline-flex items-center rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors"
          >
            Join Waitlist
          </a>
        </motion.div>
      </div>
    </section>
  );
}
