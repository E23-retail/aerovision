import { useState, useEffect, useCallback } from 'react';
import { Theme, ThemeMode } from '../types/theme';
import { lightTheme, darkTheme } from '../styles/tokens/theme';

interface UseThemeReturn {
  mode: ThemeMode;
  isDark: boolean;
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

export const useTheme = (): UseThemeReturn => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode');
    return (saved as ThemeMode) || 'system';
  });

  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const updateTheme = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
    localStorage.setItem('theme-mode', newMode);
    
    let shouldBeDark = false;
    
    if (newMode === 'system') {
      shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      shouldBeDark = newMode === 'dark';
    }
    
    setIsDark(shouldBeDark);
    setTheme(shouldBeDark ? darkTheme : lightTheme);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleMode = useCallback(() => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    updateTheme(newMode);
  }, [mode, updateTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (mode === 'system') {
        setIsDark(e.matches);
        setTheme(e.matches ? darkTheme : lightTheme);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  useEffect(() => {
    updateTheme(mode);
  }, [mode, updateTheme]);

  return {
    mode,
    isDark,
    theme,
    setMode: updateTheme,
    toggleMode
  };
}; 