
import Inicio from "./inicio";

export default function Corpo({inicio, setInicio}){
    return(
        inicio ? <Inicio inicio={inicio} setInicio={setInicio}/> : ""
    );
}