import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


function UserDetail() {
    const {id} = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://653f520a9e8bd3be29e042ce.mockapi.io/User/${id}`)
        .then((data) =>data.json())
        .then((usr) => setUser(usr));
    }, [id]);      

    return ( 
        <div className="user-detail-container">
            <div className="detail-info">
                <h2>Name: {user.name}</h2>               
                <h6>Email: {user.email}</h6>
            </div>
        </div>
     );
}

export default UserDetail;