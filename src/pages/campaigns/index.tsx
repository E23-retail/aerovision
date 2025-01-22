import React from 'react';
import { mockCampaigns } from '../../mocks/data/data';
import styles from './Campaigns.module.css';

export const Campaigns: React.FC = () => {
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'active':
        return styles.statusActive;
      case 'draft':
        return styles.statusDraft;
      case 'completed':
        return styles.statusCompleted;
      default:
        return '';
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Campaigns</h1>
        <button className={styles.createButton}>
          Create Campaign
        </button>
      </header>

      <div className={styles.campaignGrid}>
        {mockCampaigns.map((campaign) => (
          <div key={campaign.id} className={styles.campaignCard}>
            <div className={styles.campaignHeader}>
              <h3 className={styles.campaignName}>{campaign.name}</h3>
              <span className={`${styles.status} ${getStatusColor(campaign.status)}`}>
                {campaign.status}
              </span>
            </div>

            <div className={styles.dateRange}>
              <div className={styles.date}>
                <span className={styles.dateLabel}>Start:</span>
                <span className={styles.dateValue}>{formatDate(campaign.startDate)}</span>
              </div>
              <div className={styles.date}>
                <span className={styles.dateLabel}>End:</span>
                <span className={styles.dateValue}>{formatDate(campaign.endDate)}</span>
              </div>
            </div>

            <div className={styles.airports}>
              <span className={styles.sectionLabel}>Target Airports:</span>
              <div className={styles.airportTags}>
                {campaign.targetAirports.map((airport) => (
                  <span key={airport} className={styles.tag}>
                    {airport}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.tags}>
              <span className={styles.sectionLabel}>Tags:</span>
              <div className={styles.tagList}>
                {campaign.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.editButton}>
                Edit Campaign
              </button>
              {campaign.status === 'draft' && (
                <button className={styles.activateButton}>
                  Activate
                </button>
              )}
              {campaign.status === 'active' && (
                <button className={styles.completeButton}>
                  Complete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns; 