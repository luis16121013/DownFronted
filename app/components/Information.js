export function Information(){
    const $info = document.createElement("div")
    $info.className = "row"
    $info.appendChild(divColumn("col-12",content()))
    $info.appendChild(divColumn("col-12 col-sm-8 col-md-9 col-lg-10",contentText()))
    $info.appendChild(divColumn("container-fluid col-12 col-sm-4 col-md-3 col-lg-2",contentIMG()))
    return $info
}

function content(){
    const $div = document.createElement("div")
    $div.className = "cardPageInfoTitle"
    $div.innerHTML = `<p class="text-center pt-2">" Centro Especial Stella Maris Puerto Maldonado – Tambopata "</p>`
    return $div
}
function contentText(){
    const $div = document.createElement("div")
    $div.className = "cardPageInfo"
    $div.innerHTML = `<p class="text-center">En la I.E. Centro Especial Stella Maris queremos hallar y evolucionar personas aptas con una elevada autoestima, conocimientos, aptitudes sociales y una sólida aprendizaje académica, moral y emocional para que puedan alcanzar el éxito personal y profesional dentro de una sociedad moderna y cambiante.</p>`
    return $div
}
function contentIMG(){
    const $div = document.createElement("div")
    $div.className = "text-center"
    $div.innerHTML = `<img src="./app/assets/imgs/go2.png" width="150px;">`
    return $div
}

const divColumn=(style,cont)=> {
    const $column = document.createElement("div")
    $column.className = `${style}`
    if(!cont){
        return $column
    }
    $column.appendChild(cont)
    return $column
}



