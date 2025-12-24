"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorWhite = useRef<SVGCircleElement>(null);
  const cursorBlue = useRef<SVGCircleElement>(null);
  const trailWhite = useRef<SVGCircleElement>(null);
  const trailBlue = useRef<SVGCircleElement>(null);

  const [whiteRects, setWhiteRects] = useState<{ x: number; y: number; w: number; h: number }[]>([]);
  const [noWhiteRects, setNoWhiteRects] = useState<{ x: number; y: number; w: number; h: number }[]>([]);

  useEffect(() => {
    const updateMasks = () => {
      const wRects: { x: number; y: number; w: number; h: number }[] = [];
      const nRects: { x: number; y: number; w: number; h: number }[] = [];

      document.querySelectorAll<HTMLElement>(".wht-bg-are").forEach((sec) => {
        const r = sec.getBoundingClientRect();
        wRects.push({ x: r.left, y: r.top, w: r.width, h: r.height });
      });

      document.querySelectorAll<HTMLElement>(".nowht-bg-are").forEach((sec) => {
        const r = sec.getBoundingClientRect();
        nRects.push({ x: r.left, y: r.top, w: r.width, h: r.height });
      });

      setWhiteRects(wRects);
      setNoWhiteRects(nRects);
    };

    updateMasks();
    window.addEventListener("resize", updateMasks);
    window.addEventListener("scroll", updateMasks);

    return () => {
      window.removeEventListener("resize", updateMasks);
      window.removeEventListener("scroll", updateMasks);
    };
  }, []);

  useEffect(() => {
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const trailPos = { x: pos.x, y: pos.y };

    const moveCursor = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      gsap.to([cursorWhite.current, cursorBlue.current], {
        attr: { cx: pos.x, cy: pos.y },
        duration: 0.15,
        ease: "power3.out",
      });
    };

    const animateTrail = () => {
      // 👇 slow lerp
      trailPos.x += (pos.x - trailPos.x) * 0.05;
      trailPos.y += (pos.y - trailPos.y) * 0.05;

      gsap.to([trailWhite.current, trailBlue.current], {
        attr: { cx: trailPos.x, cy: trailPos.y },
        duration: 0.6, // slow transition
        ease: "power3.out",
      });

      requestAnimationFrame(animateTrail);
    };

    window.addEventListener("mousemove", moveCursor);
    animateTrail();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <svg className="hidden lg:block fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      <defs>
        {/* Mask for blue cursor (only inside .wht-bg-are) */}
        <mask id="whiteAreaMask">
          <rect width="100%" height="100%" fill="black" />
          {whiteRects.map((r, i) => (
            <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} fill="white" />
          ))}
        </mask>

        {/* Mask for forced white cursor (inside .nowht-bg-are) */}
        <mask id="noWhiteAreaMask">
          <rect width="100%" height="100%" fill="white" />
          {noWhiteRects.map((r, i) => (
            <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} fill="black" />
          ))}
        </mask>
      </defs>

      {/* White layer (default everywhere) */}
      <g mask="url(#noWhiteAreaMask)">
        <circle
          ref={trailWhite}
          r="32"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          opacity="0.5"
        />
        <circle ref={cursorWhite} r="6" fill="#2563eb" />
      </g>

      {/* Blue layer (only inside .wht-bg-are) */}
      <g mask="url(#whiteAreaMask)">
        <circle
          ref={trailBlue}
          r="32"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          opacity="0.8"
        />
        <circle ref={cursorBlue} r="6" fill="#2563eb" />
      </g>
    </svg>
  );
}
