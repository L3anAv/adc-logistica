import Menu from "./menu/index";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Svg } from "../../styled-components-general/svg";

const ContenedorPrincipal = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  aling-self: center;
  justify-content: space-around;
  top: ${(props) => props.ContactoTop || "0"};
  position: ${(props) => props.ContactoPosition || "none"};
  margin-top: ${(props) => props.ContactoMarginTop || "20px"};
`;

const ContenedorContacto = styled.div`
  display: flex;
  animation: Titulo 1s;

  @media (max-width: 500px) {
    margin-left: 2%;
    flex-direction: column;
  }
`;

const TextoContacto = styled.a`
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
  font-size: 0.8rem;
  padding-left: 10px;
  padding-right: 10px;
  align-self: center;
  font-family: FontMenu;
  color: ${(props) => props.TextoColor || "#fff"};

  visited,
  link {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 815px) {
    font-size: 0.7rem;
  }
`;

const IconoContacto = styled(Svg)`
  width: 18px;
  height: 18px;
  align-self: center;
  border-radius:${(props) => props.RadiusActivo === true ? '100%' : 'none'};
  background:${(props) => props.BackgroundActivo === true ? '#2AC670' : "none"};

  path {
    fill: ${(props) => props.IconoColor || "white"};
    fill-rule: evenodd;
  }

  @media (max-width: 815px) {
    width: 15px;
    height: 15px;
  }
`;

const Titulo = styled.h1`
  z-index: 1;
  color: #fff;
  margin-left: 2%;
  font-size: 1rem;
  animation: Titulo 1s;
  font-family: SubTituloPrincipal;
  visibility: ${(props) => props.TituloVisibility || "visible"};

  @media (max-width: 945px) {
    margin-top: 1%;
    font-size: 0.8rem;
  }

  @media (max-width: 815px) {
    display: none;
  }
`;

const header = ({MenuOff}) => {
  const [scrollPosicion, setscrollPosicion] = useState(0);
  const [contactoFixed, setcontactoFixed] = useState(false);
  const [contactoColor, setcontactoColor] = useState(false);

  // -> Funcion que controla la altura del scrol
  function darPosicionDeScroll() {
    window.addEventListener("scroll", () => {
      setscrollPosicion(window.scrollY);
    });
  }

  useEffect(() => {
    darPosicionDeScroll();

    // -> Condicional que pone el menu en fixed
    if (scrollPosicion >= 77) {
      setcontactoFixed(true);
    } else {
      setcontactoFixed(false);
    }

    // -> Condicional que pone el cambio de color en el menu
    if (scrollPosicion >= 545) {
      setcontactoColor(true);
    } else {
      setcontactoColor(false);
    }
  }, [scrollPosicion]);

  return (
    <>
      <ContenedorPrincipal
        ContactoTop={contactoFixed == true ? "10px" : "0"}
        ContactoMarginTop={contactoFixed == true ? "0.3%" : "20px"}
        ContactoPosition={contactoFixed == true ? "fixed" : "none"}
      >
        {contactoFixed == false ? (
          <Titulo TituloVisibility={"visible"}>
            ADC ARGENTINA UNIENDO EMPRESAS
          </Titulo>
        ) : (
          <Titulo TituloVisibility={"hidden"}>
            ADC ARGENTINA UNIENDO EMPRESAS
          </Titulo>
        )}
        
        <ContenedorContacto>
          <IconoContacto
            IconoColor={"#fff"}
            BackgroundActivo={true}
            RadiusActivo={true}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </IconoContacto>
          <TextoContacto
            TextoColor={contactoColor == true ? "#000" : "#fff"}
            href="https://wa.me/5491157494344"
          >
            1157494344
          </TextoContacto>
        </ContenedorContacto>

        <ContenedorContacto>
          <IconoContacto
            BackgroundActivo={false}
            RadiusActivo={false}
            IconoColor={contactoColor == true ? "#4a6bd9" : "white"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </IconoContacto>
          <TextoContacto
            TextoColor={contactoColor == true ? "#000" : "#fff"}
            href="mailto:info@adcargentina.com"
          >
            info@adcargentina.com
          </TextoContacto>
        </ContenedorContacto>
      </ContenedorPrincipal>

      {MenuOff == false ? <Menu /> : ''}
    </>
  );
};

export default header;
