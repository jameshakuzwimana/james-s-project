"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./landing-page";

export default function LandingExperience() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!hasEntered ? (
        <motion.div
          key="landing"
          exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
          transition={{ duration: 0.5 }}
        >
          <LandingPage onEnter={() => setHasEntered(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-primary"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            aria-hidden="true"
          >
            <motion.div
              className="h-12 w-12"
              initial={{ scale: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <iframe
            src="/home"
            className="h-screen w-full border-0"
            title="Wisdom Instruction School Website"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
