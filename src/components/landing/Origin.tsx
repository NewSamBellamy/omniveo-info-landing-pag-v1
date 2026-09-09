import { motion } from "framer-motion";

const MILESTONES = [
  {
    date: "Spring 2025",
    title: "Bolt.new 30-Day Hackathon",
    body: "Joined mid-competition. Met in Discord across 3 continents. Built first prototype.",
  },
  {
    date: "Post-Hackathon 2025",
    title: "The Discord Stayed Open",
    body: "Turned a 14-hour time zone gap into a continuous build loop.",
  },
  {
    date: "August 2025 – Present",
    title: "Incorporation & Lab R&D",
    body: "Official commitment. Over 1.5 years researching, building, and refining tools in the open.",
  },
];

export default function Origin() {
  return (
    <section id="origin" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
            How we started
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-5xl">
            We lost our first hackathon. Then we spent the next{" "}
            <em className="font-serif font-normal italic">
              year and a half building.
            </em>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-[15px] leading-relaxed text-neutral-600 sm:text-base"
          >
            <p className="text-lg leading-relaxed text-neutral-900 sm:text-xl">
              In spring 2025, Shannon, Tobi, and Maruf entered the 30-day
              Bolt.new hackathon — connecting inside Discord from California,
              Lagos, and Dhaka to test an idea and see if we could build under
              pressure.
            </p>
            <p>
              We didn't win. But in those two intense weeks, we discovered a
              shared obsession with building and an effortless rhythm working
              across a 14-hour time zone gap. Most hackathon groups move on
              when the submission deadline hits; we kept the Discord room open.
            </p>
            <p>
              By August, we made our commitment official and incorporated the
              company to pursue the vision long-term. For the last year and a
              half, we have been researching, building, testing, and refining
              in the open.
            </p>
            <p>
              What began as an early prototype for an AI creative tutor grew
              into a broader mission: giving creators, founders, and builders
              the tools they need to bring their ideas to life and build
              independent livelihoods.
            </p>
          </motion.div>

          {/* Timeline milestone arc */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="ov-card rounded-3xl bg-white p-8 sm:p-10"
          >
            <div className="relative space-y-10">
              {/* Vertical hairline */}
              <div
                aria-hidden="true"
                className="absolute bottom-3 left-[6px] top-3 w-px bg-black/10"
              />
              {MILESTONES.map((m, i) => (
                <div key={m.title} className="relative pl-9">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 h-[13px] w-[13px] rounded-full border ${
                      i === MILESTONES.length - 1
                        ? "border-neutral-900 bg-neutral-900 shadow-[0_0_0_4px_rgba(0,0,0,0.08)]"
                        : "border-neutral-300 bg-white"
                    }`}
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                    {m.date}
                  </p>
                  <h3 className="mt-2 text-base font-semibold tracking-tight text-neutral-900">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
