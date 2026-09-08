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
    <section id="origin" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-widest text-neutral-500">
            HOW WE STARTED
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We lost our first hackathon. Then we spent the next year and a half
            building.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-5 text-sm sm:text-base leading-relaxed text-neutral-400"
          >
            <p>
              In spring 2025, Shannon, Tobi, and Maruf entered the 30-day
              Bolt.new hackathon. We joined halfway through the competition,
              connecting inside Discord from California, Lagos, and Dhaka to
              test an idea and see if we could build under pressure.
            </p>
            <p>
              We didn't win. But in those two intense weeks, we discovered a
              shared obsession with building and an effortless rhythm working
              across a 14-hour time zone gap. Most hackathon groups move on when
              the submission deadline hits; we kept the Discord room open.
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
            className="ov-card rounded-2xl bg-neutral-950/80 p-6 backdrop-blur-md sm:p-8"
          >
            <div className="relative space-y-8">
              {/* Vertical hairline */}
              <div
                aria-hidden="true"
                className="absolute left-[5px] top-2 bottom-2 w-px bg-white/10"
              />
              {MILESTONES.map((m, i) => (
                <div key={m.title} className="relative pl-8">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border ${
                      i === MILESTONES.length - 1
                        ? "border-white bg-white"
                        : "border-neutral-600 bg-neutral-950"
                    }`}
                  />
                  <p className="font-mono text-[11px] tracking-widest text-neutral-500">
                    {m.date}
                  </p>
                  <h3 className="mt-1.5 font-display text-base font-semibold tracking-tight text-white">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
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
