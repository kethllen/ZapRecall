import { useState } from "react";
import Inicio from "../Inicio";
import Cards from "../Cards";
import Parabens from "../Parabens";
import Puts from "../Puts";


export default function Corpo({inicio, setInicio, fim, setFim}){
    const [total, setTotal] =useState(0);
    const [input, setInput] = useState("")

    return(
        inicio ? <Inicio inicio={inicio} setInicio={setInicio} setInput={setInput} input={input}/> : 
        !fim ? <Cards setFim={setFim} total={total} setTotal={setTotal}/>:
        total+1>=input ? <Parabens setInicio={setInicio} input={input} setInput={setInput}/>:
        <Puts total={total} setInicio={setInicio} setInput={setInput}/>
    );
}

