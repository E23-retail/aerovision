import { Theme } from "../../types/theme";

export const lightTheme: Theme = {
  colors: {
    // Background colors
    background: {
      primary: '#f9fafb',
      secondary: '#ffffff',
      tertiary: '#f3f4f6',
    },
    // Text colors
    text: {
      primary: '#111827',
      secondary: '#6b7280',
      tertiary: '#9ca3af',
      accent: '#2563eb',
    },
    // Border colors
    border: {
      primary: '#e5e7eb',
      secondary: '#d1d5db',
    },
    // Interactive states
    interactive: {
      hover: '#f3f4f6',
      active: '#e5e7eb',
      focus: 'rgba(37, 99, 235, 0.2)',
    },
    // Status colors
    status: {
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
      info: '#2563eb',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
};

export const darkTheme: Theme = {
  colors: {
    background: {
      primary: '#111827',
      secondary: '#1f2937',
      tertiary: '#374151',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9ca3af',
      tertiary: '#6b7280',
      accent: '#60a5fa',
    },
    border: {
      primary: '#374151',
      secondary: '#4b5563',
    },
    interactive: {
      hover: '#374151',
      active: '#4b5563',
      focus: 'rgba(96, 165, 250, 0.2)',
    },
    status: {
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#60a5fa',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.3)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
  },
}; 