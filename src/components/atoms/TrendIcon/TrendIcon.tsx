import React, { memo } from 'react';
import { SvgIcon, SvgIconProps, useTheme } from '@mui/material';
import { MetricTrend } from '../../../features/analytics/types';

interface TrendIconProps extends Omit<SvgIconProps, 'children'> {
  /** The trend information */
  trend: MetricTrend;
}

export const TrendIconComponent: React.FC<TrendIconProps> = ({ 
  trend,
  sx,
  ...props 
}) => {
  const theme = useTheme();

  if (trend.direction === 'neutral') return null;

  return (
    <SvgIcon
      {...props}
      sx={{
        fontSize: 'inherit',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
        }),
        '&:hover': {
          transform: 'scale(1.1)',
        },
        ...sx,
      }}
      role="img"
      aria-label={`${trend.direction} trend indicator`}
    >
      {trend.direction === 'up' ? (
        <path
          d="M8 4L4 8M8 4L12 8M8 4V12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M8 12L4 8M8 12L12 8M8 12V4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </SvgIcon>
  );
};

export const TrendIcon = memo(TrendIconComponent);
export default TrendIcon; 