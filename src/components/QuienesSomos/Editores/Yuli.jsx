import React from 'react'
import { BookmarkIcon, CheckBadgeIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Foto from '../../../assets/riyuli.jpeg'

const features = [
    {
        name: 'Posdoctorante en Seguridad y Salud en el Trabajo en La Universidad Centro Panamericano de Estudios Superiores. Morelia, Michoacán, Mexico.2021',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Doctor en Ciencias Ambientales y Desarrollo Sostenible-UNCP',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Magister Scientiae en Gestión Ambiental y Desarrollo Sostenible-UNCP',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Ingeniero Químico-UNCP',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Investigador RENACYT & Código de Registro: P0017286 Nivel: III',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Universidad Nacional Mayor de San Marcos',
        icon: BookmarkIcon,
    },
    {
        name: 'ricardo.yuli@sbs-perfomance.com',
        icon: EnvelopeIcon,
    },
]

const Yuli = () => {
    return (
        <>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-gray-500">Editor - Revista Arbitrada de Ciencias Ambientales</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ricardo Yuli</p>
                                <span className="text-base font-sm leading-7 text-gray-500">Viodata: Dos últimos estudios y grados académicos</span>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 " aria-hidden="true" />
                                                {feature.name}
                                            </dt>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            src={Foto}
                            alt="Product screenshot"
                            className="w-[48rem] h-[40rem] object-cover max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 image-investigator"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Yuli