import React from 'react';
import { MetricCardProps, TrendDirection } from '../../types';
import styles from './MetricCard.module.css';

/**
 * A responsive card component that displays a metric with optional trend indicator,
 * icon, and footer. Supports loading and error states.
 */
export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  period,
  trend
}) => {
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 1
    }).format(num);
  };

  const getTrendColor = (trend: TrendDirection): string => {
    switch (trend) {
      case 'up':
        return styles.positive;
      case 'down':
        return styles.negative;
      default:
        return styles.neutral;
    }
  };

  const getTrendIcon = (trend: TrendDirection): string => {
    switch (trend) {
      case 'up':
        return '↑';
      case 'down':
        return '↓';
      default:
        return '→';
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.value}>{formatNumber(value)}</div>
      <div className={`${styles.change} ${getTrendColor(trend)}`}>
        <span className={styles.trendIcon}>{getTrendIcon(trend)}</span>
        <span>{formatNumber(Math.abs(change))}%</span>
        <span className={styles.period}>{period}</span>
      </div>
    </div>
  );
};

export default MetricCard; 