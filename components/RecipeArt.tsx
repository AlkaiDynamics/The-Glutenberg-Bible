import React, { useEffect, useRef } from 'react';

interface RecipeArtProps {
  seed: string;
}

export const RecipeArt: React.FC<RecipeArtProps> = ({ seed }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set dimensions
    const width = canvas.width;
    const height = canvas.height;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Seeded random function
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }
    const random = () => {
      const x = Math.sin(hash++) * 10000;
      return x - Math.floor(x);
    };

    // Colors
    const colors = ['#722F37', '#B8860B', '#87A96B', '#D4A574', '#F4F1E8', '#E8E0D0'];
    const baseColor = colors[Math.floor(random() * colors.length)];

    // Background Gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#2b231d');
    gradient.addColorStop(1, '#3C2415');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Abstract Shapes
    const numShapes = Math.floor(random() * 5) + 3;
    for (let i = 0; i < numShapes; i++) {
      ctx.beginPath();
      ctx.fillStyle = colors[Math.floor(random() * colors.length)];
      ctx.globalAlpha = 0.3 + random() * 0.5;
      
      const x = random() * width;
      const y = random() * height;
      const radius = random() * 80 + 20;
      
      if (random() > 0.5) {
        ctx.arc(x, y, radius, 0, Math.PI * 2);
      } else {
        ctx.rect(x - radius, y - radius, radius * 2, radius * 2);
      }
      ctx.fill();
    }

    // "Sacred" Geometry Overlay
    ctx.strokeStyle = '#B8860B';
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(width/2, height/2, height/3, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, height);
    ctx.moveTo(0, height/2);
    ctx.lineTo(width, height/2);
    ctx.stroke();

  }, [seed]);

  return <canvas ref={canvasRef} className="w-full h-full object-cover" width={400} height={300} />;
};