import "./style.css"
import FrontFace from "../FrontFace"
import BackFace from "../BackFace"

export default function Card({questao, resposta, setquestao, classe, contador, lengthContador, setResultado, resultado, setcontador, setFim, setTotal, total}){

    return(
        <div className={classe} data-identifier="flashcard">
            <FrontFace questao={questao} setquestao={setquestao} contador={contador} lengthContador={lengthContador}/>
            <BackFace questao={questao} resposta={resposta} contador={contador} lengthContador={lengthContador} setResultado={setResultado} resultado={resultado} setquestao={setquestao} setcontador={setcontador} setFim={setFim} setTotal={setTotal} total={total}/>
        </div>
    )
}