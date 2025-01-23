import React from 'react';
import { useSegments } from '../../hooks/useSegments';
import PageHeader from '../../components/molecules/PageHeader/PageHeader';
import Button from '../../components/atoms/Button/Button';
import Card from '../../components/molecules/Card/Card';
import { MetricCard } from '../../features/analytics/components/MetricCard/MetricCard';
import styles from './Segments.module.css';

export const Segments: React.FC = () => {
  const { segments, isLoading } = useSegments();

  return (
    <div className={styles.container}>
      <PageHeader
        title="Audience Segments"
        description="Create and manage audience segments based on traveler behavior and preferences"
        actions={
          <Button variant="primary" size="md">
            Create Segment
          </Button>
        }
      />

      <div className={styles.overview}>
        <MetricCard
          title="Total Segments"
          value={segments.length}
          trend="neutral"
          change={0}
          period="All time"
        />
        <MetricCard
          title="Active Segments"
          value={segments.filter(s => s.count > 0).length}
          trend="up"
          change={12.5}
          period="vs last month"
        />
      </div>

      <div className={styles.segmentGrid}>
        {segments.map(segment => (
          <Card key={segment.id} className={styles.segmentCard}>
            <div className={styles.segmentHeader}>
              <h3>{segment.name}</h3>
              <span className={styles.count}>{segment.count.toLocaleString()} travelers</span>
            </div>
            
            <div className={styles.criteria}>
              {segment.criteria.travelClass && (
                <div className={styles.criteriaItem}>
                  <span className={styles.label}>Travel Class</span>
                  <div className={styles.tags}>
                    {segment.criteria.travelClass.map(cls => (
                      <span key={cls} className={styles.tag}>{cls}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {segment.criteria.interests && (
                <div className={styles.criteriaItem}>
                  <span className={styles.label}>Interests</span>
                  <div className={styles.tags}>
                    {segment.criteria.interests.map(interest => (
                      <span key={interest} className={styles.tag}>{interest}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={styles.actions}>
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </Card>
        ))}
      </div>

      {isLoading && (
        <div className={styles.loading}>
          Loading segments...
        </div>
      )}
    </div>
  );
};

export default Segments; 