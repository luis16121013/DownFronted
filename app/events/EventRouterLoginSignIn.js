import { ajax } from '../helpers/ajax.js'
//import  c  from '../helpers/my_api.js'
import  f from "../helpers/crypt.js"

export function EventSingIn(){
	
  btnLogin.addEventListener("click",e=>{
    document.querySelector(".loader").style.display = "block"
    e.preventDefault()

    let infoPOST={
      username:formLoginUname.value,
      password:formLoginPwd.value,
    }

    ajax({
      //url:`http://localhost:3000/api/v1/users`,
      url:"http://localhost:3000/api/v1/login",
      //url:c.API_LOGIN,
      //url:"http://localhost:3000/login",
      met:"post",
      data:infoPOST,
      cbSuccess: singIn,
    })
  })

}

/*
 * response api =>
 * {status,data,message}
*/
const singIn=(data)=>{
  //formLoginPwd - formLoginUname
  if ( isError(data.status) ){
    cleanError(3000)
    document.querySelector(".loader").style.display = "none"
    return
  }
  const e = f.ENCRYPT(data.data.role)
  localStorage.setItem("authentication", e)
  window.location.href="#/app/"+data.data.role
}


const isError= statusError =>{
  if ( statusError == "401" ){
    document.querySelector(".ErrorEventLogin").style.display = "block"
    return true
  }
  return false
}

function cleanError(t){
  setTimeout(()=>{
    document.querySelector(".ErrorEventLogin").style.display = "none"
  },t)
}
