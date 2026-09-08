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
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-36">
      {/* Ambient top spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
      >
        <svg
          className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2"
          viewBox="0 0 1000 600"
          fill="none"
        >
          <defs>
            <radialGradient id="heroSpot" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="45%" stopColor="#a3a3a3" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#heroSpot)" />
        </svg>
        <div className="absolute left-1/2 top-[-140px] h-72 w-[640px] -translate-x-1/2 rounded-full bg-white/[0.08] blur-3xl" />
      </div>

      {/* Fine grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ov-grid-bg [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <span className="rounded-full border border-white/10 bg-neutral-900/80 px-3.5 py-1 font-mono text-xs text-neutral-400">
            Early-Stage • Open Source Lab
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mx-auto mt-8 max-w-5xl text-center font-display text-5xl font-bold leading-[1.04] tracking-[-0.035em] sm:text-7xl md:text-8xl"
        >
          <span className="bg-gradient-to-b from-white via-white to-neutral-400 bg-clip-text text-transparent">
            AI tools for creators, founders, and builders.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
          className="mx-auto mt-7 max-w-2xl text-center text-base text-neutral-400 sm:text-lg"
        >
          We're a global team of founders dedicated to building tools around the
          open source community.
        </motion.p>

        {/* Dual CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#waitlist"
            className="w-full sm:w-auto rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-neutral-200 transition-colors"
          >
            Join the Waitlist
          </a>
          <a
            href="#origin"
            className="w-full sm:w-auto rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white hover:bg-white/[0.07] transition-colors"
          >
            Our Story
          </a>
        </motion.div>

        {/* Waitlist input bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
          id="waitlist"
          className="mt-12"
        >
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
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="mt-20 sm:mt-28"
        >
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
                {PILLARS.map((pillar) => (
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
