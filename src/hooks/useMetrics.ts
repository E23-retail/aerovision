import { useState, useEffect } from 'react';
import { MetricCardProps, TimeSeriesData } from '../features/analytics/types';
import { mockMetrics, mockTimeSeriesData } from '../mocks/data/data';

interface UseMetricsReturn {
  metrics: MetricCardProps[];
  timeSeriesData: TimeSeriesData[];
  isLoading: boolean;
  error: Error | null;
  refreshData: () => void;
}

export const useMetrics = (): UseMetricsReturn => {
  const [metrics, setMetrics] = useState<MetricCardProps[]>([]);
  const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      // Simulate API call with mock data
      // In real app, replace with actual API calls
      setMetrics(mockMetrics);
      setTimeSeriesData(mockTimeSeriesData);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch metrics'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    metrics,
    timeSeriesData,
    isLoading,
    error,
    refreshData: fetchData
  };
}; 