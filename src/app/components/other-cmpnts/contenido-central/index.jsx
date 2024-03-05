import React from "react"
import {
 Span,
 Subtitulo,
 TituloCentral,
 SeccionPrincipal,
 LinkContenido,
 BotonNuestrosServicios } from './contenidoCental.styled'

const contenidoCentral = () => {
  return (
    <>
      <SeccionPrincipal>
        <TituloCentral>
          SERVICIOS LOGÍSTICOS INTEGRALES & ALQUILER DE MAQUINARIAS
        </TituloCentral>
        <Subtitulo>Prestamos servicio a empresas y particulares.</Subtitulo>
        <BotonNuestrosServicios >
          <LinkContenido to={"/servicios"}>
            Más Información <Span>&#62;</Span>
          </LinkContenido>
        </BotonNuestrosServicios>
      </SeccionPrincipal>
    </>
  );
};

export default contenidoCentral;
