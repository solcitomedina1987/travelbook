"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type AttractionImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function AttractionImage({
  src,
  alt,
  className,
  sizes = "160px",
  priority = false,
  fill = true,
  width,
  height,
}: AttractionImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-navy via-navy-soft to-teal/40 shadow-sm",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="h-8 w-8 text-offwhite/70" />
        <span className="sr-only">{alt}</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("rounded-lg object-cover shadow-sm", className)}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 320}
      height={height ?? 200}
      priority={priority}
      sizes={sizes}
      className={cn("rounded-lg object-cover shadow-sm", className)}
      onError={() => setFailed(true)}
    />
  );
}
