import React, { useState, useEffect } from 'react';
import {
  UsersIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";


const features = [

  {
    name: "Comité Científico Internacional de Élite",
    description: "Experiencia y Rigurosidad en la Revisión.",
    icon: UsersIcon,
  },
  {
    name: "Turnitin Garantizado",
    description: "Originalidad en Cada Trabajo.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Actividades Divulgativas",
    description: "Fortalece tus Competencias.",
    icon: VideoCameraIcon,
  },
  {
    name: "Oportunidades Basadas en Calidad",
    description: "Destaca y Publica tus Investigaciones.",
    icon: CheckCircleIcon,
  },
];


export default function About() {
  const [indexaciones, setIndexaciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://strapi-production-3879.up.railway.app/api/home-peruvian-indexacions'
        );
        const data = await response.json();
        setIndexaciones(data.data);
      } catch (error) {
        console.error('Error fetching indexaciones:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-600">
            ¿Por qué Publicar en Nuestras Revistas?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Descubre la Excelencia
          </p>
          <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
            Nuestras revistas cuentan con un Comité Científico Internacional de
            alto nivel, compuesto por expertos en revisión con vasta experiencia
            en el campo.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="bg-white py-8 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Nuestras indexaciones
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {indexaciones.map((indexacion) => (
          <img
            key={indexacion.id}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={indexacion.attributes.src}
            alt={indexacion.attributes.alt}
            width={158}
            height={48}
          />
        ))}
          </div>
        </div>
      </div>
    </div>
  );
}
