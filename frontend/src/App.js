import './App.css';
import Start from './pages/StartPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/RegisterPage'
//react 사용
//react-router-dom 사용

function App() {
    return(<BrowserRouter>
        <Routes>
        <Route path="start" element={<Start/>}/>
        <Route path="register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>)
}

export default App;
