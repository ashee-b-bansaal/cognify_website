"use client";
import { useRef, useEffect } from "react";

function randomColor() {
  // Iridescent bubble color stops
  const stops = [
    "rgba(173,216,230,0.5)", // light blue
    "rgba(255,182,193,0.4)", // pink
    "rgba(255,255,255,0.3)", // white
    "rgba(144,238,144,0.3)", // light green
    "rgba(255,255,0,0.2)",   // yellow
    "rgba(0,255,255,0.2)",   // cyan
    "rgba(255,0,255,0.2)",   // magenta
  ];
  return stops[Math.floor(Math.random() * stops.length)];
}

function createBubble(width: number, height: number) {
  const r = 40 + Math.random() * 60;
  return {
    x: Math.random() * width,
    y: height + r + Math.random() * 100,
    r,
    dx: (Math.random() - 0.5) * 1.2,
    dy: -1.2 - Math.random() * 1.2,
    color: randomColor(),
    iridescence: Math.random(),
    opacity: 0.3 + Math.random() * 0.3,
  };
}

export default function BubblesBackground({ bubbleCount = 12 }: { bubbleCount?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null;
    if (!ctx) return;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let bubbles = Array.from({ length: bubbleCount }, () => createBubble(width, height));

    function drawBubble(b: any) {
      if (!ctx) return;
      ctx.save();
      ctx.globalAlpha = b.opacity;
      // Bubble body
      let grad = ctx.createRadialGradient(b.x, b.y, b.r * 0.2, b.x, b.y, b.r);
      grad.addColorStop(0, "rgba(255,255,255,0.7)");
      grad.addColorStop(0.4, b.color);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
      ctx.fillStyle = grad;
      ctx.fill();
      // Iridescent highlight
      ctx.globalAlpha = b.opacity * 0.7;
      ctx.beginPath();
      ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.3, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let b of bubbles) {
        b.x += b.dx;
        b.y += b.dy;
        // Wrap or respawn bubbles
        if (b.y + b.r < 0 || b.x + b.r < 0 || b.x - b.r > width) {
          Object.assign(b, createBubble(width, height));
        }
        drawBubble(b);
      }
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      bubbles = Array.from({ length: bubbleCount }, () => createBubble(width, height));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", handleResize);
    };
  }, [bubbleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden
    />
  );
} 