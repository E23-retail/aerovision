import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useSettings } from '../../hooks/useSettings';
import Card from '../../components/molecules/Card/Card';
import Select from '../../components/atoms/Select/Select';
import Switch from '../../components/atoms/Switch/Switch';
import styles from './Settings.module.css';

export const Settings: React.FC = () => {
  const { mode, setMode } = useTheme();
  const {
    notifications,
    display,
    isLoading,
    updateNotifications,
    updateDisplay
  } = useSettings();

  const handleThemeChange = (newMode: string) => {
    setMode(newMode as 'light' | 'dark' | 'system');
  };

  const handleDensityChange = (newDensity: string) => {
    updateDisplay({ density: newDensity as 'comfortable' | 'compact' | 'spacious' });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Settings</h1>
      
      <section className={styles.section}>
        <h2>Display</h2>
        <Card className={styles.card}>
          <div className={styles.setting}>
            <label htmlFor="theme">Theme</label>
            <Select
              id="theme"
              value={mode}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleThemeChange(e.target.value)}
              options={[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'system', label: 'System' }
              ]}
            />
          </div>
          
          <div className={styles.setting}>
            <label htmlFor="density">Display Density</label>
            <Select
              id="density"
              value={display.density}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleDensityChange(e.target.value)}
              options={[
                { value: 'comfortable', label: 'Comfortable' },
                { value: 'compact', label: 'Compact' },
                { value: 'spacious', label: 'Spacious' }
              ]}
            />
          </div>

          <div className={styles.setting}>
            <label htmlFor="animations">Enable Animations</label>
            <Switch
              id="animations"
              checked={display.animations}
              onChange={(checked: boolean) => updateDisplay({ animations: checked })}
            />
          </div>
        </Card>
      </section>

      <section className={styles.section}>
        <h2>Notifications</h2>
        <Card className={styles.card}>
          <div className={styles.setting}>
            <label htmlFor="email">Email Notifications</label>
            <Switch
              id="email"
              checked={notifications.email}
              onChange={(checked: boolean) => updateNotifications({ email: checked })}
            />
          </div>

          <div className={styles.setting}>
            <label htmlFor="push">Push Notifications</label>
            <Switch
              id="push"
              checked={notifications.push}
              onChange={(checked: boolean) => updateNotifications({ push: checked })}
            />
          </div>

          <div className={styles.setting}>
            <label htmlFor="frequency">Notification Frequency</label>
            <Select
              id="frequency"
              value={notifications.frequency}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                updateNotifications({ frequency: e.target.value as 'realtime' | 'daily' | 'weekly' })
              }
              options={[
                { value: 'realtime', label: 'Real-time' },
                { value: 'daily', label: 'Daily Digest' },
                { value: 'weekly', label: 'Weekly Summary' }
              ]}
            />
          </div>
        </Card>
      </section>

      {isLoading && <div className={styles.loading}>Saving changes...</div>}
    </div>
  );
};

export default Settings; 