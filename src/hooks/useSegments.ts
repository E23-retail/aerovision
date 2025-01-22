import { useState, useEffect, useCallback } from 'react';
import { Segment, SegmentCriteria } from '../features/segments/types';
import { mockSegments } from '../mocks/data/data';

interface UseSegmentsReturn {
  segments: Segment[];
  isLoading: boolean;
  error: Error | null;
  createSegment: (criteria: SegmentCriteria) => Promise<void>;
  updateSegment: (id: string, criteria: SegmentCriteria) => Promise<void>;
  deleteSegment: (id: string) => Promise<void>;
  refreshSegments: () => Promise<void>;
}

export const useSegments = (): UseSegmentsReturn => {
  const [segments, setSegments] = useState<Segment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchSegments = async () => {
    try {
      setIsLoading(true);
      // Simulate API call with mock data
      setSegments(mockSegments);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch segments'));
    } finally {
      setIsLoading(false);
    }
  };

  const createSegment = useCallback(async (criteria: SegmentCriteria) => {
    try {
      setIsLoading(true);
      // Simulate API call
      const newSegment: Segment = {
        id: `seg${Date.now()}`,
        name: 'New Segment',
        criteria,
        count: 0
      };
      setSegments(prev => [...prev, newSegment]);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to create segment'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateSegment = useCallback(async (id: string, criteria: SegmentCriteria) => {
    try {
      setIsLoading(true);
      setSegments(prev => 
        prev.map(segment => 
          segment.id === id 
            ? { ...segment, criteria }
            : segment
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update segment'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteSegment = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      setSegments(prev => prev.filter(segment => segment.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to delete segment'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSegments();
  }, []);

  return {
    segments,
    isLoading,
    error,
    createSegment,
    updateSegment,
    deleteSegment,
    refreshSegments: fetchSegments
  };
}; 