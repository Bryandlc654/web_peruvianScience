import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Home/Home";
import Asociados from "./components/Asociados/Asociados";
import Convenios from "./components/Convenios/Convenios";
import Revistas from "./components/Revistas/Revistas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="asociados" element={<Asociados />} />
        <Route path="convenios" element={<Convenios />} />
        <Route path="revistas" element={<Revistas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
