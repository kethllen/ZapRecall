import Turn from "../../assets/turn.png"

export default function ButtonBackFace({setquestao, setcontador, contador, setResultado,lengthContador, setFim,setTotal, total, resultado}){
    return(
        <button className="virar" data-identifier="arrow" onClick={() => {
           if(contador+1 < lengthContador){
                console.clear();
                console.log(total)
                if(resultado==3 || resultado==4){
                    setTotal(total+1); 
               }
                console.log("lengthContador", lengthContador)
                console.log("Contador", contador)
                setcontador(contador+1)
                setquestao(true)
                setResultado(0)
            }else{
                setFim(true)
           }
        }}>
            <img src={Turn}></img>
        </button>
    );
}