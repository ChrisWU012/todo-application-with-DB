import React from 'react';
import "./Home.css";

export default function Home() {
    return (
        <div className='home-page'>
            <h3>To-do React Application with PostgresDB</h3>
            <a href="/signup">Sign up</a>
            <a href="/login">Login</a>
        </div>
    )
}
