import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { estatusProspectos } from '../../helpers/estatusProspectos';
import { tipoUsuario } from '../../helpers/tipoUsuario';


export default function SignUpForm({ errors, onSubmitCallback }) {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [tipoUsuarioId, setTipoUsuarioId] = useState("");
    
    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({ email, password, firstName, lastName, tipoUsuarioId });
    }

    return (
        <Form onSubmit={submitForm}>

            <Row>
                <Col md="6" xs="12">
                    <Form.Group control="firstName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="Nombre"
                            isInvalid={errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md="6" xs="12">
                    <Form.Group control="lastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Apellido"
                            isInvalid={errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>


            <Form.Group control="email">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Correo electronico"
                    isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="password">
                <Form.Label>Contrasena</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Contrasena"
                    isInvalid={errors.password}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.password}
                </Form.Control.Feedback>
            </Form.Group>

            <Col md="6" xs="12">
                <Form.Group controlId="estatusUsuarioId">
                    <Form.Label>Tipo de usuario</Form.Label>
                    <div>
                        <Form.Check
                            onChange={e => setTipoUsuarioId(e.target.value)}
                            checked={parseInt(tipoUsuarioId) === tipoUsuario.PROMOTOR}
                            value={tipoUsuario.PROMOTOR}
                            inline
                            label="Promotor"
                            name="tipoUsuarioId"
                            type="radio"
                            required
                        ></Form.Check>

                        <Form.Check
                            onChange={e => setTipoUsuarioId(e.target.value)}
                            checked={parseInt(tipoUsuarioId) === tipoUsuario.SUPERVISOR}
                            value={tipoUsuario.SUPERVISOR}
                            inline
                            label="Supervisor"
                            name="tipoUsuarioId"
                            type="radio"
                            required
                        ></Form.Check>
                    </div>
                    <Form.Control.Feedback type="invalid">
                        {errors.tipoUsuarioId}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>

            <Button variant="primary" type="submit">Crear cuenta</Button>
        </Form>
    )
}
