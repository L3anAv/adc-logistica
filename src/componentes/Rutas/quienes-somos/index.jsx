import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useState,useEffect } from 'react'
import Header from '../../componentes-de-uso-general/header/index'
import Footer from '../../componentes-de-uso-general/footer/index'
import { Titulo } from '../../styled-components-general/titulo-central'
import FondoSeccion from '../../componentes-de-uso-general/fondo-inicio/fondo'

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

`

const ContenidoDeQuienesSomos = styled.section`
  opacity:${props => props.opacidad};
  margin-top:${props => props.altoDeFondo}px;
  animation: ${props => props.animacion || ''};
`

const TituloSeccion = styled(Titulo)`
  
  z-index:1;
  color:#000;
  font-size:2rem;
  margin-left:10%;
  jusitfy-self:center;

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
          let scrollRecorrido = window.pageYOffset
          let viewport = window.innerHeight
          
          if(scrollRecorrido + viewport >= (alturaDeDocumento - 520)){
            setMenuOff(true)
          }else{
            setMenuOff(false)
          }
        })
    }

    // -> Funcion que controla la altura del scrol
    function darPosicionDeScroll() {
        window.addEventListener("scroll", () => {
        setscrollPosicion(window.scrollY);
        });
    }

    useEffect(() => {
        darPosicionDeScroll();
    
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
      <FondoSeccion urlFondo={'"public/images/deposito-carga.jpeg"'} height={animacion == false ? '500px' : '300px'}/>
      <Header MenuOff={menuOff}/>
      <TituloPrincipal display={animacion == true ? 'none' : 'inline-block'}
      >¿QUIENES SOMOS?</TituloPrincipal>
      <ContenidoDeQuienesSomos altoDeFondo={altoDeFondo} 
                               animacion={animacion == true ? '1s TextoAparicion linear' : ''}
                               opacidad={animacion == true ? '100%' : '0'}>
        <TituloSeccion>¿QUIENES SOMOS?</TituloSeccion>
        <InformacionCentral>
        <Img src='/public/images/deposito-carga.jpeg' altoDeFondo={300}/>
        <ArticuloCentral>
            <p>Somos una empresa joven de transporte enfocada en brindar a nuestros clientes la mejor relación costo-beneficio en el área de transporte de cargas. Para ello, ponemos a su disposición servicios de inigualable calidad, que les permitirá obtener notables ventajas competitivas.</p>
            <p>Los años de experiencia constituyen el mejor respaldo de nuestra excelente capacidad de respuesta y nuestros inmejorables tiempos. Nuestra Tecnología y calidad están certificadas bajo normas ISO 9001. <br />Además, contamos con permisos provinciales, nacionales e internacionales que nos habilitan para circular y trasladar distintos tipos de mercadería/otros.Nuestra permanencia y vigencia en el mercado se explican por el valioso grupo humano que conforma la empresa: nuestros profesionales se desempeñan con acierto y celeridad en cada circunstancia, dando cuenta de una eximia capacidad de resolución.</p>
            <p>Como empresa líder en el rubro, nuestra meta principal es logar la completa satisfacción de nuestros clientes, para cumplirla, trabajamos atentos a sus necesidades con honestidad, sensatez y sobre todo eficiencia.</p>
            <Boton to="/servicios" onClick={moverAlTopAlHacerClick}>NUESTROS SERVICIOS</Boton>
        </ArticuloCentral>
        </InformacionCentral>
      </ContenidoDeQuienesSomos>
      <Footer />
      </Contenedor>
    </>
  )
}

export default quienesSomos