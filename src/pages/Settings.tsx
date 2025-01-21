import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>Settings</h1>
      </header>

      <div className="settings-content">
        <section className="settings-section">
          <h2>User Profile</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select>
                <option>Media Owner</option>
                <option>Media Agency</option>
                <option>Airport Advertising Manager</option>
                <option>Campaign Planner</option>
              </select>
            </div>
          </form>
        </section>

        <section className="settings-section">
          <h2>Notifications</h2>
          <div className="notification-settings">
            <div className="setting-item">
              <label>
                <input type="checkbox" />
                Email Notifications
              </label>
            </div>
            <div className="setting-item">
              <label>
                <input type="checkbox" />
                Push Notifications
              </label>
            </div>
            <div className="setting-item">
              <label>
                <input type="checkbox" />
                Threshold Alerts
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings; 