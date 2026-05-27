var arrayMacro = [];
var arrayTipoDoc = [];
var arrayEstadoDoc = [];
var arrayObjCalidad = [];

function  navegacion_CaliConfPar_aspx() {
	if (sessvars.username != "") {
        var html = "<div class='modal fade bs-example-modal-sm' tabindex='-1' role='dialog' aria-hidden='true'>" +
            "   <div class='modal-dialog modal-sm'>" +
            "       <div id='DivModal' class='modal-content'>" +
            "       </div>" +
            "   </div>" +
            "</div>" +
            "<div id='FormContenido'></div>";
        $("#Contenido").html(html);
        par_LoadForm();
    }
}

function par_LoadForm(){
	var html = '';
	html = ""+
		"<div class='page-title'>"+
		"  <div class='title_left'>"+
		"    <h3>Parametros</h3>"+
		"  </div>"+
		"</div><div class='clearfix'></div>"+
		"<div class='row'>"+
		"	<div class='col-md-12 col-sm-12 col-xs-12' id='frmLista'>"+
		"        <div class='x_panel'>"+
		"        	<ul id='myTab' class='nav nav-tabs bar_tabs' role='tablist'>"+
		"            	<li role='presentation' class='active'><a href='#tab_content1' id='home-tab' role='tab' data-toggle='tab' aria-expanded='true'>Macroproceso</a></li>"+
		"            	<li role='presentation' class=''><a href='#tab_content2' id='home-tab' role='tab' data-toggle='tab' aria-expanded='true'>Objetivos de calidad</a></li>"+
		"            	<li role='presentation' class=''><a href='#tab_content3' role='tab' id='profile-tab' data-toggle='tab' aria-expanded='false'>Tipos de documentos</a></li>"+
		"            	<li role='presentation' class=''><a href='#tab_content4' role='tab' id='profile-tab2' data-toggle='tab' aria-expanded='false'>Estados de documento</a></li>"+
		"          	</ul>"+
		"          	<div id='myTabContent' class='tab-content'>"+
		"                <div role='tabpanel' class='tab-pane fade active in' id='tab_content1' aria-labelledby='home-tab'>"+
		"					<div class='row'>"+
		//"						<button class='btn btn-sm' onclick=''> <span class='fa fa-plus-circle fa_new'></span> Nuevo</button>"+
		"					</div>"+
		"					<div class='table-responsive'>"+
		"						<table class='table table-hover mb-none'>"+
		"							<thead>"+
		"								<tr>"+
		"									<th>Código</th>"+
		"									<th>Nombre</th>"+
		"									<th width='20%'>Acción</th>"+
		"								</tr>"+
		"							</thead>"+
		"							<tbody id='tabListaMacroproceso'></tbody>"+
		"						</table>"+
		"					</div>"+
		"                </div>"+
		"                <div role='tabpanel' class='tab-pane fade' id='tab_content2' aria-labelledby='home-tab'>"+
		"					<div class='row'>"+
		//"						<button class='btn btn-sm' onclick=''> <span class='fa fa-plus-circle fa_new'></span> Nuevo</button>"+
		"					</div>"+
		"					<div class='table-responsive'>"+
		"						<table class='table table-hover mb-none'>"+
		"							<thead>"+
		"								<tr>"+
		"									<th>Código</th>"+
		"									<th>Nombre</th>"+
		"									<th width='20%'>Acción</th>"+
		"								</tr>"+
		"							</thead>"+
		"							<tbody id='tabListaObjetivos'></tbody>"+
		"						</table>"+
		"					</div>"+
		"                </div>"+
		"                <div role='tabpanel' class='tab-pane fade' id='tab_content3' aria-labelledby='profile-tab'>"+
		"                  	<div class='row'>"+
		//"						<button class='btn btn-sm' onclick=''> <span class='fa fa-plus-circle fa_new'></span> Nuevo</button>"+
		"					</div>"+
		"					<div class='table-responsive'>"+
		"						<table class='table table-hover mb-none'>"+
		"							<thead>"+
		"								<tr>"+
		//"									<th>Código</th>"+
		"									<th>Nombre</th>"+
		"									<th width='20%'>Acción</th>"+
		"								</tr>"+
		"							</thead>"+
		"							<tbody id='tabListaTipoDocumento'></tbody>"+
		"						</table>"+
		"					</div>"+
		"                </div>"+
		"                <div role='tabpanel' class='tab-pane fade' id='tab_content4' aria-labelledby='profile-tab'>"+
		"                	<div class='row'>"+
		//"						<button class='btn btn-sm' onclick=''><span class='fa fa-plus-circle fa_new'></span>  Nuevo</button>"+
		"					</div>"+
		"					<div class='table-responsive'>"+
		"						<table class='table table-hover mb-none'>"+
		"							<thead>"+
		"								<tr>"+
		//"									<th>Código</th>"+
		"									<th>Nombre</th>"+
		"									<th width='20%'>Acción</th>"+
		"								</tr>"+
		"							</thead>"+
		"							<tbody id='tabListaEstadoDocumento'></tbody>"+
		"						</table>"+
		"					</div>"+
		"                </div>"+                 
		"          	</div>"+
		"		</div>"+
		"	</div>"+
		"</div>";

		$("#FormContenido").html(html);

	var Data = {
        pcJuridica: "1000003833",
    };
    $.ajax({
        type: "POST",
        url: "../Forms/srvInterface.svc/Get_Load_Combos_VariosParametros",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var foo = response.d;
            console.log(foo);
			arrayMacro =  foo.lMacro;
			arrayTipoDoc =  foo.lTipoDoc;
			arrayEstadoDoc =  foo.lEstDoc;
			arrayObjCalidad =  foo.lObjCal;
			par_LoadForm_listarvista();
        },
        error: function (result) {
            $('#m_preload').css("display", "none");
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });
}

