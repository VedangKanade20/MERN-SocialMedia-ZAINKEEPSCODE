import React, { useState } from "react";
import "./Settings.css";

const SettingsPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false
  });

  const handleSaveSettings = () => {
    // Send updated settings to backend
    console.log("Settings saved:", { username, email, profileVisibility, notificationSettings });
  };

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      <div className="settings-section">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="settings-section">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="settings-section">
        <label>Profile Visibility:</label>
        <select value={profileVisibility} onChange={(e) => setProfileVisibility(e.target.value)}>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="friends">Friends Only</option>
        </select>
      </div>

      <h2>Notification Settings</h2>
      <div className="settings-section">
        <label>Email Notifications:</label>
        <input type="checkbox" checked={notificationSettings.emailNotifications} onChange={(e) => setNotificationSettings({ ...notificationSettings, emailNotifications: e.target.checked })} />
      </div>
      <div className="settings-section">
        <label>Push Notifications:</label>
        <input type="checkbox" checked={notificationSettings.pushNotifications} onChange={(e) => setNotificationSettings({ ...notificationSettings, pushNotifications: e.target.checked })} />
      </div>
      <div className="settings-section">
        <label>SMS Notifications:</label>
        <input type="checkbox" checked={notificationSettings.smsNotifications} onChange={(e) => setNotificationSettings({ ...notificationSettings, smsNotifications: e.target.checked })} />
      </div>

      <button className="save-button" onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default SettingsPage;
