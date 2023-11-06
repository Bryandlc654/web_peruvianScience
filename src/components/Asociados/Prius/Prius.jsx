import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'


const Priuspeople = [
    {
        name: 'Dr. Raúl Chanamé Orbe',
        role: 'Editor en Jefe',
        universidad: 'Universidad Nacional Mayor de San Marcos - Perú',
        orcid: 'https://orcid.org/0000-0002-8879-9544 ',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Mg. Manuel Bermúdez Tapia',
        role: 'Comité Editorial',
        universidad: 'Universidad Nacional Mayor de San Marcos - Perú',
        orcid: 'https://orcid.org/0000-0003-1576-9464 ',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Dr. Antonio Alfonso Peña Jumpa',
        role: 'Comité Editorial',
        universidad: 'Katholieke Universiteit Leuven - Bélgica',
        orcid: 'https://orcid.org/0000-0003-1571-0139 ',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Dr. Jesús Francisco Carpio Mendoza',
        role: 'Comité Editorial',
        universidad: 'Universidad Nacional Autónoma de México - México',
        orcid: 'https://orcid.org/0000-0002-6862-9804 ',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Dr. Raúl Alberto Rengifo Lozano',
        role: 'Comité Editorial',
        universidad: 'Universidad Nacional Mayor de San Marcos',
        orcid: 'https://orcid.org/0000-0002-6545-6442 ',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Mg. Mauricio Bahid Gonzales Soria',
        role: 'Comité Editorial',
        universidad: 'Universidad  Técnica de Oruro - Bolivia',
        orcid: 'https://orcid.org/0000-0003-1571-0139 ',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Mg. Octavio García Ramírez',
        role: 'Comité Editorial',
        universidad: 'Red Académica de Gobierno Abierto',
        orcid: 'https://orcid.org/0009-0002-9575-6697 ',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
]

const Priuscientifico = [
    {
        name: 'Dr. Dante Abelardo Urbina Padilla',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad de Lima - Perú',
        orcid: 'https://orcid.org/0000-0001-5403-9232',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Dr. Alixon David Reyes Rodríguez',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad Adventista de Chile - Chile',
        orcid: 'https://orcid.org/0000-0001-9857-0930',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Mg. Luis Andrés Portugal Pizarro',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad San Martín de Porres - Perú',
        orcid: 'https://orcid.org/0000-0001-5403-9232',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Mg. Santiago Arturo Gutiérrez Rodríguez',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad Nacional de Trujillo - Perú',
        orcid: 'https://orcid.org/0000-0003-3612-1587',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Mg. Maria Adela Cuba Muñiz',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad Andina de Cusco - Perú',
        orcid: 'https://orcid.org/0000-0003-1327-947X',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Mg. Raúl Bladimiro Canelo Rabanal',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad Nacional Mayor de San Marcos - Perú',
        orcid: 'https://orcid.org/0000-0002-1776-247X',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Mg. Armando Gómez Híjar',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad Federico Villareal - Perú',
        orcid: 'https://orcid.org/0009-0001-2730-5483',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
    {
        name: 'Abg. Giannina Eva Diaz Barriaga',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad César Vallejo - Perú',
        orcid: 'https://orcid.org/0000-0001-6118-2176',
        imageUrl:
            'https://repoimagenes.000webhostapp.com/Imagenes/usuario.webp',
    },
]

const includedFeatures = [
    'Editor en Jefe',
    'Comité editorial',
    'Comité Científico Internacional',
]


const Prius = () => {
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">PRIUS - Revista de Derecho y Ciencia Política</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Revista de acceso abierto de publicación semestral editada por Peruvian Science, Perú. Dedicada a la difusión científica de artículos originales y de revisión de carácter teórico y experimental en el campo jurídico y de la politología.                             </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 ">Nuestro Equipo</h4>
                                <div className="h-px flex-auto bg-gray-100" />
                            </div>
                            <ul
                                role="list"
                                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                            >
                                {includedFeatures.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
                                <div className="mx-auto max-w-xs">
                                    <img src="https://repoimagenes.000webhostapp.com/Imagenes/prius.webp" alt="Revista Prius" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-12 sm:py-12">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comité editorial</h2>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {Priuspeople.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="Comité editorial" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-lightleading-6 text-gray-600">{person.role}</p>
                                        <p className="text-sm font-light leading-6 text-gray-600">{person.universidad}</p>
                                        <a href={person.orcid} className="text-sm font-light leading-6 text-gray-600" title='Ver ORCID'>ORCID</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-white py-12 sm:py-12">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comité Científico Internacional</h2>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {Priuscientifico.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="Comité Científico Internacional" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-lightleading-6 text-gray-600">{person.role}</p>
                                        <p className="text-sm font-light leading-6 text-gray-600">{person.universidad}</p>
                                        <a href={person.orcid} className="text-sm font-light leading-6 text-gray-600" title='Ver ORCID'>ORCID</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Prius