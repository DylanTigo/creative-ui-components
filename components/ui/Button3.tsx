"use client";
import Link from "next/link";
import { motion, useMotionValue } from "motion/react";

const Button3 = ({ children }: { children: string }) => {

  const cusorWidth = 152;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent) => {
    x.set(e.offsetX-cusorWidth/2);
    y.set(e.offsetY-cusorWidth/2);
  };

  return (
    <Link
      href="#"
      className="relative rounded-full overflow-hidden border border-zinc-950 min-w-32"
      onMouseEnter={() => window.addEventListener("mousemove", handleMouseMove)}
      onMouseLeave={() =>
        window.removeEventListener("mousemove", handleMouseMove)
      }
    >
      <motion.div
       className="flex justify-center items-center gap-2 px-6 py-3 hover:text-white"
        whileHover="hovered"
        initial="initial"
        layout
      >
        {children}
        <motion.span
          variants={{
            initial: { scale: 0 },
            hovered: { scale: 1 },
          }}
           style={{
            width: cusorWidth,
            left: x,
            top: y,
           }}
          className="absolute aspect-square top-0 left-0 bg-sky-800 rounded-full pointer-events-none -z-10"
        ></motion.span>
      </motion.div>
    </Link>
  );
};

export default Button3;
