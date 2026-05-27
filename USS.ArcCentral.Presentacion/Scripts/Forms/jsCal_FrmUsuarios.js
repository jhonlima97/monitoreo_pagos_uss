var arrayUsuariosCalidad = [];

function navegacion_CaliConfPermisos_aspx() {
    if (sessvars.username != "") {
        var html = "<div class='modal fade bs-example-modal-sm' tabindex='-1' role='dialog' aria-hidden='true'>" +
            "   <div class='modal-dialog modal-sm'>" +
            "       <div id='DivModal' class='modal-content'>" +
            "       </div>" +
            "   </div>" +
            "</div>" +
            "<div id='FormContenido'></div>";
        $("#Contenido").html(html);
        usuper_LoadForm();
    }
}


function usuper_LoadForm() {
    var html = "" +
        "<div class='page-title'>" +
        "    <div class='title_left' >" +
        "        <h3>Usuarios</h3>" +
        "    </div >" +
        "</div >" +
        "<div class='clearfix'></div>" +
        "<div class='row'>" +
        "    <div class='col-md-12 col-sm-12 col-xs-12' id='frmLista'>" +
        "        <div class='x_panel'>" +
        "            <div class='x_title'>" +
        "                <button class='btn btn-sm' onclick='usuper_nuevo_usuario();'> <span class='fa fa-plus-circle fa_new'></span> Nuevo Usuario</button>" +
        "            </div>" +
        "            <div class='x_content'>" +
        //"                <div style='display: inline-block;width: 100%;'>" +
        //"                    <div class='form-group col-md-6' style='padding-left: 0px;' >" +
        //"                        <label>Tipo de documento </label>" +
        //"                        <select class='form-control' id='cboTipoDoc' onchange='usuper_LoadForm_lista_impresion()' style='height: 30px;'>" +
        //"                        </select>" +
        //"                    </div>" +
        //"                </div>" +
        "                <div class='table-responsive'>" +
        "                    <table class='display bordered' id='tabla_list_manual_cal'>" +
        "                        <thead>" +
        "                            <tr>" +
        "                                <th>Apellidos</th>" +
        "                                <th>Nombres</th>" +
        "                                <th></th>" +
        //"                                <th>Acción</th>" +
        "                            </tr>" +
        "                        </thead>" +
        "                        <tbody id='tabListaUsuarios'>" +
        "                        </tbody>" +
        "                    </table>" +
        "                </div>" +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "    <div class='col-md-12 col-sm-12 col-xs-12' id='frmContenidoRegUsuarios' style='display:none;'>"+ //  style='display:none;'
        "        <div class='x_panel'>"+
        "            <div style='text-align: center;'>"+
        "                <button class='btn btn-danger btn_left_proce' style='float: right;padding: 5px 10px;' onclick='usuper_cerrar_frm()'><span class='fa fa-remove'></span></button>"+
        "                <h4>Nuevo Usuario</h4>"+
        "            </div>"+
        "            <div></br></div>"+
        "            <form class='form-horizontal form-label-left' action=''>"+
        "               <div>"+
        "                   <div class='form-group'>"+
        "                       <label class='control-label col-md-3 col-sm-3 col-xs-12'>Buscar Persona</label>"+
        "                       <div class='col-md-6 col-sm-6 col-xs-12'>"+
        "                           <input type='text' class='form-control' id='nombreBuscar' autocomplete='OFF'>"+
        "                       </div>"+
        "                       <div class='col-md-3 col-sm-3 col-xs-12'>"+
        "                           <button type='button' class='btn btn-primary btn-sm' onclick='usuper_BuscarPersona()' >Buscar</button>"+
        "                       </div>"+
        "                   </div>"+
        "               </div>"+
        "            </form>"+
        "            <div>"+
        "                <table class='table table-bordered' style='width: 100%; max-width: 1180px;margin-left: auto;margin-right: auto;'>"+
        "                    <thead>"+
        "                        <tr  class='table-info'>"+
        "                            <td style='width: 20%;'><b>Código</b></td>"+
        "                            <td style='width: 30%;'><b>Apellido</b></td>"+
        "                            <td style='width: 20%;'><b>Nombre</b></td>"+
        "                            <td style='width: 30%;'></td>"+
        "                        </tr>"+                  
        "                    </thead>"+
        "                    <tbody id='frm_Contenido_personasBuscadas'></tbody>"+
        "                </table>"+
        "            </div>"+
        "        </div>"+
        "    </div>"+
        "</div>";

    $("#FormContenido").html(html);
    $("#frmContenidoVersiones").css("display", "none");
    usuper_LoadForm_lista();

}

