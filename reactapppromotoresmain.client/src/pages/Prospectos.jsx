import axios from 'axios';
import { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import NoProspecto from '../components/utils/NoProspecto';
import { PUBLIC_PROSPECTOS_ENDPOINT } from '../helpers/endpoints';
import Placeholder from '../components/utils/Placeholder';
import ListadoProspectoVirtual from '../components/prospectos/ListadoProspectoVirtual';

export default function Prospectos() {

    const [prospectos, setProspectos] = useState([]);
    const [fetching, setFetching] = useState(true);
    
    useEffect(() => {
        
        axios.get(PUBLIC_PROSPECTOS_ENDPOINT).then(response => {

            console.log(response)
            setProspectos(response);
            setFetching(false);
            
        }).catch(e => {
            console.log(e);
            setFetching(false);
        })
        
    }, []);    

    
    return (
        <div>
            <Jumbotron>
                <h1>Ultimos prospectos publicados</h1>
            </Jumbotron>
            
            {fetching && <Placeholder></Placeholder>}
            {!fetching && prospectos.length === 0 && <NoProspecto text="No hay prospectos disponibles"></NoProspecto>}
            <div>
                {prospectos && prospectos.length != 0 && <ListadoProspectoVirtual datos={prospectos.data} />}
            </div>


            {/*prospectos.map((item) => (
                <div key={item.id}>
                    <p>ID: {item.id}</p>
                    <p>Nombre: {item.nombre}</p>
                    <p>Primer Apellido: {item.primerApellido}</p>
                </div>
            ))*/}

        </div>
    )
}
