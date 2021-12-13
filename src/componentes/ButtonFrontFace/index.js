export default function ButtonFrontFace({setquestao}){
    return(
        <button className="virar" data-identifier="arrow" onClick={() => setquestao(false)}>
            <ion-icon name="arrow-undo"></ion-icon>
        </button>
    );
}