import Party from "../../assets/party.png"

export default function Parabens({setInicio, input, setInput}){
    return(
        <div className="conteudo">
            <div className="resultado">
                <div className="template">
                    <span className="tituloFinal">Parabens</span>
                    <img className="imgFinal" src={Party}></img>
                </div>
                <span className="mensagemFinal">Você não esqueceu de nenhum flashcard!</span>
                <button className="iniciar" onClick={()=> {
                    setInput("")
                    setInicio(true)}}>
                    <span>Tentar Novamente</span>
                    <ion-icon name="play-forward"></ion-icon>
                </button>
            </div>
        </div>
    );
}