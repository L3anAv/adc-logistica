import { useState, useEffect } from 'react'
import {
  Img, 
  CotenedorTitulo,
  TituloPrincipal,
  ContenedorImagenes } from './seccionMarcas.styled'
import Techo from "../../../assets/images/techo.webp"
import Toyota from "../../../assets/images/toyota.webp"
import Kernium from "../../../assets/images/kernium.webp"
import Horizon from "../../../assets/images/horizon.webp"

// TO-DO REVISAR LOGICA

function seccionMarcas() {

  const [animacion, setAnimacion] = useState(false)
  const [scrollPosicion, setscrollPosicion] = useState(0);

    // -> Funcion que controla la altura del scrol
    function darPosicionDeScroll() {
      window.addEventListener("scroll", () => {
      setscrollPosicion(window.scrollY);
      });
  }

  useEffect(() => {
      darPosicionDeScroll();

      // -> Condicional que pone el menu en fixed
      if (scrollPosicion >= 800){
          setAnimacion(true)
      }

    }, [scrollPosicion]);

  return (
    <>
       <CotenedorTitulo>
      <TituloPrincipal>¿QUIÉNES NOS ELIGEN?</TituloPrincipal>
      </CotenedorTitulo>
        <ContenedorImagenes>
          <Img src={Kernium} />
          <Img src={Techo} />
          <Img src={Toyota} />
          <Img src={Horizon} />
        </ContenedorImagenes>
    </>
  )
}
export default seccionMarcas