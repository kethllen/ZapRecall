import { useState } from "react";
import Corpo from "./componentes/corpo";
import Navbar from "./componentes/navbar";


export default function App(){
    const [inicio, setInicio] = useState(true);
    return(
        <div>
            <>
                {inicio ? "" : <Navbar/>}
                <Corpo inicio={inicio} setInicio={setInicio}/>
            </>
        </div>
    );
}