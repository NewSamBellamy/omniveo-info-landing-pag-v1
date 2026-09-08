import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Priorities from "@/components/landing/Priorities";
import CurrentStage from "@/components/landing/CurrentStage";
import Origin from "@/components/landing/Origin";
import Team from "@/components/landing/Team";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white antialiased"
    >
      <Navbar />
      <main>
        <Hero />
        <div className="ov-hairline mx-auto max-w-6xl" aria-hidden="true" />
        <Priorities />
        <CurrentStage />
        <div className="ov-hairline mx-auto max-w-6xl" aria-hidden="true" />
        <Origin />
        <div className="ov-hairline mx-auto max-w-6xl" aria-hidden="true" />
        <Team />
      </main>
      <Footer />
    </motion.div>
  );
}
