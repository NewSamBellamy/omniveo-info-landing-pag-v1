import { useMutation } from "convex/react";
import { motion } from "framer-motion";
import { Layers, Users, Code2 } from "lucide-react";
import { useState } from "react";
import { api } from "@/convex/_generated/api";

const PILLARS = [
  {
    icon: Layers,
    title: "Modular & Lean",
    body: "Small surface area, composable parts, no heavy dependencies.",
  },
  {
    icon: Code2,
    title: "Open Source First",
    body: "Every tool we ship is built in the open, on public foundations.",
  },
  {
    icon: Users,
    title: "Community Owned",
    body: "Shaped by the people who use it — feedback drives the roadmap.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const joinWaitlist = useMutation(api.waitlist.joinWaitlist);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await joinWaitlist({ email, source: "landing-hero" });
      setStatus("success");
      setMessage(
        res.alreadyJoined
          ? "You're already on the list — talk soon."
          : "You're on the list. We'll reach out when early builds are ready.",
      );
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    }
  };

  return (
    <section id="top" className="relative overflow-hidden pt-20 sm:pt-28">
      {/* Ambient top spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
      >
        <svg
          className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2"
          viewBox="0 0 900 520"
          fill="none"
        >
          <defs>
            <radialGradient id="heroSpot" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
              <stop offset="45%" stopColor="#a3a3a3" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="900" height="520" fill="url(#heroSpot)" />
        </svg>
        <div className="absolute left-1/2 top-[-120px] h-64 w-[560px] -translate-x-1/2 rounded-full bg-white/[0.07] blur-3xl" />
      </div>

      {/* Fine grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ov-grid-bg [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Eyebrow badge */}
        <motion.div {...fadeUp} className="flex justify-center">
          <span className="rounded-full border border-white/10 bg-neutral-900/80 px-3.5 py-1 font-mono text-xs text-neutral-400">
            Early-Stage • Open Source Lab
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp}
          className="mx-auto mt-6 max-w-4xl text-center font-display text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-6xl md:text-7xl"
        >
          <span className="bg-gradient-to-b from-white via-white to-neutral-400 bg-clip-text text-transparent">
            AI tools for creators, founders, and builders.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp}
          className="mx-auto mt-6 max-w-xl text-center text-base text-neutral-400 sm:text-lg"
        >
          We're a global team of founders dedicated to building tools around the
          open source community.
        </motion.p>

        {/* Waitlist input bar */}
        <motion.div {...fadeUp} id="waitlist" className="mt-8 sm:mt-10">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md items-center gap-2 rounded-xl border border-white/15 bg-neutral-900/90 p-1.5 shadow-2xl backdrop-blur-md"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              className="flex-grow bg-transparent px-3 text-sm text-white placeholder-neutral-500 focus:outline-none min-w-0"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
          </form>

          {/* Micro-copy / status */}
          <div className="mt-3 text-center">
            {status === "success" || status === "error" ? (
              <p
                className={`text-xs ${
                  status === "success" ? "text-white" : "text-neutral-400"
                }`}
              >
                {message}
              </p>
            ) : (
              <p className="text-xs text-neutral-500">
                Pre-release. Questions or early ideas?{" "}
                <a
                  href="mailto:shannon@omniveo.info"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Email shannon@omniveo.info
                </a>
              </p>
            )}
          </div>
        </motion.div>

        {/* Studio Interface Canvas */}
        <motion.div {...fadeUp} className="mt-16 sm:mt-24">
          <div className="relative mx-auto max-w-4xl">
            {/* Ambient glow behind canvas */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-8 -top-10 h-40 rounded-full bg-white/[0.05] blur-3xl"
            />
            <div className="ov-card relative overflow-hidden rounded-2xl bg-neutral-950/80 backdrop-blur-md">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="ml-3 font-mono text-[11px] text-neutral-500">
                  omniveo // open-source-engine
                </span>
              </div>

              {/* Pillars */}
              <div className="grid gap-px bg-white/10 sm:grid-cols-3">
                {PILLARS.map((pillar, i) => (
                  <div
                    key={pillar.title}
                    className="bg-neutral-950/90 p-6 sm:p-8"
                  >
                    <pillar.icon className="h-5 w-5 text-neutral-300" />
                    <h3 className="mt-4 text-sm font-medium text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                      {pillar.body}
                    </p>
                    <div className="mt-6 flex items-center gap-1.5">
                      {Array.from({ length: 3 }).map((_, dotIdx) => (
                        <span
                          key={dotIdx}
                          className={`h-1 w-1 rounded-full ${
                            dotIdx <= i ? "bg-neutral-400" : "bg-neutral-800"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom hairline footer */}
              <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                <span className="font-mono text-[11px] text-neutral-600">
                  built in public
                </span>
                <span className="font-mono text-[11px] text-neutral-600">
                  MIT license
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
