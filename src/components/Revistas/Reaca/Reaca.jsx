import React from 'react'



const Reaca = () => {
    return (
        <>
            <div className="bg-white py-8 sm:py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Revista Arbitrada de Ciencias Ambientales</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Afiliada a la reconocida editorial Peruvian Science con sede en Perú, se enorgullece de ser un referente en el campo de las Ciencias Ambientales. Nuestro objetivo principal es proporcionar una plataforma para la difusión de investigaciones originales y de alta calidad que aborden los desafíos y problemáticas relacionadas con el medio ambiente y su interacción con la sociedad.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <a href='https://revistas.peruvianscience.org/index.php/rearca/index' title='Ver Revista'
                                    className="flex-none text-sm font-semibold leading-6 ">Ver Revista</a>
                                <div className="h-px flex-auto bg-gray-400" />
                            </div>

                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
                                <div className="mx-auto max-w-xs">
                                    <img src="https://i.postimg.cc/Vk6w99PX/logorearca.png" alt="Revista Arbitrada de Ciencias Ambientales" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reaca