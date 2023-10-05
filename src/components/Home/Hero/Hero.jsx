import React, { useState } from "react";
import Modal from "react-modal";
import "./hero.css";

Modal.setAppElement("#root"); // Necesario para la accesibilidad

export default function Hero() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleWhatsAppClick = () => {
    const message = `Quiero publicar en la revista ${selectedOption}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Publica tus Investigaciones
          </h1>
          <div className="hidden sm:mb-2 mt-6 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Revisa las convocatorias de nuestras revistas.{" "}
              <a href="#" className="font-semibold text-black">
                <span className="absolute inset-0" aria-hidden="true" />
                Ver más <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <p className="mt-6 text-lg text-justify leading-8 text-gray-600 ">
            Bienvenido al Centro Editorial Peruvian Science, una comunidad de
            investigadores comprometidos con la excelencia científica y la
            formación en el Perú.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              onClick={openModal}
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              title="Quiero Publicar"
            >
              Quiero Publicar
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Más información <span aria-hidden="true">→</span>
            </a>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Selecciona una Revista"
            className="modal fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow bg-white rounded-lg p-8 mx-auto card-modal z-20 opacity-100"
          >
            <span className="text-lg font-bold mb-4">
              Selecciona una Revista
            </span>
            <form>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="revista"
                    value="Revista Latinoamericana de Ciencias Agrarias"
                    onChange={() =>
                      handleOptionChange(
                        "Revista Latinoamericana de Ciencias Agrarias"
                      )
                    }
                    checked={
                      selectedOption ===
                      "Revista Latinoamericana de Ciencias Agrarias"
                    }
                  />
                  <span className="ml-2">
                    Revista Latinoamericana de Ciencias Agrarias
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="revista"
                    value="PRIUS Revista de Derecho y Ciencia Política"
                    onChange={() =>
                      handleOptionChange(
                        "PRIUS Revista de Derecho y Ciencia Política"
                      )
                    }
                    checked={
                      selectedOption ===
                      "PRIUS Revista de Derecho y Ciencia Política"
                    }
                  />
                  <span className="ml-2">
                    PRIUS Revista de Derecho y Ciencia Política
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="revista"
                    value="Revista Arbitrada de Ciencias Ambientales"
                    onChange={() =>
                      handleOptionChange(
                        "Revista Arbitrada de Ciencias Ambientales"
                      )
                    }
                    checked={
                      selectedOption ===
                      "Revista Arbitrada de Ciencias Ambientales"
                    }
                  />
                  <span className="ml-2">
                    Revista Arbitrada de Ciencias Ambientales
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="revista"
                    value="Revista Arbitrada de Educación Contemporánea"
                    onChange={() =>
                      handleOptionChange(
                        "Revista Arbitrada de Educación Contemporánea"
                      )
                    }
                    checked={
                      selectedOption ===
                      "Revista Arbitrada de Educación Contemporánea"
                    }
                  />
                  <span className="ml-2">
                    Revista Arbitrada de Educación Contemporánea
                  </span>
                </label>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none"
              >
                Gestionar Publicación
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}
