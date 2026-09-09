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
    body: "The foundations of what we build stay open and free.",
  },
  {
    icon: Users,
    title: "Community Owned",
    body: "Shaped by the people who use it, not the other way around.",
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
    <section id="top" className="relative overflow-hidden pt-36 sm:pt-48">
      {/* Warm ambient light blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute left-[8%] top-[-80px] h-64 w-[420px] rounded-full bg-neutral-200/70 blur-3xl" />
        <div className="absolute right-[6%] top-[-40px] h-56 w-[380px] rounded-full bg-amber-100/60 blur-3xl" />
      </div>

      {/* Fine grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ov-grid-bg [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-neutral-900 sm:text-7xl md:text-[5.25rem]"
        >
          AI tools for{" "}
          <em className="font-serif font-normal italic tracking-[-0.015em]">
            creators, founders, and builders.
          </em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mx-auto mt-7 max-w-xl text-center text-base text-neutral-500 sm:text-lg"
        >
          We're a small team of designers and engineers building practical AI
          software — from first sketch to working product.
        </motion.p>

        {/* Dual CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#waitlist"
            className="w-full rounded-full bg-neutral-900 px-7 py-3 text-center text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)] transition-colors hover:bg-neutral-700 sm:w-auto"
          >
            Join the Waitlist
          </a>
          <a
            href="#origin"
            className="w-full rounded-full border border-black/10 bg-white px-7 py-3 text-center text-sm font-medium text-neutral-800 transition-colors hover:border-black/20 hover:bg-neutral-50 sm:w-auto"
          >
            Our Story
          </a>
        </motion.div>

        {/* Waitlist input pill */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
          id="waitlist"
          className="mt-12 scroll-mt-32"
        >
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-black/10 bg-white p-1.5 pl-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_48px_-20px_rgba(0,0,0,0.2)]"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              className="min-w-0 flex-grow bg-transparent text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-700 disabled:opacity-60"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
          </form>

          {/* Micro-copy / status */}
          <div className="mt-3 text-center">
            {status === "success" || status === "error" ? (
              <p
                className={`text-xs ${
                  status === "success" ? "text-neutral-900" : "text-red-600"
                }`}
              >
                {message}
              </p>
            ) : (
              <p className="text-xs text-neutral-500">
                Pre-release. Questions or early ideas?{" "}
                <a
                  href="mailto:shannon@omniveo.info"
                  className="text-neutral-700 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-neutral-900"
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
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.32 }}
          className="mt-20 sm:mt-28"
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Warm glow behind canvas */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-10 -top-12 h-48 rounded-full bg-orange-200/40 blur-3xl"
            />
            <div className="ov-card relative overflow-hidden rounded-3xl bg-white">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-black/[0.06] px-5 py-3.5">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                <span className="ml-3 font-mono text-[11px] text-neutral-400">
                  omniveo // how we build
                </span>
              </div>

              {/* Pillars */}
              <div className="grid gap-px bg-black/[0.06] sm:grid-cols-3">
                {PILLARS.map((pillar) => (
                  <div key={pillar.title} className="bg-white p-7 sm:p-8">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white">
                      <pillar.icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-5 text-sm font-semibold tracking-tight text-neutral-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                      {pillar.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom hairline footer */}
              <div className="flex items-center justify-between border-t border-black/[0.06] px-5 py-3.5">
                <span className="font-mono text-[11px] text-neutral-400">
                  omniveo.info
                </span>
                <span className="font-mono text-[11px] text-neutral-400">
                  est. 2025
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
