import ListadoProspecto from "./ListadoProspecto";


function Prospecto({ prospectos, renderControls }) {

    return (

        <div>            
            <ListadoProspecto prospectos={prospectos} />
        </div>

    );


}

export default Prospecto;