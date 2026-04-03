"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setVisible(false);
      },
    });

    // Animate in
    tl.fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      )
      // Progress bar fills over ~1.5s
      .fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "power1.inOut" },
        "-=0.1"
      )
      // Hold briefly
      .to({}, { duration: 0.2 })
      // Animate out
      .to(textRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
      .to(
        lineRef.current,
        { scaleX: 0, transformOrigin: "right", duration: 0.3, ease: "power2.in" },
        "<"
      )
      .to(loaderRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.6,
        ease: "power3.inOut",
      });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div className="flex flex-col items-center gap-6 w-[200px]">
        {/* Logo / brand text */}
        <div ref={textRef} className="flex flex-col items-center gap-2 opacity-0">
          <span className="text-white text-2xl font-semibold tracking-[-0.04em] capitalize">
            H.Studio
          </span>
          <span className="font-mono text-xs uppercase text-white/40 tracking-wide">
            [ loading ]
          </span>
        </div>

        {/* Progress track */}
        <div ref={lineRef} className="w-full h-px bg-white/20 origin-left">
          <div
            ref={progressRef}
            className="h-full bg-white origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}
