import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search/Search';
import Contact from './components/Contact';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' Component={Home}/>
                <Route exact path='/home' Component={Home}/>
                <Route exact path='/about' Component={About}/>
                <Route exact path='/search' Component={Search}/>
                <Route exact path='/contact'Component={Contact}/>
            </Routes>
        </>
    );
}

export default App;