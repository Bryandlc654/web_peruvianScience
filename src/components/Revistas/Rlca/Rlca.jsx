import React from 'react'

const posts = [
    {
        id: 1,
        title: 'Artículo',
        href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/26',
        description:
            'Principales enfermedades que afectan el cultivo de papa (Solanum tuberosum L.) en la sierra - Alto Piura',
        date: 'jun. 15, 2023',
        datetime: '2020-03-16',
        category: { title: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/26' },
        author: {
            name: 'Dilmer Saavedra Rojas',
            role: 'Universidad Privada San Pedro',
            href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/26',
            imageUrl:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 2,
        title: 'Artículo',
        href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/27',
        description:
            'Viabilidad técnica en producción de forraje verde hidropónico en base a cebada (Hordeum vulgare) costa central - Perú',
        date: 'jun. 15, 2023',
        datetime: '2020-03-16',
        category: { title: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/27' },
        author: {
            name: 'Edgardo Arturo Vilcara Cardenas',
            role: 'Universidad Nacional Agraria La Molina',
            href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/27',
            imageUrl:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 3,
        title: 'Artículo',
        href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/28',
        description:
            'Principales enfermedades que afectan al cultivo de papa en Pataz, La Libertad, Perú',
        date: 'jun. 15, 2023',
        datetime: '2020-03-16',
        category: { title: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/28' },
        author: {
            name: 'Glademir Jeiner Caldas Ruiz',
            role: 'Universidad Privada San Pedro',
            href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/28',
            imageUrl:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
]

const Rlca = () => {
    return (
        <>
            <div className="bg-white py-8 sm:py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Revista Latinoamericana De Ciencias Agrarias</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Revista de publicación semestral de acceso abierto, editada por Peruvian Science. Dedicada a la difusión científica de artículos originales, de revisión, inéditas, de autores de universidades, instituciones de investigación, organismos oficiales, empresas.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <a href='https://revistas.peruvianscience.org/index.php/rlca/index' title='Ver Revista'
                                    className="flex-none text-sm font-semibold leading-6 ">Ver Revista</a>
                                <div className="h-px flex-auto bg-gray-400" />
                            </div>

                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
                                <div className="mx-auto max-w-xs">
                                    <img src="https://i.postimg.cc/VN0cpY66/Recurso-5logoagraria.png" alt="Revista Latinoamericana De Ciencias Agrarias" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Publicaciones</h3>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            El cuidado de la tierra es la oportunidad del futuro  Vol. 1 Núm. 1 (2023)
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        title='Ver publicación'
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}
                                            title='Ver publicación'
                                        >
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}
                                                title='Ver publicación'
                                            >
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rlca