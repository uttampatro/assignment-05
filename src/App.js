import './App.css';
import AddUser from './pages/addUser';
import Home from './pages/home';
import Login from './pages/login';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app_body">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/addUser" element={<AddUser />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
