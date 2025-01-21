import React from 'react';
import styles from './Card.module.css';
import clsx from 'clsx';

interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'none' | 'normal' | 'compact';
  interactive?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

interface CardHeaderProps {
  title: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ 
  title, 
  action, 
  className 
}) => (
  <div className={clsx(styles.header, className)}>
    {typeof title === 'string' ? <h3>{title}</h3> : title}
    {action && <div className={styles.action}>{action}</div>}
  </div>
);

export const CardFooter: React.FC<CardFooterProps> = ({ 
  children, 
  className 
}) => (
  <div className={clsx(styles.footer, className)}>
    {children}
  </div>
);

const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'normal',
  interactive = false,
  className,
  children,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        {
          [styles.interactive]: interactive,
        },
        className
      )}
      onClick={interactive ? onClick : undefined}
    >
      {children}
    </div>
  );
};

export default Card; 