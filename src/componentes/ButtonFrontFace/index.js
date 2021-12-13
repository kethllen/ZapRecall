import Turn from "../../assets/turn.png"

export default function ButtonFrontFace({setquestao}){
    return(
        <button className="virar" data-identifier="arrow" onClick={() => setquestao(false)}>
            <img src={Turn}></img>
        </button>
    );
}