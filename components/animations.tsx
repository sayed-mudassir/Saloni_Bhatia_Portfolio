"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AnimationRig() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".navbar-shell", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });

  gsap.utils.toArray<HTMLElement>(".article-reveal").forEach((el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 80,
      scale: 0.96,
      filter: "blur(12px)",
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "top 40%",
        scrub: 1,
      },
    }
  );
});

    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%"
        }
      });
    });

    gsap.utils.toArray<HTMLElement>(".stagger-group").forEach((group) => {
      gsap.to(group.querySelectorAll(".stagger-item"), {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: group,
          start: "top 78%"
        }
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      gsap.to(el, {
        yPercent: Number(el.dataset.parallax ?? -12),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true
        }
      });
    });

    gsap.utils.toArray<HTMLElement>(".count-up").forEach((el) => {
      const value = Number(el.dataset.value ?? 0);
      const suffix = el.dataset.suffix ?? "";
      const obj = { value: 0 };
      gsap.to(obj, {
        value,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true
        },
        onUpdate: () => {
          el.textContent = `${Math.round(obj.value)}${suffix}`;
        }
      });
    });

    const onPointerMove = (event: PointerEvent) => {
      document.querySelectorAll<HTMLElement>(".tilt-card").forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });
    };

    const resetTilt = () => {
      document.querySelectorAll<HTMLElement>(".tilt-card").forEach((card) => {
        card.style.transform = "";
      });
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", resetTilt);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", resetTilt);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
