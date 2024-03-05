import { Form, Field } from 'formik'
import styled from 'styled-components'

export const SeccionFormulario = styled.div`
    display:grid;
    grid-template-row:1fr;
    justify-content:space-around;
    grid-template-column:repeat(3, 1fr);
    background: linear-gradient(180deg, rgba(35,26,219,1) 0%, rgba(27,31,38,1) 47%);

    @media (max-width: 500px) {
        margin-top:15%;
    }

`

export const Img = styled.img`
    width:400px;
    height:400px;
    grid-row:1/2;
    grid-column:1/2;
    align-self:center;
    object-fit: cover;
    justify-self:center;

    @media (max-width: 750px) {
        grid-row:1/2;
        margin-top:5%;
        grid-column:1/3;
    }

    @media (max-width: 490px) {
        display:none;
    }
    
`

export const Formulario = styled(Form)`
    width:100%;
    display:flex;
    grid-row:1/2;
    grid-column:2/4;
    align-self:center;
    justify-self:center;
    flex-direction:column;

    @media (max-width: 750px) {
        width:85%;
        grid-row:2/3;
        grid-column:1/3;
    }
`

export const Input = styled(Field)`
    padding:10px;
    font-size:1rem;
    margin-left:15px;
    margin-right:15px;
    margin-bottom:8px;
    border-radius:5px;
    font-family:FontMenu;

    @media (max-width: 500px) {
        font-size:0.7rem;
    }
`

export const TextArea = styled(Input)`
    height:150px;
    resize: none;
`

export const Opciones = styled(Input)`
    color: #000;
    background-color: #eee;

    @media (max-width: 500px) {
        font-size:0.8rem;
    }
`

export const ContenedorInputLabel = styled.div`
   display:flex;
   flex-direction:column;
`

export const Error = styled.p`
    color:#cc0000;
    margin-left:4%;
    font-size:0.8rem;
    font-family:FontMenu;
    display:${props => props.display};
`

export const Label = styled.label`
    color:#fff;
    margin-top:20px;
    margin-left:20px;
    margin-bottom:10px;
    font-family: FontMenu;

    @media (max-width: 500px) {
        font-size:0.8rem;
    }
`

export const EnviadoMensaje = styled(Label)`
    color:#fff;
    margin-left:0;
    margin-top:8px;
    padding-top:3px;
    font-size:1.2rem;
    border-radius:6px;
    margin-bottom:12%;
    padding-left:175px;
    background:${props => props.background};
    font-family:FontMenu;
`

export const LabelInfo = styled(Label)`
    margin-left:4%;
    font-size:0.8rem;
`

export const LabelRetiro = styled(Label)`
    display:${props => props.display};
`

export const FieldRetiro = styled(Input)`
    display:${props => props.display};
`

export const Boton = styled.button`
    
    height:40px;
    color: #fff;
    margin-top:20px;
    cursor: pointer;
    font-size:0.8rem;
    margin-bottom:4%;
    border-radius: 5px;
    background: #220FF5;
    font-family: FontMenu;
    text-align-last: center;
    
    :hover {
    background: #223BF5;
    }

    @media (max-width: 1270px) {
      font-size:0.5rem;
    }

    @media (max-width: 600px) {
      margin-top: 6%;
    }
`