import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const TEAM = [
  {
    name: "Shannon Long",
    role: "Founder",
    focus: "Product Direction & Operations",
    location: "Murrieta, California",
    bio: "Runs product direction, operations, and community. Believes anyone willing to put in the work can learn to build real things.",
  },
  {
    name: "Tobi",
    role: "Co-Founder",
    focus: "Head of Design",
    location: "Lagos, Nigeria",
    bio: "Owns product design and user experience. Focused on clean, simple interfaces that stay out of your way.",
  },
  {
    name: "Maruf",
    role: "Co-Founder",
    focus: "Lead Engineer",
    location: "Dhaka, Bangladesh",
    bio: "Owns backend architecture and full-stack engineering. Builds reliable systems that turn product ideas into working software.",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
            The team
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-5xl">
            Small team,{" "}
            <em className="font-serif font-normal italic">wide reach</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-neutral-500">
            Three founders who've been building together since 2025.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="ov-card ov-card-hover rounded-3xl bg-white p-8"
            >
              {/* Monogram avatar + role badge */}
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 font-display text-base font-semibold text-white">
                  {member.name.charAt(0)}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                  {member.role}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-900">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-neutral-500">
                {member.focus}
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-neutral-400">
                <MapPin className="h-3 w-3" />
                {member.location}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-neutral-500">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
