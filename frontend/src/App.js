import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Secret from './pages/Secret';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/todo' element={<Secret />} />
      </Routes>
    </div>
  );
}

export default App;
