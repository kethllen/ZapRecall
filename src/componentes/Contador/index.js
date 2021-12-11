export default function Contador({contador, lengthContador}){
    return(
        <div className="contador">{contador+1}/{lengthContador}</div>
    )
}