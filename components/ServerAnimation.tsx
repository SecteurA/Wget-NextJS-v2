"use client";

import { useEffect, useRef } from 'react';

const ServerAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Server rack properties
    const servers = Array.from({ length: 8 }, (_, i) => ({
      y: i * 60,
      lights: Array.from({ length: 4 }, () => Math.random() > 0.5),
      dataFlow: Math.random() * 100,
      active: true
    }));

    // Data flow particles
    const particles: Array<{
      x: number;
      y: number;
      speed: number;
      size: number;
      opacity: number;
    }> = [];

    // Create data flow effect
    const createParticle = (y: number) => {
      particles.push({
        x: canvas.width * 0.7,
        y: y + 30,
        speed: Math.random() * 2 + 1,
        size: Math.random() * 2 + 1,
        opacity: 1
      });
    };

    const drawServer = (y: number, lights: boolean[], dataFlow: number, active: boolean) => {
      // Server rack
      ctx.fillStyle = active ? '#1e293b' : '#334155';
      ctx.fillRect(canvas.width * 0.6, y, canvas.width * 0.3, 50);
      
      // Server details
      ctx.fillStyle = '#475569';
      ctx.fillRect(canvas.width * 0.62, y + 10, canvas.width * 0.26, 30);

      // Status lights
      lights.forEach((on, i) => {
        ctx.beginPath();
        ctx.arc(canvas.width * 0.63 + i * 15, y + 25, 3, 0, Math.PI * 2);
        ctx.fillStyle = on ? 
          `rgba(${Math.random() > 0.5 ? '34, 197, 94' : '59, 130, 246'}, ${Math.random() * 0.5 + 0.5})` : 
          '#64748b';
        ctx.fill();
      });

      // Data flow indicator
      ctx.fillStyle = `rgba(59, 130, 246, ${dataFlow / 100})`;
      ctx.fillRect(canvas.width * 0.65, y + 15, (canvas.width * 0.22) * (dataFlow / 100), 20);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background grid effect
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.1)';
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }

      // Animate servers
      servers.forEach((server, i) => {
        server.lights = server.lights.map(() => Math.random() > 0.2);
        server.dataFlow = Math.min(100, server.dataFlow + (Math.random() * 10 - 5));
        if (Math.random() < 0.01) server.active = !server.active;
        
        drawServer(server.y, server.lights, server.dataFlow, server.active);
        if (Math.random() < 0.1) createParticle(server.y);
      });

      // Animate particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.x -= particle.speed;
        particle.opacity -= 0.02;

        if (particle.opacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
    </div>
  );
};

export default ServerAnimation;