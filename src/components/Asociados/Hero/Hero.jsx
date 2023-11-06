import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";

const stats = [
    { name: 'Editores en Jefe', value: '4' },
    { name: 'Comité Editorial', value: '+20' },
    { name: 'Comité C. Internacional', value: '+30' }
]

const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const [formData, setFormData] = React.useState({
        nombres: "",
        correo: "",
        celular: "",
        orcid: "",
        institucion: "",
        grado: "",
        comentarios: "",
    });

    const notifySuccess = () => toast.success("Enviado correctamente");
    const notifyError = () => toast.error("Por favor, completa todos los campos");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://formspree.io/f/xleyagpw", formData);
            notifySuccess();
            setFormData({
                nombres: "",
                correo: "",
                celular: "",
                orcid: "",
                institucion: "",
                grado: "",
                comentarios: "",
            });
        } catch (error) {
            console.error("Error sending form data:", error);
        }
    };

    return (
        <div className="relative isolate overflow-hidde py-24 sm:py-32 w-full flex text-center justify-center ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Nuestros Asociados</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Conoce al Detallado Comité Editorial que Impulsa la Calidad de Nuestras Revistas Científicas. Profesionales Apasionados que Guiarán tu Experiencia en el Mundo de la Investigación.
                    </p>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        title="Quiero Unirme"
                        onClick={openModal}
                    >
                        Quiero unirme
                    </a>
                    {showModal && (
                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div
                                    className="fixed inset-0 transition-opacity"
                                    aria-hidden="true"
                                >
                                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                </div>
                                <span
                                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                    aria-hidden="true"
                                >
                                    &#8203;
                                </span>
                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Unirme al Equipo Editorial
                                        </h3>
                                        <div className="mt-2">
                                            <form onSubmit={handleFormSubmit}>
                                                <div className="mb-4">
                                                    <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                                                        Nombres Completos:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="nombres"
                                                        name="nombres"
                                                        autoComplete="given-name"
                                                        required
                                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                                        value={formData.nombres}
                                                        onChange={(e) =>
                                                            setFormData((prevData) => ({
                                                                ...prevData,
                                                                nombres: e.target.value,
                                                            }))
                                                        }
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                                                        Correo:
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="correo"
                                                        name="correo"
                                                        autoComplete="email"
                                                        required
                                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                                        value={formData.correo}
                                                        onChange={(e) =>
                                                            setFormData((prevData) => ({
                                                                ...prevData,
                                                                correo: e.target.value,
                                                            }))
                                                        }
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                                                        Celular  :
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="celular"
                                                        name="celular"
                                                        required
                                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                                        value={formData.celular}
                                                        onChange={(e) =>
                                                            setFormData((prevData) => ({
                                                                ...prevData,
                                                                celular: e.target.value,
                                                            }))
                                                        }
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                                                        ORCID :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="orcid"
                                                        name="orcid"
                                                        required
                                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                                        value={formData.orcid}
                                                        onChange={(e) =>
                                                            setFormData((prevData) => ({
                                                                ...prevData,
                                                                orcid: e.target.value,
                                                            }))
                                                        }
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                                                        Institución :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="institucion"
                                                        name="institucion"
                                                        required
                                                        placeholder='Institucion donde labora'
                                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                                        value={formData.institucion}
                                                        onChange={(e) =>
                                                            setFormData((prevData) => ({
                                                                ...prevData,
                                                                institucion: e.target.value,
                                                            }))
                                                        }
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                                                        Grado :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="grado"
                                                        name="grado"
                                                        required
                                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                                        placeholder='Grado más alto alcanzado'
                                                        value={formData.grado}
                                                        onChange={(e) =>
                                                            setFormData((prevData) => ({
                                                                ...prevData,
                                                                grado: e.target.value,
                                                            }))
                                                        }
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                                                        Comentarios :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="grado"
                                                        name="grado"
                                                        required
                                                        placeholder='Por que desea unirse al equipo editorial'
                                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                                        value={formData.comentarios}
                                                        onChange={(e) =>
                                                            setFormData((prevData) => ({
                                                                ...prevData,
                                                                comentarios: e.target.value,
                                                            }))
                                                        }
                                                    />
                                                </div>
                                                <div className="mt-4">
                                                    <button
                                                        type="submit"
                                                        className="bg-black text-white px-4 py-2 rounded-md"
                                                    >
                                                        Enviar
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button
                                            onClick={closeModal}
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                        >
                                            Cerrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-800">{stat.name}</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <a className='w-full flex text-center items-center flex-col mt-10'>
                    <svg width="20px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '1.5' }}>
                        <path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill: 'none', stroke: '#000', strokeWidth: '20px' }} />
                        <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{ fill: 'none', stroke: '#000', strokeWidth: '20px' }} />
                    </svg>
                    <p>Ver más</p>
                </a>
                <Toaster />
            </div>
        </div>
    )
}

export default Hero