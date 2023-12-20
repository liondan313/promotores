import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import validator from 'validator';
import { isObjEmpty } from '../helpers/helpers';
import { useHistory, useParams } from 'react-router-dom';
import { UPDATE_PROSPECTOS_ENDPOINT, PROSPECTOS_DETAILS_ENDPOINT } from '../helpers/endpoints';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import NuevoProspecto2Form from '../components/forms/NuevoProspecto2Form';
import { getUserPosts } from '../actions/prospectosActions';
import { estatusProspectos } from '../helpers/estatusProspectos';

export default function EvaluarProspecto() {

    const { id } = useParams();
    const [errors, setErrors] = useState({});
    const [post, setPost] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const readOnlyMode = true; 
    
    useEffect(() => {
        axios.get(`${PROSPECTOS_DETAILS_ENDPOINT}/${id}`).then(response => {
            setPost(response.data);
        }).catch(e => {
            history.push('/');
        })
    }, [id, history]);

    const editPost = async ({ nombre, primerApellido, segundoApellido, calle, numero, colonia, codigoPostal, telefono, rfc, estatusProspectoId, observaciones }) => {
        const errors = {};
        setErrors(errors);


        

        if (validator.isEmpty(nombre)) {
            errors.nombre = "El nombre es obligatorio";
        }
        
        if (validator.isEmpty(estatusProspectoId)) {
            errors.estatusProspectoIdRadio = "El estatus del prospecto es obligatorio";

            if (estatusProspectoId === estatusProspectos.RECHAZADO) {
                if (validator.isEmpty(observaciones)) {                    
                    errors.observaciones = "Las observaciones es obligatoria si se rechaza el prospecto";
                }
            }
        }

        if (!validator.isEmpty(estatusProspectoId)) {            
            if (estatusProspectoId === estatusProspectos.RECHAZADO) {
                if (validator.isEmpty(observaciones)) {
                    alert("hola22");
                    errors.observaciones = "Las observaciones es obligatoria si se rechaza el prospecto";
                }
            }
        }
        

        if (!isObjEmpty(errors)) {
            setErrors(errors);
            return;
        }
        
        try {
            const response = await axios.put(`${UPDATE_PROSPECTOS_ENDPOINT}/${post.prospectoId}`, { nombre, primerApellido, segundoApellido, calle, numero, colonia, codigoPostal, telefono, rfc, estatusProspectoId, observaciones });
            await dispatch(getUserPosts());
            toast.info("El prospecto se ha evaluado correctamente", { position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000 });
            history.push(`/prospecto/${response.data.prospectoId}`)
        } catch (err) {
            setErrors({ editpost: err.response.data.message });
        }

    }

    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col sm="12" lg={{ span: 10, offset: 1 }}>
                    <Card body>
                        {errors.editpost && <Alert variant="danger">{errors.auth}</Alert>}

                        <h3>Evaluar prospecto</h3><hr></hr>
                        {post && 

                            <NuevoProspecto2Form
                                errors={errors}
                                readOnlyMode={readOnlyMode}
                                pNombre={post.nombre}
                                pPrimerApellido={post.primerApellido}
                                pSegundoApellido={post.segundoApellido}
                                pCalle={post.calle}
                                pNumero={post.numero}
                                pColonia={post.colonia}
                                pCodigoPostal={post.codigoPostal}
                                pTelefono={post.telefono}
                                pObservaciones={post.observaciones}
                                pEstatusProspectoId={post.estatusProspectoId}
                                pRfc={post.rfc}
                                textButton="Evaluar"                            
                                onSubmitCallback={editPost}
                            ></NuevoProspecto2Form>

                        
                        }

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
