import './App.css';
import React from 'react';
import '../src/style/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './pages/navigationBar';
import Footer from './pages/footer';
import Home from './pages/home';

function App() {
    return (
        <>
            <Router>
                <div>
                    <NavigationBar />
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

                <div>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
