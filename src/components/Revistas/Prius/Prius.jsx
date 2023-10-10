import React from 'react'

const posts = [
    {
        id: 1,
        title: 'Artículo',
        href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/31',
        description:
            'Resguardo de la información de la identidad biológica del adoptado: Una perspectiva del Derecho Comparado',
        date: 'jun. 15, 2023',
        datetime: '2020-03-16',
        category: { title: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/31' },
        author: {
            name: 'Juan Andreas Bernardo Romero Pizarro',
            role: 'Universidad Nacional Mayor de San Marcos',
            href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/31',
            imageUrl:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 2,
        title: 'Artículo',
        href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/23',
        description:
            'Los Optimates: En defensa de la libertad',
        date: 'jun. 15, 2023',
        datetime: '2020-03-16',
        category: { title: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/23' },
        author: {
            name: 'Alejandro Rameth Aréstegui Callo',
            role: 'Universidad Francisco Marroquín',
            href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/23',
            imageUrl:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 3,
        title: 'Artículo',
        href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/40',
        description:
            'El enemigo en el Tribunal de la Inquisición',
        date: 'jun. 15, 2023',
        datetime: '2020-03-16',
        category: { title: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/40' },
        author: {
            name: 'Fabian Alonso Rodriguez Pareja',
            role: 'Universidad Nacional Mayor de San Marcos',
            href: 'hhttps://revistas.peruvianscience.org/index.php/PRIUS/article/view/40',
            imageUrl:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
]

const Prius = () => {
    return (
        <>
            <div className="bg-white py-8 sm:py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">PRIUS Revista de Derecho y Ciencia Política</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Revista de acceso abierto de publicación semestral editada por Peruvian Science, Perú. Dedicada a la difusión científica de artículos originales y de revisión de carácter teórico y experimental en el campo jurídico y de la politología.
                                Está dirigida a la comunidad académica y científica, educadores, investigadores y operadores jurídicos y politólogos.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <a href='https://revistas.peruvianscience.org/index.php/PRIUS' className="flex-none text-sm font-semibold leading-6 ">Ver Revista</a>
                                <div className="h-px flex-auto bg-gray-400" />
                            </div>

                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
                                <div className="mx-auto max-w-xs">
                                    <img src="https://i.postimg.cc/tCDyVSwX/Recurso-6logoprius.png" alt="" />
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
                            Reviviendo el espíritu del investigador Vol. 1 Núm. 1 (2023)
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
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
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
                                            <a href={post.author.href}>
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

export default Prius