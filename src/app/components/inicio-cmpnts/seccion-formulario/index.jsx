import { useState, useEffect } from 'react'
import { Formik, ErrorMessage } from 'formik'
import { 
    Img,
    Boton,
    Error,
    Label,
    Input,
    TextArea,
    LabelInfo,
    Opciones,
    Formulario,
    FieldRetiro,
    LabelRetiro,
    EnviadoMensaje,
    SeccionFormulario,
    ContenedorInputLabel } from './seccionFormulario.styled'
import ImagenFormulario from '../../../assets/images/logistica-camion-adc.webp'


function formulario() {

    const [OcultarField,setocultarField] = useState(false)
    const [mensajeEnviado, setmensajeEnviado] = useState(false)
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

        if(res.status == 200){
            setmensajeEnviado(true)
        }else{
            setmensajeEnviado(false)
        }
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

    function validadorDeCampos(values){
        
        const err = {}
        const fechaActual = new Date()
        const fecha = new Date(currentDay)
        const mensajeErr = 'Por favor ingrese una direccion.'
        const fechaUsuarioIngresada = new Date(values.fecha)
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(values.telefono.length < 10){
            err.telefono = 'El telefono debe contener 10 dígitos. (Celular con Whastapp)'
        }

        if(!pattern.test(values.correo) && values.correo.length != 0){
            err.correo = 'Ingrese un correo valido: correo@host.com'
        }

        if(fechaUsuarioIngresada <= fechaActual || fechaUsuarioIngresada === fecha){
            err.fecha = 'Por Favor, ingrese una fecha valida.'
        }

        if(values.retiro.length <= 0 && !OcultarField){
            err.retiro = mensajeErr
        }

        if(values.entrega.length <= 0){
            err.entrega = mensajeErr
        }

        return err;
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
        <SeccionFormulario id="formulario">
            <Img src={ImagenFormulario}/>
            <Formik
                initialValues={{
                    correo: '',
                    fecha:`${currentDay}`,
                    retiro:'',
                    entrega:'',
                    telefono:'',
                    mensaje: '',
                    opciones: ``
                }}
                onSubmit={(values, {resetForm}) => {
                    hadleSubmit(values)
                    resetForm({ values: '' })
                }}
                validate={validadorDeCampos}
            >
                <Formulario>
                    <LabelInfo htmlFor="opcionales">(*) Opcionales</LabelInfo>
                    <ContenedorInputLabel>
                        <Label htmlFor="correo">Correo (*)</Label>
                        <Input placeholder="correo@email.com" name="correo" type="text" />
                        <Error><ErrorMessage name="correo"/></Error>
                        <Label htmlFor="Telefono">Número de teléfono (Whatsapp)</Label>
                        <Input placeholder="11-xxxx-xxxx" name="telefono" type="text" />
                        <Error><ErrorMessage name="telefono"/></Error>
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
                            <option value="Gruas Hidraulicas">Gruas Hidráulicas</option>
                            <option value="Almacenamiento">Almacenamiento en depósito</option>
                            <option value="Otro">Otros motivos de contacto</option>
                        </Opciones>
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="mensaje">Fecha para servicio</Label>
                        <Input type="date" name="fecha" />
                        <Error><ErrorMessage name="fecha"/></Error>
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="entrega">Lugar de Entrega</Label>
                        <Input placeholder="Dirección, Ciudad, Partido" name="entrega" type="text" />
                        <Error><ErrorMessage name="entrega"/></Error>
                        <LabelRetiro  display={OcultarField == true ? 'none' : 'inline'} htmlFor="retiro">Lugar de Retiro (Destino de búsqueda)</LabelRetiro>
                        <FieldRetiro display={OcultarField == true ? 'none' : 'inline'} placeholder="Dirección, Ciudad, Partido" name="retiro" type="text" />
                        <Error display={OcultarField == true ? 'none' : 'inline'}><ErrorMessage  name="retiro"/></Error>
                    </ContenedorInputLabel>
                    <ContenedorInputLabel>
                        <Label htmlFor="mensaje">Mensaje (*)</Label>
                        <TextArea id="mensaje" placeholder="Mensaje complementario" as="textarea" name="mensaje" type="text" />
            </ContenedorInputLabel>
                    <Boton type="submit" >Enviar</Boton>
                    {mensajeEnviado === true ? <EnviadoMensaje background={'#449d44'} >Mensaje Enviado ✓</EnviadoMensaje> : ''}
                </Formulario>
            </Formik>
        </SeccionFormulario>
    </>
  )
}


export default formulario