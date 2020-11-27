class TemplateSPA {
	Login(){
		ContentBody.innerHTML=`
			<div class="container-fluid">
				<a href="#">contacto</a><br>
				<h2 class="text-center text-white"> <strong>BIENVENIDO!</strong> </h2>
				<div class="row">
					<div class="col-1 col-sm-2 col-md-3 col-lg-4"></div>
					<div class="col-10 col-sm-8 col-md-6 col-lg-4">
						
						<div class="container borderForm p-4 FormM" style="">
							<form class="" id="formLogin" action="#">
								<input class="txtForm" id="formLoginUname" type="text" placeholder="usuario">
								<input class="txtForm"id="formLoginPwd"type="password" placeholder="contraseña"><br>
								<button class ="btn btn-outline-success btnStyle" id="btnLogin"><strong>ingresar</strong></button>
							</form>
						<div>

					</div>
					<div class="col-1 col-sm-2 col-md-3 col-lg-4"><div>
				</div>
			</div>
		` 
	}

	StudentTemplate(){
		ContentBody.innerHTML=`
			<h1>hello world</h1>	
		`
	}

	AdminTemplate(){
		ContentBody.innerHTML=`
		<div>
			<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  			<a class="navbar-brand" href="#">AppDown</a>
  			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    			<span class="navbar-toggler-icon"></span>
  			</button>
  			<div class="collapse navbar-collapse" id="collapsibleNavbar">
    			<ul class="navbar-nav">
      			<li class="nav-item">
        			<a class="nav-link" href="#">Administrar</a>
      			</li>
      			<li class="nav-item">
        			<a class="nav-link" href="#">I.E.</a>
      			</li>
      			<li class="nav-item">
        			<a class="nav-link" href="#">info</a>
      			</li>    
						<li class="nav-item">
							<a id="btnExit" class="nav-link btnExitStyle text-white" href="#">Salir</a>
      			</li>
    			</ul>
  			</div>  
			</nav>
		</div>
		<div id="contentAdmin"></div>
		`
	}

	
	Template(view){
		if (view === 'administrador'){
			this.AdminTemplate()
		}else if(view === 'docente'){
			this.StudentTemplate()
		}
	}


}
