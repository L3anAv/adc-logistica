import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Titulo } from '../../styled-components-general/titulo-central'

export const Contenedor = styled.div`
  overflow: hidden;
`

export const TituloPrincipal = styled.h2`
  z-index:1;
  color:#fff;
  font-size:5rem;
  margin-top:10%;
  margin-left:20%;
  jusitfy-self:center;
  font-family:TituloPrincipal;
  animation:1s Aparicion linear;
  display:${props => props.display};

  @media (max-width: 600px) {
    font-size:5rem;
    margin-top:15%;
    margin-left:15%;
  }

  @media (max-width: 500px) {
    font-size:3rem;
    margin-top:30%;
    margin-left:22%;
  }

`

export const ContenidoDeQuienesSomos = styled.section`
  opacity:${props => props.opacidad};
  animation: ${props => props.animacion};
  margin-bottom: ${props => (props.animacion ? '0' : '100px')};
  margin-top: ${props => (props.animacion ? '410px' : '300px')};
  transition: margin-top 0.2s ease, opacity 0.3s ease, margin-bottom 0.3s ease;
`

export const TituloSeccion = styled(Titulo)`
  
  z-index:1;
  color:#000;
  font-size:2rem;
  margin-left:10%;
  jusitfy-self:center;
  text-align: center;
  
  ::selection {
    color: #fff;
  }

`;

export const InformacionCentral = styled.div`
  display:flex;
  margin-right:0;
  justify-content:center;
  @media (max-width: 1270px) {
    display:flex;
    flex-direction:column;
  }
`

export const Img = styled.img`
    width:400px;
    height:400px;
    object-fit: cover;
    margin-left:5%;
    margin-bottom:120px;
    margin-top:${props => props.altoDeFondo - 220}px;

    @media (max-width: 1270px) {
      display:none;
    }
`

export const ArticuloCentral = styled.article`
    color:#000;
    display:flex;
    margin-left:5%;
    margin-right:5%;
    margin-top:100px;
    font-size:0.9rem;
    margin-bottom:100px;
    text-align: justify;
    flex-direction:column;
    font-family:SubTituloPrincipal;

    p {
        font-size:16px;
        margin-top:18px;
    }
`

export const Boton = styled(Link)`
    width:30%;
    height:40px;
    color: #fff;
    margin-top:46px;
    cursor: pointer;
    font-size:0.8rem;
    line-height: 40px;
    border-radius: 5px;
    background: #3d5bcc;
    font-family: FontMenu;
    text-align-last: center;

    :hover {
    background: #294198;
    }

    @media (max-width: 1270px) {
      font-size:0.5rem;
    }

    @media (max-width: 600px) {
      width:50%;
      margin-top: 6%;
    }
`