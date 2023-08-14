import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/health') // Assuming your Spring Boot app runs on the same host
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;