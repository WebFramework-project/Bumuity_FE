
import './App.css';
import Start from './pages/StartPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import Profile from './pages/UserProfile';

import Chat from './pages/ChatMain';
//react 사용
//react-router-dom 사용

function App() {
    return (
    <BrowserRouter>
        <Routes>
        <Route path="" element={<Start />} index />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/chat" element={<Chat />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;
