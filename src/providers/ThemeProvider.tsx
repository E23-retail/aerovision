import React, { createContext, useContext, ReactNode } from 'react';
import { Theme, ThemeMode } from '../types/theme';
import { useTheme as useThemeHook } from '../hooks/useTheme';

interface ThemeContextValue {
  mode: ThemeMode;
  isDark: boolean;
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeValue = useThemeHook();

  return (
    <ThemeContext.Provider value={themeValue}>
      <div
        style={{
          '--background-primary': themeValue.theme.colors.background.primary,
          '--background-secondary': themeValue.theme.colors.background.secondary,
          '--background-tertiary': themeValue.theme.colors.background.tertiary,
          '--text-primary': themeValue.theme.colors.text.primary,
          '--text-secondary': themeValue.theme.colors.text.secondary,
          '--text-tertiary': themeValue.theme.colors.text.tertiary,
          '--text-accent': themeValue.theme.colors.text.accent,
          '--border-primary': themeValue.theme.colors.border.primary,
          '--border-secondary': themeValue.theme.colors.border.secondary,
          '--interactive-hover': themeValue.theme.colors.interactive.hover,
          '--interactive-active': themeValue.theme.colors.interactive.active,
          '--interactive-focus': themeValue.theme.colors.interactive.focus,
          '--status-success': themeValue.theme.colors.status.success,
          '--status-warning': themeValue.theme.colors.status.warning,
          '--status-error': themeValue.theme.colors.status.error,
          '--status-info': themeValue.theme.colors.status.info,
          '--shadow-sm': themeValue.theme.shadows.sm,
          '--shadow-md': themeValue.theme.shadows.md,
          '--shadow-lg': themeValue.theme.shadows.lg,
        } as React.CSSProperties}
        className={themeValue.isDark ? 'dark' : ''}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 