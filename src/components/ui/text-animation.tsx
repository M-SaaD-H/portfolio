import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const roles = ["engineer", "developer", "designer", "programmer"];
const switchInterval = 2000;

const TextAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, switchInterval);
    return () => clearInterval(interval);
  }, []);

  const currentChars = useMemo(
    () => Array.from(roles[currentIndex]),
    [currentIndex],
  );

  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={currentIndex}
        className="flex gap-[0.5px] overflow-hidden font-sans tracking-tight"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.4 }}
      >
        {currentChars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 5, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -5, filter: "blur(5px)" }}
            transition={{ delay: i * 0.03, duration: 0.3 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  )
}

export default TextAnimation