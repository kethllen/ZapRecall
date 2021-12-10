
import Inicio from "./inicio";
import Cards from "./cards"

export default function Corpo({inicio, setInicio}){
    return(
        inicio ? <Inicio inicio={inicio} setInicio={setInicio}/> : <Cards/>

    );
}
