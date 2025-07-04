import React, { useState } from 'react';
import './styles/Notifications.css';

const Notifications = ({ items }) => {
  const [notifications, setNotifications] = useState(items);
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const markAsRead = (index) => {
    const updated = [...notifications];
    updated[index].read = true;
    setNotifications(updated);
  };

  const filtered = showUnreadOnly
    ? notifications.filter(n => !n.read)
    : notifications;

  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <label>
        <input
          type="checkbox"
          checked={showUnreadOnly}
          onChange={() => setShowUnreadOnly(!showUnreadOnly)}
        /> Show Unread Only
      </label>
      <ul>
        {filtered.map((note, index) => (
          <li
            key={index}
            className={note.read ? 'read' : 'unread'}
            onClick={() => markAsRead(index)}
          >
            <p>{note.message}</p>
            <small>{note.timestamp}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
