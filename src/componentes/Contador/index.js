export default function Contador({contador, lengthContador}){
    return(
        <div className="contador" data-identifier="counter">{contador+1}/{lengthContador}</div>
    )
}