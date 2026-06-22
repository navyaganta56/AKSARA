import React from 'react';

const RAINBOW_COLORS = [
  '#E53935', // red
  '#F57C00', // orange
  '#C9A800', // yellow
  '#2E7D32', // green
  '#1565C0', // blue
  '#6A1B9A', // purple
  '#AD1457'  // pink
];

const DancingText = ({ text, className = "" }) => {
  const words = text.split(' ');
  let charCount = 0;
  const isRainbow = className.includes('rainbow-school-text');

  return (
    <span className={`${className} inline-flex flex-wrap gap-x-[0.2em] gap-y-[0.05em] py-1`}>
      {words.map((word, wordIndex) => {
        const startIdx = charCount;
        charCount += word.length + 1; // +1 for the space

        return (
          <span key={wordIndex} className="inline-flex gap-[0.05em] whitespace-nowrap">
            {word.split('').map((char, charIndex) => {
              const absIndex = startIdx + charIndex;
              const colorStyle = isRainbow 
                ? { color: RAINBOW_COLORS[absIndex % RAINBOW_COLORS.length] } 
                : {};
              return (
                <span 
                  key={charIndex} 
                  className="dancing-letter inline-block"
                  style={{ 
                    animationDelay: `${absIndex * 0.15}s`,
                    ...colorStyle
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

export default DancingText;

