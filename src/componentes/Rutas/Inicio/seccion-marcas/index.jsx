import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Techo from "../../../images/techo.png"
import Toyota from "../../../images/toyota.png"
import Horizon from "../../../images/horizon.png"
import Kernium from "../../../images/kernium.png"

const ContenedorImagenes = styled.div`
  display:flex;
  overflow:hidden;
  margin-top: 2%;
  margin-bottom: 10%;
  justify-content:space-around;

  @media (max-width: 500px) {
    flex-direction:column;
}

`

const CotenedorTitulo = styled.div`
  display:flex;
  overflow:hidden;
  justify-content:center;
  animation:${props => props.animation};
`

const TituloPrincipal = styled.h2`
  z-index:-1;
  font-size:4rem;
  jusitfy-self:center;
  font-family:TituloPrincipal;
  animation:1s Aparicion linear;

  @media (max-width: 800px) {
    font-size:3rem;
  }

  @media (max-width: 500px) {
    font-size:2rem;
  }

`

const Img = styled.img`
  z-index:-1;
  width:380px;
  cursor:pointer;
  transform:scale(0.4);
  filter: grayscale(100%);
  transition:all 0.5s ease-in;

  :hover{
    filter: grayscale(0);
  }

  @media (max-width: 500px) {
    margin-left:-25px;
  }

`

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
      <TituloPrincipal>QUIENES NOS ELIGEN</TituloPrincipal>
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