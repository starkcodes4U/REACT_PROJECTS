import React, { useState } from 'react';
import UserProfile from './UserProfile';
import Notifications from './Notifications';

import './styles/Theme.css';




const Dashboard = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const user = {
    name: "Jagannath Tripathy",
    email: "jagan@example.com",
    bio: "Frontend Developer",
    avatarUrl: "https://i.pravatar.cc/150?img=65"
  };

  const notifications = [
    { message: "You have a new message!", timestamp: "2025-06-16 10:00 AM", read: false },
    { message: "Your profile was updated.", timestamp: "2025-06-15 8:30 PM", read: true },
    { message: "System maintenance tonight.", timestamp: "2025-06-14 6:45 PM", read: false }
  ];

  return (
    <div className={`dashboard ${darkTheme ? 'dark' : 'light'}`}>
      <button className="theme-toggle" onClick={() => setDarkTheme(!darkTheme)}>
        Switch to {darkTheme ? 'Light' : 'Dark'} Mode
      </button>
      <div className="dashboard-content">
  <div className="left-box">
    <UserProfile {...user} />
  </div>
  <div className="right-box">
    <Notifications items={notifications} />
  </div>
</div>

    </div>
  );
};
export default Dashboard;