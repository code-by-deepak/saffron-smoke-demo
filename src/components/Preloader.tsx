import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1 }}
              className="flex items-center justify-center mb-6"
            >
              <Flame className="h-8 w-8 text-gold flicker" strokeWidth={1.3} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.45em" }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="font-display text-3xl md:text-5xl text-gold candle-glow"
            >
              SAFFRON &amp; SMOKE
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, delay: 0.4 }}
              className="gold-divider mt-6 mx-auto w-40"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
