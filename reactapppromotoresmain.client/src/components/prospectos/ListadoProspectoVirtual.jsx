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
import DeleteIcon from '@material-ui/icons/Delete'; // Importa el ícono de eliminación de Material-UI
import '../../css/MostrarListado.css';
function ListadoProspectoVirtual({ datos }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

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
                            <TableCell><strong>Calle</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(datos) && datos.slice(startIndex, endIndex).map((dato) => (
                            <TableRow key={dato.id}>
                                <TableCell>{dato.id}</TableCell>
                                <TableCell>{dato.primerApellido}</TableCell>
                                <TableCell>{dato.segundoApellido}</TableCell>
                                <TableCell>{dato.calle}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                        //onClick={() => deleteSupplier(dato.id)}
                                    >
                                        Delete
                                    </Button>
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
