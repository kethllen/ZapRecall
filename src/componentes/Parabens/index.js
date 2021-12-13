import Party from "../../assets/party.png"

export default function Parabens({setInicio, setFim, setInput, setTotal}){
    return(
        <div className="conteudo">
            <div className="resultado">
                <div className="template">
                    <span className="tituloFinal">PARABÉNS!</span>
                    <img className="imgFinal" src={Party}></img>
                </div>
                <span className="mensagemFinal">Você não esqueceu de nenhum flashcard!</span>
                <button className="iniciar" onClick={()=> {
                    setInput("")
                    setTotal(0)
                    setFim(false)
                    setInicio(true)}}>
                    <span>Tentar Novamente</span>
                    <ion-icon name="play-forward"></ion-icon>
                </button>
            </div>
        </div>
    );
}