import axios from 'axios';
import { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
//import Prospecto from '../components/prospectos/Prospecto';
import NoProspecto from '../components/utils/NoProspecto';
import { PUBLIC_PROSPECTOS_ENDPOINT } from '../helpers/endpoints';
import Placeholder from '../components/utils/Placeholder';
import ListadoProspectoVirtual from '../components/prospectos/ListadoProspectoVirtual';
import { useSelector } from 'react-redux';

export default function Prospectos() {

    const [prospectos, setProspectos] = useState([]);
    const [fetching, setFetching] = useState(true);
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const userIn = useSelector(state => state.auth.tipoUser);

    useEffect(() => {

        //alert(loggedIn);

        //const keys = Object.keys(userIn);

        //alert(userIn);
        // Iterar sobre las claves
        /*for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = userIn[key];
            console.log(`Clave: ${key}, Valor: ${value}`);
        }*/

        axios.get(PUBLIC_PROSPECTOS_ENDPOINT).then(response => {

            console.log(response)
            setProspectos(response);
            setFetching(false);
            
        }).catch(e => {
            console.log(e);
            setFetching(false);
        })
        
    }, []);    

    /*

    const [data, setData] = useState([]);


    useEffect(() => {

        setFetching(false);

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/prospectos/last');

                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                console.log("Obtener un json ---> " + response.json);
                const jsonData = await response.json();
                setProspectos(jsonData);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    
    */
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