function par_LoadForm_listarvista(){
	var cont = '';
    if ( arrayMacro.length > 0) {
    	for (var i in arrayMacro) {
    		cont +="<tr>";
			cont += "<td>"+arrayMacro[i]['cIntNombre']+"</td>";
			cont += "<td>"+arrayMacro[i]['cIntDescripcion']+"</td>";
			cont += "<td><button onclick=\"par_ediPar('tabListaMacroproceso','Macroproceso',4301,"+arrayMacro[i]['nIntCodigo']+")\" class='btn_acc'><i class='fa fa-pencil' title='Editar'></i></button> "; 
			cont +="</tr>";
        }
   	}
   	$("#tabListaMacroproceso").html(cont);

   	var cont = '';
    if ( arrayObjCalidad.length > 0) {
    	for (var i in arrayObjCalidad) {
    		cont +="<tr>";
			cont += "<td>"+arrayObjCalidad[i]['cIntNombre']+"</td>";
			cont += "<td>"+arrayObjCalidad[i]['cIntDescripcion']+"</td>";
			cont += "<td><button onclick=\"par_ediPar('tabListaObjetivos','Macroproceso',4307,"+arrayObjCalidad[i]['nIntCodigo']+")\" class='btn_acc'><i class='fa fa-pencil' title='Editar'></i></button> "; 
			cont +="</tr>";
        }
   	}
   	$("#tabListaObjetivos").html(cont);

   	cont = '';
   	if ( arrayTipoDoc.length > 0) {
    	for (var i in arrayTipoDoc) {
    		cont +="<tr>";
			//cont += "<td>"+arrayTipoDoc[i]['cIntNombre']+"</td>";
			cont += "<td>"+arrayTipoDoc[i]['cIntDescripcion']+"</td>";
			cont += "<td><button onclick=\"par_ediPar('tabListaTipoDocumento','Tipo de documentos',4303,"+arrayTipoDoc[i]['nIntCodigo']+")\" class='btn_acc'><i class='fa fa-pencil' title='Editar'></i></button> "; 
			cont +="</tr>";
        }
   	}
   	$("#tabListaTipoDocumento").html(cont);

   	cont = '';
   	if ( arrayEstadoDoc.length > 0) {
    	for (var i in arrayEstadoDoc) {
    		cont +="<tr>";
			//cont += "<td>"+arrayEstadoDoc[i]['cIntNombre']+"</td>";
			cont += "<td>"+arrayEstadoDoc[i]['cIntDescripcion']+"</td>";
			cont += "<td><button onclick=\"par_ediPar('tabListaEstadoDocumento','Estado de documentos',5301,"+arrayEstadoDoc[i]['nIntCodigo']+")\" class='btn_acc'><i class='fa fa-pencil' title='Editar'></i></button> "; 
			cont +="</tr>";
        }
   	}
   	$("#tabListaEstadoDocumento").html(cont);
}

