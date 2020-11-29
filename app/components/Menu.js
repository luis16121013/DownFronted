export function Menu(){
    const $menu = document.createElement("div")
    $menu.className = "row mt-4"
    $menu.appendChild(divColumn(menuOption("Inicio","/inicio")))
    $menu.appendChild(divColumn(menuOption("Contacto","/contacto")))
    $menu.appendChild(divColumn(menuOption("Inform.","/informacion")))
    $menu.appendChild(divColumn(menuOption("Login","/login")))
    return $menu
}

function divColumn(classDiv){
    const $divColumn = document.createElement("div")
    $divColumn.className= "col-6 col-sm-3 text-center mt-2"
    $divColumn.appendChild(classDiv)
    return $divColumn
}

function menuOption(text,route){
    const $a = document.createElement("a")
    $a.className = "menuOption TitlePage"
    $a.href=`#${route}`
    $a.innerHTML = `<strong>${text}</strong>`
    return $a
}