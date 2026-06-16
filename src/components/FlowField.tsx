import { useEffect, useRef, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TrailParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;       // counts down to 0
  maxLife: number;
  size: number;
  rippleAngle: number; // drift direction for organic spread
}

// ─── Constants ───────────────────────────────────────────────────────────────

const SPAWN_RATE = 1;       // particles spawned per frame when mouse moves
const MAX_PARTICLES = 80;
const CONNECTION_DIST = 110;     // px – max distance for connecting lines
const BASE_LIFE = 45;      // frames a particle lives
const LIFE_VARIANCE = 15;
const SPEED_MULT = 3.8;     // initial velocity spread — higher = dots further apart

// ─── Component ───────────────────────────────────────────────────────────────

export default function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<TrailParticle[]>([]);
  const mouse = useRef({ x: -9999, y: -9999, moving: false });
  const rafId = useRef<number>(0);

  // ─── Spawn a burst of particles at the cursor ─────────────────────────────
  const spawnParticles = useCallback((x: number, y: number) => {
    const ps = particles.current;
    for (let i = 0; i < SPAWN_RATE; i++) {
      if (ps.length >= MAX_PARTICLES) {
        ps.shift(); // drop oldest
      }
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * SPEED_MULT;
      const maxLife = BASE_LIFE + Math.random() * LIFE_VARIANCE;
      ps.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.15, // slight upward drift
        life: maxLife,
        maxLife,
        size: 0.6 + Math.random() * 1.0,
        rippleAngle: angle,
      });
    }
  }, []);

  // ─── Main animation loop ──────────────────────────────────────────────────
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fully transparent clear — the page background shows through
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fixed neon cyan — no variation
    const CYAN = 'rgba(0,150,255,';

    const ps = particles.current;

    // ── Update ───────────────────────────────────────────────────────────────
    for (let i = ps.length - 1; i >= 0; i--) {
      const p = ps[i];
      p.life -= 1;
      if (p.life <= 0) { ps.splice(i, 1); continue; }

      // Organic drift: gentle sinusoidal sideways wobble
      p.rippleAngle += 0.04;
      p.vx += Math.cos(p.rippleAngle) * 0.008;
      p.vy += Math.sin(p.rippleAngle) * 0.004;

      // Damping
      p.vx *= 0.97;
      p.vy *= 0.97;

      p.x += p.vx;
      p.y += p.vy;
    }

    // ── Draw connections ─────────────────────────────────────────────────────
    for (let i = 0; i < ps.length; i++) {
      for (let j = i + 1; j < ps.length; j++) {
        const a = ps[i];
        const b = ps[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > CONNECTION_DIST) continue;

        const t = 1 - d / CONNECTION_DIST;
        const lifeA = a.life / a.maxLife;
        const lifeB = b.life / b.maxLife;
        const alpha = t * 0.18 * Math.min(lifeA, lifeB);

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = CYAN + alpha + ')';
        ctx.lineWidth = t * 0.6;
        ctx.stroke();
      }
    }

    // ── Draw particles (flat dots, no glow) ──────────────────────────────────
    for (const p of ps) {
      const t = p.life / p.maxLife; // 1 = fresh, 0 = dead
      const alpha = t * t * 0.55;      // ease-out fade, kept very faint

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * t + 0.5, 0, Math.PI * 2);
      ctx.fillStyle = CYAN + alpha + ')';
      ctx.fill();
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  // ─── Resize ──────────────────────────────────────────────────────────────
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  // ─── Mouse / touch events ────────────────────────────────────────────────
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    mouse.current.moving = true;
    spawnParticles(e.clientX, e.clientY);
  }, [spawnParticles]);

  const handleMouseLeave = useCallback(() => {
    mouse.current.x = -9999;
    mouse.current.y = -9999;
    mouse.current.moving = false;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      const t = e.touches[0];
      mouse.current.x = t.clientX;
      mouse.current.y = t.clientY;
      spawnParticles(t.clientX, t.clientY);
    }
  }, [spawnParticles]);

  // ─── Lifecycle ────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    rafId.current = requestAnimationFrame(animate);

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [animate, handleResize, handleMouseMove, handleMouseLeave, handleTouchMove]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,           // above everything so the trail is always on top
      }}
    />
  );
}
