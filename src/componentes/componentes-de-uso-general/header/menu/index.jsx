import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { opcionesMenu } from "../../../../../public/auxiliares/infoAux";

/* Styled Components de menu -> */

const NavWeb = styled.nav`
  height: 28px;
  display: flex;
  opacity: 100%;
  list-style-type: none;
  animation: 0.7s MenuAparicion;
  justify-content: space-between;
  top: ${(props) => props.navWebTop};
  width: ${(props) => props.navWebWidth};
  position: ${(props) => props.navWebPosition};
  margin-top: ${(props) => props.navWebMarginTop};

  @media (max-width: 945px) {
    top: 0;
    left: 0px;
    z-index: 2;
    width: 30%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    position: fixed;
    background-color: #4a6bd9;
    transform: translate(${(props) => props.navToggle});
  }

  @media (max-width: 500px) {
    animation:none;
  }
`;

const UlMenu = styled.ul`

  display: flex;
  margin-left: 2.5%;

  @media (max-width: 945px) {
    top: 20px;
    margin-top: 12%;
    margin-left: 2%;
    position: fixed;
    flex-direction: column;
  }
`;

const ItemMenu = styled.li`
  color: #fff;
  user-select: none;  
  text-decoration: none;
  margin:0px 8px 0px 8px;
  padding:0px 12px 12px 12px;

  :hover {
    border-bottom: ${(props) => props.ItemMenuBorder || "1px solid white"};
  }

  @media (max-width: 945px) {
    width: 60%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const BotonItem = styled(Link)`
  margin-top:5px;
  font-size: 0.9rem;
  font-family: FontMenu;
  text-decoration: none;
  color: ${(props) => props.botonitemcolor};
  font-weight: ${(props) => props.botonweight || ""};

  @media (max-width: 945px) {
    font-size: 1rem;
  }

  @media (max-width: 815px) {
    font-size: 0.8rem;
  }
`;

const SvgContainer = styled.div`
  margin-right: 3%;

  @media (max-width: 945px) {
    margin-top: 5%;
    margin-left: 20%;
  }

  @media (max-width: 500px) {
    width: 15px;
    height: 15px;
    margin-right: 15%;
  }

`;

const Svg = styled.svg`
  z-index: 1;
  width: 25px;
  opacity: 40%;
  padding: 3px;
  height: 35px;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 8px;
  filter: blur(0.5px);
  transition: all 0.5s;

  path {
    fill: ${(props) => props.SvgFill || "white"};
    fill-rule: evenodd;
  }

  :hover {
    opacity: 120%;
  }
`;

const RedSocial = styled(Svg)`
  @media (max-width: 815px) {
    width: 12px;
    height: 12px;
    margin-left: 2px;
    margin-right: 2px;
  }

  @media (max-width: 500px) {
    width: 18px;
    height: 18px;
    margin-top: 10%;
    margin-bottom: 10%;
  }

  :nth-child(2) {
    visibility: hidden;
  }

  :nth-child(3) {
    visibility: hidden;
  }

`;

const CloseMenu = styled(Svg)`
  display: none;

  @media (max-width: 945px) {
    margin-top: 5%;
    display: inline;
    font-size: 1.2rem;

    path {
      fill: ${(props) => props.colorMenu || "white"};
      fill-rule: evenodd;
    }
  }
`;

const OpenMenu = styled(Svg)`
  display: none;

  @media (max-width: 945px) {
    top: 15px;
    rigth: 10px;
    margin-top: 5%;
    position: fixed;
    display: inline;
    font-size: 1.2rem;

    path {
      fill: ${(props) => props.colorMenu || "white"};
      fill-rule: evenodd;
      border:1px solid black;
    }
  }

  @media (max-width: 815px) {
    top: 30px;
  }

  @media (max-width: 500px) {
    top: 50px;
  }
