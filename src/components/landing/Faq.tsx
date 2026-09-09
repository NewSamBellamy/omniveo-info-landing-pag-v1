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
    a: "An AI studio — a small team of designers and engineers building practical AI software for creators, founders, and builders.",
  },
  {
    q: "What are you working on right now?",
    a: "Our first products are in development now. The past year and a half went into research and prototypes; that work is becoming real tools, and waitlist members will try them first.",
  },
  {
    q: "Will it be free?",
    a: "The foundations of what we build stay free and open source. That's one of our core principles, not a marketing line.",
  },
  {
    q: "When will I hear back after joining the waitlist?",
    a: "When the first build is ready for feedback. There's nothing to onboard you into today — the waitlist is how you get early access.",
  },
  {
    q: "I run a business. Can we work together?",
    a: "Yes. Partnerships, collaborations, or a problem you think we should tackle — email shannon@omniveo.info and a founder will reply.",
  },
  {
    q: "Who's behind OmniVeo?",
    a: "Shannon, Tobi, and Maruf — three founders who met in a hackathon Discord in 2025 and never stopped building together.",
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
