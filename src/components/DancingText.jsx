import React from 'react';

const DancingText = ({ text, className = "" }) => {
  return (
    <span className={`${className} inline-flex gap-[0.05em] py-1`}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="dancing-letter"
          style={{ 
            animationDelay: `${index * 0.15}s`,
            display: char === ' ' ? 'inline' : 'inline-block'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default DancingText;
