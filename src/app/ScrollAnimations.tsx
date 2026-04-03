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

      // About portrait — black overlay slides away to reveal image
      const darkContainer = document.querySelector("[data-img-reveal-dark]");
      const darkOverlay = document.querySelector("[data-img-reveal-dark-overlay]");
      if (darkContainer && darkOverlay) {
        gsap.timeline({
          scrollTrigger: {
            trigger: darkContainer,
            start: "top 75%",
            end: "top 25%",
            scrub: true,
          },
        })
          .to(darkOverlay, { xPercent: -100, duration: 1, ease: "none" });
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

      // Full-width photo — blur to sharp on scroll
      const imgEl = document.querySelector("[data-img-reveal-img]");
      if (imgEl) {
        gsap.set(imgEl, { filter: "blur(20px)", scale: 1.05 });
        gsap.to(imgEl, {
          scrollTrigger: {
            trigger: imgEl,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
          filter: "blur(0px)",
          scale: 1,
          ease: "none",
        });
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

      // Portfolio — right column parallax (starts 200px lower, scrolls into place)
      gsap.fromTo("[data-portfolio-right]", { y: 200 }, {
        scrollTrigger: {
          trigger: "[data-portfolio]",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -200,
        ease: "none",
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

        });

        // Cards scale up as you scroll through
        cards.forEach((card) => {
          gsap.fromTo(card, { scale: 0.85 }, {
            scrollTrigger: {
              trigger: testimonialsSection,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            scale: 1,
            ease: "none",
          });
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

      // News — parallax drift left to reveal all cards
      const newsCards = document.querySelector("[data-news-cards]");
      if (newsCards) {
        gsap.fromTo(newsCards,
          { x: 200 },
          {
            x: -100,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-news]",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

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
