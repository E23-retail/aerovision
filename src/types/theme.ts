export type ThemeMode = 'light' | 'dark' | 'system';

export interface Theme {
  colors: {
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      accent: string;
    };
    border: {
      primary: string;
      secondary: string;
    };
    interactive: {
      hover: string;
      active: string;
      focus: string;
    };
    status: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
} 