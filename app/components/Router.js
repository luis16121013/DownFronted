import { FormLogin } from "../components/FormLogin.js"
import { Contact } from "../components/Contac.js"
import { Information } from "../components/Information.js"
import { Inicio } from "./Inicio.js";

//events funcs
import { EventSingIn } from "../events/EventRouterLoginSignIn.js"
import  { EventLoginError }  from '../events/EventRouterLoginError.js'
import f from "../helpers/crypt.js"

export async function Router(){

    let {hash} = location;
    const page = document.getElementById("sectionPage")

    const msg = "Usuario o contraseña incorrecto!"
    if(!hash || hash ==="#/" ||hash === "#/inicio" ){
        page.appendChild(Inicio())
        console.log(location.hash)
    }else if(hash === "#/login"){
        page.appendChild(EventLoginError(msg))
        page.appendChild(FormLogin())
        EventSingIn()
        clearError()

    }else if(hash === "#/contacto"){
        page.appendChild(Contact())
    }else if(hash === "#/informacion"){
        page.appendChild(Information())
    }else{
        if(!ExistsLogin()){
            window.location.href="#/login"
            return 
        }
        const menu = document.getElementById("menu-nav")
        menu.innerHTML="<h1>this page render after login</h1>";
        const d = f.DECRYPT(localStorage.getItem("authentication"))
        console.log(d)
    }
    clearLoader()
}

function clearLoader(){
    document.querySelector(".loader").style.display = "none"
}

function clearError(){
    document.querySelector(".ErrorEventLogin").style.display = "none"
}

function ExistsLogin(){
    if ( localStorage.getItem("authentication") != null ){
        return true
    }
    return false
}
