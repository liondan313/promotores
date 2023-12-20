import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import validator from 'validator';
import { isObjEmpty } from '../helpers/helpers';
import { useHistory, useParams } from 'react-router-dom';
//import { estatusProspectos } from '../helpers/estatusProspectos';
import { PROSPECTOS_DETAILS_ENDPOINT } from '../helpers/endpoints';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getUserPosts } from '../actions/prospectosActions';
import NuevoProspecto2Form from '../components/forms/NuevoProspecto2Form';

export default function ProspectoDetalle() {

    const [errors, setErrors] = useState({});
    const history = useHistory();
    const readOnlyMode = true; 

    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`${PROSPECTOS_DETAILS_ENDPOINT}/${id}`).then(response => {
            setPost(response.data);
        }).catch(e => {
            history.push('/');
        })
    }, [id, history]);

    
        
    const createProspecto = async () => {
        const errors = {};
        setErrors(errors);

        history.push(`/`)

    }




    return (

        <Container className="mt-5 mb-5">
            {post && (
                <Row>
                    <Col sm="12" lg={{ span: 10, offset: 1 }}>
                        <Card body>
                            {errors.newpost && <Alert variant="danger">{errors.auth}</Alert>}

                            <h3>Ver prospecto</h3><hr></hr>
                            <NuevoProspecto2Form
                                readOnlyMode={readOnlyMode}
                                pNombre={post.nombre}
                                pPrimerApellido={post.primerApellido}
                                pSegundoApellido={post.segundoApellido}
                                pCalle={post.calle}
                                pNumero={post.numero}
                                pColonia={post.colonia}
                                pCodigoPostal={post.codigoPostal}
                                pTelefono={post.telefono}
                                pRfc={post.rfc}
                                textButton="Regresar"
                                errors={errors} onSubmitCallback={createProspecto}></NuevoProspecto2Form>

                            

                        </Card>
                    </Col>
                </Row>
                )
            }
        </Container>
    )
}