function usuper_LoadForm_lista(){
    var Data ={};
    $.ajax({
        type: "POST",
        url: "../Forms/srvPersona.svc/Get_Usuarios_Calidad",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var foo = response.d;
            //console.log(foo);
            arrayUsuariosCalidad = foo;
            
            var html1 ='';
            for (var i = 0; i < arrayUsuariosCalidad.length; i++) {
                //arrayUsuariosCalidad[i]
                html1 += "<tr>";
                html1 += "    <td>"+arrayUsuariosCalidad[i]['cPerApellido']+"</td>";
                html1 += "    <td>"+arrayUsuariosCalidad[i]['cPerNombre']+"</td>";
                html1 += '    <td><button onclick="usuper_asignarPermisos(\''+arrayUsuariosCalidad[i]['cPerCodigo']+'\',1)" class="btn_acc"><i class="fa fa-eye" title="Ver"></i></button>';
                html1 += '    <button onclick="usuper_eliminarUsuario(\''+arrayUsuariosCalidad[i]['cPerCodigo']+'\')" class="btn_acc"><i class="fa fa-times" title="Eliminar"></i></button></td>';
                html1 += "</tr>" ;
            }
            $("#tabListaUsuarios").html(html1);

        },
        error: function (result) {
            $('#m_preload').css("display", "none");
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });
}



function usuper_BuscarPersona(){
    var nombreBuscar = $("#nombreBuscar").val();
    if (nombreBuscar.length > 0) {
        var Data ={
            cTexto: nombreBuscar
        };
        $.ajax({
            type: "POST",
            url: "../Forms/srvPersona.svc/Get_Search_Persona",
            data: JSON.stringify(Data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var foo = response.d;
                console.log(foo);
                
                var html1 ='';
                for (var i = 0; i < foo.length; i++) {
                    //foo[i]
                    html1 += "<tr>";
                    html1 += "    <td>"+foo[i]['cPerCodigo']+"</td>";
                    html1 += "    <td>"+foo[i]['cPerApellido']+"</td>";
                    html1 += "    <td>"+foo[i]['cPerNombre']+"</td>";
                    html1 += '    <td><button onclick="usuper_asignarPermisos(\''+foo[i]['cPerCodigo']+'\')" class="btn_acc"><i class="fa fa-eye" title="Seleccionar"></i></button></td>';
                    html1 += "</tr>" ;
                }
                $("#frm_Contenido_personasBuscadas").html(html1);

            },
            error: function (result) {
                $('#m_preload').css("display", "none");
                alert('ERROR ' + result.status + ' ' + result.statusText);
            }
        }); 
    }

}

