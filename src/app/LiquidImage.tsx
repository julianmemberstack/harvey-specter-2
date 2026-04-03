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
}

export default function LiquidImage({
  src,
  alt,
  className = "",
  sizes = "50vw",
  objectPosition,
}: LiquidImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    const img = imgRef.current;
    const shine = shineRef.current;
    if (!container || !img || !shine) return;

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

    // Move shine to follow cursor
    gsap.to(shine, {
      opacity: 1,
      x: `${x * 100}%`,
      y: `${y * 100}%`,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    const container = containerRef.current;
    const img = imgRef.current;
    const shine = shineRef.current;
    if (!container || !img || !shine) return;

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

    gsap.to(shine, {
      opacity: 0,
      duration: 0.4,
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-pointer ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
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

      {/* Shine / light reflection overlay */}
      <div
        ref={shineRef}
        className="absolute w-[300px] h-[300px] pointer-events-none opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)",
          transform: "translate(-50%, -50%)",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
