import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { TimeSeriesData } from '../../../types/metrics';
import styles from './AudienceChart.module.css';

interface AudienceChartProps {
  data: TimeSeriesData[];
  title?: string;
  className?: string;
}

export const AudienceChart: React.FC<AudienceChartProps> = ({
  data,
  title = 'Audience Over Time',
  className
}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              interval={2}
              tick={{ fontSize: 12 }}
              padding={{ left: 30, right: 30 }}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              domain={['auto', 'auto']}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              name="Audience Count"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AudienceChart; 