function usuper_asignarPermisos(cPerCodigo, reg = 0){
    //console.log(cPerCodigo);
    if (cPerCodigo) {
        var Data ={
            cPerCodigo: cPerCodigo
        };
        $.ajax({
            type: "POST",
            url: "../Forms/srvPersona.svc/Get_Permisos_Usuario_Calidad",
            data: JSON.stringify(Data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var foo = response.d;
                //console.log(foo);
                var mostar = '';
                var chek ="";
                var codHijos="";
                var codPadre =0;
                var contTodosPadres ="";
                var contTodosHijos="";

                for (var i = 0; i < foo.length; i++) {
                    if (foo[i].cIntJerarquia.length > 2) {

                        chek = (foo[i].Estado == 1) ? 'checked' : '';

                        if (foo[i].cIntJerarquia.length == 4) {
                            var codHijosJer = '';
                            //CapturaCodigoHijos
                            for (var j = 0; j < foo.length; j++) {
                                if (foo[j].cIntJerarquia.length == 6) {
                                    if (foo[j].cIntJerarquia.substring(0, 4) == foo[i].cIntJerarquia) {
                                        codHijosJer += foo[j].nIntCodigo+",";
                                    }
                                }
                            }
                            //console.log(codHijosJer);
                            mostar+='<div class="permisonivel1" >'+
                                        '<input type="checkbox" id="chbP'+foo[i].nIntCodigo+'"  '+chek+' onclick="usuper_gestionarPermisoPadre('+foo[i].nIntCodigo+','+foo[i].cIntJerarquia+',\''+codHijosJer+'\')" value="'+foo[i].nIntCodigo+'" class="chk-col-blue" />'+
                                        '<label for="chbP'+foo[i].nIntCodigo+'">'+foo[i].cIntDescripcion+'</label>'+
                                    '</div>';
                            codHijos = codHijosJer;//value['codHijos'];
                            codPadre = foo[i].nIntCodigo;//foo[i].nIntCodigo;
                            contTodosPadres += foo[i].nIntCodigo+',';
                        }else{
                            
                            mostar+='<div   class="permisonivel2">'+
                                        '<input type="checkbox" id="chbH'+foo[i].nIntCodigo+'" '+chek+' onclick="usuper_gestionarPermisoHijo('+foo[i].nIntCodigo+','+codPadre+',\''+codHijos+'\')" value="'+foo[i].nIntCodigo+'" class="chk-col-blue" />'+
                                        '<label for="chbH'+foo[i].nIntCodigo+'">'+foo[i].cIntDescripcion+'</label>'+
                                    '</div>';
                            contTodosHijos += foo[i].nIntCodigo+',';
                        }

                    }
                }

                mostar+='<div style="display:none;"><input type="text" id="contTodosPadres" value="'+contTodosPadres+'"><input type="text" id="contTodosHijos" value="'+contTodosHijos+'"></div>';

                var nomTitulo= (reg == 0)? "Registrar" : "Actualizar";
                var accion= (reg == 0)? "registro" : "actualizo";
                $.confirm({
                    columnClass: 'medium',
                    title: 'Permisos',
                    content: '' +
                    '<form action="" id="myForm" class="formName" style="padding-bottom: 18px;">' +
                        '<input type="hidden" class="form-control" id="cPerCodigoSelect" value="'+cPerCodigo+'">'+
                        '<div">' +mostar+
                        '</div>' +
                    '</form>',
                    onOpen: function () {
                        
                    },
                    buttons: {
                        formSubmit: {
                            text: nomTitulo,
                            btnClass: 'btn-blue btnEnviar',
                            action: function () {
                                var arrayCorrecto ='';
                                var ArrayPad = $("#contTodosPadres").val().slice(0,-1);
                                ArrayPad = ArrayPad.split(",");

                                var ArrayHij = $("#contTodosHijos").val().slice(0,-1);
                                ArrayHij = ArrayHij.split(",");

                                for (var i = 0; i < ArrayPad.length; i++) {
                                    if ($("#chbP"+ArrayPad[i]).is(':checked')) {
                                        arrayCorrecto += ArrayPad[i]+"&";
                                    }
                                }
                                for (var i = 0; i < ArrayHij.length; i++) {
                                    if ($("#chbH"+ArrayHij[i]).is(':checked')) {
                                        arrayCorrecto += ArrayHij[i]+"&";
                                    }
                                }
                                if (arrayCorrecto == '') { 
                                    arrayCorrecto = '-'
                                }

                                var Data = {
                                    cPerCodigo: $("#cPerCodigoSelect").val(),
                                    cTexto: arrayCorrecto,
                                    cPerUsuario: sessvars.username
                                };     
                                //console.log(Data);
                                $.ajax({
                                    type: "POST",
                                    url: "../Forms/srvPersona.svc/Set_Upd_Permiso_Usuario_Calidad",
                                    data: JSON.stringify(Data),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function (response) {
                                        console.log(response);
                                        //console.log(Data);
                                        
                                        var foo = response.d;
                                        if (foo == "ok") {
                                            m_alerta_ok("", "Se " + accion + " correctamente");
                                            usuper_LoadForm_lista();
                                            usuper_cerrar_frm();

                                        } else {
                                            m_alerta_ok("", "No se " + accion + ", intentelo mas tarde");
                                        }
                                    },
                                    error: function (result) {
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

            },
            error: function (result) {
                $('#m_preload').css("display", "none");
                alert('ERROR ' + result.status + ' ' + result.statusText);
            }
        }); 
    }
}

function usuper_gestionarPermisoPadre(codMenu, codJerarquia, codHijos){
    //console.log(codMenu +' ' + codJerarquia + ' - '+  codHijos);
    var ArrayHij = codHijos.split(",");
    var estado = false;
    if ($("#chbP"+codMenu).is(':checked')) {
        estado = true;
    }
    for (var i = 0; i < ArrayHij.length; i++) {
        $("#chbH"+ArrayHij[i]).prop("checked",estado);
    }
}   

function usuper_gestionarPermisoHijo(codMenu, codPadre,codHijos){
    //console.log(codMenu +' ' + codNivelPadre);
    var ArrayHij = codHijos.split(",");
    var cantActivos = 0;
    for (var i = 0; i < ArrayHij.length; i++) {
        if ($("#chbH"+ArrayHij[i]).is(':checked')) {
            cantActivos++;
        }
    }
    if (cantActivos ==0 ) {
        $("#chbP"+codPadre).prop("checked",false);
    }else{
        $("#chbP"+codPadre).prop("checked",true);
    }
}


function usuper_nuevo_usuario(){
    $("#frmContenidoRegUsuarios").css("display", "");
    $("#frmLista").css("display", "none");
} 

function usuper_cerrar_frm(){
    $("#frmContenidoRegUsuarios").css("display", "none");
    $("#frmLista").css("display", "");
    $("#nombreBuscar").val("");
    $("#frm_Contenido_personasBuscadas").html("");
} 


function usuper_eliminarUsuario(cPerCodigoo){
    //console.log(codVen);
    if (cPerCodigoo) {
        $.confirm({
            title: '¿Quieres eliminar este usuario?',
            content: 'Una vez eliminado perderá todos los accesos al sistema',
            type: 'red',
            //theme: 'material',
            buttons: {
                eliminar: {
                    btnClass : 'btn-danger',
                    action: function () {

                        var Data = {
                            cPerCodigo: cPerCodigoo,
                            cPerUsuario: sessvars.username
                        };     
                        //console.log(Data);
                        $.ajax({
                            type: "POST",
                            url: "../Forms/srvPersona.svc/Del_Permiso_Usuario_Calidad",
                            data: JSON.stringify(Data),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (response) {
                                console.log(response);
                                //console.log(Data);
                                
                                var foo = response.d;
                                if (foo == "ok") {
                                    m_alerta_ok("", "Usuario eliminado correctamente");
                                    usuper_LoadForm_lista();
                                    //usuper_cerrar_frm();

                                } else {
                                    m_alerta_ok("", "No se pudo eliminar, intentelo mas tarde");
                                }
                            },
                            error: function (result) {
                                alert('ERROR ' + result.status + ' ' + result.statusText);
                            }
                        });

                    }
                },
                cancelar: function () {
                    //$.alert('Canceled!');
                }
            }
        });
    }
}


$("#guardar").on("click",function(event){
    event.preventDefault();
    // resto de tu codigo
 });
