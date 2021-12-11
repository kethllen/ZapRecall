import { useState } from "react";
import Corpo from "../Corpo";
import Navbar from "../Navbar";



export default function App(){
    const [inicio, setInicio] = useState(true);
    const [fim, setFim] = useState(false);
    return(
            <>
                {inicio ? "" : <Navbar/>}
                <Corpo inicio={inicio} setInicio={setInicio} fim={fim} setFim={setFim}/>
            </>
    );
}