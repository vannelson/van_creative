"use client";

import { useEffect, useRef } from "react";

export default function CursorFX() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const down = () => { ring.style.scale = 0.82; ring.style.opacity = 0.95; };
    const up = () => { ring.style.scale = 1; ring.style.opacity = 0.8; };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      cancelAnimationFrame(raf);
    };
  }, []);

  const base = {
    position: "fixed",
    left: 0,
    top: 0,
    pointerEvents: "none",
    zIndex: 2147483647,
    transform: "translate3d(-100px, -100px, 0)",
    mixBlendMode: "plus-lighter",
    willChange: "transform",
  };

  return (
    <>
      <div ref={ringRef} style={{
        ...base,
        width: 40,
        height: 40,
        marginLeft: -20,
        marginTop: -20,
        borderRadius: 999,
        border: "2px solid rgba(34, 197, 94, 0.8)",
        boxShadow: "0 0 40px rgba(34, 197, 94, 0.35)",
        opacity: 0.8,
        transition: "scale .15s ease, opacity .15s ease",
      }} />
      <div ref={dotRef} style={{
        ...base,
        width: 8,
        height: 8,
        marginLeft: -4,
        marginTop: -4,
        borderRadius: 999,
        background: "rgba(34, 197, 94, 1)",
        boxShadow: "0 0 16px rgba(34, 197, 94, 0.65)",
      }} />
    </>
  );
}
