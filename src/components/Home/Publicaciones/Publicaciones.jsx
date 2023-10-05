import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Navigation } from 'swiper/modules';

const posts = [
    {
        id: 1,
        title: 'Revista Latinoamericana de Ciencias Agararias',
        href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/26/35',
        description:
            'Principales enfermedades que afectan el cultivo de papa (Solanum tuberosum L.) en la sierra - Alto Piura',
        date: 'Junio 15, 2023',
        datetime: '2020-03-16',
        category: { title: 'Vol.1 Núm.1 (2023)', href: '#' },
        author: {
            name: 'Dilmer Saavedra Rojas',
            role: 'dilmersaavedra08@gmail.com',
            href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/26/35',
            imageUrl:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 2,
        title: 'PRIUS - Revista de Derecho y Ciencia Política',
        href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/31/55',
        description:
            'Resguardo de la información de la identidad biológica del adoptado: Una perspectiva del Derecho Comparado',
        date: 'Junio 15, 2023',
        datetime: '2020-03-16',
        category: { title: 'Vol.1 Núm.1 (2023)', href: '#' },
        author: {
            name: 'Juan Andreas Bernardo Romero Pizarro',
            role: 'juan.romero16@unmsm.edu.pe',
            href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/31/55',
            imageUrl:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 3,
        title: 'Revista Latinoamericana de Ciencias Agararias',
        href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/27/36',
        description:
            'Viabilidad técnica en producción de forraje verde hidropónico en base a cebada (Hordeum vulgare) costa central - Perú',
        date: 'Junio 15, 2023',
        datetime: '2020-03-16',
        category: { title: 'Vol.1 Núm.1 (2023)', href: '#' },
        author: {
            name: 'Edgardo Arturo Vilcara Cardenas',
            role: 'eavilcara@lamolina.edu.pe',
            href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/27/36',
            imageUrl:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 4,
        title: 'Revista Latinoamericana de Ciencias Agararias',
        href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/27/36',
        description:
            'Viabilidad técnica en producción de forraje verde hidropónico en base a cebada (Hordeum vulgare) costa central - Perú',
        date: 'Junio 15, 2023',
        datetime: '2020-03-16',
        category: { title: 'Vol.1 Núm.1 (2023)', href: '#' },
        author: {
            name: 'Edgardo Arturo Vilcara Cardenas',
            role: 'eavilcara@lamolina.edu.pe',
            href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/27/36',
            imageUrl:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },

]

export default function Publicaciones({ post }) {
    return (
        <div className="bg-white py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Publicaciones</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Visita las publicaciones realizadas en nuestas Revistas
                    </p>
                </div>
                <hr className='my-8' />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <div className="mx-auto py-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <SwiperSlide>
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
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
    )
}
