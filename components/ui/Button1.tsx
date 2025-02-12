"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const Button1 = () => {
  return (
    <Link
        href="#"
        className="btn"
      >
        <span className="size-2 rounded-full bg-zinc-100 group-hover:scale-[40] group-hover:bg-sky-800 transition-elt"></span> 
        <p className="z-10 group-hover:-translate-x-4 transition-elt">About us</p>
        <ArrowRightIcon className="size-3.5 stroke-zinc-100 absolute top-1/2 -translate-y-1/2 -right-3 group-hover:right-4 transition-elt" />
      </Link>
  )
}

export default Button1