import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What exactly is OmniVeo?",
    a: "OmniVeo is an early-stage, open-source AI lab. We are a small team of founders building practical tools for creators, founders, and builders — out in the open, from day one.",
  },
  {
    q: "What are you building right now?",
    a: "Nothing is on the shelf yet. We are running research, testing prototypes, and laying foundations across three time zones. When early test builds are ready, waitlist members hear about them first.",
  },
  {
    q: "Is it really free?",
    a: "Our foundations are open source. Providing real value to the community for free is one of the four principles everything we ship is anchored to.",
  },
  {
    q: "When will I hear back after joining the waitlist?",
    a: "When an early build is ready for feedback. We are pre-release, so there is nothing to onboard you into today — joining the list is how you get early access.",
  },
  {
    q: "I run a business. Can we work together?",
    a: "For businesses and organizations: partnerships, evaluations, and collaboration on open-source problems all start with a conversation. Email shannon@omniveo.info and a founder will reply personally.",
  },
  {
    q: "Where is the team located?",
    a: "California, Lagos, and Dhaka — three continents, a 14-hour time zone gap, and one Discord channel that has stayed open for over a year and a half.",
  },
];

export default function Faq() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-widest text-neutral-500">FAQ</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Questions, answered
          </h2>
        </motion.div>

        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-white/10">
                <AccordionTrigger className="text-left font-display text-base font-medium text-white hover:no-underline hover:text-neutral-300">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-neutral-400">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
