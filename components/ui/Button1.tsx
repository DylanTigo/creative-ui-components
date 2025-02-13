"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const Button1 = () => {
  return (
    <Link
        href="#"
        className="btn bg-zinc-950 text-zinc-100 group"
      >
        <span className="size-2 rounded-full bg-zinc-100 group-hover:scale-[40] group-hover:bg-sky-800 transition-elt"></span> 
        <p className="z-10 group-hover:-translate-x-4 transition-elt">About us</p>
        <ArrowRightIcon className="size-4 stroke-zinc-100 absolute top-1/2 -translate-y-1/2 -right-4 group-hover:right-5 transition-elt" />
      </Link>
  )
}

export default Button1