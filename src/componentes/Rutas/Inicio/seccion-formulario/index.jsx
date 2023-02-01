import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

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

    @media (max-width: 490px) {
        display:none;
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
`

const Opciones = styled(Input)`
    color: #000;
    background-color: #eee;

    @media (max-width: 500px) {
        font-size:0.8rem;
    }
`

const ContenedorInputLabel = styled.div`
   display:flex;
   flex-direction:column;
`

const Error = styled.p`
    color:#cc0000;
    margin-left:4%;
    font-size:0.8rem;
    font-family:FontMenu;
    display:${props => props.display};
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

const LabelInfo = styled(Label)`
    margin-left:4%;
    font-size:0.8rem;
`

const LabelRetiro = styled(Label)`
    display:${props => props.display};
`

const FieldRetiro = styled(Input)`
    display:${props => props.display};
`

const Boton = styled.button`
    
    height:40px;
    color: #fff;
    margin-top:46px;
    cursor: pointer;
    font-size:0.8rem;
    border-radius: 5px;
    margin-bottom:20%;
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
      margin-top: 6%;
    }
`

function formulario() {

    const [opcionValue,setopcionValue] = useState('')
    const [OcultarField,setocultarField] = useState(false)
    const [currentDay, setcurrentDay] = useState('00/00/0000')

    function obtenerDiaActual(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    setcurrentDay(today)
    }

    const postData = async(values)=>{
        let res = await fetch("https://formsubmit.co/ajax/797a413ef96dbb6354aa48617a6043cd",{
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({ 
            correo: values.correo,
            fecha:  values.fecha,
            retiro: values.retiro,
            entrega: values.entrega,
            telefono: values.telefono,
            mensaje: values.mensaje,
            opciones: values.opciones
        })
        })
        let data = await res.json()
        console.log(data)
    }

    function hadleSubmit(values){
        let opciones = document.getElementById('opciones')
        let mensaje = document.getElementById('mensaje')
        values.opciones = opciones.value
        values.mensaje = mensaje.value
        postData(values)
        //console.log(values)
    }

    function obtenerValorSelect(e){

        const origenDestino = ["Flete", "Acarreo", "Transporte"]

        if(!origenDestino.includes(e.target.value)){
            setocultarField(true)
        }else{
            setocultarField(false)
        }
    }

    useEffect(() => {
        obtenerDiaActual()
    }, [])

  return (
    <>
        <SeccionFormulario>
            <Img src="public/images/logistica-camion-adc.jpeg"/>
            <Formik
                initialValues={{
                    correo: '',
                    fecha:`${currentDay}`,
                    retiro:'',
                    entrega:'',
                    telefono:'',
                    mensaje: '',
                    opciones: `${opcionValue}`
                }}
                onSubmit={(values, {resetForm}) => {
                    hadleSubmit(values)
                    resetForm({ values: '' })
                }}
            >
                <Formulario>
                    <LabelInfo htmlFor="opcionales">(*) Opcionales</LabelInfo>
                    <ContenedorInputLabel>
                        <Label htmlFor="correo">Correo (*)</Label>
                        <Input placeholder="correo@email.com" name="correo" type="text" />
                        <Label htmlFor="Telefono">Numero de teléfono (Whatsapp)</Label>
                        <Input placeholder="11-xxxx-xxxx" name="telefono" type="text" />
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="motivo">Motivo de contacto</Label>
                        <Opciones id="opciones" onChange={obtenerValorSelect} as="select" name="opciones">
                            <option value="Flete">Flete</option>
                            <option value="Acarreo">Acarreo</option>
                            <option value="Desagote">Desagote</option>
                            <option value="Volquete">Volquete</option>
                            <option value="Acarreo">Acarreo de maquinaria</option>
                            <option value="Transporte">Transporte de cargas generales</option>
                            <option value="Transporte">Transporte de cargas peligrosas</option>
                            <option value="Bobcat">Bobcat</option>
                            <option value="Baños químicos">Baños químicos</option>
                            <option value="Autoelevadores">Autoelevadores</option>
                            <option value="Gruas Hidraulicas">Gruas Hidraulicas</option>
                            <option value="Almacenamiento">Almacenamiento en depósito</option>
                            <option value="Otro">Otros motivos de contacto</option>
                        </Opciones>
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="mensaje">Fecha para servicio</Label>
                        <Input type="date" name="fecha" />
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="entrega">Lugar de Entrega</Label>
                        <Input placeholder="Direccion, Ciudad, Partido" name="entrega" type="text" />
                        <LabelRetiro  display={OcultarField == true ? 'none' : 'inline'} htmlFor="retiro">Lugar de Retiro (Destino de busqueda)</LabelRetiro>
                        <FieldRetiro display={OcultarField == true ? 'none' : 'inline'} placeholder="Direccion, Ciudad, Partido" name="retiro" type="text" />
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="mensaje">Mensaje (*)</Label>
                        <TextArea id="mensaje" placeholder="Mensaje complementario" as="textarea" name="mensaje" type="text" />      
              </ContenedorInputLabel>
                    <Boton type="submit" >Enviar</Boton>
                </Formulario>
            </Formik>
        </SeccionFormulario>
    </>
  )
}


export default formulario