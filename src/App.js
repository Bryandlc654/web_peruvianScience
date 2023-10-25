import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Home/Home";
import Asociados from "./components/Asociados/Asociados";
import Convenios from "./components/Convenios/Convenios";
import Revistas from "./components/Revistas/Revistas";
import Contacto from "./components/Contacto/Contacto";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/asociados" element={<Asociados />} />
        <Route path="/convenios" element={<Convenios />} />
        <Route path="/revistas" element={<Revistas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
