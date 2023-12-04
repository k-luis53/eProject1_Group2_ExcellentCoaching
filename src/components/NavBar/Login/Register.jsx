import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import './App4.css';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);


    const handleToggle = () => {
      if (type==='password'){
         setIcon(eye);
         setType('text')
      } else {
         setIcon(eyeOff)
         setType('password')
      }
   }
    const handleSubmit = (e) => {
        e.preventDefault();
        // If everything is valid, perform your registration logic here
    };

    const addUser = () => {

        // Username validation
        if (!username.match(/^.{3,}$/)) {
            setError('Username must be 3 characters or more');
            return;
        }

        // Email validation
        if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            setError('Invalid email');
            return;
        }

        // Password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
        if (!password.match(passwordRegex)) {
            setError('Password must contain at least 1 capital letter, 1 special character, 1 number, and be 8 characters or more');
            return;

        }

        // Confirm password validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        const newUser = { "name": username, "email": email, "password": password };

        fetch('https://653f520a9e8bd3be29e042ce.mockapi.io/User', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(newUser)
        }).then(res => {
            if (res.ok) {
                alert("Register successfully");
                alert("Please wait for a response via email");
            }
        }).then(() => navigate(`/`));
    }

    return (
        <form onSubmit={handleSubmit} className='register-form'>
            <h1 className='Register'>Register</h1>
            <input
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='register-i'/>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='register-i' />
            <span className="eyeToggle" onClick={handleToggle}>
                  <Icon className="eye-icon" icon={icon} size={25}/>
              </span>
            <div>
            <input
                type={type}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='register-i'  /></div>
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='register-i' />
            <button type="submit" onClick={addUser} className='regis-but'>Submit</button>
            {error && <p className='register-p'>{error}</p>}
        </form>
    );
};

export default Register;

