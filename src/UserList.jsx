import User from "./User";
import { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        fetch("https://653f520a9e8bd3be29e042ce.mockapi.io/User")
        .then((data) =>data.json())
        .then((userList) => setUsers(userList));
    }

    useEffect(() => getUsers(), []);

    return ( 
        <div className="user-container-list">
            {users.map( (user, index) => <User 
                                            name={user.name} 
                                            email={user.email}
                                            id={user.id}
                                            key={index}
                                            /> )}
        </div>
     );
}

export default UserList;
