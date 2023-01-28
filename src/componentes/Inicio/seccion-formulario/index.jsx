import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'

const SeccionFormulario = styled.div`
    display:grid;
    grid-template-row:1fr;
    justify-content:space-around;
    grid-template-column:repeat(3, 1fr);
    background: linear-gradient(180deg, rgba(35,26,219,1) 0%, rgba(27,31,38,1) 47%);

    @media (max-width: 500px) {
        margin-top:15%;
    }

`

const Img = styled.img`
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

    @media (max-width: 500px) {
        width:250px;
        height:250px;
    }
    
`

const Formulario = styled(Form)`
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

const Input = styled(Field)`
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

const TextArea = styled(Input)`
    height:150px;
    resize: none;
    margin-bottom:12%;
`

const Opciones = styled(Input)`
    color: #000;
    font:FontMenu;
    font-size: 1.1rem;
    background-color: #eee;

    @media (max-width: 500px) {
        font-size:0.8rem;
    }
`

const ContenedorInputLabel = styled.div`
   display:flex;
   flex-direction:column;
`
const Label = styled.label`
    color:#fff;
    margin-top:20px;
    margin-left:20px;
    margin-bottom:10px;
    font-family: FontMenu;

    @media (max-width: 500px) {
        font-size:0.8rem;
    }
`

function formulario() {
  return (
    <>
        <SeccionFormulario>
            <Img src="public/images/logistica-camion-adc.jpeg"/>
            <Formik
                initialValues={{
                    correo: '',
                    motivo: '',
                    mensaje: ''
                }}
            >
                <Formulario>
                    <ContenedorInputLabel>
                        <Label htmlFor="correo">Correo</Label>
                        <Input name="correo" type="text" />
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="motivo">Motivo de contacto</Label>
                        <Opciones as="select" name="motivo">
                            <option value="Flete">Flete</option>
                            <option value="Desagote">Desagote</option>
                            <option value="Volquete">Volquete</option>
                            <option value="Acarreo">Acarreo de maquinaria</option>
                            <option value="Transporte general">Transporte de cargas generales</option>
                            <option value="Transporte peligroso">Transporte de cargas peligrosas</option>
                            <option value="Bobcat">Bobcat</option>
                            <option value="Baños químicos">Baños químicos</option>
                            <option value="Autoelevadores">Autoelevadores</option>
                            <option value="Gruas Hidraulicas">Gruas Hidraulicas</option>
                            <option value="Almacenamiento">Almacenamiento en depósito</option>
                            <option value="Otro">Otros motivos de contacto</option>
                        </Opciones>
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="mensaje">Mensaje</Label>
                        <TextArea as="textarea" name="mensaje" />
                    </ContenedorInputLabel>
                </Formulario>
            </Formik>
        </SeccionFormulario>
    </>
  )
}


export default formulario