import React, { useState, useEffect } from 'react';

const TerminalText = ({ sequences }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (isDone) return;

    const timeout = setTimeout(() => {
      if (isBackspacing) {
        if (displayText.length > "Hi, I'm ".length) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          setIsBackspacing(false);
          setCurrentPhase(prev => prev + 1);
        }
      } else {
        const currentText = sequences[currentPhase];
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          if (currentPhase < 2) { // Before final name
            setTimeout(() => setIsBackspacing(true), 1000);
          } else {
            setIsDone(true);
          }
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentPhase, isBackspacing, isDone, sequences]);

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', lineHeight: '1.6' }}>
      {displayText}
    </div>
  );
};

export default TerminalText; 