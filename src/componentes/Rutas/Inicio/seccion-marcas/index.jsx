import styled from 'styled-components'
import { useState, useEffect } from 'react'

const ContenedorImagenes = styled.div`
  display:flex;
  overflow:hidden;
  margin-bottom: 10%;
  justify-content:center;
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
  z-index:1;
  font-size:3rem;
  jusitfy-self:center;
  font-family:TituloPrincipal;
  animation:1s Aparicion linear;

  @media (max-width: 600px) {
    font-size:5rem;
    margin-left:15%;
  }

  @media (max-width: 500px) {
    font-size:3rem;
    margin-left:22%;
  }

`

const Img = styled.img`
  width:450px;
  cursor:pointer;
  transform:scale(0.4);
  filter: grayscale(100%);
  transition:all 0.5s ease-in;

  :hover{
    filter: grayscale(0);
  }
`

function seccionMarcas() {

  const [animacion, setAnimacion] = useState(false)
  const [scrollPosicion, setscrollPosicion] = useState(0);

    // -> Funcion que controla la altura del scrol
    function darPosicionDeScroll() {
      window.addEventListener("scroll", () => {
      setscrollPosicion(window.scrollY);
      console.log(window.scrollY)
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
          <Img src="public/images/kernium.png" />
          <Img src="public/images/techo.png" />
        </ContenedorImagenes>
    </>
  )
}
export default seccionMarcas