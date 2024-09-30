import { ClassArray, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...cssClasses: ClassArray) {
  return twMerge(clsx(cssClasses));
}
