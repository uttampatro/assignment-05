import './App.css';
import AddUser from './pages/addUser';
import Home from './pages/home';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const userExists = localStorage.getItem('accessToken');
        userExists ? setIsAuth(true) : setIsAuth(false);
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <div className="app_body">
                    <Routes>
                        {!isAuth ? (
                            <Route
                                path="/"
                                element={<Login auth={() => setIsAuth(true)} />}
                            />
                        ) : (
                            <>
                                <Route
                                    path="/home"
                                    element={
                                        <Home auth={() => setIsAuth(false)} />
                                    }
                                />
                                <Route
                                    path="/addUser"
                                    element={
                                        <AddUser
                                            auth={() => setIsAuth(false)}
                                        />
                                    }
                                />
                            </>
                        )}
                        <Route path="*" />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
