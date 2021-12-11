import Questao from "../Questao"
import Contador from "../Contador"
import Resposta  from "../Resposta"
import Status from "../Status"
import ButtonBackFace from "../ButtonBackFace"

export default function BackFace({questao, resposta, contador, lengthContador, setResultado, resultado, setcontador, setquestao, setFim, setTotal, total}){

    return(
       <div className="back-face face " data-identifier="back-face" >
           <Questao questao={questao}/>
           <Contador contador={contador} lengthContador={lengthContador}/>
           <Resposta resposta={resposta}/>
           {resultado == 0 ? <Status setResultado={setResultado}/>:
           <ButtonBackFace setResultado={setResultado} contador={contador} setquestao={setquestao} setcontador={setcontador} lengthContador={lengthContador} setFim={setFim} setTotal={setTotal} total={total} resultado={resultado}/>}    
       </div>
    )
   }