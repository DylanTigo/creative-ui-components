"use client";

import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { ArrowRightIcon } from "lucide-react";

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
        className="btn group border border-zinc-950 min-w-32 group"
        whileHover="hovered"
        initial="initial"
      >
        <motion.span variants={{ initial: { x: 0 }, hovered: { x: "-5px" } }} transition={{ delay: 0.1, ease: "easeInOut" }} className="btn-2-text h-6 flex flex-col"> 
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
        </motion.span>
        <ArrowRightIcon className="size-4 stroke-zinc-950 absolute top-1/2 -translate-y-1/2 -right-4 group-hover:right-4 group-hover:-rotate-45 transition-elt" />
      </motion.div>
    </Link>
  );
};

export default Button2;
