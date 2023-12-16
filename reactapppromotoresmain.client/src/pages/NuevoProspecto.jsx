import { useState } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import NewPostForm from '../components/forms/NuevoProspectoForm';
import validator from 'validator';
import { isObjEmpty } from '../helpers/helpers';
import { useHistory } from 'react-router-dom';
import { estatusProspectos } from '../helpers/estatusProspectos';
import { CREATE_PROSPECTOS_ENDPOINT } from '../helpers/endpoints';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getUserPosts } from '../actions/prospectosActions';

export default function NuevoProspecto() {

    const [errors, setErrors] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();

    const createPost = async ({ title, content, expirationTime, exposureId }) => {
        const errors = {};
        setErrors(errors);

        if (validator.isEmpty(title)) {
            errors.title = "El titulo es obligatorio";
        }

        if (validator.isEmpty(content)) {
            errors.content = "El contenido es obligatorio";
        }

        if (!isObjEmpty(errors)) {
            setErrors(errors);
            return;
        }

        expirationTime = parseInt(exposureId) === estatusProspectos.AUTORIZADO ? 0 : expirationTime;

        try {
            const response = await axios.post(CREATE_PROSPECTOS_ENDPOINT, { title, content, expirationTime, exposureId });
            await dispatch(getUserPosts());
            toast.info("El prospecto se ha creado exitosamente", { position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000 });
            history.push(`/prospectos/${response.data.postId}`)
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
                        <NewPostForm errors={errors} onSubmitCallback={createPost}></NewPostForm>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
