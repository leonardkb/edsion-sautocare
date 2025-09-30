import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 0, scale: 0.8, clipPath: "circle(0% at 50% 50%)" }}
        animate={{ opacity: 1, scale: 1, clipPath: "circle(75% at 50% 50%)" }}
        exit={{ opacity: 0, scale: 0.8, clipPath: "circle(0% at 50% 50%)" }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <motion.img
          src="/logo.png"
          alt="Edisons AutoCare Logo"
          className="w-46 h-46"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;