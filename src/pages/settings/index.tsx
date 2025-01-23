import React from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { useSettings } from '../../hooks/useSettings';
import Card from '../../components/molecules/Card/Card';
import Select from '../../components/atoms/Select/Select';
import Switch from '../../components/atoms/Switch/Switch';
import styles from './Settings.module.css';

const Settings: React.FC = () => {
  const { mode, setMode } = useTheme();
  const { display, notifications, updateDisplay, updateNotifications } = useSettings();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Settings</h1>
      
      <div className={styles.section}>
        <Card>
          <h2>Theme Settings</h2>
          <div className={styles.setting}>
            <label htmlFor="theme">Theme Mode</label>
            <Select
              id="theme"
              value={mode}
              onChange={(value) => setMode(value as unknown as 'light' | 'dark' | 'system')}
              options={[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'system', label: 'System' },
              ]}
            />
          </div>
          <div className={styles.setting}>
            <label htmlFor="density">Display Density</label>
            <Select
              id="density"
              value={display.density}
              onChange={(e) => updateDisplay({ density: e.target.value as 'comfortable' | 'compact' | 'spacious' })}
              options={[
                { value: 'comfortable', label: 'Comfortable' },
                { value: 'compact', label: 'Compact' },
              ]}
            />
          </div>
          <div className={styles.setting}>
            <label htmlFor="animations">Enable Animations</label>
            <Switch
              id="animations"
              checked={display.animations}
              onChange={(checked) => updateDisplay({ animations: checked })}
            />
          </div>
        </Card>
      </div>

      <div className={styles.section}>
        <Card>
          <h2>Notification Settings</h2>
          <div className={styles.setting}>
            <label htmlFor="emailNotifications">Email Notifications</label>
            <Switch
              id="emailNotifications"
              checked={notifications.email}
              onChange={(checked) => updateNotifications({ email: checked })}
            />
          </div>
          <div className={styles.setting}>
            <label htmlFor="pushNotifications">Push Notifications</label>
            <Switch
              id="pushNotifications"
              checked={notifications.push}
              onChange={(checked) => updateNotifications({ push: checked })}
            />
          </div>
          <div className={styles.setting}>
            <label htmlFor="frequency">Notification Frequency</label>
            <Select
              id="frequency"
              value={notifications.frequency}
              onChange={(e) => updateNotifications({ frequency: e.target.value as 'realtime' | 'daily' | 'weekly' })}
              options={[
                { value: 'realtime', label: 'Real-time' },
                { value: 'daily', label: 'Daily Digest' },
                { value: 'weekly', label: 'Weekly Summary' },
              ]}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings; 