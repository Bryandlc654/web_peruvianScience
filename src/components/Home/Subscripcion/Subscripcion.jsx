import React from 'react'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from 'react-router-dom';


const Subscripcion = () => {
    const [formData, setFormData] = React.useState({
        email: "",
    });

    const notifySuccess = () => toast.success("Enviado correctamente");
    const notifyError = () => toast.error("Por favor, completa todos los campos");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://formspree.io/f/xleyagpw", formData);
            notifySuccess();
            setFormData({
                email: "",
            });
        } catch (error) {
            console.error("Error sending form data:", error);
        }
    };
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 pt-16 sm:pt-24 lg:pt-32 mt-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscríbete a nuestras Revistas</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Recibe directamente en tu correo electrónico las últimas publicaciones de nuestras revistas.
                        </p>
                        <form onSubmit={handleFormSubmit} className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Correo Electrónico
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                placeholder="Ingresa tu correo electrónico"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        email: e.target.value,
                                    }))
                                }
                            />
                            <button
                                type="submit"
                                title='Enviar'
                                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribir
                            </button>
                        </form>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Envíos mensuales</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Explora mensualmente las novedades de nuestras revistas en tu bandeja de entrada.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">No spam</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Disfruta de nuestras publicaciones mensuales en tu correo sin preocuparte por el spam.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <br />
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#" className="-m-1.5 p-1.5" title='Ir al Inicio'>
                            <span className="font-bold text-xl text-white">Peruvian Science</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/asociados" className="mr-4 hover:underline md:mr-6">
                                    Nuestros Asociados
                                </Link>
                            </li>
                            <li>
                                <Link to="/convenios" className="mr-4 hover:underline md:mr-6">
                                    Nuestros Convenios
                                </Link>
                            </li>
                            <li>
                                <Link to="/revistas" className="mr-4 hover:underline md:mr-6 ">
                                    Revistas
                                </Link>
                            </li>
                            <li>
                                <a href="https://racionalidades.peruvianscience.org/index.php/editorial" title='Ir a' className="mr-4 hover:underline md:mr-6 ">
                                    Editorial Racionalidades
                                </a>
                            </li>
                            <li>
                                <Link to="/contacto" className="mr-4 hover:underline md:mr-6 ">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <span className="hover:underline">
                            Peruvian Science
                        </span>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Subscripcion