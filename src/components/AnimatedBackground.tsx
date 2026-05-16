import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;
    let scrollOffset = 0;
    let targetScrollOffset = 0;

    const handleScroll = () => {
      targetScrollOffset = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const draw = () => {
      // Smooth out the scroll offset
      scrollOffset += (targetScrollOffset - scrollOffset) * 0.05;

      // Clear with dark navy
      ctx.fillStyle = '#0f172a'; // Deep navy blue
      ctx.fillRect(0, 0, width, height);

      // We want many fine lines
      const lines = 80; 
      const step = (height * 1.5) / lines;

      ctx.lineWidth = 1;
      
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        // Fading edges – slightly stronger so lines stay visible under content
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.0)');
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.06)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.14)');
        gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.06)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
        ctx.strokeStyle = gradient;

        for (let x = 0; x <= width; x += 10) {
          // Create smooth, flowing topographic lines
          // Add scrollOffset to create a parallax/motion effect on scroll
          const yOffset = 
            Math.sin(x * 0.001 + time * 0.0003 + scrollOffset * 0.002) * 150 +
            Math.cos(x * 0.002 - time * 0.0002 + i * 0.02 - scrollOffset * 0.002) * 100 +
            Math.sin(x * 0.0005 + time * 0.0001) * 200;

          const globalCurve = Math.sin(x * 0.001) * 100;

          // Instead of shifting the entire line off-screen, we animate the waves with scrollOffset (above)
          const y = (i * step) - (height * 0.25) + yOffset + globalCurve;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Add a subtle radial gradient overlay to create depth (glassy/cinematic)
      const overlay = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height)
      );
      overlay.addColorStop(0, 'rgba(19, 41, 75, 0)');
      overlay.addColorStop(1, 'rgba(10, 15, 30, 0.35)');
      ctx.fillStyle = overlay;
      ctx.fillRect(0, 0, width, height);

      time += 16;
      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none"
      style={{ background: '#0f172a' }}
    />
  );
};

export default AnimatedBackground;
