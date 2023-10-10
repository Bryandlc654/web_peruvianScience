import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Rlca from './Rlca/Rlca'
import Prius from './Prius/Prius'


const Revistas = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="relative isolate overflow-hidde py-24 sm:py-32 w-full flex text-center justify-center ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Revistas</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Conoce al Detallado Comité Editorial que Impulsa la Calidad de Nuestras Revistas Científicas. Profesionales Apasionados que Guiarán tu Experiencia en el Mundo de la Investigación.
                        </p>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            title="Quiero Publicar"
                        >
                            Quiero publicar
                        </a>
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Más información <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <a className='w-full flex text-center items-center flex-col mt-10'>
                        <svg width="20px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '1.5' }}>
                            <path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill: 'none', stroke: '#000', strokeWidth: '20px' }} />
                            <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{ fill: 'none', stroke: '#000', strokeWidth: '20px' }} />
                        </svg>
                        <p>Ver más</p>
                    </a>

                </div>
            </div>
            <Rlca></Rlca>
            <Prius></Prius>
        </>
    )
}

export default Revistas