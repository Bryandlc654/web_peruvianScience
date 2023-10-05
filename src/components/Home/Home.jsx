import React from 'react'
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Revistas from "./Revistas/Revistas";
import Publicaciones from "./Publicaciones/Publicaciones";
import Subscripcion from "./Subscripcion/Subscripcion";

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Revistas></Revistas>
            <Publicaciones></Publicaciones>
            <Subscripcion></Subscripcion>
        </>
    )
}

export default Home