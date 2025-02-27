"use client";

import type React from "react";
import { motion } from "framer-motion";

interface DotLoaderProps {
  color?: string;
  size?: number;
}

export const DotLoader: React.FC<DotLoaderProps> = ({
  color = "currentColor",
  size = 4,
}) => {
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          className="text-primary"
          key={index}
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: "50%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};
