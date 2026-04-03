"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Animate open/close
  useEffect(() => {
    if (!overlayRef.current || !linksRef.current) return;

    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline();
    tlRef.current = tl;

    if (isOpen) {
      tl.set(overlayRef.current, { display: "flex" })
        .fromTo(
          overlayRef.current,
          { clipPath: "circle(0% at calc(100% - 36px) 36px)" },
          { clipPath: "circle(150% at calc(100% - 36px) 36px)", duration: 0.7, ease: "power3.inOut" }
        )
        .fromTo(
          linksRef.current.children,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" },
          "-=0.3"
        );
    } else {
      tl.to(linksRef.current.children, {
        y: -30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.04,
        ease: "power2.in",
      }).to(overlayRef.current, {
        clipPath: "circle(0% at calc(100% - 36px) 36px)",
        duration: 0.5,
        ease: "power3.inOut",
      }, "-=0.15").set(overlayRef.current, { display: "none" });
    }
  }, [isOpen]);

  return (
    <>
      {/* Desktop nav links with hover animation */}
      <div className="hidden md:flex items-center gap-8 lg:gap-14 text-base font-semibold tracking-[-0.04em] capitalize">
        {NAV_LINKS.map((link) => (
          <span key={link} className="group relative cursor-pointer py-1">
            {link}
            <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </span>
        ))}
      </div>

      {/* Desktop CTA */}
      <button className="hidden md:block bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full whitespace-nowrap">
        Let&apos;s talk
      </button>

      {/* Mobile hamburger / close */}
      <button
        className="md:hidden relative z-50 flex flex-col justify-center items-center w-8 h-8"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="block w-full h-[2px] transition-all duration-300 ease-out origin-center"
          style={{
            backgroundColor: isOpen ? "#fff" : "#000",
            transform: isOpen ? "translateY(4px) rotate(45deg)" : "translateY(-4px) rotate(0deg)",
          }}
        />
        <span
          className="block w-full h-[2px] transition-all duration-300 ease-out"
          style={{
            backgroundColor: isOpen ? "#fff" : "#000",
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "scaleX(0)" : "scaleX(1)",
          }}
        />
        <span
          className="block w-full h-[2px] transition-all duration-300 ease-out origin-center"
          style={{
            backgroundColor: isOpen ? "#fff" : "#000",
            transform: isOpen ? "translateY(-4px) rotate(-45deg)" : "translateY(4px) rotate(0deg)",
          }}
        />
      </button>

      {/* Mobile fullscreen overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-black flex-col items-center justify-center hidden"
      >
        <div ref={linksRef} className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              onClick={close}
              className="text-white text-5xl font-light uppercase tracking-[-0.06em] leading-[1.1] cursor-pointer hover:italic transition-all duration-200"
            >
              {link}
            </span>
          ))}
          <button
            onClick={close}
            className="mt-4 border border-white text-white text-sm font-medium tracking-[-0.04em] px-6 py-4 rounded-full"
          >
            Let&apos;s talk
          </button>
          <div className="mt-8 flex gap-8 text-white/50 text-sm uppercase tracking-[-0.04em]">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>x.com</span>
          </div>
        </div>
      </div>
    </>
  );
}
