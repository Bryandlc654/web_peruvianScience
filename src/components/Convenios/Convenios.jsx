import React, { useState } from 'react';
import Navbar from '../Home/Navbar/Navbar'
import Subcripcion from '../Home/Subscripcion/Subscripcion'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";



const Convenios = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [formData, setFormData] = React.useState({
    institucion: "",
    representante: "",
    dni: "",
    celular: "",
    correo: "",
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
        institucion: "",
        representante: "",
        dni: "",
        celular: "",
        correo: "",
        comentarios: "",
      });
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="relative isolate overflow-hidde py-24 sm:py-32 w-full flex text-center justify-center ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Nuestros Convenios</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explora Nuestra Red de Convenios para Acceder a Recursos Exclusivos, Colaboraciones Innovadoras y Oportunidades de Investigación Que Enriquecen Nuestra Comunidad Académica.</p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              title="Quiero Publicar"
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
                        Solicitud de Convenio
                      </h3>
                      <div className="mt-2">
                        <form onSubmit={handleFormSubmit}>
                          <div className="mb-4">
                            <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                              Institución Solicitante:
                            </label>
                            <input
                              type="text"
                              id="institucion"
                              name="institucion"
                              autoComplete="given-name"
                              required
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
                              Representante:
                            </label>
                            <input
                              type="text"
                              id="representante"
                              name="representante"
                              required
                              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                              value={formData.representante}
                              onChange={(e) =>
                                setFormData((prevData) => ({
                                  ...prevData,
                                  representante: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                              DNI del Representante:
                            </label>
                            <input
                              type="text"
                              id="Dnirepresentante"
                              name="Dnirepresentante"
                              required
                              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                              value={formData.dni}
                              onChange={(e) =>
                                setFormData((prevData) => ({
                                  ...prevData,
                                  dni: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                              Celular:
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
                              Correo:
                            </label>
                            <input
                              type="text"
                              id="correo"
                              name="correo"
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
                              Comentarios:
                            </label>
                            <input
                              type="text"
                              id="comentarios"
                              name="comentarios"
                              required
                              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                              placeholder='¿Por que desea tener un convenio con el Centro Editorial?'
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
          <a className='w-full flex text-center items-center flex-col mt-16'>
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
          {/*  */}
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Grupo JJ San Marcos</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                En el Grupo JJ SAN MARCOS Se ha llevado a cabo una mejora continua con la firme intención de ofrecer una experiencia educativa excepcional en el competitivo entorno educativo del siglo XXI. Dedicados a la excelencia, el Grupo JJ SAN MARCOS ha perfeccionado su plataforma de servicios, capacitación y entrenamiento para beneficiar a estudiantes y docentes por igual.</p>
              <div className="mt-10 flex items-center gap-x-4">
                <a href='https://cecajjsm.com/' className="flex-none text-sm font-semibold leading-6 ">Visitar sitio web</a>
                <div className="h-px flex-auto bg-gray-400" />
              </div>

            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
                <div className="mx-auto max-w-xs">
                  <img src="https://i.postimg.cc/vBwRngZp/Recurso-9logojjsanmarcos.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-8 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">EducaID Scientific</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                EducaID Scientific se erige como una editorial dedicada a empoderar a investigadores, desarrolladores y educadores en la vanguardia de la transformación de la comunidad científica emergente en el Perú. Con un compromiso innato con la excelencia y la innovación, nos posicionamos como una fuerza impulsora que facilita el progreso y la consolidación de la investigación en el país.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <a href='https://educaidscientific.com/' className="flex-none text-sm font-semibold leading-6 ">Visitar sitio web</a>
                <div className="h-px flex-auto bg-gray-400" />
              </div>

            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
                <div className="mx-auto max-w-xs">
                  <img src="https://i.postimg.cc/KYMS4rxP/Recurso-7logoeducaid.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-8 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Art On Development</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Presentamos a AOD, una empresa de desarrollo de software que se distingue por su enfoque creativo, practicidad y perfeccionismo. Con un equipo apasionado y comprometido, AOD abraza la misión de crear experiencias de éxito para sus clientes a través de proyectos diseñados con verdadero arte.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <a href='http://aod.pe' className="flex-none text-sm font-semibold leading-6 ">Visitar sitio web</a>
                <div className="h-px flex-auto bg-gray-400" />
              </div>

            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
                <div className="mx-auto max-w-xs">
                  <img src="https://i.postimg.cc/x89WswH5/Recurso-10logoaod.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-8 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Instituto de Educación Superior Tecnológico de Pisco</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                El Instituto de Educación Superior Tecnológico de Pisco, se presenta como una institución comprometida con la formación de profesionales técnicos, respondiendo a las demandas del contexto laboral actual. En su esfuerzo por brindar una educación de calidad, el instituto ha diseñado una oferta formativa pertinente y actualizada.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <a href='https://www.iestppisco.edu.pe/' className="flex-none text-sm font-semibold leading-6 ">Visitar sitio web</a>
                <div className="h-px flex-auto bg-gray-400" />
              </div>

            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
                <div className="mx-auto max-w-xs">
                  <img src="https://i.postimg.cc/nzGJty8s/Recurso-7logopisco.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-8 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">JJ Guillen</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                JJ Guillen se posiciona como una empresa con una sólida experiencia de más de 15 años en el mercado, consolidando su reputación como referente en proyectos diversificados que abarcan instalaciones eléctricas, construcciones en drywall, domótica e inmótica, remodelación de oficinas y fabricación de estructuras metálicas.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <a href='https://jjguillen.com.pe' className="flex-none text-sm font-semibold leading-6 ">Visitar sitio web</a>
                <div className="h-px flex-auto bg-gray-400" />
              </div>

            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
                <div className="mx-auto max-w-xs">
                  <img src="https://i.postimg.cc/63rkfW7T/Recurso-8logojjguillen.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      <Subcripcion></Subcripcion>
    </>
  )
}

export default Convenios