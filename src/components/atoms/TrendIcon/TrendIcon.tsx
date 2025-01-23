import React from 'react';
import styles from './TrendIcon.module.css';

interface TrendIconProps {
  direction: 'up' | 'down' | 'neutral';
  className?: string;
}

export const TrendIcon: React.FC<TrendIconProps> = ({ direction, className }) => {

  const getPath = () => {
    switch (direction) {
      case 'up':
        return 'M7 14l5-5 5 5H7z';
      case 'down':
        return 'M7 10l5 5 5-5H7z';
      default:
        return 'M4 12h16';
    }
  };

  return (
    <svg
      className={`${styles.icon} ${className || ''} ${styles[direction]}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={getPath()} />
    </svg>
  );
};

export default TrendIcon; 