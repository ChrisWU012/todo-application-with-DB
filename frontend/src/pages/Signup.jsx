import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signupThunk } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const { email, setEmail } = useState();
    const { password, setPassword } = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signup = () => { dispatch(signupThunk(email, password)) }
    const auth = useSelector((state) => state.authStore.isAuthenticated)

    useEffect(() => {
        //route redirect
        if (auth) navigate("/Login")
    }, [navigate, auth])
    return (
        <div className='signup-container'>
            <div>
                <label>Email:
                    <input onChange={(e) => setEmail(e.currentTarget.value)} type="text" value={email} />
                </label>
                <br />
                <label>Password:<input onChange={(e) => setPassword(e.currentTarget.value)} type="text" value={password} />
                </label>
                <br />
                <button onClick={signup}>Signup</button>{/*auth && <p>Login Successful!</p>*/}
            </div >
        </div>
    )
}
