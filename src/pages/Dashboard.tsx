import React from 'react';
import { mockMetrics, mockTimeSeriesData } from '../mocks/data/data';
import { MetricCard } from '../features/analytics/components/MetricCard/MetricCard';
import { AudienceChart } from '../features/analytics/components/AudienceChart/AudienceChart';
import styles from './Dashboard.module.css';

interface DashboardProps {
  className?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
      </header>

      <section className={styles.metricsGrid} aria-label="Key Metrics">
        {mockMetrics.map((metric, index) => (
          <MetricCard
            key={`metric-${metric.title}-${index}`}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            period={metric.period}
            trend={metric.trend}
          />
        ))}
      </section>

      <section className={styles.chartSection} aria-label="Audience Analytics">
        <AudienceChart
          data={mockTimeSeriesData}
          title="Audience Distribution Over Time"
        />
      </section>
    </div>
  );
};

export default Dashboard; 