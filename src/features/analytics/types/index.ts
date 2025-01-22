/**
 * Represents a single data point in a time series
 */
export interface TimeSeriesData {
  /** The time in HH:mm format */
  time: string;
  /** The numerical value at this time */
  value: number;
}

/**
 * Represents the type of trend movement
 */
export type TrendDirection = 'up' | 'down' | 'neutral';

/**
 * Represents trend information for a metric
 */
export interface MetricTrend {
  /** The numerical value of the trend */
  value: number;
  /** The type of trend movement */
  direction: TrendDirection;
  /** Optional description for the tooltip */
  description?: string;
}

/**
 * Base interface for components that can display trends
 */
export interface TrendDisplayProps {
  /** The trend information to display */
  trend: MetricTrend;
  /** Additional CSS class names */
  className?: string;
  /** Test ID for testing purposes */
  testId?: string;
}

/**
 * Base interface for components that can format values
 */
export interface ValueFormatterProps {
  /** The value to format */
  value: number | string;
  /** Function to format the displayed value */
  formatter?: (value: number | string) => string;
}

export interface MetricCardProps {
  title: string;
  value: number;
  change: number;
  period: string;
  trend: TrendDirection;
}

export interface NationalityData {
  country: string;
  count: number;
  percentage: number;
} 