import React, { useEffect, useRef, useContext } from "react";
import CustomCursorContext from "./context/CustomCursorContext";

const CustomCursor = () => {
  const { type } = useContext(CustomCursorContext);
  const canvasRef = useRef(null);
  const pointer = useRef(
    typeof window !== 'undefined'
      ? { x: 0.5 * window.innerWidth, y: 0.5 * window.innerHeight }
      : { x: 0, y: 0 }
  );
  const params = { pointsNumber: 40, widthFactor: 0.5, mouseThreshold: 0.6, spring: 0.4, friction: 0.5 };
  const trail = useRef(new Array(params.pointsNumber).fill().map(() => ({ x: pointer.current.x, y: pointer.current.y, dx: 0, dy: 0 })));
  let mouseMoved = false;
  let mouseIsMoving = false;
  let moveTimeout = null;

  const updateMousePosition = (eX, eY) => {
    pointer.current.x = eX + window.scrollX;
    pointer.current.y = eY + window.scrollY;
    mouseMoved = true;
    mouseIsMoving = true;
    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => {
      mouseIsMoving = false;
    }, 100);
  };

  const setupCanvas = () => {
    if (typeof window !== 'undefined') {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  };

  const update = (t) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const ctx = canvas.getContext('2d');
   
    if (!mouseIsMoving) {
      for (let i = 0; i < trail.current.length; i++) {
        const angle = (t / 50 + i / trail.current.length * 1 * Math.PI) % (2* Math.PI);
        trail.current[i].x = pointer.current.x + Math.cos(angle) * 20;
        trail.current[i].y = pointer.current.y + Math.sin(angle) * 20;
      }
    }
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trail.current.forEach((p, pIdx) => {
      const prev = pIdx === 0 ? pointer.current : trail.current[pIdx - 1];
      const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
      p.dx += (prev.x - p.x) * spring;
      p.dy += (prev.y - p.y) * spring;
      p.dx *= params.friction;
      p.dy *= params.friction;
      p.x += p.dx;
      p.y += p.dy;
    });
  
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(trail.current[0].x - window.scrollX, trail.current[0].y - window.scrollY);
  
    const gradient = ctx.createLinearGradient(
      trail.current[0].x - window.scrollX, 
      trail.current[0].y - window.scrollY, 
      trail.current[trail.current.length - 1].x - window.scrollX, 
      trail.current[trail.current.length - 1].y - window.scrollY
    );
  
    for (let i = 1; i < trail.current.length - 1; i++) {
      const xc = 0.5 * (trail.current[i].x + trail.current[i + 1].x) - window.scrollX;
      const yc = 0.5 * (trail.current[i].y + trail.current[i + 1].y) - window.scrollY;
  
      const progress = i / (trail.current.length - 1);
      gradient.addColorStop(progress, `rgba(255, ${255 * (1 - progress)}, 0, 0.99)`);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = params.widthFactor * (params.pointsNumber - i) + 4;
      ctx.quadraticCurveTo(trail.current[i].x - window.scrollX, trail.current[i].y - window.scrollY, xc, yc);
    }
  
    ctx.stroke();
  
    window.requestAnimationFrame(update);
  };

  useEffect(() => {
    window.addEventListener("click", e => updateMousePosition(e.clientX, e.clientY));
    window.addEventListener("mousemove", e => updateMousePosition(e.clientX, e.clientY));
    window.addEventListener("touchmove", e => updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
    window.addEventListener("resize", setupCanvas);

    setupCanvas();
    update(0);

    return () => {
      window.removeEventListener("click", updateMousePosition);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchmove", updateMousePosition);
      window.removeEventListener("resize", setupCanvas);
    };
  }, []);

  return (
    <div className={`cursor-wrapper ${type}`}>
      <canvas ref={canvasRef} className="main-cursor" />
      <div className="secondary-cursor">
        <div className="cursor-background"></div>
      </div>
    </div>
  );
};

export default CustomCursor;