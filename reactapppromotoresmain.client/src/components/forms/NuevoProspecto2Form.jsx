import { useState } from 'react';

import { Form, Button, Row, Col } from 'react-bootstrap';

export default function NuevoProspecto2Form({ errors, onSubmitCallback, textButton = "Crear Prospecto" }) {

    const [nombre, setNombre] = useState("");
    const [primerApellido, setPrimerApellido] = useState("");
    const [segundoApellido, setSegundoApellido] = useState("");
    const [calle, setCalle] = useState("");
    const [numero, setNumero] = useState("");
    const [colonia, setColonia] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [telefono, setTelefono] = useState("");
    const [rfc, setRfc] = useState("");
    const [estatusProspectoId, setEstatusProspectoId] = useState("1");

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({ nombre, primerApellido, segundoApellido, calle, numero, colonia, codigoPostal, telefono, rfc, estatusProspectoId });
    }

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles([...selectedFiles, ...files]);
    };

    const handleUpload = () => {
        // Aquí puedes enviar el archivo al servicio REST
        // Puedes utilizar la función fetch u otras bibliotecas como axios.

        // Ejemplo de uso de fetch:
        const formData = new FormData();
        selectedFiles.forEach((file, index) => {
            formData.append(`file${index + 1}`, file);
        });

        console.log("Imprimir --> " + formData);

        /*
         fetch('URL_DEL_SERVICIO_REST', {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            // Manejar la respuesta del servicio REST si es necesario
            console.log('Respuesta del servicio REST:', data);
          })
          .catch(error => {
            console.error('Error al enviar los archivos:', error);
          });
            */
    };

    return (

        

        <Form onSubmit={submitForm}>
            
            <Row>
                <Col md="5" xs="12">
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
                </Col>
                <Col md="3" xs="12">
                    <Form.Group control="primerApellido">
                        <Form.Label>Primer apellido</Form.Label>
                        <Form.Control
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
                        <Form.Label>Número</Form.Label>
                        <Form.Control
                            type="text"
                            value={numero}
                            onChange={e => setNumero(e.target.value)}
                            placeholder="Número"
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
                            type="text"
                            value={colonia}
                            onChange={e => setColonia(e.target.value)}
                            placeholder="Colonia"
                            isInvalid={errors.colonia}
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


            <Form>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Seleccionar documentos</Form.Label>
                    <Form.Control type="file" multiple onChange={handleFileChange} />
                </Form.Group>

                {/*<Button variant="primary" onClick={handleUpload}>
                    Cargar documentos
                </Button>
                */}

            </Form>


            <br>
            </br>

            <Button variant="primary" type="submit">{textButton}</Button>
        </Form>
    )
}
