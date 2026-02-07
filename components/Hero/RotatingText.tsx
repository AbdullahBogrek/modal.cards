import { useState, useEffect, useCallback } from 'react';

interface RotatingTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const RotatingText = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000,
  className,
}: RotatingTextProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex] || '';

  const tick = useCallback(() => {
    if (isDeleting) {
      setDisplayed((prev) => prev.slice(0, -1));
    } else {
      setDisplayed((prev) => currentWord.slice(0, prev.length + 1));
    }
  }, [currentWord, isDeleting]);

  useEffect(() => {
    if (words.length === 0) return;

    // Finished typing the full word — pause then start deleting
    if (!isDeleting && displayed === currentWord) {
      const timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timer);
    }

    // Finished deleting — move to next word
    if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, currentWord, words.length, typingSpeed, deletingSpeed, pauseDuration, tick]);

  return (
    <span className="hero-rotating-wrapper">
      <span className={className || ''}>
        {displayed}
      </span>
      <span className="hero-typing-cursor" />
    </span>
  );
};

export default RotatingText;
