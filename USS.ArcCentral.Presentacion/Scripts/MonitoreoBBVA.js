
var arrayConsultas = [];
function navegacion_ServiciosBBVA_aspx() {
    if (cPerCodigoActual != "") {
        var html = "<div class='modal fade bs-example-modal-sm' tabindex='-1' role='dialog' aria-hidden='true'>" +
            "   <div class='modal-dialog modal-sm'>" +
            "       <div id='DivModal' class='modal-content'>" +
            "       </div>" +
            "   </div>" +
            "</div>" +
            "<div id='FormContenido'></div>";
        $("#Contenido").html(html);
        $("#Contenido").css('min-height', '660px');
        moni_LoadForm();
    }
}

function moni_LoadForm(){
    var html = "<style> .tdCabDet{background-color: #cdcdcd;color: #6f6f6f;} </style>"+
        "<style>pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }.string { color: green; }.number { color: darkorange; } .boolean { color: blue; } .null { color: magenta; } .key { color: red; } </style>" +
        "<div class='page-title'>" +
        "    <div class='title_left' >" +
        "        <h3>Monitoreo BBVA</h3>" +
        "    </div >" +
        "</div >" +
        "<div class='clearfix'></div>" +
        "<div class='row'>" +
        "    <div class='col-md-12 col-sm-12 col-xs-12' id='frmLista'>" +
        "        <div class='x_panel'>" +
        "            <div class='x_title' style='padding-bottom: 12px;'>" +
        "               <div class='col-md-3'> Del <input type='date' class='form-control' id='fechaGuiaInicio'> </div>" +
        "               <div class='col-md-3'> Hasta <input type='date' class='form-control' id='fechaGuiaFin'> </div>" +
        "               <button class='btn btn-sm btn-success' onclick='moni_listarMonitoreo();'> <span class='fa fa-search fa_new'></span> Listar</button>" +
        "            </div>" +
        "            <div class='x_content'>" +
        "               <div style='border: 1px solid silver;padding: 5px 0px;border-radius: 10px;'>" +
        "                   <div style='display: inline-block;width: 100%;'>" +
        "                       <div class='form-group col-md-3' style='margin-bottom: 0px;' >" +
        "                           <label>Tipo de solicitud</label>" +
        "                           <select class='form-control' id='cboTipoSolicitud' onchange='moni_LoadForm_lista_impresion()'>" +
        "                               <option value='0'>Todos</option>" +
        "                               <option value='1'>CONSULTA</option>" +
        "                               <option value='2' selected>PAGO</option>" +
        "                               <option value='3'>EXTORNO</option>" +
        "                           </select>" +
        "                       </div>" +
        "                       <div class='form-group col-md-3' style='margin-bottom: 0px;' >" +
        "                           <label>Canal de operación</label>" +
        "                           <select class='form-control' id='cboCanalOperacion' onchange='moni_LoadForm_lista_impresion()'>" +
        "                               <option value='-'>Todos</option>" +
        "                               <option value='TF'>TF: Terminal financiero </option>" +
        "                               <option value='CN'>CN: Banca por internet</option>" +
        "                               <option value='RD'>RD: Redex</option>" +
        "                               <option value='MC'>MC: Cajero Automático(ATM)</option>" +
        "                               <option value='BX'>BX: Saldo express</option>" +
        "                               <option value='BT'>BT: Banca por teléfono</option>" +
        "                           </select>" +
        "                       </div>" +
        /*"                       <div class='form-group col-md-3' style='margin-bottom: 0px;' >" +
        "                           <label>Tipo de documento</label>" +
        "                           <select class='form-control' id='cboTipoDoc' onchange='doc_LoadForm_lista_impresion()'>" +
        "                           </select>" +
        "                       </div>" +         
        "                       <div class='form-group col-md-3' style='margin-bottom: 0px;' >" +
        "                           <label>Proceso</label>" +
        "                           <select class='form-control' id='cboProceso' onchange='doc_LoadForm_lista_impresion()'>" +
        "                           </select>" +
        "                       </div>" +        
        "                       <div class='form-group col-md-3' style='margin-bottom: 0px;'>" +
        "                           <label>Estado</label>" +
        "                           <select class='form-control' id='cboEstadoDoc' onchange='doc_LoadForm_lista_impresion()'>" +
        "                           </select>" +
        "                       </div>" +*/
        "                   </div>" +
        "                </div>" +
        "                <div class='table-responsive'>" +
        "                    <table class='display' id='tabla_list_proveedores'>" +
        "                        <thead>" +
        "                            <tr>" +
        "                               <th>N°</th>" +
        "                               <th>Tipo</th>" +
        "                               <th>Canal</th>" +
        "                               <th>Fecha</th>" +
        "                               <th>Hora</th>" +
        "                               <th>Referencia</th>" +
        "                               <th>Documento</th>" +
        "                               <th>Movimiento</th>" +
        "                               <th>Importe</th>" +
        "                               <th>Forma pago</th>" +
        "                               <th>Moneda</th>" +
        //"                               <th></th>" +
        "                            </tr>" +
        "                        </thead>" +
        "                        <tbody id='tabListaProveedores'>" +
        "                        </tbody>" +
        "                    </table>" +
        "                </div>" +
        "                <div>"+
        "                   <div class='table-responsive'>" +
        "                        <table class='table table-bordered' style='width:50%;margin-left:auto;margin-right:auto;'>" +
        "                            <tbody>" +
        "                                <tr>" +
        "                                    <td>Monto total de pago</td>" +
        "                                    <td id='totaldepago'>S/ 0</td>" +
        "                                </tr>" +
        "                                <tr>" +
        "                                    <td>Número de solicitudes de pago</td>" +
        "                                    <td id='cantidadRecibos'>0</td>" +
        "                                </tr>" +
        "                                <tr>" +
        "                                    <td>Número de solicitudes de pago - procesadas</td>" +
        "                                    <td id='cantidadRecibosPagados'>0</td>" +
        "                                </tr>" +
        "                            </tbody>" +
        "                        </table>" +
        "                   </div>" +
        "               </div>"+
        "            </div>" +
        "        </div>" +
        "    </div>"+
        "</div>";

        $("#FormContenido").html(html);

        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
        $("#fechaGuiaInicio").val(today);
        $("#fechaGuiaFin").val(today);

        moni_listarMonitoreo();

        $("#frmContenido1").css("display", "none");

}

