import { motion } from "framer-motion";
import { Hammer, Briefcase } from "lucide-react";

const STATS = [
  { value: "3", label: "Continents, one Discord" },
  { value: "14h", label: "Time zone gap, daily overlap" },
  { value: "18+", label: "Months building in the open" },
];

const AUDIENCES = [
  {
    icon: Hammer,
    label: "For builders",
    title: "Ship without the friction",
    body: "Solo founders, creators, and makers: we are building the tools we always wanted — practical workflows that cut repetitive work so you can ship production-grade things, not tutorials. Join the waitlist and we will bring you in when early test builds are ready.",
    cta: { label: "Join the waitlist", href: "#waitlist" },
  },
  {
    icon: Briefcase,
    label: "For businesses",
    title: "Work with an open lab",
    body: "Partnerships, evaluations, licensing questions, or an open-source problem worth solving together — we make time for serious conversations. Write to us directly and a founder will personally reply.",
    cta: {
      label: "Email a founder",
      href: "mailto:shannon@omniveo.info",
    },
  },
];

export default function Highlights() {
  return (
    <section className="relative border-y border-white/10 bg-neutral-950/40">
      {/* Stats strip */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className="px-2 py-8 text-center sm:py-10"
            >
              <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-neutral-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Audience split */}
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="ov-card ov-card-hover flex flex-col rounded-2xl bg-neutral-950/80 p-7 backdrop-blur-md sm:p-9"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-neutral-900">
                  <a.icon className="h-4 w-4 text-neutral-300" />
                </span>
                <span className="font-mono text-[11px] tracking-widest text-neutral-500">
                  {a.label.toUpperCase()}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                {a.title}
              </h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-neutral-400">
                {a.body}
              </p>
              <a
                href={a.cta.href}
                className="mt-7 inline-flex w-fit items-center rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors"
              >
                {a.cta.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
