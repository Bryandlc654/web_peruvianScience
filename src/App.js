import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Home/Home";
import Asociados from "./components/Asociados/Asociados";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="asociados" element={<Asociados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
