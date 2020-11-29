class ServiceApi {

	async Login(user,method,api){
		const data = await this.executeService(user,method,api)
		if (data.type == '200'){
			localStorage.setItem('role',data.data.role)
			console.log("token guardado")
		}
		return data
	}

	async Register(user,method,api){
		const data = await this.executeService(user,method,api)
		console.log(data)
	}

	async executeService(user,met,apiURI){
		const header = new Headers()
		header.append('Content-Type','application/json')

		const myInit = {
			method: met,
			headers: header,
			body: JSON.stringify(user)
		}

		const resp = await fetch(apiURI,myInit)
		const json = await resp.json()
		return json
	}

}
