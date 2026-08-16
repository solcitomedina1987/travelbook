"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  /** Optional local/CDN fallback if primary src fails */
  fallbackSrc?: string;
};

/**
 * Next.js Image with onError fallback to avoid broken park/itinerary photos.
 */
export function AttractionImage({
  src,
  alt,
  className,
  sizes = "160px",
  priority = false,
  fill = true,
  width,
  height,
  fallbackSrc = "/images/header-banner.jpg",
}: AttractionImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setFailed(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      return;
    }
    setFailed(true);
  };

  if (failed || !currentSrc) {
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
        key={currentSrc}
        src={currentSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("rounded-lg object-cover shadow-sm", className)}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      key={currentSrc}
      src={currentSrc}
      alt={alt}
      width={width ?? 320}
      height={height ?? 200}
      priority={priority}
      sizes={sizes}
      className={cn("rounded-lg object-cover shadow-sm", className)}
      onError={handleError}
    />
  );
}
