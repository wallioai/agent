"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "../icons/logo";

export default function Loader() {
  return (
    <div className="absolute inset-0 bg-foreground/10 backdrop-blur-[1px] z-50">
      <div className="bg-background/10 size-full flex items-center justify-center">
        <motion.div
          className="relative shadow-lg h-[4.5rem] w-[4.5rem] border rounded-2xl flex items-center justify-center overflow-hidden bg-background"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(0, 0, 0, 0.1)",
              "0 0 0 20px rgba(0, 0, 0, 0)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <Icon className="h-14 w-14 rounded-md" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
