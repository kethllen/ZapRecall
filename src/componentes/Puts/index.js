import Sad from "../../assets/sad.png"

export default function Puts({setInicio, total, setInput}){
    return(
        <div className="conteudo">
            <div className="resultado">
                <div className="template">
                    <span className="tituloFinal">Puts</span>
                    <img className="imgFinal" src={Sad}></img>
                </div>
                <span className="mensagemFinal">Você esqueceu {7-total} flashcards..</span>
                <span className="mensagemFinal">Não desanime! Na próxima você consegue!</span>
                <button className="iniciar" onClick={()=>{
                    setInput("")
                    setInicio(true)}}>
                    <span>Tentar Novamente</span>
                    <ion-icon name="play-forward"></ion-icon>
                </button>
            </div>
        </div>
    );
}