import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router';
import styles from './AppLayout.module.css';
import MenuButton from '../../components/atoms/MenuButton/MenuButton';
import { useTheme } from '../../hooks/useTheme';

interface AppLayoutProps {
  /** The main content of the application */
  children: React.ReactNode;
}

type WindowSize = {
  width: number;
  height: number;
};

/**
 * A responsive layout component that handles the main application structure.
 * Features a collapsible sidebar that becomes a drawer on mobile devices.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const { isDark, theme } = useTheme();
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle window resize with debounce
  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    setWindowSize({
      width: newWidth,
      height: window.innerHeight
    });
    
    if (!isTransitioning) {
      setIsSidebarOpen(newWidth > 768);
    }
  }, [isTransitioning]);

  // Update sidebar state on window resize
  useEffect(() => {
    let timeoutId: number;
    
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  // Handle transition states
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Match transition duration
      
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const isActive = useCallback((path: string): string => {
    return location.pathname === path ? styles.active : '';
  }, [location.pathname]);

  const toggleSidebar = useCallback(() => {
    setIsTransitioning(true);
    setIsSidebarOpen(prev => !prev);
  }, []);

  const isMobile = windowSize.width <= 768;

  return (
    <div 
      className={`${styles.layout} ${isDark ? styles.dark : ''}`}
      style={{ 
        '--background-primary': theme.colors.background.primary,
        '--background-secondary': theme.colors.background.secondary,
        '--text-primary': theme.colors.text.primary,
        '--text-secondary': theme.colors.text.secondary,
        '--border-primary': theme.colors.border.primary,
        '--interactive-hover': theme.colors.interactive.hover,
        '--interactive-active': theme.colors.interactive.active,
        '--accent-color': theme.colors.text.accent,
      } as React.CSSProperties}
    >
      {/* Only render MenuButton on mobile */}
      {isMobile && (
        <MenuButton 
          isOpen={isSidebarOpen}
          onClick={toggleSidebar}
          className={isTransitioning ? styles.transitioning : ''}
        />
      )}

      <aside 
        className={`
          ${styles.sidebar} 
          ${isSidebarOpen ? styles.open : ''} 
          ${isTransitioning ? styles.transitioning : ''}
        `}
        aria-hidden={!isSidebarOpen}
        role="navigation"
      >
        <div className={styles.logo}>
          AeroVision
        </div>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link 
                to="/analytics" 
                className={`${styles.navLink} ${isActive('/analytics')}`}
                onClick={() => isMobile && toggleSidebar()}
              >
                Analytics
              </Link>
            </li>
            <li>
              <Link 
                to="/segments" 
                className={`${styles.navLink} ${isActive('/segments')}`}
                onClick={() => isMobile && toggleSidebar()}
              >
                Segments
              </Link>
            </li>
            <li>
              <Link 
                to="/campaigns" 
                className={`${styles.navLink} ${isActive('/campaigns')}`}
                onClick={() => isMobile && toggleSidebar()}
              >
                Campaigns
              </Link>
            </li>
            <li>
              <Link 
                to="/settings" 
                className={`${styles.navLink} ${isActive('/settings')}`}
                onClick={() => isMobile && toggleSidebar()}
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main 
        className={`
          ${styles.main} 
          ${!isSidebarOpen ? styles.expanded : ''} 
          ${isTransitioning ? styles.transitioning : ''}
        `}
      >
        {children}
      </main>
    </div>
  );
};

export default AppLayout; 