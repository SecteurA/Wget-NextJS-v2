"use client";

import { useEffect, useRef } from 'react';

const DomainSSLAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Animation properties
    let frame = 0;
    const packets: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      type: 'domain' | 'ssl';
    }> = [];

    // Server properties
    const serverWidth = canvas.width * 0.3;
    const serverHeight = canvas.height * 0.6;
    const serverX = canvas.width * 0.6;
    const serverY = (canvas.height - serverHeight) / 2;

    // Create data packet
    const createPacket = () => {
      const type = Math.random() > 0.5 ? 'domain' : 'ssl';
      packets.push({
        x: 0,
        y: canvas.height * (0.3 + Math.random() * 0.4),
        size: 4,
        speed: 2 + Math.random() * 2,
        color: type === 'domain' ? '#F26522' : '#22c55e',
        type
      });
    };

    // Draw server rack
    const drawServer = () => {
      // Server cabinet
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(serverX, serverY, serverWidth, serverHeight);

      // Server units
      const unitHeight = serverHeight / 8;
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = '#334155';
        ctx.fillRect(
          serverX + 10,
          serverY + i * unitHeight + 5,
          serverWidth - 20,
          unitHeight - 10
        );

        // Status lights
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          ctx.arc(
            serverX + 25 + j * 15,
            serverY + i * unitHeight + unitHeight / 2,
            3,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = Math.random() > 0.3 ? 
            `rgba(${Math.random() > 0.5 ? '34, 197, 94' : '59, 130, 246'}, ${Math.random() * 0.5 + 0.5})` : 
            '#64748b';
          ctx.fill();
        }

        // Activity indicator
        ctx.fillStyle = `rgba(59, 130, 246, ${Math.random()})`;
        ctx.fillRect(
          serverX + 70,
          serverY + i * unitHeight + 15,
          (serverWidth - 90) * Math.random(),
          unitHeight - 30
        );
      }
    };

    // Draw lock icon
    const drawLock = (x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.arc(x, y - size/2, size/2, Math.PI, 2 * Math.PI);
      ctx.moveTo(x - size/2, y - size/2);
      ctx.lineTo(x - size/2, y);
      ctx.lineTo(x + size/2, y);
      ctx.lineTo(x + size/2, y - size/2);
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    // Draw domain icon
    const drawDomain = (x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.arc(x, y, size/2, 0, 2 * Math.PI);
      ctx.moveTo(x - size/2, y);
      ctx.lineTo(x + size/2, y);
      ctx.moveTo(x, y - size/2);
      ctx.lineTo(x, y + size/2);
      ctx.strokeStyle = '#F26522';
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create new packet
      if (frame % 60 === 0) {
        createPacket();
      }

      // Draw and update packets
      packets.forEach((packet, index) => {
        packet.x += packet.speed;

        if (packet.type === 'ssl') {
          drawLock(packet.x, packet.y, packet.size * 3);
        } else {
          drawDomain(packet.x, packet.y, packet.size * 3);
        }

        // Remove packets that are off screen
        if (packet.x > canvas.width) {
          packets.splice(index, 1);
        }
      });

      // Draw server
      drawServer();

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
    </div>
  );
};

export default DomainSSLAnimation;