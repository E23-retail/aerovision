import { Theme } from '@mui/material';
import { MetricTrend } from '../types/metrics';

/**
 * Formats a trend value with a plus sign for positive values
 * @param value - The numerical value to format
 * @returns Formatted string with percentage
 */
export const formatTrendValue = (value: number): string => {
  try {
    return `${value > 0 ? '+' : ''}${value}%`;
  } catch (err) {
    console.error('Error formatting trend value:', err);
    return '0%';
  }
};

/**
 * Generates an ARIA label for trend information
 * @param type - The type of trend
 * @param formattedValue - The formatted value string
 * @param description - Optional description
 * @returns Formatted ARIA label string
 */
export const getTrendAriaLabel = (
  trend: MetricTrend,
  formattedValue: string,
  description?: string
): string => {
  const trendType = trend.direction === 'neutral' ? 'unchanged' : trend.direction;
  return `${trendType} trend: ${formattedValue}${description ? `, ${description}` : ''}`;
};

/**
 * Generates an ARIA label for a metric card
 * @param label - The metric label
 * @param value - The formatted value
 * @param trend - Optional trend information
 * @param error - Optional error message
 * @param isLoading - Loading state
 * @returns Formatted ARIA label string
 */
export const getMetricAriaLabel = (
  label: string,
  value: string,
  trend?: MetricTrend,
  error?: string,
  isLoading?: boolean
): string => {
  if (error) return `${label}: Error - ${error}`;
  if (isLoading) return `${label}: Loading`;
  return `${label}: ${value}${trend ? `, ${trend.direction} trend of ${trend.value}%` : ''}`;
};

/**
 * Gets theme-aware colors for trend types
 * @param trend - The trend information
 * @param theme - MUI theme object
 * @returns Object containing color and background color
 */
export const getTrendColors = (trend: MetricTrend, theme: Theme) => {
  switch (trend.direction) {
    case 'up':
      return {
        color: theme.palette.success.main,
        background: theme.palette.success.light,
      };
    case 'down':
      return {
        color: theme.palette.error.main,
        background: theme.palette.error.light,
      };
    default:
      return {
        color: theme.palette.text.secondary,
        background: theme.palette.action.hover,
      };
  }
}; 