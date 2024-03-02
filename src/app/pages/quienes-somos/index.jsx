import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useState,useEffect } from 'react'
import Header from '../../components/other-cmpnts/header/index'
import Footer from '../../components/other-cmpnts/footer/index'
import ImagenSeccion from "../../../assets/images/deposito-carga.webp"
import { Titulo } from '../../styled-components-general/titulo-central'
import FondoSeccion from '../../components/other-cmpnts/fondo-inicio/fondo'

const Contenedor = styled.div`
  overflow: hidden;
`

const TituloPrincipal = styled.h2`
  z-index:1;
  color:#fff;
  font-size:5rem;
  margin-top:10%;
  margin-left:20%;
  jusitfy-self:center;
  font-family:TituloPrincipal;
  animation:1s Aparicion linear;
  display:${props => props.display};

  @media (max-width: 600px) {
    font-size:5rem;
    margin-top:15%;
    margin-left:15%;
  }

  @media (max-width: 500px) {
    font-size:3rem;
    margin-top:30%;
    margin-left:22%;
  }

`

const ContenidoDeQuienesSomos = styled.section`
  opacity:${props => props.opacidad};
  animation: ${props => props.animacion};
  margin-bottom: ${props => (props.animacion ? '0' : '100px')};
  margin-top: ${props => (props.animacion ? '410px' : '300px')};
  transition: margin-top 0.2s ease, opacity 0.3s ease, margin-bottom 0.3s ease;
`

const TituloSeccion = styled(Titulo)`
  
  z-index:1;
  color:#000;
  font-size:2rem;
  margin-left:10%;
  jusitfy-self:center;
  text-align: center;
  
  ::selection {
    color: #fff;
  }

`;

const InformacionCentral= styled.div`
  display:flex;
  margin-right:0;
  justify-content:center;
  @media (max-width: 1270px) {
    display:flex;
    flex-direction:column;
  }
`

const Img = styled.img`
    width:400px;
    height:400px;
    object-fit: cover;
    margin-left:5%;
    margin-bottom:120px;
    margin-top:${props => props.altoDeFondo - 220}px;

    @media (max-width: 1270px) {
      display:none;
    }
`

const ArticuloCentral = styled.article`
    color:#000;
    display:flex;
    margin-left:5%;
    margin-right:5%;
    margin-top:100px;
    font-size:0.9rem;
    margin-bottom:100px;
    text-align: justify;
    flex-direction:column;
    font-family:SubTituloPrincipal;

    p {
        font-size:16px;
        margin-top:18px;
    }
`

const Boton = styled(Link)`
    width:30%;
    height:40px;
    color: #fff;
    margin-top:46px;
    cursor: pointer;
    font-size:0.8rem;
    line-height: 40px;
    border-radius: 5px;
    background: #3d5bcc;
    font-family: FontMenu;
    text-align-last: center;

    :hover {
    background: #294198;
    }

    @media (max-width: 1270px) {
      font-size:0.5rem;
    }

    @media (max-width: 600px) {
      width:50%;
      margin-top: 6%;
    }
`

function quienesSomos() {

    const [menuOff, setMenuOff] = useState(false)
    const [animacion, setanimacion] = useState(false)
    const [altoDeFondo, setaltoDeFondo] = useState(300)
    const [scrollPosicion, setscrollPosicion] = useState(0);

    function moverAlTopAlHacerClick(){
      window.scrollTo(0,0)
    }

    function finalDePagina(){

        window.addEventListener('scroll', () =>{
    
          let alturaDeDocumento = document.body.scrollHeight
          let scrollRecorrido = window.scrollY
          let viewport = window.innerHeight
          
          if(scrollRecorrido + viewport >= (alturaDeDocumento - 520)){
            setMenuOff(true)
          }else{
            setMenuOff(false)
          }
        })
    }

    useEffect(() => {

      const posicionScroll = () => {
        const currentScroll = window.scrollY;
        setscrollPosicion(currentScroll);
      };
  
      // Ejecutar al montar el componente
      posicionScroll();
  
      // Eliminar el event listener después de ejecutarse al principio
      window.removeEventListener('scroll', posicionScroll);
  
      // Agregar el event listener para futuros cambios en la posición del scroll
      window.addEventListener('scroll', posicionScroll, { passive: true });
  
      // Limpiar el event listener al desmontar el componente
      return () => {
        window.removeEventListener('scroll', posicionScroll);
      };

    }, [])

    useEffect(() => {
      const maxHeight = 793; // Establece la posición máxima del scroll
  
      // Aplica la restricción de la posición máxima del scroll
      if (scrollPosicion > maxHeight) {
        window.scrollTo(0, maxHeight);
      }
    }, [scrollPosicion]);

    useEffect(() => {
        // -> Condicional que pone el menu en fixed
        if (scrollPosicion >= 70){
            setaltoDeFondo(410)
            setanimacion(true)
        } else {
            setaltoDeFondo(300)
        }
    
    }, [scrollPosicion]);

  return (
    <>
    <Contenedor onScroll={finalDePagina()} id="contenedorInicial">
      <FondoSeccion urlFondo={`${ImagenSeccion}`} height={animacion === false ? '500px' : '300px'}/>
      <Header MenuOff={menuOff} AlturaCambioColorMenu={230}/>
      <TituloPrincipal display={animacion === true ? 'none' : 'inline-block'}
      >¿QUIÉNES SOMOS?</TituloPrincipal>
      <ContenidoDeQuienesSomos altoDeFondo={altoDeFondo}
                               animacion={animacion == true ? '1.5s TextoAparicion linear' : ''}
                               opacidad={animacion == true ? '100%' : '0'}>
        <TituloSeccion>¿QUIÉNES SOMOS?</TituloSeccion>
        <InformacionCentral>
        <Img src={ImagenSeccion} altoDeFondo={300}/>
        <ArticuloCentral>
        <p>ADC Argentina Uniendo Empresas presta servicios logísticos integrales para empresas y particulares.</p>

        <p>Realizamos acarreos de maquinaria, fletes, repartos, mudanzas, almacenamiento sumado a servicios complementarios como la colocación de volquetes, desagotes, hidrogrúas, alquiler de autoelevadores, retroexcavadoras, entre otros.</p>

        <p>Nuestro equipo de profesionales da soporte y brinda soluciones a todos aquellos que nos eligen para trabajar y resolver todo tipo de requerimiento.</p>
        <p>Nos eligen empresas como Toyota, Horizon, Techo, Peri, Piko Home, entre otras.</p>

        <p>¡Estamos a la espera de su requerimiento!</p>
            <Boton to="/servicios" onClick={moverAlTopAlHacerClick}>Servicios Detallados</Boton>
        </ArticuloCentral>
        </InformacionCentral>
      </ContenidoDeQuienesSomos>
      <Footer />
      </Contenedor>
    </>
  )
}

export default quienesSomos