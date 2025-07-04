import { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function Profile() {
  const { user, changeUser } = useContext(UserContext);
  return (
    <div>
      <h3>Profile</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={changeUser}>Login as another user</button>
    </div>
  );
}
