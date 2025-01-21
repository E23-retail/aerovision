import React from 'react';
import styles from './Select.module.css';
import clsx from 'clsx';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[];
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  size = 'md',
  error,
  className,
  disabled,
  ...props
}) => {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={clsx(
          styles.select,
          styles[size],
          {
            [styles.disabled]: disabled,
            [styles.error]: error,
          },
          className
        )}
        disabled={disabled}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <svg
        className={styles.icon}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Select; 