import PropTypes from 'prop-types';

function ListadoProspectoVirtual({ datos }) {
    return (
        <div>
            <p>Hello world!</p>
            MOSTRAR LISTADO

            {Array.isArray(datos) && datos.map((item) => (
                <div key={item.id}>
                    <p>ID: {item.id}</p>
                    <p>Nombre: {item.nombre}</p>
                    <p>Primer Apellido 22: {item.primerApellido}</p>
                </div>
            ))}

        </div>
    );
}

ListadoProspectoVirtual.propTypes = {
    datos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            primerApellido: PropTypes.string.isRequired,
            // Otros PropTypes para las propiedades adicionales de tu objeto 'datos'
        })
    ).isRequired,
};

export default ListadoProspectoVirtual;
