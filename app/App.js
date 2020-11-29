import api from './helpers/my_api.js'
import { Title } from "./components/Title.js"
import { Menu } from "./components/Menu.js"
import { Router } from "./components/Router.js"
import { Loader } from "./components/Loader.js"
import { Section } from "./components/Section.js"

export function App(){
    const $rootID = document.getElementById("rootID");
    $rootID.innerHTML=null
    $rootID.appendChild(Title())
    $rootID.appendChild(Menu())
    $rootID.appendChild(Section())
    $rootID.appendChild(Loader())
    Router()
}