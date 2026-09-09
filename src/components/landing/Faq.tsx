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
