import { useState,useEffect } from 'react'
import { 
 Img,
 UlListado,
 LiListado,
 TiuloPrincipal,
 ArticuloCentral,
 TituloServicios,
 ContenedorServicio,
 InformacionCentral } from './servicios.styled'
 import Deposito from "../../assets/images/depósito.webp"
 import Header from "../../components/other-cmpnts/header/index"
 import Footer from "../../components/other-cmpnts/footer/index"
import FondoSeccion from "../../styled-components-general/fondo"
import TransporteCarga from "../../assets/images/transporte.webp"
import AlquilerConstruc from "../../assets/images/alquiler-construc.webp"
import CargaTransporte from "../../assets/images/carga-transporte-2.webp"

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
          <TituloServicios>Transporte</TituloServicios>
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
