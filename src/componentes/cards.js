import { useState } from "react";

const cards =[{questao: "O que é JSX?",
               resposta:"Uma extensão de linguagem do JavaScript"},
               {questao: "O React é __",
               resposta:"uma biblioteca JavaScript para construção de interfaces"},
               {questao: "Componentes devem iniciar com __",
               resposta:"letra maiúscula"},
               {questao: "Podemos colocar __ dentro do JSX",
               resposta:"expressões"},
               {questao: "O ReactDOM nos ajuda __",
               resposta:"interagindo com a DOM para colocar componentes React na mesma"},
               {questao: "Usamos o npm para __",
               resposta:"gerenciar os pacotes necessários e suas dependências"},
               {questao: "Usamos props para __",
               resposta:"passar diferentes informações para componentes"},
               {questao: "Usamos estado (state) para __",
               resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}];
               
export default function Cards(){
    const [questao, setquestao] = useState(true);
    const [contador,setcontador] = useState(0);
    return(
        questao ? 
        <Card questao={cards[0].questao} resposta={cards[0].resposta} setquestao={setquestao} classe={"card"}/> : 
        <Card questao={cards[0].questao} resposta={cards[0].resposta} setquestao={setquestao} classe={"card cardVirarBaixo"}/>
    )
}
function Card({questao, resposta, setquestao, classe}){
    return(
        <div className={classe} data-identifier="card">
            <div className="front-face face" data-identifier="front-face" onclick="virarCartaBaixo(this)" >
                <div className="contador">1/8</div>
                <div className="Question" >
                    {questao}
                </div>
                <button className="virar" onClick={() => setquestao(false)}>
                    <ion-icon name="arrow-undo"></ion-icon>
                </button>
            </div>
            <div className="back-face face " data-identifier="back-face" >
                <div className="questao">{questao}</div>
                <div className="contador">1/8</div>
                <div className="resposta" >
                    {resposta}
                </div>
            </div>
    </div>
    )
}

