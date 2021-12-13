export default function Status({setResultado}){
    return(
        <div className="status">
            <div className="aprendiAgora" onClick={()=>setResultado(1)}>
                <span>Aprendi</span>
                <span>agora</span>
            </div>
            <div className="naoLembrei" onClick={()=>setResultado(2)}>
                <span>Não</span>
                <span>lembrei</span>
            </div>
            <div className="lembreiComEsforco" onClick={()=>setResultado(3)}>
                <span>Lembrei</span>
                <span>com</span>
                <span>esforço</span>
            </div>
            <div className="zap" onClick={()=>setResultado(4)}>
                <span>Zap!</span>
                </div>
        </div>
    )
}