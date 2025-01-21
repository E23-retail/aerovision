import React, { memo, useMemo } from 'react';
import { Box, Tooltip, Typography, useTheme, alpha, useMediaQuery } from '@mui/material';
import TrendIcon from '../../atoms/TrendIcon/TrendIcon';
import { MetricTrend } from '../../../types/metrics';

export interface TrendIndicatorProps {
  /** The numerical value of the trend */
  value: number;
  /** The trend information */
  trend: MetricTrend;
  /** Optional description for the tooltip */
  description?: string;
  /** Additional CSS class names */
  className?: string;
  /** Test ID for testing purposes */
  testId?: string;
}

/**
 * A responsive component that displays trend information with an icon and value.
 * Supports tooltips and different color schemes based on trend type.
 */
export const TrendIndicatorComponent: React.FC<TrendIndicatorProps> = ({
  trend,
  description,
  className,
  testId = 'trend-indicator',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const formattedValue = useMemo(() => {
    try {
      return `${trend.value > 0 ? '+' : ''}${trend.value}%`;
    } catch (err) {
      console.error('Error formatting trend value:', err);
      return '0%';
    }
  }, [trend.value]);

  const colors = useMemo(() => {
    switch (trend.direction) {
      case 'up':
        return {
          color: theme.palette.success.main,
          background: alpha(theme.palette.success.main, 0.1),
          hoverBackground: alpha(theme.palette.success.main, 0.15),
        };
      case 'down':
        return {
          color: theme.palette.error.main,
          background: alpha(theme.palette.error.main, 0.1),
          hoverBackground: alpha(theme.palette.error.main, 0.15),
        };
      default:
        return {
          color: theme.palette.text.secondary,
          background: alpha(theme.palette.action.hover, 0.8),
          hoverBackground: theme.palette.action.hover,
        };
    }
  }, [theme, trend.direction]);

  const ariaLabel = useMemo(() => {
    const trendType = trend.direction === 'neutral' ? 'unchanged' : trend.direction;
    return `${trendType} trend: ${formattedValue}${description ? `, ${description}` : ''}`;
  }, [trend.direction, formattedValue, description]);

  const containerStyles = useMemo(() => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 0.5,
    px: { xs: 0.75, sm: 1 },
    py: { xs: 0.25, sm: 0.5 },
    borderRadius: 1,
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
    },
    fontWeight: 500,
    color: colors.color,
    bgcolor: colors.background,
    transition: theme.transitions.create(
      ['background-color', 'transform', 'box-shadow'],
      { duration: theme.transitions.duration.shorter }
    ),
    userSelect: 'none',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      bgcolor: colors.hoverBackground,
      transform: 'scale(1.02)',
      boxShadow: `0 1px 2px ${alpha(colors.color, 0.1)}`,
    },
    '&:focus-visible': {
      outline: `2px solid ${colors.color}`,
      outlineOffset: 2,
    },
  }), [theme, colors]);

  const content = (
    <Box
      className={className}
      role="status"
      aria-label={ariaLabel}
      data-testid={testId}
      data-trend-type={trend.direction}
      data-trend-value={trend.value}
      component="span"
      sx={containerStyles}
    >
      <TrendIcon 
        trend={trend}  
        sx={{
          fontSize: {
            xs: '0.875rem',
            sm: '1rem',
          },
        }}
      />
      <Typography
        variant="body2"
        component="span"
        sx={{
          fontFamily: 'var(--font-mono, monospace)',
          letterSpacing: '-0.5px',
          position: 'relative',
          zIndex: 1,
          fontSize: 'inherit',
        }}
      >
        {formattedValue}
      </Typography>
    </Box>
  );

  return description ? (
    <Tooltip 
      title={description}
      arrow
      placement="top"
      enterDelay={isMobile ? 200 : 300}
      leaveDelay={200}
      sx={{
        '& .MuiTooltip-tooltip': {
          bgcolor: theme.palette.grey[900],
          color: theme.palette.common.white,
          fontSize: theme.typography.pxToRem(isMobile ? 11 : 12),
          borderRadius: 1,
          px: 1.5,
          py: 0.75,
          maxWidth: { xs: 250, sm: 300 },
        },
        '& .MuiTooltip-arrow': {
          color: theme.palette.grey[900],
        },
      }}
    >
      {content}
    </Tooltip>
  ) : content;
};

export const TrendIndicator = memo(TrendIndicatorComponent);
export default TrendIndicator; 