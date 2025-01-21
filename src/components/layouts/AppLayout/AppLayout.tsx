import React from 'react';
import { Link, useLocation } from 'react-router';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  /** The main content of the application */
  children: React.ReactNode;
}

/**
 * A responsive layout component that handles the main application structure.
 * Features a collapsible sidebar that becomes a drawer on mobile devices.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <div className={styles.layout}>
      <nav className={styles.sidebar}>
        <div className={styles.logo}>
          AeroVision
        </div>
        <ul className={styles.nav}>
          <li>
            <Link to="/analytics" className={`${styles.navLink} ${isActive('/analytics')}`}>
              Analytics
            </Link>
          </li>
          <li>
            <Link to="/segments" className={`${styles.navLink} ${isActive('/segments')}`}>
              Segments
            </Link>
          </li>
          <li>
            <Link to="/campaigns" className={`${styles.navLink} ${isActive('/campaigns')}`}>
              Campaigns
            </Link>
          </li>
          <li>
            <Link to="/settings" className={`${styles.navLink} ${isActive('/settings')}`}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default AppLayout; 