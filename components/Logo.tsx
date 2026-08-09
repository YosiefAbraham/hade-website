import Image from "next/image";
import logoWhite from "@/public/images/logo/logo-white.png";
import logoBlack from "@/public/images/logo/logo-black.png";

/* The real HADE logo (transparent background, generated from the
   original file by scripts/process-logo.mjs).
   variant "white" = for dark backgrounds (header, footer)
   variant "black" = for light backgrounds */

export default function Logo({
  className = "h-8",
  variant = "white",
}: {
  className?: string;
  variant?: "white" | "black";
}) {
  return (
    <Image
      src={variant === "white" ? logoWhite : logoBlack}
      alt="HADE"
      priority
      className={`${className} w-auto`}
    />
  );
}
