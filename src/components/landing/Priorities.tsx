import { motion } from "framer-motion";
import { BookOpen, Hammer, Code2, Coins } from "lucide-react";

const PRIORITIES = [
  {
    badge: "01",
    tag: "LEARN",
    icon: BookOpen,
    title: "Lowering the barrier to build",
    body: "Complex systems shouldn't take years to master. We build software that helps people learn by making real things, instead of getting stuck in tutorials.",
  },
  {
    badge: "02",
    tag: "BUILD",
    icon: Hammer,
    title: "Practical workflows over novelty toys",
    body: "No hype bots. We engineer tools that remove friction and repetitive work, so solo founders and creators can ship work they're proud of.",
  },
  {
    badge: "03",
    tag: "OPEN SOURCE",
    icon: Code2,
    title: "Community first, real value for free",
    body: "The foundations of what we build stay free and open. Open source keeps technology honest, transparent, and available to anyone.",
  },
  {
    badge: "04",
    tag: "SUSTAINABILITY",
    icon: Coins,
    title: "Supporting creator independence",
    body: "Software should help you earn, not just spend. Our long-term goal is for creators, founders, and builders to make an independent living from their work.",
  },
];

export default function Priorities() {
  return (
    <section id="build" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
            What we are focused on
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-5xl">
            Built for people who{" "}
            <em className="font-serif font-normal italic">make things</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-neutral-500">
            Four principles anchor everything we ship:
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
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
              className="ov-card ov-card-hover group rounded-3xl bg-white p-8 sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-neutral-50 text-neutral-700 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.18em] text-neutral-300">
                  {item.badge} / {item.tag}
                </span>
              </div>
              <h3 className="mt-7 text-lg font-semibold tracking-tight text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
