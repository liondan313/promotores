import PropTypes from 'prop-types';
import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Star'; // Importa el ícono de eliminación de Material-UI
import '../../css/MostrarListado.css';
import { estatusProspectos } from '../../helpers/estatusProspectos';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tipoUsuario } from '../../helpers/tipoUsuario';
import { useHistory } from 'react-router-dom';

function ListadoProspectoVirtual({ datos }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const tipoUser = useSelector(state => state.auth.tipoUser);
    const history = useHistory();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const evaluarOpcion = (id) => {
        
        history.push(`/evaluarprospecto/${id}`);
        
    };

    return (
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>ID</strong></TableCell>
                            <TableCell><strong>Nombre</strong></TableCell>
                            <TableCell><strong>Primer Apellido</strong></TableCell>
                            <TableCell><strong>Segundo Apellido</strong></TableCell>
                            <TableCell><strong>Estatus</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(datos) && datos.slice(startIndex, endIndex).map((dato) => (
                            <TableRow key={dato.id}>
                                <TableCell>{dato.id}</TableCell>
                                <TableCell>{dato.nombre}</TableCell>
                                <TableCell>{dato.primer_apellido || dato.primerApellido}</TableCell>
                                <TableCell>{dato.segundo_apellido || dato.segundoApellido}</TableCell>
                                <TableCell>

                                    {dato.estatusprospecto_id === estatusProspectos.AUTORIZADO ? "AUTORIZADO" :                                         
                                        dato.estatusprospecto_id === estatusProspectos.RECHAZADO ? "RECHAZADO" :
                                                "ENVIADO"
                                     }
                                    
                                </TableCell>
                                <TableCell>

                                    {loggedIn && tipoUser === tipoUsuario.SUPERVISOR && 
                                        <Button
                                            variant="outlined"
                                            color="blue"
                                            startIcon={<DeleteIcon />}
                                            onClick={() => evaluarOpcion(dato.prospectoId || dato.prospecto_id)}
                                        >
                                            Evaluar
                                        </Button>
                                    }

                                    {loggedIn && tipoUser === tipoUsuario.PROMOTOR && 
                                        <Link to={`/prospecto/${dato.prospecto_id||dato.prospectoId}`}>VER INF</Link>}
                                    


                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={Array.isArray(datos) && datos.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
}


ListadoProspectoVirtual.propTypes = {
    datos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            primerApellido: PropTypes.string.isRequired,
            segundoApellido: PropTypes.string.isRequired,
            calle: PropTypes.string.isRequired,
            /*numero: PropTypes.string.isRequired,
            colonia: PropTypes.string.isRequired,
            codigoPostal: PropTypes.string.isRequired,
            telefono: PropTypes.string.isRequired,
            rfc: PropTypes.string.isRequired,
            idDocumento: PropTypes.number.isRequired,*/
                        
        })
    ).isRequired,
};

export default ListadoProspectoVirtual;
