export function FormLogin(){
    const $form = document.createElement("div")
    $form.className="container-fluid"
    $form.innerHTML = `    
        <div class="row pb-2">
            <div class="col-1 col-sm-2 col-md-3 col-lg-4"></div>
            <div class="col-10 col-sm-8 col-md-6 col-lg-4">            
                <div class="container-fluid borderForm p-4 FormM" style="">
                    <p class="text-center mt-0"><img src="./app/assets/imgs/go.jpg" alt="gopher" width="90px;"></p>
                    <form class="mt-0" id="formLogin" action="#">
                        <input class="txtForm" id="formLoginUname" type="text" placeholder="usuario">
                        <input class="txtForm"id="formLoginPwd"type="password" placeholder="contraseña"><br>
                        <button class ="btn btn-outline-info btnStyle" id="btnLogin"><strong>ingresar</strong></button>
                    </form>
                <div>
            </div>
            <div class="col-1 col-sm-2 col-md-3 col-lg-4"><div>
        </div>
    `;
    return $form
}

