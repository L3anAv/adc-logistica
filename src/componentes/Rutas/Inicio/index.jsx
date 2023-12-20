import React, { useState } from "react";
import Principal from "./principal-seccion/index"
import SeccionMarcas from "./seccion-marcas/index"
import Formulario from "./seccion-formulario/index"
import QueHacemos from "./seccion-que-hacemos-princip/index"
import Footer from "../../componentes-de-uso-general/footer/index"

function index() {
  
  const [menuOff, setMenuOff] = useState(false)
  
  function finalDePagina(){

    window.addEventListener('scroll', () =>{

      let alturaDeDocumento = document.body.scrollHeight
      let scrollRecorrido = window.scrollY
      let viewport = window.innerHeight

      if(scrollRecorrido + viewport >= (alturaDeDocumento - 700)){
        setMenuOff(true)
      }else{
        setMenuOff(false)
      }
    })
  
  }

  return (
    <>
      <div onScroll={finalDePagina()} id="contenedorInicial">
      <Principal MenuOff={menuOff} AlturaCambioColorMenu={545}/>
      <QueHacemos />
      <SeccionMarcas />
      <Formulario />
      <Footer />
      </div>
    </>
  );
}

export default index;
