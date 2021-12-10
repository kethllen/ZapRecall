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
    const [resultado, setResultado] =useState(0);
    const [contador,setcontador] = useState(0);
    let total=0;
    return(
        questao ? 
        <Card questao={cards[0].questao} resposta={cards[0].resposta} setquestao={setquestao} classe={"card"} contador={contador} lengthContador={cards.length}/> : 
        resultado==0?
        <Card questao={cards[0].questao} resposta={cards[0].resposta} setquestao={setquestao} classe={"card cardVirarBaixo"} contador={contador} lengthContador={cards.length} setResultado={setResultado} resultado={resultado} setcontador={setcontador}/>:
        resultado==1?//borda preta
        <Card questao={cards[0].questao} resposta={cards[0].resposta} setquestao={setquestao} classe={"card cardVirarBaixo bordaAprendiAgora"} contador={contador} lengthContador={cards.length} setResultado={setResultado} resultado={resultado} setcontador={setcontador}/>:
        resultado==2?
        <Card questao={cards[0].questao} resposta={cards[0].resposta} setquestao={setquestao} classe={"card cardVirarBaixo bordaNaoLembrei"} contador={contador} lengthContador={cards.length} setResultado={setResultado} resultado={resultado} setcontador={setcontador}/>:
        resultado==3?
        <Card questao={cards[0].questao} resposta={cards[0].resposta} setquestao={setquestao} classe={"card cardVirarBaixo bordaLembreiComEsforco"} contador={contador} lengthContador={cards.length} setResultado={setResultado} resultado={resultado} setcontador={setcontador}/>:
        <Card questao={cards[0].questao} resposta={cards[0].resposta} setquestao={setquestao} classe={"card cardVirarBaixo bordaZap"} contador={contador} lengthContador={cards.length} setResultado={setResultado} resultado={resultado} setcontador={setcontador}/>
    )
}
function Card({questao, resposta, setquestao, classe, contador, lengthContador, setResultado, resultado}){
    return(
        <div className={classe} data-identifier="card">
            <FrontFace questao={questao} setquestao={setquestao} contador={contador} lengthContador={lengthContador}/>
            <BackFace questao={questao} resposta={resposta} contador={contador} lengthContador={lengthContador} setResultado={setResultado} resultado={resultado}/>
        </div>
    )
}

function FrontFace({questao,setquestao, contador, lengthContador}){
    
    return (<div className="front-face face" data-identifier="front-face" onclick="virarCartaBaixo(this)" >
                <Contador contador={contador} lengthContador={lengthContador}/>
                <Questao questao={questao}/>
                <ButtonFrontFace setquestao={setquestao}/>
            </div>);
}
function Contador({contador, lengthContador}){
    return(
        <div className="contador">{contador+1}/{lengthContador}</div>
    )
}

function Questao({questao}){
    return(
        <div className="questao" >
            {questao}
        </div>
    )
}
function ButtonFrontFace({setquestao}){
    return(
        <button className="virar" onClick={() => setquestao(false)}>
            <ion-icon name="arrow-undo"></ion-icon>
        </button>
    );
}
function ButtonBackFace({setquestao, setcontador, contador}){
    return(
        <button className="virar" onClick={() => {
            setcontador(contador+1)
            setquestao(true)
        }}>
            <ion-icon name="arrow-undo"></ion-icon>
        </button>
    );
}

function BackFace({questao, resposta, contador, lengthContador, setResultado, resultado, setcontador, setquestao}){
 return(
    <div className="back-face face " data-identifier="back-face" >
        <Questao questao={questao}/>
        <Contador contador={contador} lengthContador={lengthContador}/>
        <Resposta resposta={resposta}/>
        {resultado == 0 ? <Status setResultado={setResultado}/>:
        <ButtonBackFace contador={contador} setquestao={setquestao} setcontador={setcontador}/>}    
    </div>
 )
}
function Resposta({resposta}){
    return(
        <div className="resposta" >
            {resposta}
        </div>
    )
}
function Status({setResultado}){
    return(
        <div className="status">
            <div className="aprendiAgora" onClick={()=>setResultado(1)}>
                <span>Aprendi</span>
                <span>agora</span>
            </div>
            <div className="naoLembrei" onClick={()=>setResultado(2)}>
                <span>Não</span>
                <span>lembrei</span>
            </div>
            <div className="lembreiComEsforco" onClick={()=>setResultado(3)}>
                <span>Lembrei</span>
                <span>com</span>
                <span>esforço</span>
            </div>
            <div className="zap" onClick={()=>setResultado(4)}>
                <span>Zap</span>
                </div>
        </div>
    );
}
