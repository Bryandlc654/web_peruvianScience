import React, { useState, useEffect } from 'react';

const Revistas = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://strapi-production-3879.up.railway.app/api/home-peruvian-revistas'
                );
                const data = await response.json();
                setProducts(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 mb-32 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestras revistas</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.attributes.imagen}
                                    alt={product.attributes.imgAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.attributes.href} target="_blank" title="Ir a la revista">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.attributes.nombre}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.attributes.issn}</p>
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