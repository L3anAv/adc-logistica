import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Svg } from "../../styled-components-general/svg";
import { opcionesMenu } from "../../../../public/auxiliares/infoAux";

const Footer = styled.footer`
  background: linear-gradient(180deg, rgba(27,31,38,1) 23%, rgba(15,17,22,1) 100%);
`;

const ContenedorPrincipalFooter = styled.div`
  display: grid;
  height: 350px;
  grid-template-column: repeat(6, 1fr);

  @media (max-width: 700px) {
    height: auto;
    grid-template-column: 1fr;
  }
`;

const Img = styled.img`
  width: 300px;
  grid-row: 1/2;
  display: inline;
  margin-left: 5%;
  margin-top: 15%;
  grid-column: 1/2;
  justify-content: center;

  @media (max-width: 1160px) {
    display: inline;
    width: 200px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const Menu = styled.nav`
  margin-top: 8%;
  grid-row: 1/2;
  grid-column: 2/3;
  aling-content: start;

  @media (max-width: 1160px) {
    aling-self: start;
    justify-self: center;
  }

  @media (max-width: 700px) {
    grid-row: 1/2;
    grid-column: 1/3;
  }
`;

const UlMenu = styled.ul`
  padding: 20px;
`;

const LiMenu = styled.li`
  padding: 4px;
  border-bottom: 1px solid #b1b2b5;
`;

const LinkRef = styled(Link)`
  color: #b1b2b5;
  font-size: 0.8rem;
  font-family: FontMenu;

  :hover {
    color: #fff;
  }
`;

const Iframe = styled.iframe`
  margin-top: 3%;
  grid-row: 1/2;
  grid-column: 3/4;
  justify-self: end;

  @media (max-width: 700px) {
    grid-row: 2/3;
    grid-column: 1/2;
    margin-right: 5%;
    margin-bottom: 5%;
  }
`;

const RedesSociales = styled.div`
  display: flex;
  grid-row: 1/2;
  grid-column: 4/5;
  aling-content: start;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    grid-row: 2/3;
    grid-column: 2/3;
  }

  path {
    fill: grey;
    fill-rule: evenodd;
  }
`;

const SvgFoot = styled(Svg)`
  width: 32px;
  height: 32px;
  opacity: 45%;
  margin-top: -15px;
  margin-left: 15px;
  padding-top: 32px;
  padding-bottom: 32px;
  filter: blur(0.5px);

  @media (max-width: 700px) {
    width: 28px;
    height: 28px;
    margin-top: -15px;
  }

  :hover {
    opacity: 100%;
    filter: blur(0);
  }
`;

const PieDePagina = styled.div`
  color: #fff;
  display: flex;
  font-size: 1rem;
  font-family: FontMenu;
  flex-direction: column;

  p {
    color: #fff;
    text-align: center;
  }

  p:nth-child(2) {
    color: #fff;
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 8px;
  }

  a {
    color: #fff;
    text-align: center;
    text-decoration-line: underline;
  }

  @media (max-width: 700px) {
    p {
      font-size: 0.6rem;
    }

    p:nth-child(2) {
      color: #fff;
      font-size: 0.5rem;
      text-align: center;
      margin-bottom: 8px;
    }
  }
`;

function footer() {

  function moverAlTopAlHacerClick(){
    window.scrollTo(0,0)
  }

  return (
    <>
      <Footer>
        <ContenedorPrincipalFooter>
          <Img src="public/images/logo-sin-fondo-footer.png"></Img>

          <Menu>
            <UlMenu>
              {opcionesMenu.map((item) => (
                <LiMenu key={item.nombre}>
                  <LinkRef to={item.href} onClick={moverAlTopAlHacerClick}>{item.nombre}</LinkRef>
                </LiMenu>
              ))}
            </UlMenu>
          </Menu>

          <Iframe
            width="300"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=ADC%20uniendo%20emrpesas&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></Iframe>

          <RedesSociales>
            <SvgFoot xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </SvgFoot>

            <SvgFoot xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
            </SvgFoot>

            <SvgFoot xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
            </SvgFoot>

            <SvgFoot xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
            </SvgFoot>
          </RedesSociales>
        </ContenedorPrincipalFooter>

        <PieDePagina>
          <p>2022 | ADC ARGENTINA UNIENDO EMPRESAS S.A</p>
          <p>
            Desarollado por{" "}
            <a href="https://github.com/l3anav">!L3andro Avila</a>
          </p>
        </PieDePagina>
      </Footer>
    </>
  );
}

export default footer;
