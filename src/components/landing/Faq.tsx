import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What is OmniVeo?",
    a: "OmniVeo is a small, independent AI studio building practical, open-source software for creators, founders, and builders. We're not a big company with a big roadmap — we're three people who like solving real problems and giving the solutions away.",
  },
  {
    q: "What are you working on right now?",
    a: "Our first products are in active development after a year and a half of R&D. We're not sharing specifics until they're ready to use — but once they ship, they'll be free and open-source, and the waitlist is the first place you'll hear about it.",
  },
  {
    q: "Will it be free?",
    a: "Yes. Everything we build stays free and open-source at its core, forever. [NEEDS FOUNDER INPUT]",
  },
  {
    q: "When will I hear back after joining the waitlist?",
    a: "We'll email you directly — from a founder, not a no-reply address — as soon as our first tools are ready to try. No spam, no filler updates in between.",
  },
  {
    q: "I run a business. Can we work together?",
    a: "Possibly. We're open to partnerships, integrations, and interesting problems worth solving. Email a founder directly and tell us what you have in mind.",
  },
  {
    q: "Who's behind OmniVeo?",
    a: "Three founders who met as strangers in a hackathon Discord: Shannon (Murrieta, California), Tobi (Lagos, Nigeria), and Maruf (Dhaka, Bangladesh). More on each of us is in the Team section above.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-5xl">
            Questions,{" "}
            <em className="font-serif font-normal italic">answered</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="ov-card mt-12 rounded-3xl bg-white px-6 py-2 sm:px-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((item) => (
              <AccordionItem
                key={item.q}
                value={item.q}
                className="border-black/[0.08]"
              >
                <AccordionTrigger className="text-left text-[15px] font-medium text-neutral-900 hover:no-underline hover:text-neutral-600">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-neutral-500">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
