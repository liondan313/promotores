import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { estatusProspectos } from '../../helpers/estatusProspectos';

export default function NuevoProspectoForm({ errors, onSubmitCallback, pNombre = "", pPrimerApellido = "", pSegundoApellido = "", pCalle = "", pNumero = "", pColonia = "", pCodigoPostal = "", pTelefono = "", pRfc = "", pEstatusProspectoId = estatusProspectos.ENVIADO, textButton = "Crear Prospecto" }) {

    const [nombre, setNombre] = useState(pNombre);
    /*const [primerApellido, setPrimerApellido] = useState(pPrimerApellido);
    const [segundoApellido, setsegundoApellido] = useState(pSegundoApellido);
    const [calle, setCalle] = useState(pCalle);
    const [numero, setNumero] = useState(pNumero);
    const [colonia, setColonia] = useState(pColonia);
    const [codigoPostal, setCodigoPostal] = useState(pCodigoPostal);
    const [telefono, setTelefono] = useState(pTelefono);
    const [rfc, setRfc] = useState(pRfc);
    const [estatusProspectoId, setEstatusProspectoId] = useState(pEstatusProspectoId);*/
    

    
    const submitForm = (e) => {        
        e.preventDefault();
        onSubmitCallback({ nombre });
        //onSubmitCallback({ nombre, primerApellido, segundoApellido, calle, numero, colonia, codigoPostal, telefono, rfc, estatusProspectoId });
    }

    return (
        <Form onSubmit={submitForm}>

            <Form.Group control="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    placeholder="Nombre"
                    isInvalid={errors.nombre}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.nombre}
                </Form.Control.Feedback>
            </Form.Group>

            {/*
            <Form.Group control="primerApellido">
                <Form.Label>Primer apellido</Form.Label>
                <Form.Control
                    type="text"
                    value={primerApellido}
                    onChange={e => setPrimerApellido(e.target.value)}
                    placeholder="e.g. Lopez"
                    isInvalid={errors.primerApellido}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.primerApellido}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="segundoApellido">
                <Form.Label>Segundo apellido</Form.Label>
                <Form.Control
                    type="text"
                    value={segundoApellido}
                    onChange={e => setsegundoApellido(e.target.value)}
                    placeholder="e.g. Cardenas"
                    isInvalid={errors.segundoApellido}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.segundoApellido}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="calle">
                <Form.Label>Calle</Form.Label>
                <Form.Control
                    type="text"
                    value={calle}
                    onChange={e => setCalle(e.target.value)}
                    placeholder="e.g. Main Street"
                    isInvalid={errors.calle}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.calle}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="numero">
                <Form.Label>Numero</Form.Label>
                <Form.Control
                    type="text"
                    value={numero}
                    onChange={e => setNumero(e.target.value)}
                    placeholder="e.g. 1300"
                    isInvalid={errors.numero}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.numero}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="numero">
                <Form.Label>Numero</Form.Label>
                <Form.Control
                    type="text"
                    value={numero}
                    onChange={e => setNumero(e.target.value)}
                    placeholder="e.g. 1300"
                    isInvalid={errors.numero}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.numero}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="colonia">
                <Form.Label>Colonia</Form.Label>
                <Form.Control
                    type="text"
                    value={colonia}
                    onChange={e => setColonia(e.target.value)}
                    placeholder="e.g. benito juarez"
                    isInvalid={errors.colonia}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.colonia}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="codigoPostal">
                <Form.Label>Código postal</Form.Label>
                <Form.Control
                    type="text"
                    value={codigoPostal}
                    onChange={e => setCodigoPostal(e.target.value)}
                    placeholder="e.g. 8083"
                    isInvalid={errors.codigoPostal}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.codigoPostal}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="telefono">
                <Form.Label>Télefono</Form.Label>
                <Form.Control
                    type="text"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                    placeholder="e.g. 7697867"
                    isInvalid={errors.telefono}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.telefono}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="rfc">
                <Form.Label>Rfc</Form.Label>
                <Form.Control
                    type="text"
                    value={rfc}
                    onChange={e => setRfc(e.target.value)}
                    placeholder="e.g. LACJ830818BC4"
                    isInvalid={errors.rfc}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.rfc}
                </Form.Control.Feedback>
            </Form.Group>

            */}

            {/*
            <Row>
                <Col md="6" xs="12">
                    <Form.Group controlId="expirationTime">
                        <Form.Label>Tiempo de expiracion</Form.Label>
                        <Form.Control
                            disabled={parseInt(exposureId) === estatusProspectos.AUTORIZADO}
                            as="select" value={expirationTime}
                            onChange={e => setExpirationTime(e.target.value)}
                        >
                            <option value="30">30 minutos</option>
                            <option value="60">1 hora</option>
                            <option value="120">2 horas</option>
                            <option value="360">6 horas</option>
                            <option value="720">12 horas</option>
                            <option value="1440">1 dia</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {errors.expirationTime}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col md="6" xs="12">
                    <Form.Group controlId="exposureId">
                        <Form.Label>Tipo de post</Form.Label>
                        <div>
                            <Form.Check
                                onChange={e => setExposureId(e.target.value)}
                                checked={parseInt(exposureId) === estatusProspectos.AUTORIZADO}
                                value={estatusProspectos.AUTORIZADO}
                                inline
                                label="Autorizado"
                                name="exposureId"
                                type="radio"
                            ></Form.Check>

                            <Form.Check
                                onChange={e => setExposureId(e.target.value)}
                                checked={parseInt(exposureId) === estatusProspectos.RECHAZADO}
                                value={estatusProspectos.RECHAZADO}
                                inline
                                label="Rechazado"
                                name="exposureId"
                                type="radio"
                            ></Form.Check>
                        </div>
                        <Form.Control.Feedback type="invalid">
                            {errors.expirationTime}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            


            <Form.Group control="content">
                <Form.Label>Contenido</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={10}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    isInvalid={errors.content}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.content}
                </Form.Control.Feedback>
            </Form.Group>

            */}

            <Button variant="primary" type="submit">{textButton}</Button>

            

        </Form>
    )
}
