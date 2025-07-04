import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Jagannath',
    email: 'jagannath.rj123@gmail.com'
  });

  // Function to simulate switching users
  const changeUser = () => {
    setUser(prev =>
      prev.name === 'Jagannath'
        ? { name: 'Brahamananda', email: 'brahma@gmail.com' }
        : { name: 'Jagannath', email: 'jagannath.rj123@gmail.com' }
    );
  };

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}
