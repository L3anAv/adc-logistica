import "./App.css";
import { Routes, Route } from "react-router";
import Index from "./componentes/Inicio/index";

function App() {
  return (
    <>
      <Routes>
        <Route path={""} element={<Index />} />
      </Routes>
    </>
  );
}

export default App;