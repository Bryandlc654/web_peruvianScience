import React from 'react'

const Revistas = () => {
    const products = [
        {
            id: 1,
            name: 'Revistas Latinoamericana de Ciencias Agrarias',
            href: 'https://revistas.peruvianscience.org/index.php/rlca/index',
            imageSrc: 'https://i.postimg.cc/VN0cpY66/Recurso-5logoagraria.png',
            imageAlt: "Revistas Latinoamericana de Ciencias Agrarias",
            issn: 'ISSN 2961-2764',
        },
        {
            id: 2,
            name: 'PRIUS - Revista de Derecho y Ciencia Política',
            href: 'https://revistas.peruvianscience.org/index.php/PRIUS',
            imageSrc: 'https://i.postimg.cc/tCDyVSwX/Recurso-6logoprius.png',
            imageAlt: "PRIUS - Revista de Derecho y Ciencia Política",
            issn: 'ISSN 2961-2829',
        },
        {
            id: 3,
            name: 'Revista Arbitrada de Educación Contemporánea',
            href: 'https://revistas.peruvianscience.org/index.php/rearca/index',
            imageSrc: 'https://i.postimg.cc/7ZWkKCqd/Recurso-3logoraredua.png',
            imageAlt: "Revista Arbitrada de Educación Contemporánea",
            issn: '',
        },
        {
            id: 4,
            name: 'Revista Arbitrada de Ciencias Ambientales',
            href: 'https://revistas.peruvianscience.org/index.php/raec',
            imageSrc: 'https://i.postimg.cc/Vk6w99PX/logorearca.png',
            imageAlt: "Revista Arbitrada de Ciencias Ambientales",
            issn: '',
        },
    ]
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 mb-32 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestras revistas</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href} target='_blank'>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.issn}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Revistas