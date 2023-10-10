import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'


const Reacapeople = [
    {
        name: 'Dr. Ricardo Angel Yuli-Posadas',
        role: 'Editor en jefe',
        universidad: 'Universidad Nacional Mayor de San Marcos - Perú ',
        orcid: 'https://orcid.org/0000-0002-3545-3443 ',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
]

const Reacacientifico = [
    {
        name: 'Dra. Julieta Elizabeth Salazar Echeagaray ',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad Autónoma de Sinaloa - México',
        orcid: 'https://orcid.org/0000-0003-0689-532X',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Dra. Maribel Pallanez Murrieta',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad Estatal de Sonora - México',
        orcid: 'https://orcid.org/0000-0002-1888-6319',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Dr. Alfonso Corte López',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad de Sonora - Mexico',
        orcid: 'https://orcid.org/0000-0002-3857-7855',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
    {
        name: 'Dra. Irma Baldovinos Leyva',
        role: 'Comité Científico Internacional',
        universidad: 'Universidad Hipócrates en Acapulco de Juárez - México',
        orcid: 'https://orcid.org/0000-0001-6242-2346',
        imageUrl:
            'https://i.postimg.cc/Z5jyqzr4/149071.png',
    },
]

const includedFeatures = [
    'Editor en Jefe',
    'Comité editorial',
    'Comité Científico Internacional',
]


const Reaca = () => {
    return (
        <>
            <div className="bg-white py-8 sm:py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/*  */}
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Revista Arbitrada de Ciencias Ambientales</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Como revista científica comprometida con la ética y la integridad académica, nos guiamos por los lineamientos establecidos por el Committee on Publication Ethics (COPE). Nos aseguramos de seguir los más altos estándares de integridad, transparencia y rigor en nuestros procesos editoriales y de revisión por pares.                            </p>
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
                                    <img src="https://i.postimg.cc/Vk6w99PX/logorearca.png" alt="" />
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
                        {Reacapeople.map((person) => (
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
                        {Reacacientifico.map((person) => (
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
        </>
    )
}

export default Reaca