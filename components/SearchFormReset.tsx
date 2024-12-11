"use client"

import { X } from "lucide-react";
import Link from "next/link";

const SeachFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if(form) form.reset();
    }
  return (
    <button className="search-btn text-white" type="reset" onClick={reset}>
        <Link href="/">
            <X className="size-5"/>
        </Link>
    </button>
  )
}

export default SeachFormReset