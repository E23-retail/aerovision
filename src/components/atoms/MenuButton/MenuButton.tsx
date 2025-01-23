import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './MenuButton.module.css';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick, className }) => {
  return (
    <button 
      onClick={onClick}
      className={`${styles.menuButton} ${isOpen ? styles.open : ''} ${className || ''}`}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <MenuIcon />
    </button>
  );
};

export default MenuButton; 