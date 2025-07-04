import React from 'react';
import './styles/UserProfile.css';

const UserProfile = ({ name, email, avatarUrl, bio }) => {
  const defaultAvatar = 'https://i.pravatar.cc/150?img=65';

  return (
    <div className="user-card">
      <img src={avatarUrl || defaultAvatar} alt="avatar" />
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
};

UserProfile.defaultProps = {
  name: "Anonymous",
  email: "unknown@example.com",
  bio: "No bio available.",
  avatarUrl: ""
};

export default UserProfile;
