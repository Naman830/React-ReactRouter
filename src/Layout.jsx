import React from 'react';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import { Outlet } from 'react-router-dom';



const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>            
        </>
    );
}

export default Layout;
