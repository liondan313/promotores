import { useState } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import validator from 'validator';
import { isObjEmpty } from '../helpers/helpers';
import { useHistory } from 'react-router-dom';
//import { estatusProspectos } from '../helpers/estatusProspectos';
import { CREATE_PROSPECTOS_ENDPOINT } from '../helpers/endpoints';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getUserPosts } from '../actions/prospectosActions';
import NuevoProspecto2Form from '../components/forms/NuevoProspecto2Form';

export default function NuevoProspecto() {

    const [errors, setErrors] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();

    

    const handleUpload = async (prospectoId, selectedFiles) => {
        try {
            
            const formData = new FormData();

            selectedFiles.forEach((selectedFile, index) => {
                formData.append('nombre', selectedFile.fileName);
                formData.append('archivo', selectedFile.file); // Reemplaza con el objeto de archivo seleccionado
            });

            formData.append('prospectoId', 1);

            const response = await fetch('http://localhost:5001/documentos/guardardocumento', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Archivos subidos correctamente');
            } else {
                console.error('Error al subir los archivos');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };


    

    const createProspecto = async ({ nombre, primerApellido, segundoApellido, calle, numero, colonia, codigoPostal, telefono, rfc, estatusProspectoId, selectedFiles }) => {
        const errors = {};
        setErrors(errors);

        
        if (validator.isEmpty(nombre)) {
            errors.nombre = "El nombre es obligatorio";
        }
        
        if (validator.isEmpty(primerApellido)) {
            errors.primerApellido = "El primer apellido es obligatorio";
        }

        if (validator.isEmpty(segundoApellido)) {
            errors.segundoApellido = "El segundo apellido es obligatorio";
        }

        if (validator.isEmpty(calle)) {
            errors.calle = "La calle es obligatorio";
        }

        if (validator.isEmpty(colonia)) {
            errors.colonia = "La colonia es obligatorio";
        }

        if (validator.isEmpty(numero)) {
            errors.numero = "El numero de la calle es obligatorio";
        }

        if (!validator.isNumeric(numero)) {
            errors.numero = "El numero de la calle debe ser un numero";
        }

        

        
        if (validator.isEmpty(colonia)) {
            errors.colonia = "La colonia es obligatorio";
        }

        if (!validator.isPostalCode(codigoPostal, 'any')) {
            errors.codigoPostal = "El codigo postal no es valido";
        }
                
        if (!validator.isMobilePhone(telefono, 'any', { strictMode: false })) {
            errors.telefono = "El telefono no es valido";
        }

        if (validator.isEmpty(rfc)) {
            errors.rfc = "El RFC es obligatorio";
        }
       

        if (!isObjEmpty(errors)) {
            setErrors(errors);
            return;
        }

        
        try {

            console.log("LISTADOOOOOOOOOOOOOO");
            console.log({ nombre, primerApellido, segundoApellido, calle, numero, colonia, codigoPostal, telefono, rfc, estatusProspectoId });
            console.log("TERMINA LISTADO");

            const response = await axios.post(CREATE_PROSPECTOS_ENDPOINT, { nombre, primerApellido, segundoApellido, calle, numero, colonia, codigoPostal, telefono, rfc, estatusProspectoId });
                        
            handleUpload(response.data.prospectoId, selectedFiles);

            await dispatch(getUserPosts());
            toast.info("El prospecto se ha creado correctamente", { position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000 });
            history.push(`/prospecto/${response.data.prospectoId}`)            
        } catch (err) {
            setErrors({ newpost: err.response.data.message });
        }
        
    }


    

    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col sm="12" lg={{ span: 10, offset: 1 }}>
                    <Card body>
                        {errors.newpost && <Alert variant="danger">{errors.auth}</Alert>}

                        <h3>Crear prospecto</h3><hr></hr>
                        <NuevoProspecto2Form
                            textButton="Enviar"
                            errors={errors} onSubmitCallback={createProspecto}></NuevoProspecto2Form>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
