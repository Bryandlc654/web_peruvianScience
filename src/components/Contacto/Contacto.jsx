import React from 'react'
import { useState } from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Subscripcion from '../Home/Subscripcion/Subscripcion'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Contacto = () => {
    const [agreed, setAgreed] = useState(false)

    const [formData, setFormData] = React.useState({
        firstname: "",
        lastname: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });

    const notifySuccess = () => toast.success("Enviado correctamente");
    const notifyError = () => toast.error("Por favor, completa todos los campos");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://formspree.io/f/xleyagpw", formData);
            notifySuccess();
            setFormData({
                firstname: "",
                lastname: "",
                company: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error("Error sending form data:", error);
        }
    };

    return (
        <>
            <Navbar></Navbar>
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contáctanos</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Registra tus datos y nos pondremos en contacto contigo
                    </p>
                </div>
                <form onSubmit={handleFormSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Nombres
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    required
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.firstname}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            firstname: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Apellidos
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    required
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.lastname}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            lastname: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                Empresa
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="company"
                                    required
                                    id="company"
                                    autoComplete="organization"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.company}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            company: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Correo
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            email: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Celular
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    autoComplete="phone"
                                    required
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            phone: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Mensaje
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            message: e.target.value,
                                        }))
                                    }
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
                <Toaster />
            </div>
            <Subscripcion></Subscripcion>
        </>
    )
}

export default Contacto