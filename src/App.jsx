import './App.css';
import React from 'react';
import '../src/style/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './pages/navigationBar';
import Footer from './pages/footer';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
    return (
        <>
            <Router>
                <div>
                    <NavigationBar />
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>

                <div>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
