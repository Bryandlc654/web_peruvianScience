import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import { CheckIcon } from '@heroicons/react/20/solid'

const people = [
    {
        name: 'Bach. Ana Lizeth Luna Abarca ',
        role: 'Editor en jefe',
        universidad: 'Universidad San Pedro, Perú',
        orcid: 'https://orcid.org/0000-0001-7138-7183',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Ing. David Saravia Navarro',
        role: 'Comité editorial',
        universidad: 'Univ. Nacional Agraria La Molina - Perú',
        orcid: 'https://orcid.org/0000-0003-3136-220X',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Dr. Armando Vasquez Matute',
        role: 'Comité editorial',
        universidad: 'Univ. Nacional Federico Villareal - Perú ',
        orcid: 'https://orcid.org/0000-0002-6726-8103',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Mg. Neiba Yadira Echeagaray Solorza',
        role: 'Comité editorial',
        universidad: 'Univ. Politécnica de Sinaloa - México',
        orcid: 'https://orcid.org/0000-0002-4830-9395',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Ing. Kennedy Zela Uscamayta',
        role: 'Comité editorial',
        universidad: 'Univ. Nacional del Altiplano - Perú',
        orcid: 'https://orcid.org/0000-0002-0285-219X',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Mg. Wilmer Aquino Minchan ',
        role: 'Comité editorial',
        universidad: 'Univ. Nacional de Cajamarca - Perú',
        orcid: 'https://orcid.org/0000-0002-2624-1174',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Mg. Francisco Andrés Villalobo Brunello',
        role: 'Comité editorial',
        universidad: 'Univ. Nacional de Catamarca - Argentina',
        orcid: 'https://orcid.org/0000-0002-2097-9805',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Blga. Ana Belén Espinoza Jara',
        role: 'Comité editorial',
        universidad: 'Univ. Nacional Mayor de San Marcos – Perú ',
        orcid: 'https://orcid.org/0000-0002-1623-2389',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
]
const cientifico = [
    {
        name: 'Dr. Liberato Cervantes Martínez',
        role: 'Comité Científico Internacional',
        universidad: 'Univ. Autónoma de Sinaloa - México',
        orcid: 'https://orcid.org/0000-0003-3501-7059',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Dr. Andrés Ultreras Rodríguez',
        role: 'Comité Científico Internacional',
        universidad: 'Univ. Autónoma de Sinaloa - México',
        orcid: 'https://orcid.org/0000-0003-0621-9508',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Bach. Jhojana Marilia Lorenzo Quispe',
        role: 'Comité Científico Internacional',
        universidad: 'Univ. Nacional Hermilio Valdizán - Perú',
        orcid: 'https://orcid.org/0009-0003-7702-3972',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Ing. Albana Rocío Cáceres Borzaga',
        role: 'Comité Científico Internacional',
        universidad: 'Univ. Nacional de Catamarca - Argentina',
        orcid: 'https://orcid.org/0000-0002-2372-1893',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Ing. Augusto Carlos Contreras Díaz ',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad Nacional Agraria La Molina -  Perú',
        orcid: 'https://orcid.org/0000-0002-5563-4858',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Dr. Mario Ben-Hur Chuc Armendáriz',
        role: 'Comité Científico Internacional',
        universidad: 'Tecnm Campus Calkini – ITESCAM, México',
        orcid: 'https://orcid.org/0000-0002-6629-1168',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
]

const includedFeatures = [
    'Editor en Jefe',
    'Comité editorial',
    'Comité Científico Internacional',
]

const Asociados = () => {

    return (
        <>
            <Navbar></Navbar>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/*  */}
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Revista Latinoamericana De Ciencias Agrarias</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Revista de publicación semestral de acceso abierto, editada por Peruvian Science. Dedicada a la difusión científica de artículos originales, de revisión, inéditas, de autores de universidades, instituciones de investigación, organismos oficiales, empresas.
                            </p>
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
                                    <img src="https://i.postimg.cc/VN0cpY66/Recurso-5logoagraria.png" alt="" />
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
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-lightleading-6 text-gray-600">{person.role}</p>
                                        <p className="text-sm font-light leading-6 text-gray-600">{person.universidad}</p>
                                        <a href={person.orcid} className="text-sm font-light leading-6 text-gray-600">ORCID</a>
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
                        {cientifico.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-lightleading-6 text-gray-600">{person.role}</p>
                                        <p className="text-sm font-light leading-6 text-gray-600">{person.universidad}</p>
                                        <a href={person.orcid} className="text-sm font-light leading-6 text-gray-600">ORCID</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/*  */}
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Revista Latinoamericana De Ciencias Agrarias</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Revista de publicación semestral de acceso abierto, editada por Peruvian Science. Dedicada a la difusión científica de artículos originales, de revisión, inéditas, de autores de universidades, instituciones de investigación, organismos oficiales, empresas.
                            </p>
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
                                    <img src="https://i.postimg.cc/VN0cpY66/Recurso-5logoagraria.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Asociados