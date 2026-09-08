import { motion } from "framer-motion";
import { BookOpen, Hammer, Code2, Coins } from "lucide-react";

const PRIORITIES = [
  {
    badge: "01 / LEARN",
    icon: BookOpen,
    title: "Lowering the barrier to build",
    body: "Complex systems shouldn't require years of trial and error to master. We build intuitive software that helps people learn by building real projects—skipping tutorial paralysis completely.",
  },
  {
    badge: "02 / BUILD",
    icon: Hammer,
    title: "Practical workflows over novelty toys",
    body: "We don't build disposable hype bots. We engineer tools that eliminate technical friction and repetitive operational overhead, allowing solo founders and creators to ship production-grade work.",
  },
  {
    badge: "03 / OPEN SOURCE",
    icon: Code2,
    title: "Community first, real value for free",
    body: "Our priority is providing real value to the community for free. We believe open-source foundations make technology honest, transparent, and accessible to anyone with an internet connection.",
  },
  {
    badge: "04 / SUSTAINABILITY",
    icon: Coins,
    title: "Supporting creator independence",
    body: "Software should help put money in your pocket, not just drain your bank account. Our long-term mission is to empower creators, founders, and builders to earn a real, independent living from their work.",
  },
];

export default function Priorities() {
  return (
    <section id="build" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-mono text-xs tracking-widest text-neutral-500">
            WHAT WE ARE FOCUSED ON
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for people who make things
          </h2>
          <p className="mt-2 text-base text-neutral-400">
            We are engineering open-source tools anchored around four
            foundational pillars:
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {PRIORITIES.map((item, i) => (
            <motion.div
              key={item.badge}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: (i % 2) * 0.1,
              }}
              className="ov-card ov-card-hover rounded-2xl bg-neutral-950/80 p-6 sm:p-8 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-neutral-900">
                  <item.icon className="h-4 w-4 text-neutral-300" />
                </span>
                <span className="font-mono text-[11px] tracking-widest text-neutral-500">
                  {item.badge}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
