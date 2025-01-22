import React, { memo, useMemo } from 'react';
import { 
  Box, 
  Typography, 
  Skeleton, 
  Fade, 
  Stack, 
  useTheme,
  useMediaQuery,
} from '@mui/material';
import TrendIndicator from '../TrendIndicator/TrendIndicator';
import { MetricTrend, ValueFormatterProps } from '../../types';

interface MetricValueProps extends ValueFormatterProps {
  /** Optional trend information */
  trend?: MetricTrend;
  /** Loading state */
  isLoading?: boolean;
  /** Test ID for testing purposes */
  testId?: string;
}

/**
 * A responsive component that displays a metric value with optional trend indicator.
 * Handles loading states and value formatting with proper mobile optimization.
 */
export const MetricValueComponent: React.FC<MetricValueProps> = ({
  value,
  trend,
  formatter = (val) => val.toString(),
  isLoading = false,
  testId = 'metric-value',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const formattedValue = useMemo(() => {
    try {
      return formatter(value);
    } catch (err) {
      console.error('Error formatting metric value:', err);
      return 'Error';
    }
  }, [value, formatter]);

  const skeletonStyles = useMemo(() => ({
    width: { xs: '70%', sm: '60%' },
    height: { xs: 32, sm: 36, md: 40 },
    borderRadius: 1,
    transform: 'none',
    transformOrigin: '0 0',
    backgroundColor: theme.palette.action.hover,
  }), [theme]);

  const valueStyles = useMemo(() => ({
    fontFamily: 'var(--font-mono, monospace)',
    letterSpacing: '-0.5px',
    fontWeight: 600,
    color: theme.palette.text.primary,
    lineHeight: 1.2,
    fontSize: {
      xs: '1.5rem',
      sm: '1.75rem',
      md: '2rem',
    },
  }), [theme]);

  if (isLoading) {
    return (
      <Skeleton 
        variant="rectangular" 
        animation="wave"
        sx={skeletonStyles}
      />
    );
  }

  return (
    <Fade 
      in={!isLoading} 
      timeout={theme.transitions.duration.shorter}
    >
      <Stack
        direction={isMobile ? 'column' : 'row'}
        alignItems={isMobile ? 'flex-start' : 'baseline'}
        spacing={isMobile ? 1 : 2}
        data-testid={testId}
      >
        <Typography 
          variant={isMobile ? 'h5' : 'h4'}
          component="span"
          sx={valueStyles}
        >
          {formattedValue}
        </Typography>
        {trend && (
          <Box 
            sx={{ 
              display: 'inline-flex',
              alignSelf: isMobile ? 'flex-start' : 'center',
              transform: isMobile ? 'scale(0.9)' : 'none',
              transformOrigin: 'left center',
            }}
          >
            <TrendIndicator
              value={trend.value}
              trend={trend}
            />
          </Box>
        )}
      </Stack>
    </Fade>
  );
};

export const MetricValue = memo(MetricValueComponent);
export default MetricValue; 