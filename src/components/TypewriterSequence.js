import React, { useState, useEffect } from 'react';
import styles from '../styles/animations.module.css';

export default function TypewriterSequence() {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [secondLineText, setSecondLineText] = useState('');
  const [secondPhase, setSecondPhase] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [displayName, setDisplayName] = useState('Jared M.');
  const [isHovering, setIsHovering] = useState(false);

  const firstLine = [
    'Hi, I\'m RedJ',
    'Hi, I\'m @sudoredj',
    'Hi, I\'m Jared M.'
  ];

  const secondLine = [
    { prefix: '', text: 'Thanks for checking out my corner of the net!' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    let timeout;
    if (!isDeleting && text === firstLine[phase]) {
      if (phase === firstLine.length - 1) {
        setIsTypingDone(true);
        timeout = setTimeout(() => setShowSecondLine(true), 1000);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else if (isDeleting && text === 'Hi, I\'m ') {
      setIsDeleting(false);
      setPhase(p => p + 1);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setText(t => t.slice(0, -1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setText(firstLine[phase].slice(0, text.length + 1));
      }, 70);
    }

    return () => clearTimeout(timeout);
  }, [text, phase, isDeleting, shouldAnimate]);

  useEffect(() => {
    if (!showSecondLine || !shouldAnimate) return;

    let timeout;
    const currentPhase = secondLine[secondPhase];
    const fullText = currentPhase.prefix + currentPhase.text;

    if (secondLineText !== fullText) {
      timeout = setTimeout(() => {
        setSecondLineText(fullText.slice(0, secondLineText.length + 1));
      }, 70);
    }

    return () => clearTimeout(timeout);
  }, [secondLineText, secondPhase, showSecondLine, shouldAnimate]);

  const handleNameHover = () => {
    if (isTypingDone) {
      setIsHovering(true);
      setDisplayName('@sudoredj');
    }
  };

  const handleNameLeave = () => {
    if (isTypingDone) {
      setIsHovering(false);
      setDisplayName('Jared M.');
    }
  };

  return (
    <div style={{ 
      fontFamily: 'Trebuchet MS, sans-serif',
      textAlign: 'center',
      color: '#FFFFFF',
      marginBottom: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      <div style={{
        fontSize: '2rem',
        marginBottom: '0.5rem',
      }}>
        {isTypingDone ? (
          <>
            <span style={{ color: '#FFFFFF' }}>Hi, I'm </span>
            <span 
              onMouseEnter={handleNameHover}
              onMouseLeave={handleNameLeave}
              onClick={() => {
                if (isTypingDone) {
                  window.open('https://x.com/sudoredj', '_blank', 'noopener,noreferrer');
                }
              }}
              className={styles.animatedLink}
              style={{ 
                cursor: isTypingDone ? 'pointer' : 'default',
                textDecoration: 'none'
              }}
            >
              {displayName.split('').map((letter, i) => (
                <span key={i} style={{ '--letter-index': i }}>
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </>
        ) : (
          <>{text}</>
        )}
        {!showSecondLine && <span>{cursorVisible ? '_' : '\u00A0'}</span>}
      </div>
      
      {showSecondLine && (
        <div style={{ 
          fontSize: '1.5rem',
          marginTop: '0.5rem',
        }}>
          {secondLineText}
          <span>{cursorVisible ? '_' : '\u00A0'}</span>
        </div>
      )}
    </div>
  );
} 