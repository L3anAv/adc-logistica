import { useState,useEffect } from 'react'
import { 
  Img, 
  Boton,  
  Contenedor, 
  TituloSeccion,
  TituloPrincipal, 
  ArticuloCentral,
  InformacionCentral, 
  ContenidoDeQuienesSomos, } from './quienesSomos.styled'
import Header from '../../components/other-cmpnts/header/index'
import Footer from '../../components/other-cmpnts/footer/index'
import FondoSeccion from '../../styled-components-general/fondo'
import ImagenSeccion from '../../assets/images/deposito-carga.webp'

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