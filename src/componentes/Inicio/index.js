import {useState} from 'react'
import Logo from "../../assets/logo.png"

export default function Inicio({setInicio, input, setInput}){
    return(
        <div className="conteudo">
            <div className="logo">
                <img src={Logo} alt="logo"></img>
            </div>
            <input className="imputMeta" placeholder="Sua meta de zaps" 
             type="text" onChange={(e)=> setInput(e.target.value)} value={input}></input>
            <button className="iniciar" onClick={()=> setInicio(false)}>
                <span>Praticar React</span>
                <ion-icon name="play-forward"></ion-icon>
            </button>
        </div>
    );
    
}