function moni_listarMonitoreo() {

    var fechaGuiaInicio = $("#fechaGuiaInicio").val().toString();
    var fechaGuiaFin = $("#fechaGuiaFin").val().toString();

    fechaGuiaInicio = fechaGuiaInicio.toString() + "";
    fechaGuiaInicio = fechaGuiaInicio.replace("-","");
    fechaGuiaInicio = fechaGuiaInicio.replace("-", "");

    fechaGuiaFin = fechaGuiaFin.toString() + "";
    fechaGuiaFin = fechaGuiaFin.replace("-", "");
    fechaGuiaFin = fechaGuiaFin.replace("-", "");

    var Data = {
        cFecha: fechaGuiaInicio, //"20220412",
        cFechaFin: fechaGuiaFin,
        cUsrCodigo: cPerCodigoActual
    };
    $.ajax({
        type: "POST",
        url: "../Services/srvGeneral.svc/Get_Listado_ConsultasBBVA",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            //console.log("mostrando departamentos");
            //console.log(response);
            //console.log(response.d);

            arrayConsultas = response.d;
            moni_LoadForm_lista_impresion();
            

        },
        error: function (result) {
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });

}

function moni_LoadForm_lista_impresion() {

    var cboTipoSol = $("#cboTipoSolicitud").val(); 
    var cboCanalOpe = $("#cboCanalOperacion").val(); 

    if (arrayConsultas.length > 0) {
        var arrayTemp = [];
        var html1 = '';
        var validador = 0;
        var cantidadRecibos = 0;
        var cantidadRecibosPagados = 0;
        var totaldepago = 0;

        for (var i in arrayConsultas) {
            validador = 0;
            
            if (cboTipoSol > 0) {
                if (arrayConsultas[i]['nSolTipo'] == cboTipoSol ) {
                    validador++;
                }
            }else{
                validador++;
            }
            
            if (cboCanalOpe != '-') {
                if (arrayConsultas[i]['canalOperacion'] == cboCanalOpe ) {
                    validador++;
                }
            }else{
                validador++;
            }


            if (validador == 2) {
                var stilo = "";
                if (arrayConsultas[i]['nSolTipo'] == 2) {
                    cantidadRecibos++;
                    if (arrayConsultas[i]['nProcesado'] == 1) {
                        stilo = "style='background-color: #65b068;color: white;'";
                        cantidadRecibosPagados++;
                        totaldepago += parseFloat(arrayConsultas[i]['importeDeudaPagada']);
                    }else{
                        stilo = "style='background-color: #bbbbbb;color: white;'";
                    }
                }
                
                html1 += "<tr>";
                html1 += "    <td>" + arrayConsultas[i]['nSolCodigo'] + "</td>";
                html1 += "    <td "+stilo+">" + arrayConsultas[i]['cSolTipo'] + "</td>";
                html1 += "    <td>" + arrayConsultas[i]['canalOperacion'] + "</td>";
                html1 += "    <td>" + arrayConsultas[i]['fechaOperacion'] + "</td>";
                html1 += "    <td>" + arrayConsultas[i]['horaOperacion'] + "</td>";
                html1 += "    <td>" + arrayConsultas[i]['numeroReferenciaDeuda'] + "</td>";
                html1 += "    <td>" + arrayConsultas[i]['numeroDocumento'] + "</td>";
                html1 += "    <td>" + arrayConsultas[i]['numeroOperacionRecaudos'] + "</td>";
                html1 += "    <td>" + arrayConsultas[i]['importeDeudaPagada'] + "</td>";
                //html1 += "    <td>" + arrayConsultas[i]['numeroOperacionRecaudos'] + "</td>";
                html1 += "    <td>" + arrayConsultas[i]['formaPago'] + "</td>";
                html1 += "    <td>" + arrayConsultas[i]['codigoMoneda'] + "</td>";
                //html1 += "    <td>" + arrayConsultas[i]['nProcesado'] + "</td>";
                //html1 += "    <td><a href='https://campus.uss.edu.pe/Campus/DocInternos/DocCalidad/"+arrayConsultas[i]['cDocumento']+"' target='_blank' class=''><span class='fa fa-file-pdf-o'></span> Ver</a></td>";
                //html1 += "    <td>"+arrayConsultas[i]['nVersion']+"</td>";
                /*if (arrayConsultas[i]['nSolTipo'] == 2 ) {
                    html1 += "       <td><button onclick='moni_verPago(" + arrayConsultas[i]['nSolCodigo'] + ")' class='btn_acc'><i class='fa fa-eye' title='Ver'></i></button></td>";
                }else{
                    html1 += "       <td></td>";
                }*/
                //html1 += "       <button onclick='moni_calificarProveedor("+arrayConsultas[i]['nProvCodigo']+")' class='btn_acc'><i class='fa fa-' title='Ver'></i></button></td>";
                html1 += "</tr>";
            }
        }

        var table = $('#tabla_list_proveedores').DataTable();
        $("#cantidadRecibos").html("<b>"+cantidadRecibos+"</b>");
        $("#cantidadRecibosPagados").html("<b>"+cantidadRecibosPagados+"</b>");
        $("#totaldepago").html("<b> S/ "+totaldepago+"</b>");
        table.destroy();
        $("#tabListaProveedores").html(html1);
        $('#tabla_list_proveedores').DataTable({ "order": [[ 0, "desc" ]] });
    }else{
        var table = $('#tabla_list_proveedores').DataTable();
        table.destroy();
        $("#tabListaProveedores").html("");
        $('#tabla_list_proveedores').DataTable({ "order": [[ 0, "desc" ]] });
    }
}

