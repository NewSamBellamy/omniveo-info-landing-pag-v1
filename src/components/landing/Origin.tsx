import { motion } from "framer-motion";

const MILESTONES = [
  {
    date: "Spring 2025",
    title: "The hackathon",
    body: "Shannon, Tobi, and Maruf met in a Discord during the Bolt.new hackathon and built their first prototype together.",
  },
  {
    date: "Summer 2025",
    title: "The decision to keep going",
    body: "The competition ended; the working rhythm didn't. The team kept building together.",
  },
  {
    date: "August 2025 – Present",
    title: "OmniVeo",
    body: "Officially incorporated. A year and a half of research, prototypes, and building with AI led to the studio's first products.",
  },
  {
    date: "What's next",
    title: "First open-source release",
    body: "Timeline to be announced",
    upcoming: true
  }
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
            We lost our first hackathon.{" "}
            <em className="font-serif font-normal italic">
              Then we kept building.
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
              OmniVeo started as three strangers in a hackathon Discord —
              Shannon in California, Tobi in Lagos, Maruf in Dhaka — testing
              whether they could build something real under pressure.
            </p>
            <p>
              They didn't win. But somewhere in those two weeks, the
              experiment stopped being about the competition. What started as
              a prototype for an AI creative tutor turned into a question:
              what tools would make it dramatically easier for people to
              create, launch, and earn on their own?
            </p>
            <p>
              By August they had their answer, and the company to go with it.
              For the past year and a half, we've been building with AI —
              researching, prototyping, and throwing out what didn't work.
              Now we're opening up what we've made, for good.
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
                      m.upcoming
                        ? "border-orange-400 bg-transparent border-dashed"
                        : i === MILESTONES.length - 2
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
