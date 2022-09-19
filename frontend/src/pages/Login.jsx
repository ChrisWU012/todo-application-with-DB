import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginThunk } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("Insert Email");
    const [password, setPassword] = useState("Insert Password");
    const auth = useSelector((state) => state.authStore.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (auth === true) { navigate("/todo"); }
    }
        , [auth, navigate]);
    const login = () => { dispatch(loginThunk(email, password)); };
    return (
        <div>
            <h3>Email:</h3>
            <input onChange={(e) => setEmail(e.currentTarget.value)} type="text" name="email" />

            <br />
            <h3>Password:</h3>
            <input onChange={(e) => setPassword(e.currentTarget.value)} type="password" name="password" />
            <br />
            <button onClick={login}>Login</button>{auth && <p>Login Successful!</p>}
        </div >
    )
}