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
            hovered: { scale: 1.4 },
          }}
          transition={{ duration: 0.3, ease: "ease  Out" }}
           style={{
            width: cusorWidth,
            left: x,
            top: y,
           }}
          className="absolute aspect-square top-0 left-0 bg-sky-800 rounded-full pointer-events-none -z-10"
        ></motion.span>
      </motion.div>
<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M150 150C150 130.302 146.12 110.796 138.582 92.5975C131.044 74.3986 119.995 57.8628 106.066 43.934C92.1372 30.0052 75.6013 18.9563 57.4025 11.4181C39.2037 3.87986 19.6983 -8.61039e-07 -6.55671e-06 0L0 150H150Z" fill="#D9D9D9"/>
</svg>

<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="150" r="150" fill="#D9D9D9"/>
</svg>


<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="150" r="150" fill="#D9D9D9"/>
</svg>
    </Link>
  );
};

export default Button3;
