import { useState, useCallback } from 'react';
import { useTheme } from './useTheme';

interface NotificationSettings {
  email: boolean;
  push: boolean;
  frequency: 'realtime' | 'daily' | 'weekly';
}

interface DisplaySettings {
  density: 'comfortable' | 'compact' | 'spacious';
  animations: boolean;
}

interface UseSettingsReturn {
  notifications: NotificationSettings;
  display: DisplaySettings;
  isLoading: boolean;
  error: Error | null;
  updateNotifications: (settings: Partial<NotificationSettings>) => Promise<void>;
  updateDisplay: (settings: Partial<DisplaySettings>) => Promise<void>;
}

const defaultSettings = {
  notifications: {
    email: true,
    push: true,
    frequency: 'daily' as const
  },
  display: {
    density: 'comfortable' as const,
    animations: true
  }
};

export const useSettings = (): UseSettingsReturn => {
  const { mode, setMode } = useTheme();
  const [notifications, setNotifications] = useState<NotificationSettings>(defaultSettings.notifications);
  const [display, setDisplay] = useState<DisplaySettings>(defaultSettings.display);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateNotifications = useCallback(async (settings: Partial<NotificationSettings>) => {
    try {
      setIsLoading(true);
      // Simulate API call
      setNotifications(prev => ({ ...prev, ...settings }));
      // In real app, make API call here
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update notification settings'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateDisplay = useCallback(async (settings: Partial<DisplaySettings>) => {
    try {
      setIsLoading(true);
      // Simulate API call
      setDisplay(prev => ({ ...prev, ...settings }));
      // In real app, make API call here
      if ('theme' in settings) {
        setMode(mode);
      }
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update display settings'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [mode, setMode]);

  return {
    notifications,
    display,
    isLoading,
    error,
    updateNotifications,
    updateDisplay
  };
}; 