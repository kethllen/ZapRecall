import "./style.css"
import LogoMini from "../../assets/logo-mini.png"

export default function Navbar(){

    return(
        <div className="logoNav">
            <img src={LogoMini} alt="logo"></img>
        </div>
    );
}