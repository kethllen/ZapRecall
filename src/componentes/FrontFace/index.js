import Contador from "../Contador"
import Questao from "../Questao"
import ButtonFrontFace from "../ButtonFrontFace"

export default function FrontFace({questao,setquestao, contador, lengthContador}){
    
    return (<div className="front-face face" data-identifier="front-face" onclick="virarCartaBaixo(this)" >
                <Contador contador={contador} lengthContador={lengthContador}/>
                <Questao questao={questao}/>
                <ButtonFrontFace setquestao={setquestao}/>
            </div>);
}