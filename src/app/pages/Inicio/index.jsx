import React, { useState } from "react";
import Footer from "../../components/other-cmpnts/footer/index"
import Principal from "../../components/inicio-cmpnts/principal-seccion/index"
import SeccionMarcas from "../../components/inicio-cmpnts/seccion-marcas/index"
import Formulario from "../../components/inicio-cmpnts/seccion-formulario/index"
import QueHacemos from "../../components/inicio-cmpnts/seccion-que-hacemos-princip/index"

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
