import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorVisible = useRef(false);
  const endX = useRef(0);
  const endY = useRef(0);
  const dot = useRef(null);
  const dotOutline = useRef(null);

  const toggleCursorVisibility = () => {
    if (dot.current && dotOutline.current) {
      dot.current.style.opacity = cursorVisible.current ? '1' : '0';
      dotOutline.current.style.opacity = cursorVisible.current ? '1' : '0';
    }
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseExitEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    const target = e.target;
    if (target && (target.tagName === 'A' || target.classList.contains('skill'))) {
      dot.current.style.backgroundColor = 'transparent';
      dotOutline.current.style.width = '50px';
      dotOutline.current.style.height = '50px';
      dotOutline.current.style.borderColor = '#E8313F';
      dotOutline.current.style.backgroundColor = 'transparent';
    } else {
      dot.current.style.width = '13px';
      dot.current.style.height = '13px';
      dot.current.style.backgroundColor = '#F1838B';
      dot.current.style.borderColor = 'transparent';
      dot.current.style.borderRadius = '50%';
    }
  };

  useEffect(() => {
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseExitEvent);
    document.addEventListener('mousemove', mouseMoveEvent);

    return () => {
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseExitEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
    };
  }, []);

  return (
    <div>
      <div ref={dot} style={{ position: 'fixed', pointerEvents: 'none' }} />
      <div ref={dotOutline} style={{ position: 'fixed', pointerEvents: 'none' }} />
    </div>
  );
};

export default Cursor;