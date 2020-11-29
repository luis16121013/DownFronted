import { FormLogin } from "../components/FormLogin.js"
import { Contact } from "../components/Contac.js"
import { Information } from "../components/Information.js"
import { Inicio } from "./Inicio.js";

export function Router(){

    let {hash} = location;
    const page = document.getElementById("sectionPage")
    if(!hash || hash ==="#/" ||hash === "#/inicio" ){
        page.appendChild(Inicio())
        console.log(location.hash)
    }else if(hash === "#/login"){
        page.appendChild(FormLogin())
        clearLoader()
    }else if(hash === "#/contacto"){
        page.appendChild(Contact())
        clearLoader()
    }else if(hash === "#/informacion"){
        page.appendChild(Information())
        clearLoader()
    }
}

function clearLoader(){
    document.querySelector(".loader").style.display = "none"
}