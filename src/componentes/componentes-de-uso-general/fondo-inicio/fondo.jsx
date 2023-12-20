import styled from "styled-components";

const FondoDeSeccion = styled.div`
  width: 100%;
  will-change: height;
  background: url(${props => props.urlFondo});
  height: ${props => props.height};
  transition: height 0.3s ease;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;

  :after {
    content: "";
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    opacity: 85%;
    z-index: -1;
    background: linear-gradient(
      0deg,
      rgba(4, 11, 40, 1) 0%,
      rgba(78, 112, 239, 1) 100%
    );
  }

  @media (max-width: 600px) {
    height:200;
  }

`;

export default FondoDeSeccion