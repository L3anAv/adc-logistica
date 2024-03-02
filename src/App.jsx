import "./App.css";
import { Routes, Route } from "react-router";
import Index from './app/pages/Inicio/index'
import Servicios from './app/pages/servicios/index'
import QuienesSomos from './app/pages/quienes-somos/index'

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