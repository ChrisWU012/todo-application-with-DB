import React, { useEffect } from 'react';
import TodoList from '../components/TodoList';
import { logoutThunk } from '../redux/authSlice';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function Secret() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.authStore.isAuthenticated)
    useEffect(() => {
        if (auth === false) {
            navigate("/login");
        }
    }, [auth, navigate]);
    return (
        <div className='secret-page'>
            <TodoList />
            <br />
            <button onClick={() => { dispatch(logoutThunk()) }}>Logout</button>
        </div>
    )
}
