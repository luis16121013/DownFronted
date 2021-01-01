export function EventLoginError(msg){
	const $error = document.createElement("div")
	$error.className = "container alert alert-danger mt-5 mb-0  ErrorEventLogin text-center"
	$error.innerText = `${msg}`
	return $error
}
