'use client';
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  className = "",
}) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) {
      setText('');
      return;
    }

    if (isPaused) return;

    const currentPhrase = phrases[phraseIndex];
    
    if (!currentPhrase) {
      setPhraseIndex(0);
      return;
    }
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        
        if (text === currentPhrase) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        
        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, isPaused, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  if (phrases.length === 0) return null;

  return (
    <span className={`text-blue-500 font-mono ${className}`}>
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};