import styled from "styled-components";
import { Titulo } from "../../styled-components-general/titulo-central"

export const InformacionCentral = styled.div`

  display: flex;
  justify-content: center;
  margin-top:${props => props.marginTop};
  
  @media (max-width: 1270px) {
    display: flex;
    flex-direction: column;
  }

`;

export const ArticuloCentral = styled.article`
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

export const ContenedorServicio = styled.div`

  display:flex;
  flex-direction:row;
  margin-bottom:50px;

  div{
    display:flex;
    flex-direction:column;
    margin-left:30px;
  }
`

export const Img = styled.img`
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

export const TiuloPrincipal = styled(TituloSeccion)`
  text-align: center;
`

export const TituloServicios = styled(TituloSeccion)`

  font-size: 1.4rem;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const UlListado = styled.ul`
  margin-top: 15px;
  margin-bottom: 18px;

  p{
    font-size:0.9rem;
    margin-bottom:30px;
    text-aling:justify;
  }

`;

export const LiListado = styled.li`
  margin-top:10px;
  margin-left: 30px;

  @media (max-width: 500px) {
    font-size:0.8rem;
    text-aling:justify;
  }
`;