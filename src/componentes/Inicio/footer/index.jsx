import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { opcionesMenu } from "../../../../public/json/infoAux";

const Footer = styled.footer`
  height: 320px;
  background: #23262b;
`;

const Menu = styled.nav``;
const UlMenu = styled.ul``;
const LiMenu = styled.li``;

function footer() {
  return (
    <>
      <Footer>
        <Menu>
          <UlMenu>
            {opcionesMenu.map((item) => (
              <LiMenu key={item.nombre}>
                <Link to={item.href}>{item.nombre}</Link>
              </LiMenu>
            ))}
          </UlMenu>
        </Menu>
      </Footer>
    </>
  );
}

export default footer;
