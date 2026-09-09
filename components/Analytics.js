"use client";

import { useEffect } from "react";

/* Funnel instrumentation for the Snap Pixel.
 *
 * Snap standard events cover the ends of the funnel (PAGE_VIEW / VIEW_CONTENT /
 * SIGN_UP). The five CUSTOM_EVENT slots are spent on signals that cannot be
 * derived from those — form abandonment, for instance, is deliberately absent
 * because it is just VIEW_CONTENT minus SIGN_UP.
 *
 *   CUSTOM_EVENT_1  scroll_50        read past the halfway mark
 *   CUSTOM_EVENT_2  pricing_view     saw the prices — the main objection point
 *   CUSTOM_EVENT_3  calculator_used  engaged with the ROI calculator
 *   CUSTOM_EVENT_4  faq_open         surfaced an objection
 *   CUSTOM_EVENT_5  email_click      took the mailto path, otherwise invisible
 *
 * Each fires at most once per page load, so counts read as people, not actions.
 */

const fired = new Set();

export function track(event, description) {
  const key = description || event;
  if (fired.has(key)) return;
  fired.add(key);
  if (typeof window === "undefined") return;
  window.snaptr?.("track", event, description ? { description } : undefined);
}

export default function Analytics() {
  useEffect(() => {
    const cleanups = [];

    /* --- scroll depth ---------------------------------------------------- */
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - window.innerHeight;
      if (max > 0 && (h.scrollTop || window.scrollY) / max >= 0.5) {
        track("CUSTOM_EVENT_1", "scroll_50");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    /* --- section visibility ---------------------------------------------- */
    const seen = [
      ["#pricing", "CUSTOM_EVENT_2", "pricing_view"],
      ["#calc", null, null], // observed only to keep the observer list uniform
    ];
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const en of entries) {
            if (!en.isIntersecting) continue;
            const hit = seen.find(([sel]) => en.target.matches(sel));
            if (hit && hit[1]) track(hit[1], hit[2]);
            io.unobserve(en.target);
          }
        },
        { threshold: 0.35 }
      );
      for (const [sel] of seen) {
        const el = document.querySelector(sel);
        if (el) io.observe(el);
      }
      cleanups.push(() => io.disconnect());
    }

    /* --- interaction ----------------------------------------------------- */
    const onInput = (e) => {
      if (e.target.closest?.("#calc")) track("CUSTOM_EVENT_3", "calculator_used");
    };
    const onToggle = (e) => {
      const d = e.target;
      if (d.tagName === "DETAILS" && d.open && d.closest?.("#faq")) {
        track("CUSTOM_EVENT_4", "faq_open");
      }
    };
    const onClick = (e) => {
      if (e.target.closest?.('a[href^="mailto:"]')) track("CUSTOM_EVENT_5", "email_click");
    };

    document.addEventListener("input", onInput, true);
    document.addEventListener("toggle", onToggle, true); // toggle does not bubble
    document.addEventListener("click", onClick);
    cleanups.push(() => {
      document.removeEventListener("input", onInput, true);
      document.removeEventListener("toggle", onToggle, true);
      document.removeEventListener("click", onClick);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
