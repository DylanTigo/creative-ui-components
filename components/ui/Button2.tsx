"use client";

import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Button2 = ({ children }: { children: string }) => {
  const splitText = children.split("");

  const charVariants = {
    initial: {
      y: 0,
    },
    hovered: {
      y: "-100%",
    },
  };

  return (
    <Link href="#">
      <motion.div
        className="btn group border border-zinc-950"
        whileHover="hovered"
        initial="initial"
      >
        <span className="btn-2-text h-6 flex flex-col">
          <span className="w-fit h-fit">
            {splitText.map((char, index) => (
              <motion.span
                variants={charVariants}
                transition={{
                  delay: index * 0.01,
                  ease: "easeInOut",
                }}
                key={index + char}
                className="char-span inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
          <span className="w-fit h-fit">
            {splitText.map((char, index) => (
              <motion.span
                variants={charVariants}
                transition={{
                  delay: index * 0.01,
                  ease: "easeInOut",
                }}
                key={index + "_2" + char}
                className="char-span inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </span>
      </motion.div>
    </Link>
  );
};

export default Button2;
