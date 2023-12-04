import { useNavigate } from 'react-router-dom';

function User({name, email, id}) {
    const navigate = useNavigate();
    return ( 
        <div className="user-container" >
            <h2 className="user-name">{name}</h2>
            <h6>{email}</h6>
            <button onClick={() => navigate(`/User/${id}`)} className='btn btn-info'>info</button>
            
        </div>
     );
}

export default User;