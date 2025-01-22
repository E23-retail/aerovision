import { useLocation } from 'react-router';

interface UseNavigationReturn {
  isActive: (path: string) => boolean;
  isActiveExact: (path: string) => boolean;
  currentPath: string;
}

export const useNavigation = (): UseNavigationReturn => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname.startsWith(path);
  };

  const isActiveExact = (path: string): boolean => {
    return location.pathname === path;
  };

  return {
    isActive,
    isActiveExact,
    currentPath: location.pathname,
  };
}; 