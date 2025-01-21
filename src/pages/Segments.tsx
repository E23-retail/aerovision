import React from 'react';
import { mockSegments } from '../mock/data';
import { SegmentCriteria } from '../types/metrics';
import styles from './Segments.module.css';

export const Segments: React.FC = () => {
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const renderCriteria = (criteria: SegmentCriteria) => {
    return Object.entries(criteria).map(([key, value]) => {
      if (Array.isArray(value)) {
        return (
          <div key={key} className={styles.criteriaItem}>
            <span className={styles.criteriaLabel}>{key}:</span>
            <span className={styles.criteriaValue}>{value.join(', ')}</span>
          </div>
        );
      }
      return (
        <div key={key} className={styles.criteriaItem}>
          <span className={styles.criteriaLabel}>{key}:</span>
          <span className={styles.criteriaValue}>{value}</span>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Audience Segments</h1>
        <button className={styles.createButton}>
          Create New Segment
        </button>
      </header>

      <div className={styles.segmentGrid}>
        {mockSegments.map((segment) => (
          <div key={segment.id} className={styles.segmentCard}>
            <div className={styles.segmentHeader}>
              <h3 className={styles.segmentName}>{segment.name}</h3>
              <span className={styles.segmentCount}>
                {formatNumber(segment.count)} travelers
              </span>
            </div>
            
            <div className={styles.criteria}>
              {renderCriteria(segment.criteria)}
            </div>

            <div className={styles.actions}>
              <button className={styles.editButton}>
                Edit Segment
              </button>
              <button className={styles.deleteButton}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Segments; 