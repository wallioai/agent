"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoImage from "@/assets/images/logo.png";

export default function Loader() {
  return (
    <div className="absolute inset-0 z-50 bg-foreground/10 backdrop-blur-[1px]">
      <div className="flex size-full items-center justify-center bg-background/10">
        <motion.div
          className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-2xl border bg-background shadow-lg"
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
            <Image
              src={LogoImage}
              width={260}
              height={260}
              alt={"Logo"}
              priority
              className={"h-14 w-14 rounded-md"}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
