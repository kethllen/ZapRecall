export default function Inicio(){
    return(
        <>
            <div className="logo">
                <ion-icon name="flash-outline"></ion-icon>
                <span>ZapRecall</span>
            </div>
            <input className="imputMeta" placeholder="Sua meta de zaps"></input>
            <button className="iniciar">
                <span>Praticar React</span>
                <ion-icon name="play-forward"></ion-icon>
            </button>
        </>
    );
}