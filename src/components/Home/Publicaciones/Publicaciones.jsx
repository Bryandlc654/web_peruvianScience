import React, {useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


export default function Publicaciones() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://strapi-production-3879.up.railway.app/api/articulos');
                const data = await response.json();
                setPosts(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Publicaciones</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Visita las publicaciones realizadas en nuestras Revistas
                    </p>
                </div>
                <hr className="my-8" />
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <div className="mx-auto py-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <SwiperSlide key={post.attributes.id}>
                                <article className="flex max-w-xl flex-col items-start justify-between">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.attributes.createdAt} className="text-gray-500">
                                            {post.attributes.fecha}
                                        </time>
                                        <a
                                            href={post.attributes.categoria_titulo}
                                            title="Ir a la publicación"
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.attributes.categoria_titulo}
                                        </a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.attributes.href} title="Ir a la publicación">
                                                <span className="absolute inset-0" />
                                                {post.attributes.titulo}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.attributes.descrpcion}</p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <img src={post.attributes.autor_img} alt="Autor" className="h-10 w-10 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href={post.attributes.autor_enlace} title="Ir a la publicación">
                                                    <span className="absolute inset-0" />
                                                    {post.attributes.autor_nombre}
                                                </a>
                                            </p>
                                            <p className="text-gray-600">{post.attributes.autor_correo}</p>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
    );
}
