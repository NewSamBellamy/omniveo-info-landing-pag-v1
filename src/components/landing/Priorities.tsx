import { motion } from "framer-motion";

const PRIORITIES = [
  {
    badge: "01",
    tag: "LEARN",
    title: "Lowering the barrier to build",
    body: "Complex systems shouldn't take years to master. We build software that teaches by doing — real projects, not another tutorial you'll abandon halfway through.",
  },
  {
    badge: "02",
    tag: "BUILD",
    title: "Practical workflows over novelty toys",
    body: "No hype bots. We engineer tools that cut friction and repetitive work, so solo founders and creators can ship things they're actually proud of.",
  },
  {
    badge: "03",
    tag: "OPEN SOURCE",
    title: "Community first, real value for free",
    body: "Everything we build stays free and open at its core. Open source keeps us honest, keeps our work transparent, and keeps it available to anyone — not just paying customers.",
  },
  {
    badge: "04",
    tag: "SUSTAINABILITY",
    title: "Supporting creator independence",
    body: "Software should help you earn, not just spend. Our long-term goal is simple: help creators, founders, and builders make an independent living from their own work.",
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

        <div className="mt-16 flex flex-col gap-6 max-w-4xl mx-auto">
          {PRIORITIES.map((item, i) => (
            <motion.div
              key={item.badge}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-10 border-t border-black/[0.08] pt-8 pb-4"
            >
              <div className="flex-shrink-0 w-24">
                <span className="font-mono text-3xl font-light text-orange-400">
                  {item.badge}
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
