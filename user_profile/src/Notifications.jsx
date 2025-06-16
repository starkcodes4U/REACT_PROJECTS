import React, { useState } from 'react';
import './Notifications.css';

const Notifications = ({ initialNotifications }) => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const handleMarkAsRead = (index) => {
    const updated = notifications.map((note, i) =>
      i === index ? { ...note, read: true } : note
    );
    setNotifications(updated);
  };

  const filteredNotifications = showUnreadOnly
    ? notifications.filter((note) => !note.read)
    : notifications;

  return (
    <div className="notification-container">
      <h2>Notifications</h2>
      <label>
        <input
          type="checkbox"
          checked={showUnreadOnly}
          onChange={() => setShowUnreadOnly(!showUnreadOnly)}
        />
        Show Unread Only
      </label>
      <ul className="notification-list">
        {filteredNotifications.length === 0 ? (
          <p className="empty-msg">No notifications</p>
        ) : (
          filteredNotifications.map((note, index) => (
            <li
              key={index}
              className={`notification-item ${note.read ? 'read' : 'unread'}`}
              onClick={() => handleMarkAsRead(index)}
            >
              <div>
                <strong>{note.message}</strong>
                <p>{note.date} - {note.time}</p>
              </div>
              <span className="status">{note.read ? 'Read' : 'Unread'}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Notifications;
