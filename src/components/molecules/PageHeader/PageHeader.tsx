import React from 'react';
import styles from './PageHeader.module.css';
import clsx from 'clsx';

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  filters?: React.ReactNode;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  actions,
  filters,
  className,
}) => {
  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      {filters && <div className={styles.filters}>{filters}</div>}
    </header>
  );
};

export default PageHeader; 