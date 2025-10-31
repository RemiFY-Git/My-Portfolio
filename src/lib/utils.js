import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs)=>{
    return twMerge(clsx(inputs));
}

// src/utils.js
/* export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
} */
