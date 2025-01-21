import React from 'react';
import { mockMetrics, mockTimeSeriesData } from '../mock/data';
import { MetricCard } from '../components/organisms/MetricCard/MetricCard';
import { AudienceChart } from '../components/organisms/AudienceChart/AudienceChart';
import styles from './Dashboard.module.css';

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
      </header>

      <div className={styles.metricsGrid}>
        {mockMetrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            period={metric.period}
            trend={metric.trend}
          />
        ))}
      </div>

      <div className={styles.chartSection}>
        <AudienceChart
          data={mockTimeSeriesData}
          title="Audience Distribution Over Time"
        />
      </div>
    </div>
  );
};

export default Dashboard; 