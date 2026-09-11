import { motion } from "framer-motion";
import { Hammer, Briefcase } from "lucide-react";

const MARQUEE_ITEMS = [
  "Practical over hype",
  "Open source first",
  "Community owned",
  "Shipping every 4–8 weeks",
  "Creator independence",
  "Learn by building",
];

const STATS = [
  { value: "2025", label: "The year we got started" },
  { value: "3", label: "Founders, three cities" },
  { value: "1.5+", label: "Years in R&D before going public" },
];

const AUDIENCES = [
  {
    icon: Hammer,
    label: "For builders",
    title: "Real tools, not demos",
    body: "We build the software we wish existed — practical tools that remove real friction, not another AI demo that never ships. Join the waitlist to try new releases before anyone else.",
    cta: { label: "Join Waitlist", href: "#waitlist", primary: true },
  },
  {
    icon: Briefcase,
    label: "For businesses",
    title: "Work with us",
    body: "Partnerships, integrations, or a hard problem you think we should tackle — email us directly and a founder will reply.",
    cta: {
      label: "Email a Founder",
      href: "mailto:shannon@omniveo.info",
      primary: false,
    },
  },
];

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            {item}
          </span>
          <span aria-hidden="true" className="text-neutral-300">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Highlights() {
  return (
    <section className="relative mt-24 sm:mt-32">
      {/* Infinite marquee strip */}
      <div className="overflow-hidden border-y border-black/[0.06] bg-white py-4">
        <div className="ov-marquee flex w-max">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>

      {/* Stats strip */}
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20">
        <div className="grid grid-cols-1 divide-y divide-black/[0.08] rounded-3xl border border-black/[0.08] bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className="px-6 py-9 text-center"
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-neutral-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Audience split */}
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6 sm:pb-32">
        <div className="grid gap-5 md:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="ov-card ov-card-hover flex flex-col rounded-3xl bg-white p-8 sm:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white">
                  <a.icon className="h-4 w-4" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  {a.label}
                </span>
              </div>
              <h3 className="mt-7 font-display text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                {a.title}
              </h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-neutral-500">
                {a.body}
              </p>
              {a.cta.primary ? (
                <a
                  href={a.cta.href}
                  className="mt-8 inline-flex w-fit items-center rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-700"
                >
                  {a.cta.label}
                </a>
              ) : (
                <a
                  href={a.cta.href}
                  className="mt-8 inline-flex w-fit items-center rounded-full border border-black/10 bg-white px-5 py-2.5 text-xs font-semibold text-neutral-800 transition-colors hover:border-black/20 hover:bg-neutral-50"
                >
                  {a.cta.label}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
