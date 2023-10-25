import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Subscripcion from '../Home/Subscripcion/Subscripcion'
import Logo from '../../assets/logo.png'
import Editores from './Editores/Editores'

const Priuspeople = [
    {
        name: 'Bryam Colán',
        role: 'Gerente General',
        orcid: 'https://orcid.org/0000-0003-1976-9859',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Ana Luna Abarca',
        role: 'Editora en Jefe',
        orcid: 'https://orcid.org/0000-0001-7138-7183',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Vanessa Retamoso Cuadros',
        role: 'Coordinadora de ediciones',
        orcid: 'https://orcid.org/0000-0002-9665-7044',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Fabiola Romina Yucra',
        role: 'Asistente Editorial',
        orcid: 'https://orcid.org/0009-0003-6687-1837',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Janicce Power Fierro',
        role: 'Diseño, Enmaquetación y Traducción',
        orcid: 'https://orcid.org/0009-0007-4012-6045',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'David Agusto Villacorta',
        role: 'Diseño, Enmaquetación y Traducción',
        orcid: 'https://orcid.org/0009-0008-8168-4104',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Reyshell de la Rosa',
        role: 'Diseño, Enmaquetación y Traducción',
        orcid: 'https://orcid.org/0000-0003-0045-1445',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Charlie Tocas Bringas',
        role: 'Administrador',
        orcid: 'https://orcid.org/0009-0003-5313-5988',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Maricielo Mendoza',
        role: 'Asistente de Gerencia',
        orcid: 'https://orcid.org/0009-0006-9364-6055',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Angie Huiza',
        role: 'Asistente de Recursos Humanos',
        orcid: 'https://orcid.org/0009-0009-2794-8110',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
]

const QuienesSomos = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="relative isolate overflow-hidde py-24 sm:py-32 w-full flex text-center justify-center ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">¿Quines somos?</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Explora Nuestra Trayectoria y Conoce a las Personas Apasionadas que Hay Detrás. Descubre Cómo Nuestra Historia, Valores y Compromiso dan Forma a lo que Somos.                              </p>
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
            <div className="bg-white py-8 sm:py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">SOBRE NOSOTROS</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Bienvenido a nuestro Comité Científico Internacional, un equipo de expertos altamente capacitados en revisión con amplia experiencia en su campo. Con miembros provenientes de diferentes países, trabajamos juntos para asegurarnos de que cada artículo publicado en nuestras revistas cumpla con los más altos estándares de calidad y relevancia. Nos enorgullece ser líderes en la industria y ofrecer contenido valioso a nuestros lectores.
                            </p>
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
                                <div className="mx-auto max-w-xs">
                                    <img src={Logo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-12 sm:py-12">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestro Equipo</h2>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {Priuspeople.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-lightleading-6 text-gray-600">{person.role}</p>
                                        <a href={person.orcid} className="text-sm font-light leading-6 text-gray-600">ORCID</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div> 
            </div>
            <p className=" text-3xl font-bold tracking-tight text-center mt-40  sm:text-4xl">Nuestros Editores</p>
            <Editores></Editores>
            <Subscripcion></Subscripcion>
        </>
    )
}

export default QuienesSomos