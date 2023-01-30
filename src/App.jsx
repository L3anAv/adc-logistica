import "./App.css";
import { Routes, Route } from "react-router";
import Index from './componentes/Rutas/Inicio/index'
import Servicios from './componentes/Rutas/servicios/index'
import QuienesSomos from './componentes/Rutas/quienes-somos/index'

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"/servicios"} element={<Servicios />} />
        <Route path={"/quienes-somos"} element={<QuienesSomos />} />
      </Routes>
    </>
  );
}

export default App;