const loadEvents=()=>{
	if (typeof btnExit != 'undefined'){
		btnExit.addEventListener('click', async e=>{
		e.preventDefault()
		localStorage.removeItem('role')
		loadPage()
	//console.log(data)
		})
	}
	if (typeof btnLogin != 'undefined'){
		btnLogin.addEventListener('click', async e=>{
		e.preventDefault()
		let user ={
			username: formLoginUname.value,
			password: formLoginPwd.value
		}

		const data = await service.Login(user,'POST',apiLogin)
		loadPage()
	//console.log(data)
		})
	}
	if (typeof contentAdmin != 'undefined'){
		contentAdmin.innerHTML=`<h1>hola soy admin</h1>`
	}
}
