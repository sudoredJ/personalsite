import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null as any);

  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  };

  const move = (e: MouseEvent | TouchEvent) => {
    try {
      const x = !isTouchDevice() ? (e as MouseEvent).pageX : (e as TouchEvent).touches[0].pageX;
      const y = !isTouchDevice() ? (e as MouseEvent).pageY : (e as TouchEvent).touches[0].pageY;

      if (cursorRef.current) {
        cursorRef.current.style.left = x - 50 + "px";
        cursorRef.current.style.top = y - 50 + "px";
      }
    } catch (e) {}
  };

  useEffect(() => {
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", move);
    };
  }, []);

  return <div ref={cursorRef} id="cursor-container" className="fixed inset-0 z-[9999] pointer-events-none"></div>;
};

export default Cursor;