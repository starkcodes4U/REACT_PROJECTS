import { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header style={{ background: '#1976d2', color: '#fff', padding: '1rem', marginBottom: '1rem' }}>
      <h1>Welcome, {user.name}!</h1>
    </header>
  );
}
