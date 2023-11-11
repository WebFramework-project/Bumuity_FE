import './App.css';
import Start from './pages/StartPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import Profile from './pages/UserProfile';
//react 사용
//react-router-dom 사용

function App() {
    return(<BrowserRouter>
        <Routes>
        <Route path="start" element={<Start/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="Profile" element={<Profile/>}/>
        </Routes>
    </BrowserRouter>)
}

export default App;
