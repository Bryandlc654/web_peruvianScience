import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";


export default function Hero() {
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
    titulo: "",
    revista: "",
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
        titulo: "",
        revista: "",
      });
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Publica tus Investigaciones
          </h1>
          <div className="hidden sm:mb-2 mt-6 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Revisa las convocatorias de nuestras revistas.
              <Link to="/revistas" className="font-semibold text-black" id="btn_vermas">
                <span className="absolute inset-0" aria-hidden="true" />
                Ver más <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <p className="mt-6 text-lg text-justify leading-8 text-gray-600 ">
            Bienvenido al Centro Editorial Peruvian Science, una comunidad de
            investigadores comprometidos con la excelencia científica y la
            formación en el Perú.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              title="Quiero Publicar"
              onClick={openModal}
            >
              Quiero Publicar
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
                        Publicar Artículo
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
                              Título de Artículo  :
                            </label>
                            <input
                              type="text"
                              id="titulo"
                              name="titulo"
                              required
                              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                              value={formData.titulo}
                              onChange={(e) =>
                                setFormData((prevData) => ({
                                  ...prevData,
                                  titulo: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                              Revista :
                            </label>
                            <select
                              id="titulo"
                              name="revista"
                              required
                              className="mt-1 p-2 border border-gray-300 rounded-md w-ful"
                              value={formData.revista}
                              onChange={(e) =>
                                setFormData((prevData) => ({
                                  ...prevData,
                                  revista: e.target.value,
                                }))
                              }
                            >
                              <option selected value="Elige una Revista">Elige una Revista</option>
                              <option value="Revista Latinoamericana de Ciencias Agrarias">Revista Latinoamericana de Ciencias Agrarias</option>
                              <option value="Prius, PRIUS Revista de Derecho y Ciencia Política">Prius, PRIUS Revista de Derecho y Ciencia Política</option>
                              <option value="Revista Arbitrada de Ciencias Ambientales">Revista Arbitrada de Ciencias Ambientales</option>
                              <option value="Revista Arbitrada de Educación Contemporánea">Revista Arbitrada de Educación Contemporánea</option>
                            </select>
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
            <Link
              to="/revistas"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Más información <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <Toaster />
    </div>

  );
}
