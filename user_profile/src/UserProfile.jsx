import React from 'react';
import './UserProfile.css';

const UserProfile = ({ name, email, avatarUrl, bio }) => {
  return (
    <div className="user-card">
      <img
        src={avatarUrl || 'https://via.placeholder.com/150'}
        alt={name}
        className="avatar"
      />
      <div className="user-info">
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

// Default props
UserProfile.defaultProps = {
  name: 'Anonymous User',
  email: 'No Email Provided',
  avatarUrl: '',
  bio: 'No bio available.'
};

export default UserProfile;
