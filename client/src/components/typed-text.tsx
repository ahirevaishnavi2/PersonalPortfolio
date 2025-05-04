import { useState, useEffect } from "react";

export default function TypedText() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const texts = [
    'Computer Science Undergraduate',
    'Microsoft Learn Student Ambassador',
    'Open Source Contributor',
    'Hackathon Winner'
  ];

  useEffect(() => {
    const typeText = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setTypingSpeed(50);
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        setTypingSpeed(100);
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        setIsDeleting(true);
        setTypingSpeed(1500); // Pause at end
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
        setTypingSpeed(500); // Pause before typing next
      }
    };
    
    const timeout = setTimeout(typeText, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, typingSpeed, texts]);

  return (
    <span>
      <span>{displayText}</span>
      <span className="typed-cursor">|</span>
    </span>
  );
}
