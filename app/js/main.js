const apiURL = 'https://api-down-go.herokuapp.com/api'
const apiRegister = apiURL + '/v1/register'
const apiLogin = apiURL + '/v1/login'

const user1 = 'luis'
const token1 = 'el token'
const wsURL = `ruta?nick=user1&token=`

const renderT = new TemplateSPA()
const service = new ServiceApi()

const loadPage = () =>{
	if (localStorage.getItem("role") === null){
		renderT.Login()
		loadEvents()
	}else{
		renderT.Template(localStorage.getItem("role"));
		loadEvents()
	}
}

loadPage()

/*const ws = new WebSocket(wsURL)
ws.onopen =()=>{ console.log("conectado a ws") }
ws.onerror = error => { console.log(error) }
ws.onmessage = message => { console.log(message) }
*/
