"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    const init = () => {
    const ctx = gsap.context(() => {
      // Hero scroll parallax — text splits, image grows
      const heroSection = document.querySelector("[data-hero-section]");
      if (heroSection) {
        gsap.to("[data-hero-bg]", {
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          scale: 1.5,
          ease: "none",
        });
        gsap.to("[data-hero-harvey]", {
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          xPercent: -120,
          ease: "none",
        });
        gsap.to("[data-hero-specter]", {
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          xPercent: 120,
          ease: "none",
        });
      }

      // Bio — text fill scrub per line (gray to black)
      const bioFillLines = document.querySelectorAll("[data-bio-fill] [data-bio-line]");
      bioFillLines.forEach((line) => {
        gsap.to(line, {
          scrollTrigger: {
            trigger: line,
            start: "top 95%",
            end: "top 60%",
            scrub: true,
          },
          color: "#000",
          ease: "none",
        });
      });

      // About portrait — black curtain wipe reveal from right to left
      const darkContainer = document.querySelector("[data-img-reveal-dark]");
      const darkImg = document.querySelector("[data-img-reveal-dark-img]");
      if (darkContainer && darkImg) {
        gsap.set(darkImg, { scale: 1.3, opacity: 0 });

        gsap.timeline({
          scrollTrigger: {
            trigger: darkContainer,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        })
          .to(darkImg, { opacity: 1, duration: 0.1 })
          .fromTo(
            darkContainer,
            { clipPath: "inset(0 0 0 100%)" },
            { clipPath: "inset(0 0 0 0%)", duration: 1.2, ease: "power3.inOut" },
            "<"
          )
          .to(darkImg, { scale: 1, duration: 1.2, ease: "power2.out" }, "-=0.8");
      }

      // About — text fades from left, image from right
      gsap.from("[data-about-text]", {
        scrollTrigger: {
          trigger: "[data-about]",
          start: "top 75%",
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from("[data-about-image]", {
        scrollTrigger: {
          trigger: "[data-about]",
          start: "top 75%",
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });

      // Full-width photo — curtain reveal with scale
      const imgContainer = document.querySelector("[data-img-reveal]");
      const imgEl = document.querySelector("[data-img-reveal-img]");
      if (imgContainer && imgEl) {
        gsap.set(imgEl, { scale: 1.3, opacity: 0 });

        gsap.timeline({
          scrollTrigger: {
            trigger: imgContainer,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
          .to(imgEl, { opacity: 1, duration: 0.1 })
          .fromTo(
            imgContainer,
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power3.inOut" },
            "<"
          )
          .to(imgEl, { scale: 1, duration: 1.2, ease: "power2.out" }, "-=0.8");
      }

      // Services — each item slides up
      gsap.from("[data-service-item]", {
        scrollTrigger: {
          trigger: "[data-services]",
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Services header
      gsap.from("[data-services-header]", {
        scrollTrigger: {
          trigger: "[data-services]",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      // Portfolio — images scale in subtly
      gsap.from("[data-portfolio-item]", {
        scrollTrigger: {
          trigger: "[data-portfolio]",
          start: "top 70%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Portfolio header
      gsap.from("[data-portfolio-header]", {
        scrollTrigger: {
          trigger: "[data-portfolio]",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      // Testimonials — parallax depth + sequential highlight
      const testimonialsSection = document.querySelector("[data-testimonials].hidden");
      if (testimonialsSection) {
        const cards = testimonialsSection.querySelectorAll("[data-testimonial-card]");
        const speeds = [120, -80, 100, -60];
        const rotations = [4, -3, -5, 6];

        cards.forEach((card, i) => {
          // Parallax movement
          gsap.fromTo(card, {
            y: speeds[i],
            rotation: (rotations[i] || 0) * -1,
          }, {
            scrollTrigger: {
              trigger: testimonialsSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
            y: speeds[i] * -1,
            rotation: rotations[i] || 0,
            ease: "none",
          });

          // Sequential highlight: quick snap between cards
          const total = cards.length;
          const segmentSize = 1 / total;
          const fadeTime = 0.03; // very fast transition

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: testimonialsSection,
              start: "top 80%",
              end: "center 40%",
              scrub: true,
            },
          });

          gsap.set(card, { opacity: i === 0 ? 1 : 0.15 });

          const segStart = i * segmentSize;
          const segEnd = (i + 1) * segmentSize;

          // Fade in at start of segment
          tl.to(card, { opacity: 1, duration: fadeTime, ease: "none" }, segStart);
          // Fade out at end of segment (last card stays)
          if (i < total - 1) {
            tl.to(card, { opacity: 0.15, duration: fadeTime, ease: "none" }, segEnd - fadeTime);
          }
        });

        // Title — slow opposing parallax
        const titleEl = testimonialsSection.querySelector("[data-testimonials-title]");
        if (titleEl) {
          gsap.fromTo(titleEl, { y: 60 }, {
            scrollTrigger: {
              trigger: testimonialsSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
            y: -60,
            ease: "none",
          });
        }
      }

      // News — cards slide up staggered
      gsap.from("[data-news-card]", {
        scrollTrigger: {
          trigger: "[data-news]",
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Footer — fade in
      gsap.from("[data-footer-content]", {
        scrollTrigger: {
          trigger: "[data-footer]",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from("[data-footer-wordmark]", {
        scrollTrigger: {
          trigger: "[data-footer]",
          start: "top 70%",
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });
      // Button hover — magnetic pull + scale
      const buttons = document.querySelectorAll<HTMLButtonElement>("button");

      buttons.forEach((btn) => {
        const handleEnter = () => {
          gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        };

        const handleMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: "power2.out" });
        };

        const handleLeave = () => {
          gsap.to(btn, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.4)" });
        };

        btn.addEventListener("mouseenter", handleEnter);
        btn.addEventListener("mousemove", handleMove);
        btn.addEventListener("mouseleave", handleLeave);
        cleanups.push(() => {
          btn.removeEventListener("mouseenter", handleEnter);
          btn.removeEventListener("mousemove", handleMove);
          btn.removeEventListener("mouseleave", handleLeave);
        });
      });
    });

    cleanups.push(() => ctx.revert());
    };

    // Wait for loader to finish before starting animations
    window.addEventListener("loaderDone", init, { once: true });

    return () => {
      window.removeEventListener("loaderDone", init);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
