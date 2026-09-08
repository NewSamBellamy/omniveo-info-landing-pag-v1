import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const TEAM = [
  {
    name: "Shannon Long",
    role: "Founder • Product Direction & Operations",
    location: "Murrieta, California, USA • UTC-8 PST",
    bio: "Focuses on product direction, operations, and community. Driven by the belief that anyone willing to put in the work can learn to build real things.",
  },
  {
    name: "Tobi",
    role: "Co-Founder • Head of Design",
    location: "Lagos, Nigeria • UTC+1 WAT",
    bio: "Product design, user experience, and visual craft. Focused on clean, humane interfaces that stay out of the builder's way.",
  },
  {
    name: "Maruf",
    role: "Co-Founder • Lead Engineer",
    location: "Dhaka, Bangladesh • UTC+6 BST",
    bio: "Backend architecture and full-stack engineering. Builds reliable, clean systems that turn product ideas into working software.",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-mono text-xs tracking-widest text-neutral-500">
            THE TEAM
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three builders across three continents
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-base text-neutral-400">
            Collaborating seamlessly across three time zones and over 1.5 years
            of continuous building.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-3">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="ov-card ov-card-hover rounded-2xl bg-neutral-950/80 p-6 backdrop-blur-md sm:p-7"
            >
              {/* Monogram avatar */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-900 font-display text-sm font-semibold text-white">
                {member.name.charAt(0)}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-neutral-300">
                {member.role}
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500">
                <MapPin className="h-3 w-3" />
                {member.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
