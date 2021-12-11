import { useState } from "react";
import Card from "../Card"

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
               
export default function Cards({setFim, total, setTotal}){
    const [questao, setquestao] = useState(true);
    const [resultado, setResultado] =useState(0);
    const [contador,setcontador] = useState(0);

    return(
        questao ? 
        <Card questao={cards[contador].questao} resposta={cards[contador].resposta} setquestao={setquestao} classe={"card"} contador={contador} lengthContador={cards.length} setTotal={setTotal} total={total}/> : 
        resultado==0?
        <Card questao={cards[contador].questao} resposta={cards[contador].resposta} setquestao={setquestao} classe={"card cardVirarBaixo"} contador={contador} lengthContador={cards.length} setResultado={setResultado} resultado={resultado} setcontador={setcontador} setFim={setFim} setTotal={setTotal} total={total}/>:
        resultado==1?
        <Card questao={cards[contador].questao} resposta={cards[contador].resposta} setquestao={setquestao} classe={"card cardVirarBaixo bordaAprendiAgora"} contador={contador} lengthContador={cards.length} setResultado={setResultado} resultado={resultado} setcontador={setcontador} setFim={setFim} setTotal={setTotal} total={total}/>:
        resultado==2?
        <Card questao={cards[contador].questao} resposta={cards[contador].resposta} setquestao={setquestao} classe={"card cardVirarBaixo bordaNaoLembrei"} contador={contador} lengthContador={cards.length} setResultado={setResultado} resultado={resultado} setcontador={setcontador} setFim={setFim} setTotal={setTotal} total={total}/>:
        resultado==3?
        <Card questao={cards[contador].questao} resposta={cards[contador].resposta} setquestao={setquestao} classe={"card cardVirarBaixo bordaLembreiComEsforco"} contador={contador} lengthContador={cards.length} setResultado={setResultado} resultado={resultado} setcontador={setcontador} setFim={setFim} setTotal={setTotal} total={total}/>:
        <Card questao={cards[contador].questao} resposta={cards[contador].resposta} setquestao={setquestao} classe={"card cardVirarBaixo bordaZap"} contador={contador} lengthContador={cards.length} setResultado={setResultado} resultado={resultado} setcontador={setcontador} setFim={setFim} setTotal={setTotal} total={total}/>
    )
}