`;

const Menu = () => {

  // --> Estado
  const [menuCoA, setmenuCoA] = useState(true);
  const [windowSize, setWindowSize] = useState(0);
  const [menuColor, setmenuColor] = useState(false);
  const [menuFixed, setmenuFixed] = useState(false);
  const [scrollPosicion, setscrollPosicion] = useState(0);
  const [scrollExecuted, setScrollExecuted] = useState(false);
  const [windowSizeRespon, setWindowSizeRespon] = useState(false);
  function moverAlTopAlHacerClick(){
    window.scrollTo(0,0)
  }

  // -> Funcion que settea el cambio de width de la ventana
  function darWidthPantalla() {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
  }

  // -> Encargado de dar el width del inicio cuando carga la página
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, [])

  useEffect(() => {
    if (window.location.hash === '#formulario' && !scrollExecuted) {
      IrhastaFormulario();
      setScrollExecuted(true);
    }
  }, [scrollExecuted]);

  function IrhastaFormulario(){

      const inicioSection = document.getElementById('formulario');
      
      if (inicioSection) {
        const formulario = inicioSection.querySelector('form');
    
        if (formulario) {
          const offsetTop = formulario.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });

          window.history.replaceState({}, document.title, window.location.pathname);

        }
      }
  }

  // -> Funcion que controla la altura del scrol
  function darPosicionDeScroll() {
    window.addEventListener("scroll", () => {
      setscrollPosicion(window.scrollY);
    });
  }

  function cerrarMenu() {
    if (menuCoA == false) {
      setmenuCoA(true);
    } else {
      setmenuCoA(false);
    }
  }

  useEffect(() => {
    darWidthPantalla();

    if (windowSize <= 945 && windowSize != 0) {
      setWindowSizeRespon(true);
    } else {
      setWindowSizeRespon(false);
    }
  }, [windowSize]);

  useEffect(() => {
    darPosicionDeScroll();

    // -> Condicional que pone el menu en fixed
    if (scrollPosicion >= 77) {
      setmenuFixed(true);
    } else {
      setmenuFixed(false);
    }

    // -> Condicional que pone el cambio de color en el menu
    if (scrollPosicion >= 525) {
      setmenuColor(true);
    }else{
      setmenuColor(false);
    }

  }, [scrollPosicion]);

  return (
    <>
      {menuCoA == true ? (
        <OpenMenu
          colorMenu={menuColor == true ? "black" : "white"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={cerrarMenu}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </OpenMenu>
      ) : (
        ""
      )}

      <NavWeb
        navWebTop={menuFixed == true ? "16px" : ""}
        navToggle={menuCoA == true ? "-100%" : "0"}
        navWebWidth={menuFixed == true ? "100%" : ""}
        navWebColor={menuFixed == true ? "#000" : "#fff"}
        navWebMarginTop={menuFixed == true ? "3%" : "3%"}
        navWebPosition={menuFixed == true ? "fixed" : "none"}
      >
        {menuCoA == false ? (
          <CloseMenu
            colorMenu={menuColor == true && windowSizeRespon == false ? "black" : "white"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            onClick={cerrarMenu}
          >
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </CloseMenu>
        ) : (
          ""
        )}

        <UlMenu>
          {opcionesMenu.map((item) => (
            <ItemMenu
              ItemMenuBorder={
                menuFixed == true && menuColor == true && windowSizeRespon == false
                  ? "2px solid #000"
                  : "2px solid white"
              }
              key={item.nombre}
            >
              <BotonItem
                id={item.id}
                to={item.href}
                onClick={item.id === 'contacto' ? IrhastaFormulario : moverAlTopAlHacerClick }
                botonweight={menuFixed == true && menuColor == true && windowSizeRespon == false ? "600" : ""}
                botonitemcolor={menuFixed && menuColor && !windowSizeRespon ? "#000" : "#fff"}
              >
                {item.nombre}
              </BotonItem>
            </ItemMenu>
          ))}
        </UlMenu>

        <SvgContainer>
          {/* Instragram */}
          <a href="https://www.instagram.com/adc_servicios_y_logistica/" target="_blank" rel="noopener noreferrer">
          <RedSocial
            SvgFill={menuFixed == true && menuColor == true && windowSizeRespon == false ? "#000" : "white"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </RedSocial>
          </a>
          
          {/* LinkedIn */}
          <RedSocial
            SvgFill={menuFixed == true && menuColor == true && windowSizeRespon == false ? "#4a6bd9" : "white"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </RedSocial>

          {/* Twitter */}
          <RedSocial
            SvgFill={menuFixed == true && menuColor == true && windowSizeRespon == false ? "#4a6bd9" : "white"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </RedSocial>
        </SvgContainer>
      </NavWeb>
    </>
  );
};

export default Menu;