export function Contact(){
    const $divContact = document.createElement("div")
    $divContact.classList="container-fluid mt-5"

    const $divWellcome = divRow()
    const $divEmail = divRow()
    const $divDirection = divRow()

    // MESSAGE WELLCOME-CONTACT
    $divWellcome.appendChild(divColumn("col-3 col-sm-3 col-md-2  col-lg-1 ",contIMG("p")))
    $divWellcome.appendChild(divColumn("col-9 col-sm-9 col-md-10 col-lg-11",contTex(messageContact())))

    // MESSAGE CONTACT
    const divResponsive = "col-12 col-sm-6 col-md-4 mt-2"
    $divEmail.appendChild(divColumn(divResponsive,cardEmail("Email")))
    $divEmail.appendChild(divColumn(divResponsive,cardPhone("Teléfono")))
    $divEmail.appendChild(divColumn(divResponsive,cardDirection("Dirección")))

    $divContact.appendChild($divWellcome)
    $divContact.appendChild($divEmail)
    return $divContact
}
//CONTENT CONTACT CARDS
function cardEmail(txt){
    const $card = document.createElement("div")
    $card.className = "mt-2 mb-0 pb-0 cardContact"
    $card.appendChild(cardTxt(txt))
    $card.appendChild(a_CARD(messageContactEmail()))
    return $card
}
function cardPhone(txt){
    const $card = document.createElement("div")
    $card.className = "mt-2 mb-0 pb-0 cardContact"
    $card.appendChild(cardTxt(txt))
    $card.appendChild(a_CARD(messageContactPhone()))
    return $card
}
function cardDirection(txt){
    const $card = document.createElement("div")
    $card.className = "mt-2 mb-0 pb-0 cardContact"
    $card.appendChild(cardTxt(txt))
    $card.appendChild(a_CARD(messageContactDirection()))
    return $card
}


//ETIQUE A hrf
function a_CARD(text){
    const $a = document.createElement("a")
    $a.style = "margin:20px 15px; font-family:'Pacifico'"
    $a.innerHTML = text 
    return $a
}
function cardTxt(text){
    const $contText = document.createElement("p")
    $contText.className = "text-center text-white pt-1 pb-0 mb-0"
    $contText.style = `font-family:'Pacifico';  font-size: 22px; text`
    $contText.innerHTML = `#${text}`
    return $contText
}



//CONTENT TEXT
function contTex(text){
    const $contText = document.createElement("div")
    $contText.className = "bg-success text-white p-3"
    $contText.style = `font-family:'Pacifico'; border-radius:10px; font-size: 22px; border:3px solid black;`
    $contText.innerHTML = `${text}`
    return $contText
}
//CONTENT IMAGE
function contIMG(typeContent){
    const $contenido = document.createElement(`${typeContent}`)
    $contenido.appendChild(img("./app/assets/imgs/go.jpg"))
    $contenido.className = "text-center "
    $contenido.style = "background-color:#ffc50e; border-radius:15px; border: 3px solid #000"
    return $contenido
}

//CREATE IMAGE
function img(info){
    const $image = document.createElement("img")
    $image.src = `${info}`
    $image.style="width:100%;"
    return $image
}

//CREATE ROW GRID
function divRow(){
    const $row = document.createElement("div")
    $row.className="row"
    return $row
}
//CREATE COLUMN GRID
function divColumn(classStyle,divContent){
    const $colum = document.createElement("div")
    $colum.className =`${classStyle}`
    if (!divContent){
        return $colum
    }
    $colum.appendChild(divContent)
    return $colum
}

//CREATE MESSAGE CONTACT
function messageContact(){
    return `
    <h3>Hola!!!</h3>
    <h5>Tu presencia nos alegra,<br> nos entusiasma,<br> nos compromete en la construccion de un mundo mejor.</h5>
    `
}

function messageContactEmail(){
    return `
    <p style="margin:0 10px;padding:0;font-size:18px;">Envianos tu mensaje a los siguientes correos.</p>
    <strong style="font-size:20px; color:#ded750; margin:0 10px;">Correos: </strong>
    <li class="listItemContact">
        <a class="linkContact" href="#/contacto">alguien310599@gmail.com</a><br>
        <a class="linkContact" href="#/contacto">aulavirtual@unamad.edu</a>
    </li>
`;
}
function messageContactPhone(){
    return `
    <p style="margin:0 10px;padding:0;font-size:18px;" >Puedes llamarnos a los siguientes números.</p>
    <strong style="font-size:20px; color:#ded750; margin:0 10px;">Números: </strong>
    <li class="listItemContact">
        <a class="linkContact" href="#/contacto">+051-983298665</a><br>
        <a class="linkContact" href="#/contacto">+051-993126534</a>
    </li>
`;
}
function messageContactDirection(){
    return `
    <p style="margin:0 10px;padding:0;font-size:18px;">Visite nuestra sede</p>
    <strong style="font-size:20px; color:#ded750; margin:0 10px;">Dirección: </strong>
    <li class="listItemContact">
        <a class="linkContact" href="#/contacto">Madre de Dios - Puerto Maldonado - Jiron Moquegua cuadra 11</a>
    </li>
`;
}