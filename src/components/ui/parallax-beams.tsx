"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxBeamsProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
  parallaxSpeed?: number;
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 270 + Math.random() * 40,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

export function ParallaxBeams({
  className,
  children,
  intensity = "medium",
  parallaxSpeed = 0.3,
}: ParallaxBeamsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);
  const scrollOffsetRef = useRef<number>(0);
  const [canvasHeight, setCanvasHeight] = useState(0);
  const MINIMUM_BEAMS = 25;

  const opacityMap = {
    subtle: 0.5,
    medium: 0.7,
    strong: 1,
  };

  useEffect(() => {
    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY * parallaxSpeed;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallaxSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const totalHeight = container.scrollHeight;
      setCanvasHeight(totalHeight);
      
      canvas.width = window.innerWidth * dpr;
      canvas.height = (totalHeight + window.innerHeight) * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${totalHeight + window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      const totalBeams = MINIMUM_BEAMS * 2;
      beamsRef.current = Array.from({ length: totalBeams }, () =>
        createBeam(canvas.width, canvas.height)
      );
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    function resetBeam(beam: Beam, index: number, totalBeams: number) {
      if (!canvas) return beam;

      const column = index % 4;
      const spacing = canvas.width / 4;

      beam.y = canvas.height + 100;
      beam.x =
        column * spacing +
        spacing / 2 +
        (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 80 + Math.random() * 120;
      beam.speed = 0.4 + Math.random() * 0.5;
      beam.hue = 260 + (index * 50) / totalBeams;
      beam.opacity = 0.15 + Math.random() * 0.12;
      return beam;
    }

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam, scrollOffset: number) {
      ctx.save();
      ctx.translate(beam.x, beam.y - scrollOffset);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity =
        beam.opacity *
        (0.8 + Math.sin(beam.pulse) * 0.2) *
        opacityMap[intensity];

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

      gradient.addColorStop(0, `hsla(${beam.hue}, 80%, 60%, 0)`);
      gradient.addColorStop(
        0.1,
        `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity * 0.4})`
      );
      gradient.addColorStop(
        0.3,
        `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity})`
      );
      gradient.addColorStop(
        0.7,
        `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity})`
      );
      gradient.addColorStop(
        0.9,
        `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity * 0.4})`
      );
      gradient.addColorStop(1, `hsla(${beam.hue}, 80%, 60%, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    }

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = "blur(40px)";

      const totalBeams = beamsRef.current.length;
      const scrollOffset = scrollOffsetRef.current;

      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;

        if (beam.y + beam.length < -200) {
          resetBeam(beam, index, totalBeams);
        }

        drawBeam(ctx, beam, scrollOffset);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [intensity]);

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0"
          style={{ 
            filter: "blur(20px)",
            transform: `translateY(-${scrollOffsetRef.current}px)`,
          }}
        />
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[80px]" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
