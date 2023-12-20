import { useState } from 'react';

import { Form, Button, Row, Col } from 'react-bootstrap';
import SalirProspectoButton from '../prospectos/Buttons/SalirProspectoButton';
import { estatusProspectos } from '../../helpers/estatusProspectos';

import { tipoUsuario } from '../../helpers/tipoUsuario';

import { useSelector } from 'react-redux';


export default function NuevoProspecto2Form({ errors, onSubmitCallback, pNombre, pPrimerApellido, pSegundoApellido, pCalle, pNumero, pColonia, pCodigoPostal, pTelefono, pRfc, pEstatusProspectoId="1", readOnlyMode, textButton = "Crear Prospecto", pObservaciones="" }) {

    const [nombre, setNombre] = useState(pNombre);
    const [primerApellido, setPrimerApellido] = useState(pPrimerApellido);
    const [segundoApellido, setSegundoApellido] = useState(pSegundoApellido);
    const [calle, setCalle] = useState(pCalle);
    const [numero, setNumero] = useState(pNumero);
    const [colonia, setColonia] = useState(pColonia);
    const [codigoPostal, setCodigoPostal] = useState(pCodigoPostal);
    const [telefono, setTelefono] = useState(pTelefono);
    const [rfc, setRfc] = useState(pRfc);
    const [observaciones, setObservaciones] = useState(pObservaciones);
    const [estatusProspectoId, setEstatusProspectoId] = useState(pEstatusProspectoId);


    const tipoUser = useSelector(state => state.auth.tipoUser);

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({ nombre, primerApellido, segundoApellido, calle, numero, colonia, codigoPostal, telefono, rfc, estatusProspectoId, observaciones, selectedFiles });
    }

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        const files = event.target.files;
        const updatedFiles = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            // Asignar un nombre al archivo, por ejemplo, usando la marca de tiempo actual
            const fileName = `${Date.now()}_${file.name}`;
            updatedFiles.push({ file, fileName });
        }

        setSelectedFiles(updatedFiles);
    };


    return (
        <Form onSubmit={submitForm}>            
            <Row>
                <Col md="5" xs="12">
                    <Form.Group control="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            readOnly={readOnlyMode}
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
                </Col>
                <Col md="3" xs="12">
                    <Form.Group control="primerApellido">
                        <Form.Label>Primer apellido</Form.Label>
                        <Form.Control
                            readOnly={readOnlyMode}
                            type="text"
                            value={primerApellido}
                            onChange={e => setPrimerApellido(e.target.value)}
                            placeholder="Primer apellido"
                            isInvalid={errors.primerApellido}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.primerApellido}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md="3" xs="12">
                    <Form.Group control="segundoApellido">
                        <Form.Label>Segundo apellido</Form.Label>
                        <Form.Control
                            readOnly={readOnlyMode}
                            type="text"
                            value={segundoApellido}
                            onChange={e => setSegundoApellido(e.target.value)}
                            placeholder="Segundo apellido"
                            isInvalid={errors.segundoApellido}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.segundoApellido}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>

                <Col md="5" xs="12">
                    <Form.Group control="calle">
                        <Form.Label>Calle</Form.Label>
                        <Form.Control
                            readOnly={readOnlyMode}
                            type="text"
                            value={calle}
                            onChange={e => setCalle(e.target.value)}
                            placeholder="Calle"
                            isInvalid={errors.calle}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.calle}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md="5" xs="12">
                    <Form.Group control="numero">
                        <Form.Label>Numero</Form.Label>
                        <Form.Control
                            readOnly={readOnlyMode}
                            type="text"
                            value={numero}
                            onChange={e => setNumero(e.target.value)}
                            placeholder="Numero"
                            isInvalid={errors.numero}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.numero}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md="5" xs="12">
                    <Form.Group control="colonia">
                        <Form.Label>Colonia</Form.Label>
                        <Form.Control
                            readOnly={readOnlyMode}
                            type="text"
                            value={colonia}
                            onChange={e => setColonia(e.target.value)}
                            placeholder="Colonia"
                            isInvalid={errors.colonia}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.colonia}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col md="5" xs="12">
                    <Form.Group control="codigoPostal">
                        <Form.Label>Codigo postal</Form.Label>
                        <Form.Control
                            readOnly={readOnlyMode}
                            type="text"
                            value={codigoPostal}
                            onChange={e => setCodigoPostal(e.target.value)}
                            placeholder="Codigo postal"
                            isInvalid={errors.codigoPostal}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.codigoPostal}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

            </Row>

            <Form.Group control="telefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                    readOnly={readOnlyMode}
                    type="text"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                    placeholder="Telefono"
                    isInvalid={errors.telefono}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.telefono}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="rfc">
                <Form.Label>Rfc</Form.Label>
                <Form.Control
                    readOnly={readOnlyMode}
                    type="text"
                    value={rfc}
                    onChange={e => setRfc(e.target.value)}
                    placeholder="Rfc"
                    isInvalid={errors.rfc}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.rfc}
                </Form.Control.Feedback>
            </Form.Group>


            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Seleccionar documentos</Form.Label>
                <Form.Control type="file" multiple onChange={handleFileChange} />
            </Form.Group>

            <ul>
                {selectedFiles.map((selectedFile, index) => (
                    <li key={index}>{selectedFile.fileName}</li>
                ))}
            </ul>

            {tipoUser === tipoUsuario.SUPERVISOR && 
                <div>
                    <Row>
                    <Col md="6" xs="12">
                            <Form.Group controlId="estatusProspectoId">
                                <Form.Label>Tipo de evaluacion</Form.Label>
                                <div>
                                    <Form.Check 
                                        onChange={e => setEstatusProspectoId(e.target.value)}
                                        checked={parseInt(estatusProspectoId) === estatusProspectos.AUTORIZADO}
                                        value={estatusProspectos.AUTORIZADO}
                                        inline
                                        label="Autorizado"
                                        name="estatusProspectoId"
                                        type="radio"
                                        required
                                    ></Form.Check>

                                    <Form.Check 
                                        onChange={e => setEstatusProspectoId(e.target.value)}
                                        checked={parseInt(estatusProspectoId) === estatusProspectos.RECHAZADO}
                                        value={estatusProspectos.RECHAZADO}
                                        inline
                                        label="Rechazado"
                                        name="estatusProspectoId"
                                        type="radio"
                                        required
                                    ></Form.Check>
                                </div>

                                <Form.Control.Feedback type="invalid">
                                    {errors.estatusProspectoIdRadio }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group control="observaciones">
                        <Form.Label>Observaciones</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={10}
                            value={observaciones}
                            onChange={e => setObservaciones(e.target.value)}
                            isInvalid={errors.observaciones}                            
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.observaciones}
                        </Form.Control.Feedback>
                        </Form.Group>
                </div>
            }
            <br>
            </br>

            <Row>
                <Col md="2" xs="2">
                    <Button variant="primary" type="submit">{textButton}</Button>
                </Col>
                <Col md="2" xs="2">
                    <SalirProspectoButton postId={nombre} title={nombre}></SalirProspectoButton>
                </Col>
            </Row>
        </Form>
    )
}