function par_listaActualizar(clase){
	var Data = {
        pcJuridica: "1000003833",
        nIntCodigo: 0,
        nIntClase: clase,
        nParTipo: 1
    };
    $.ajax({
        type: "POST",
        url: "../Forms/srvInterface.svc/Get_Interface",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var foo = response.d;
            //console.log(foo);
            var cont = '';
            
            if (clase == 4301) {
            	arrayMacro =  foo;
            }
            if (clase == 4307) {
            	arrayObjCalidad =  foo;
            }
            if (clase == 4303) {
				arrayTipoDoc =  foo;
            }
            if (clase == 5301) {
				arrayEstadoDoc =  foo;
            }
            par_LoadForm_listarvista();	
        },
        error: function (result) {
            $('#m_preload').css("display", "none");
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });
}


function par_ediPar(nomDiv,tituloEdi,clase,codPar){
	var frm2 = '';
	if (clase == 4301 || clase == 4307 ) {
		frm2 = '<div class="form-group">' +  
				    '<label>Código</label>' +
				    '<input type="text" id="cCodParGeneral" value="" class="form-control" autocomplete="off" required />' +	 
				'</div>' ;
	}

	var titulo = tituloEdi ;
	$.confirm({
		columnClass: 'medium',
	    title: titulo,
	    content: '' +
	    '<form action="" class="formName" style="padding-bottom: 18px;">' +
	    	'<input type="hidden" id="codParGeneral" value="'+codPar+'" class="form-control" required />' +
	    	frm2 +	
    		'<div class="form-group">' +  
			    '<label>Nombre</label>' +
			    '<input type="text" id="cNomParGeneral" value="" class="form-control" autocomplete="off" required />' +	 
			'</div>' +
	    '</form>',
	    onOpen: function () {
	    	var arrayEdicion = [];
	    	if(clase == 4301 ){
	    		arrayEdicion = arrayMacro;
	    	}else if(clase == 4307 ){
	    		arrayEdicion = arrayObjCalidad;
	    	}else if(clase == 4303 ){
	    		arrayEdicion = arrayTipoDoc;
	    	}else if(clase == 5301 ){
	    		arrayEdicion = arrayEstadoDoc;
	    	}
    		for (var i = 0; i < arrayEdicion.length; i++) {
    			if(arrayEdicion[i]["nIntCodigo"] == codPar ) {
    				if(clase == 4301 || clase == 4307  ){
    					$("#cCodParGeneral").val(arrayEdicion[i]["cIntNombre"]);
    				}
    				$("#cNomParGeneral").val(arrayEdicion[i]["cIntDescripcion"]);
    			}
    		}
	    },
	    buttons: {
	        formSubmit: {
	            text: 'Actualizar',
	            btnClass: 'btn-blue btnEnviar',
	            action: function () {
	                /*$.alert('Your name is ' + name);*/
	                var cod = '';
	                var nom = '';
	                if ( $("#cNomParGeneral").val() == "" || $("#cNomParGeneral").val() == undefined) {
	                	alert("Verificar nombre");
	                	return false;
	                }else{
	                	nom = $("#cNomParGeneral").val();
	                	cod = $("#cNomParGeneral").val();
	                }
	                if (clase == 4301 || clase == 4307 ) {
	                	if ( $("#cCodParGeneral").val() == "" || $("#cCodParGeneral").val() == undefined) {
		                	alert("Verificar código");
		                	return false;
		                }else{
		                	cod = $("#cCodParGeneral").val();
		                }
	               	}

	                var Data = {
        				nIntCodigo: codPar,
                        nIntClase : clase,
                        cIntNombre : cod,
                        cIntDescripcion : nom
				    };
				    $.ajax({
				        type: "POST",
				        url: "../Forms/srvInterface.svc/Set_Upd_Interface",
				        data: JSON.stringify(Data),
				        contentType: "application/json; charset=utf-8",
				        dataType: "json",
				        success: function (response) {
				            var foo = response.d;
				            //console.log(response);
				            //console.log(foo);
				            if (foo == "ok") {
                                m_alerta_ok("","Registro Correctamente");
                                par_listaActualizar(clase);
                                //doc_LoadForm_lista();
                            } else {
                                m_alerta_mal("","Ocurrio un problema");
                            }
				        },
				        error: function (result) {
				            $('#m_preload').css("display", "none");
				            alert('ERROR ' + result.status + ' ' + result.statusText);
				        }
				    });
	            }
	        },
	        cancel: function () {
	            //close
	        },
	    },
	    onContentReady: function () {
	        var jc = this;
	        this.$content.find('form').on('submit', function (e) {
	            e.preventDefault();
	            jc.$$formSubmit.trigger('click');
	        });
	    }
	});

}
