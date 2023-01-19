import './App.css'
import Principal from './componentes/principal-seccion/index'
import QueHacemos from './componentes/seccion-que-hacemos-princip/index'

function App() {  

  return (
    <>

    {/*
     Cuando el ancho es menor a a 912: Principal se hace responsive. Menu y todo, se vuelve a reacomodar.
     */}
     <Principal />

     {/*
     Cuando el ancho es menor a a 1260: QueHacemos se hace acomode todo distinto.
     */}

     <QueHacemos />
    </>
  )
}

export default App
