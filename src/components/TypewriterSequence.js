import React, { useState, useEffect } from 'react';

export default function TypewriterSequence() {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [secondLineText, setSecondLineText] = useState('I\'m a ');
  const [secondPhase, setSecondPhase] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const firstLine = [
    'Hi, I\'m RedJ',
    'Hi, I\'m @0xredj',
    'Hi, I\'m Jared M.'
  ];

  const secondLine = [
    { prefix: 'I\'m a ', text: 'software engineer' },
    { prefix: 'I\'m an ', text: 'undergraduate student' },
    { prefix: 'I\'m a ', text: 'former overwatch semi-pro' },
    { prefix: 'I\'m a ', text: 'shitty musician' },
    { prefix: 'I\'m a ', text: 'spicy-food enjoyer' },
    { prefix: 'I\'m an ', text: '(ex) floridian' },
    { prefix: 'I\'m ', text: 'vibing. Thanks for checking out my corner of the net!' }
  ];

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timeout;

    if (phase < firstLine.length - 1) {
      if (!isDeleting && text === firstLine[phase]) {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
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
    } else if (phase === firstLine.length - 1) {
      if (text !== firstLine[phase]) {
        timeout = setTimeout(() => {
          setText(firstLine[phase].slice(0, text.length + 1));
        }, 70);
      } else if (!showSecondLine) {
        timeout = setTimeout(() => setShowSecondLine(true), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, isDeleting, showSecondLine]);

  useEffect(() => {
    if (!showSecondLine) return;

    let timeout;
    const currentPhase = secondLine[secondPhase];
    const fullText = currentPhase.prefix + currentPhase.text;

    if (secondPhase < secondLine.length - 1) {
      if (!isDeleting && secondLineText === fullText) {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && secondLineText === currentPhase.prefix) {
        setIsDeleting(false);
        setSecondPhase(p => p + 1);
      } else if (isDeleting) {
        timeout = setTimeout(() => {
          setSecondLineText(t => t.slice(0, -1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setSecondLineText(fullText.slice(0, secondLineText.length + 1));
        }, 70);
      }
    } else {
      // Final phase - just type out the rest
      if (secondLineText !== fullText) {
        timeout = setTimeout(() => {
          setSecondLineText(fullText.slice(0, secondLineText.length + 1));
        }, 70);
      }
    }

    return () => clearTimeout(timeout);
  }, [secondLineText, secondPhase, isDeleting, showSecondLine]);

  const Cursor = () => (
    <style jsx>{`
      @keyframes blink {
        0%, 49% { content: '_'; }
        50%, 100% { content: '\\u00A0'; }  /* Unicode no-break space */
      }
      .cursor {
        display: inline-block;
        margin-left: 2px;
        font-weight: bold;
      }
      .cursor::after {
        content: '_';
        animation: blink 1s step-end infinite;
      }
    `}</style>
  );

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
      <Cursor />
      <div style={{
        fontSize: '2rem',
        marginBottom: '0.5rem',
      }}>
        {text}
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