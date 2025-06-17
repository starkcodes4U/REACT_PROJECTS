import React, { useEffect, useState } from 'react';
const UserFetcher = () => {
    const [user, setUsers] = useState(null);
    const[count, setCount] = useState(0);

    const fetchUser = async (num) => {
        const response = await fetch(`https://randomuser.me/api/?results=${num}`);
        const data = await response.json();
        setUsers(data.results);
    };

    useEffect(() => {
        if (count > 0) {
            fetchUser(count);
        }
    }, [count]);

    return(
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>
                Show {count + 1} User{count + 1 === 1 ? '' : 's'}
            </button>
            {user && 
                (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap:'1rem', marginTop: '1rem' }}>
                        {user.map((user, index) => (
                            <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
                                <h2>{user.name.first} {user.name.last}</h2>
                                <img src={user.picture.medium} alt="User" />
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}
export default UserFetcher;