import React, { useState } from 'react';
import Modal from 'react-modal';

const caop = [
    {
        img: "https://repoimagenes.000webhostapp.com/Imagenes/caopcienciasagrrias.webp",
    },
    {
        img: "https://repoimagenes.000webhostapp.com/Imagenes/caopprius.webp",
    },
    {
        img: "https://repoimagenes.000webhostapp.com/Imagenes/CONVOCATORIA-EDITORES-tacionalidades.webp",
    },
    {
        img: "https://repoimagenes.000webhostapp.com/Imagenes/GHJK.webp",
    },
    {
        img: "https://repoimagenes.000webhostapp.com/Imagenes/convocatoria2.webp",
    },
];

const Slider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <img src={images[currentImageIndex].img} alt={images[currentImageIndex].revista} className="max-w-full" />
            <button onClick={prevImage} className='button_slider'><i className="bi bi-chevron-left"></i></button>
            <button onClick={nextImage} className='button_slider'><i className="bi bi-chevron-right"></i></button>
        </div>
    );
};

const Banner = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedItem(null);
    };

    return (
        <>
            <div className="hidden sm:mb-2 mt-6 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Revisa los Convocatorias de nuestras revistas.
                    <a href='#' title='Ver call of paper' className="font-semibold text-black" id="btn_vermas" onClick={() => openModal(caop[0])}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        Ver más <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Información de Revista"
                className="modal_caop"
            >
                {selectedItem && (
                    <div>
                        <Slider images={caop} />
                    </div>
                )}

                <button onClick={closeModal} className='button_modal'><i class="bi bi-x-lg"></i></button>
            </Modal>
        </>
    );
};

export default Banner;
