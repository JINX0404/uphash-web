"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface LayoutTransitionProps {
  children: ReactNode;
}

export default function LayoutTransition({ children }: LayoutTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.4,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}