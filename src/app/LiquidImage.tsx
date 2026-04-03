"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface LiquidImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  objectPosition?: string;
  children?: React.ReactNode;
}

export default function LiquidImage({
  src,
  alt,
  className = "",
  sizes = "50vw",
  objectPosition,
  children,
}: LiquidImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0-1
    const y = (e.clientY - rect.top) / rect.height; // 0-1

    const rotateX = (y - 0.5) * -12; // tilt up/down
    const rotateY = (x - 0.5) * 12;  // tilt left/right

    gsap.to(container, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });

    gsap.to(img, {
      scale: 1.06,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    gsap.to(container, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.to(img, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ padding: "20px", margin: "-20px" }}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden cursor-pointer w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div ref={imgRef} className="w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover ${objectPosition || ""}`}
            sizes={sizes}
          />
        </div>

        {children}
      </div>
    </div>
  );
}
