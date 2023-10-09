import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Rcla from './RCLA/Rcla'
import Prius from './Prius/Prius'
import Subscripcion from '../Home/Subscripcion/Subscripcion'
import Hero from './Hero/Hero'


const Asociados = () => {

    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Rcla></Rcla>
            <Prius></Prius>
            <Subscripcion></Subscripcion>
        </>
    )
}

export default Asociados