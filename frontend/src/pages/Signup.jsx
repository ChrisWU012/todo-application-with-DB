import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signupThunk } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.authStore.isAuthenticated)

    useEffect(() => {
        if (auth) navigate("/login")
    }, [navigate, auth])
    return (
        <div className='signup-container'>
            <div>
                <h3>Email:</h3>
                <input onChange={(e) => setEmail(e.currentTarget.value)} type="text" value={email} />
                <br />
                <h3>Password:</h3>
                <input onChange={(e) => setPassword(e.currentTarget.value)} type="password" value={password} />
                <br />
                <button onClick={() => { dispatch(signupThunk(email, password)).then(() => { navigate("/login") }) }}>Signup</button>
            </div >
        </div>
    )
}
