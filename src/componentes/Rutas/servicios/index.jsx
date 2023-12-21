import styled from "styled-components";
import { useState,useEffect } from 'react'
import TransporteCarga from "../../images/transporte.jpg"
import CargaTransporte from "../../images/carga-transporte-2.jpeg"
import Deposito from "../../images/depósito.jpg"
import AlquilerConstruc from "../../images/alquiler-construc.jpg"
import Header from "../../componentes-de-uso-general/header/index"
import Footer from "../../componentes-de-uso-general/footer/index"
import { Titulo } from "../../styled-components-general/titulo-central"
import FondoSeccion from "../../componentes-de-uso-general/fondo-inicio/fondo"

const InformacionCentral = styled.div`

  display: flex;
  justify-content: center;
  margin-top:${props => props.marginTop};
  
  @media (max-width: 1270px) {
    display: flex;
    flex-direction: column;
  }

`;

const ArticuloCentral = styled.article`
  color: #000;
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 100px;
  font-size: 0.9rem;
  margin-bottom: 100px;
  text-align: justify;
  flex-direction: column;
  animation:1.5s TextoAparicion;
  font-family: SubTituloPrincipal;

  p {
    font-size:1rem;
    margin-top: 18px;
    margin-bottom: 8px;
  }

  @media (max-width: 500px) {
    p {
      font-size:0.8rem;
    }
  }
`;

const ContenedorServicio = styled.div`

  display:flex;
  flex-direction:row;
  margin-bottom:50px;

  div{
    display:flex;
    flex-direction:column;
    margin-left:30px;
  }
`

const Img = styled.img`
  width: 420px;
  height: 400px;
  margin-left:20px;
  object-fit: cover;
  margin-bottom: 30px;
  animation:0.5s Aparicion linear;
  margin-top: ${props => props.marginTop}px;

  :hover{
    cursor:pointer;
  }

  @media (max-width: 1270px) {
    display: none;
  }
`;


const TituloSeccion = styled(Titulo)`
  z-index: 1;
  color: #000;
  font-size: 2rem;
  margin-bottom:40px;

  ::selection {
    color: #fff;
  }
`;

const TiuloPrincipal = styled(TituloSeccion)`
  text-align: center;
`

const TituloServicios = styled(TituloSeccion)`

  font-size: 1.4rem;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const UlListado = styled.ul`
  margin-top: 15px;
  margin-bottom: 18px;

  p{
    font-size:0.9rem;
    margin-bottom:30px;
    text-aling:justify;
  }

`;

const LiListado = styled.li`
  margin-top:10px;
  margin-left: 30px;

  @media (max-width: 500px) {
    font-size:0.8rem;
    text-aling:justify;
  }
`;

function servicios() {

  const [menuOff, setMenuOff] = useState(false)
  const [marginTop, setmarginTop] = useState(300)
  const [scrollPosicion, setscrollPosicion] = useState(0);
  
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
    const maxHeight = 1770; // Establece la posición máxima del scroll

    // Aplica la restricción de la posición máxima del scroll
    if (scrollPosicion > maxHeight) {
      window.scrollTo(0, maxHeight);
    }
  }, [scrollPosicion]);

  useEffect(() => {
  
      // -> Condicional que pone el menu en fixed
      if (scrollPosicion >= 70){
          setMenuOff(true)
          setmarginTop('150px')
      } else {
        setMenuOff(false)
        setmarginTop('50px')
      }
  
    }, [scrollPosicion]);

  return (
    <>
      <div id="contenedorInicial">
      <FondoSeccion
        urlFondo={`${CargaTransporte}`}
        height={"200px"}
      />

      <Header MenuOff={menuOff} AlturaCambioColorMenu={170}/>

      <InformacionCentral marginTop={marginTop}>

        <ArticuloCentral>
          
          <TiuloPrincipal>NUESTROS SERVICIOS</TiuloPrincipal>

          <ContenedorServicio>
          <Img src={TransporteCarga} marginTop={'70'}/>

          <div>
          <TituloServicios>Tranporte</TituloServicios>
          <p>Realizamos transporte en general con una flota de camiones,
            camionetas y semis. </p>
          <UlListado>
            <p><b>Hacemos transporte de:</b></p>
            <LiListado> - Cargas generales.</LiListado>
            <LiListado> - Cargas peligrosas. </LiListado>
            <LiListado> - Mudanzas y Fletes.</LiListado>
            <LiListado> - Acarreo (Grúas, Carretones, Maquinarias). </LiListado>
          </UlListado>

          <UlListado>
            <p><b>Nuestra cobertura:</b></p>
            <LiListado> - Capital Federal.</LiListado>
            <LiListado> - Interior del País. </LiListado>
            <LiListado> - Frecuencia semanal a Misiones.</LiListado>
            <LiListado> - Frecuencia diaria a Aeropuerto Ezeiza. </LiListado>
            <LiListado> - Internacional (Somos transporte ATA).</LiListado>
          </UlListado>
          </div>
          </ContenedorServicio>

          <ContenedorServicio>
          <div>
          <TituloServicios> Servicios de Alquileres para la Construcción </TituloServicios>
          <p> Contamos con maquinaria disponible para alquilar, entre otras utilidades.</p>
          <UlListado>
            <p><b>Para servicio de alquiler contamos con:</b></p>
            <LiListado> - Bobcat.</LiListado>
            <LiListado> - Desagotes. </LiListado>
            <LiListado> - Volquetes. </LiListado>
            <LiListado> - Hidrogrúas. </LiListado>
            <LiListado> - Baños químicos. </LiListado>
            <LiListado> - Tijeras / Elevación de personas. </LiListado>
          </UlListado>
          </div>

          <Img src={AlquilerConstruc} marginTop={'20'}/>
          </ContenedorServicio>

          <ContenedorServicio>

          <Img src={Deposito} marginTop={'20'}/>

          <div>
          <TituloServicios>Almacenamiento / Depósito</TituloServicios>
          <p>Almacená en nuestros depósitos, contamos con almacenamiento en distintas localidades de la Provincia de Buenos Aires ubicados en Escobar, Pacheco, Parque Industrial, Pilar y San Pedro.</p>
          <UlListado>
            <p><b>Nos encargamos de:</b></p>
            <LiListado> - In/Out.</LiListado>
            <LiListado> - Repartos. </LiListado>
            <LiListado> - Control de Stock. </LiListado>
            <LiListado> - Armado de pedidos. </LiListado>
          </UlListado>
          </div>

          </ContenedorServicio>


        </ArticuloCentral>
      </InformacionCentral>
      <Footer />
      </div>
    </>
  );
}

export default servicios;