function moni_verPago(nSolCodigo) {
    var titulo = (nSolCodigo == 0) ? "Nuevo documento" : "Datos de pago";
    var nomTitulo = (nSolCodigo == 0) ? "Registrar" : "Visualizar";
    var docvisual = (nSolCodigo == 0) ? '' : '<a href="" target="_blank" id="frm_a_doc" class="btn_formato_unico_list"></a>';

    $.confirm({
        columnClass: 'large',
        title: titulo,
        content: '' +
            "            <div>" +
            "               <input type='hidden' id='pnSolCodigo' value='0' />" +
            "               <pre id='vistaJson'></pre>" +            
            "            </div>",
        onOpen: function () {
            if (nSolCodigo > 0) {
                for (var i in arrayConsultas) {

                    if (arrayConsultas[i]['nSolCodigo'] == nSolCodigo) {

                        $("#pnSolCodigo").val(nSolCodigo);
                        console.log(arrayConsultas[i]['cJsnCadena']);
                        console.log(syntaxHighlight(arrayConsultas[i]['cJsnCadena']));
                        $("#vistaJson").html(syntaxHighlight(arrayConsultas[i]['cJsnCadena']));
                        
                    }

                }
            }

        },
        buttons: {
            Cerrar: function () {
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

    //console.log(codProv);
}

function calcularRuta(codTipoArchivo) {
    var nomCapeta = "";
    switch (codTipoArchivo) {
        case 100001:
            nomCapeta = 'CARTA'
            break;
        case 100002:
            nomCapeta = 'DNI'
            break;
        case 100003:
            nomCapeta = "RUC";
            break;
        case 100004:
            nomCapeta = "TESTI";
            break;
        case 100005:
            nomCapeta = "VIGEP";
            break;
        case 100006:
            nomCapeta = "LICEA";
            break;
        case 100007:
            nomCapeta = "RESOA";
            break;
        case 100008:
            nomCapeta = "CERTA";
            break;
        case 100009:
            nomCapeta = "CONSM";
            break;
        case 100012:
            nomCapeta = "RUC";
            break;
    }

    return nomCapeta;
}

function calcularNombreDoc(codTipoArchivo) {
    var nomCapeta = "";
    switch (codTipoArchivo) {
        case 100001:
            nomCapeta = 'Carta de Presentación'
            break;
        case 100002:
            nomCapeta = 'Copia de documento de identidad del proveedor.'
            break;
        case 100003:
            nomCapeta = "Copia del Registro Único de Contribuyentes (R.U.C)";
            break;
        case 100004:
            nomCapeta = "Copia del Testimonio de constitución de la empresa con la constancia de inscripción en los registros públicos";
            break;
        case 100005:
            nomCapeta = "Vigencia de Poderes expedido por el Registro de Personas Jurídicas";
            break;
        case 100006:
            nomCapeta = "Licencia de funcionamiento actualizada o constancia de trámite respectivo";
            break;
        case 100007:
            nomCapeta = "Resolución ministerial de aprobación del producto dado por el MINSA /SENASA";
            break;
        case 100008:
            nomCapeta = "Certificaciones y Acreditaciones con que cuenta";
            break;
        case 100009:
            nomCapeta = "Constancia o certificado de representación de marca";
            break;
        case 100012:
            nomCapeta = "Copia del Registro Único de Contribuyentes (R.U.C)";
            break;
    }

    return nomCapeta;
}



function moni_calificarProveedor(cod) {
    console.log(cod);

}

