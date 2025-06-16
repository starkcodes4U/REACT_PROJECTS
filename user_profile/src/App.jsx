import React from 'react';
import Notifications from './Notifications';

const App = () => {
  const initialNotifications = [
    { message: 'New message from John', date: '2025-06-16', time: '9:00 AM', read: false },
    { message: 'Your order has shipped', date: '2025-06-15', time: '1:30 PM', read: true },
    { message: 'New friend request', date: '2025-06-14', time: '6:00 PM', read: false }
  ];

  return (
    <div>
      <Notifications initialNotifications={initialNotifications} />
    </div>
  );
};

export default App;
