import {useState} from 'react'

export default function Inicio({inicio, setInicio}){
    return(
        <div className="conteudo">
            <div className="logo">
                <ion-icon name="flash-outline"></ion-icon>
                <span>ZapRecall</span>
            </div>
            <input className="imputMeta" placeholder="Sua meta de zaps"></input>
            <button className="iniciar" onClick={()=> setInicio(false)}>
                <span>Praticar React</span>
                <ion-icon name="play-forward"></ion-icon>
            </button>
        </div>
    );
    
}
