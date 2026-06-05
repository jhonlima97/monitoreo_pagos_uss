
var arrayMonitoreoBCP = [];

function navegacion_ServiciosBCP_aspx() {
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
        moni_LoadFormBCP();
    }
}

function moni_LoadFormBCP() {
    var html = "<style> .tdCabDet{background-color: #cdcdcd;color: #6f6f6f;} </style>" +
        "<style>pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }.string { color: green; }.number { color: darkorange; } .boolean { color: blue; } .null { color: magenta; } .key { color: red; } </style>" +
        "<div class='page-title'>" +
        "    <div class='title_left' >" +
        "        <h3>Monitoreo BCP</h3>" +
        "    </div >" +
        "</div >" +
        "<div class='clearfix'></div>" +
        "<div class='row'>" +
        "    <div class='col-md-12 col-sm-12 col-xs-12' id='frmLista'>" +
        "        <div class='x_panel'>" +
        "            <div class='x_title' style='padding-bottom: 12px;'>" +
        "               <div class='col-md-3'> Del <input type='date' class='form-control' id='fechaGuiaInicio'> </div>" +
        "               <div class='col-md-3'> Hasta <input type='date' class='form-control' id='fechaGuiaFin'> </div>" +
        "               <button class='btn btn-sm btn-success' onclick='moni_listarMonitoreoBCP();'> <span class='fa fa-search fa_new'></span> Listar</button>" +
        "            </div>" +
        "            <div class='x_content'>" +
        "               <div style='border: 1px solid silver;padding: 5px 0px;border-radius: 10px;'>" +
        "                   <div style='display: inline-block;width: 100%;'>" +
        "                       <div class='form-group col-md-3' style='margin-bottom: 0px;' >" +
        "                           <label>Tipo de solicitud</label>" +
        "                           <select class='form-control' id='cboTipoSolicitud' onchange='moni_LoadForm_lista_impresion_BCP()'>" +
        "                               <option value='0'>Todos</option>" +
        "                               <option value='1'>CONSULTA</option>" +
        "                               <option value='2' selected>PAGO</option>" +
        "                               <option value='3'>EXTORNO</option>" +
        "                           </select>" +
        "                       </div>" +
        "                       <div class='form-group col-md-3' style='margin-bottom: 0px;' >" +
        "                           <label>Canal de operación</label>" +
        "                           <select class='form-control' id='cboCanalOperacion' onchange='moni_LoadForm_lista_impresion_BCP()'>" +
        "                               <option value='-'>Todos</option>" +
        "                               <option value='BM'>BM: Banca Móvil </option>" +
        "                               <option value='TN'>TN: Telecrédito</option>" +
        "                               <option value='IB'>IB: Banca por internet (ViaBCP)</option>" +
        "                               <option value='FI'>FI: Ventanilla</option>" +
        "                               <option value='PZ'>PZ: Agente BCP</option>" +
        "                               <option value='CJ'>CJ: Cajero automático</option>" +
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
        "                    <table class='display' id='tabla_list_bcp'>" +
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
        "                <div>" +
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
        "               </div>" +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "</div>";

    $("#FormContenido").html(html);

    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    $("#fechaGuiaInicio").val(today);
    $("#fechaGuiaFin").val(today);

    moni_listarMonitoreoBCP();

    $("#frmContenido1").css("display", "none");

}

function moni_listarMonitoreoBCP() {

    var fechaGuiaInicio = $("#fechaGuiaInicio").val().toString();
    var fechaGuiaFin = $("#fechaGuiaFin").val().toString();

    fechaGuiaInicio = fechaGuiaInicio.toString() + "";
    fechaGuiaInicio = fechaGuiaInicio.replace("-", "");
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
        url: "../Services/srvGeneral.svc/Get_Listado_ConsultasBCP",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            //console.log("mostrando departamentos");
            //console.log(response);
            //console.log(response.d);
            var foo = response.d;

            arrayMonitoreoBCP = response.d;
            moni_LoadForm_lista_impresion_BCP();
            //console.log(arrayMonitoreoBCP);
            /*var print = "";
            var print1 = "";
            var print2 = "";
            print1 += "<option value='0'>Seleccione</option>";
            print2 += "<option value='0'>Seleccione</option>";
            $.each(foo, function (index, value) {
                print += "<option value='" + value.nConValor + "'>" + value.cConDescripcion + "</option>";
            });
            //print += "</select>";
            $("#selectFormaPago1").html(print1 + print);
            $("#selectFormaPago2").html(print2 + print);*/

        },
        error: function (result) {
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });

}

function moni_LoadForm_lista_impresion_BCP() {

    var cboTipoSol = $("#cboTipoSolicitud").val(); 
    var cboCanalOpe = $("#cboCanalOperacion").val(); 

    if (arrayMonitoreoBCP.length > 0) {
        var arrayTemp = [];
        var html1 = '';
        var validador = 0;
        var cantidadRecibos = 0;
        var cantidadRecibosPagados = 0;
        var totaldepago = 0;

        for (var i in arrayMonitoreoBCP) {
            validador = 0;
            
            if (cboTipoSol > 0) {
                if (arrayMonitoreoBCP[i]['nSolTipo'] == cboTipoSol ) {
                    validador++;
                }
            }else{
                validador++;
            }
            
            if (cboCanalOpe != '-') {
                if (arrayMonitoreoBCP[i]['canalOperacion'] == cboCanalOpe ) {
                    validador++;
                }
            }else{
                validador++;
            }
/*
            if (cboProceso > 0) {
                if (arrayMonitoreoBCP[i]['nProceso'] == cboProceso ) {
                    validador++;
                }
            }else{
                validador++;
            }

            if (cboEstadoDoc > 0) {
                if (arrayMonitoreoBCP[i]['nSGCDocEstado'] == cboEstadoDoc ) {
                    validador++;
                }
            }else{
                validador++;
            }*/
            

            if (validador == 2) {
                var stilo = "";
                if (arrayMonitoreoBCP[i]['nSolTipo'] == 2) {
                    cantidadRecibos++;
                    if (arrayMonitoreoBCP[i]['nProcesado'] == 1) {
                        stilo = "style='background-color: #65b068;color: white;'";
                        cantidadRecibosPagados++;
                        totaldepago += parseFloat(arrayMonitoreoBCP[i]['importeDeudaPagada']);
                    }else{
                        stilo = "style='background-color: #bbbbbb;color: white;'";
                    }
                }
                
                html1 += "<tr>";
                html1 += "    <td>" + arrayMonitoreoBCP[i]['nSolCodigo'] + "</td>";
                html1 += "    <td "+stilo+">" + arrayMonitoreoBCP[i]['cSolTipo'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBCP[i]['canalOperacion'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBCP[i]['fechaOperacion'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBCP[i]['horaOperacion'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBCP[i]['numeroReferenciaDeuda'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBCP[i]['numeroDocumento'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBCP[i]['numeroOperacionRecaudos'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBCP[i]['importeDeudaPagada'] + "</td>";
                //html1 += "    <td>" + arrayMonitoreoBCP[i]['numeroOperacionRecaudos'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBCP[i]['formaPago'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBCP[i]['codigoMoneda'] + "</td>";
                //html1 += "    <td>" + arrayMonitoreoBCP[i]['nProcesado'] + "</td>";
                //html1 += "    <td><a href='https://campus.uss.edu.pe/Campus/DocInternos/DocCalidad/"+arrayMonitoreoBCP[i]['cDocumento']+"' target='_blank' class=''><span class='fa fa-file-pdf-o'></span> Ver</a></td>";
                //html1 += "    <td>"+arrayMonitoreoBCP[i]['nVersion']+"</td>";
                /*if (arrayMonitoreoBCP[i]['nSolTipo'] == 2 ) {
                    html1 += "       <td><button onclick='moni_verPago(" + arrayMonitoreoBCP[i]['nSolCodigo'] + ")' class='btn_acc'><i class='fa fa-eye' title='Ver'></i></button></td>";
                }else{
                    html1 += "       <td></td>";
                }*/
                //html1 += "       <button onclick='moni_calificarProveedor("+arrayMonitoreoBCP[i]['nProvCodigo']+")' class='btn_acc'><i class='fa fa-' title='Ver'></i></button></td>";
                html1 += "</tr>";
            }
        }

        var table = $('#tabla_list_bcp').DataTable();
        $("#cantidadRecibos").html("<b>"+cantidadRecibos+"</b>");
        $("#cantidadRecibosPagados").html("<b>"+cantidadRecibosPagados+"</b>");
        $("#totaldepago").html("<b> S/ "+totaldepago+"</b>");
        table.destroy();
        $("#tabListaProveedores").html(html1);
        $('#tabla_list_bcp').DataTable({ "order": [[ 0, "desc" ]] });
    }else{
        var table = $('#tabla_list_bcp').DataTable();
        table.destroy();
        $("#tabListaProveedores").html("");
        $('#tabla_list_bcp').DataTable({ "order": [[ 0, "desc" ]] });
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
            "               <pre id='vistaJson'></pre>"+
            /*"                <table class='table table-bordered tabla_detalle' style='width: 100%;'>" +
            "                    <tbody>" +
            "                        <tr>" +
            "                            <td style='width: 20%;' class='tdCabDet'><b>RUC</b></td>" +
            "                            <td style='width: 30%;' id='ppRuc'></td>" +
            "                            <td style='width: 20%;' class='tdCabDet'><b>Razón Social</b></td>" +
            "                            <td style='width: 30%;' id='ppRazon'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet' ><b>Tipo persona</b></td>" +
            "                            <td id='ppTipoPer'></td>" +
            "                            <td class='tdCabDet'><b>Agente de retención</b></td>" +
            "                            <td id='ppRet'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet'><b>Domicilio</b></td>" +
            "                            <td colspan='3' id='ppDomi'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet' ><b>Teléfono</b></td>" +
            "                            <td id='ppTel'></td>" +
            "                            <td class='tdCabDet'><b>Correo</b></td>" +
            "                            <td id='ppCor'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet'><b>Representante Legal </b></td>" +
            "                            <td id='ppRepLeg'></td>" +
            "                            <td class='tdCabDet' ><b>Fecha de inicio de operaciones</b></td>" +
            "                            <td id='ppFecOpe'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet' ><b>Contacto </b></td>" +
            "                            <td id='ppCont'></td>" +
            "                            <td class='tdCabDet'><b>Correo de contacto </b></td>" +
            "                            <td id='ppContCorr'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet'><b>Nº de sucursales</b></td>" +
            "                            <td colspan='3' id='ppSucur'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet'><b>Producto</b></td>" +
            "                            <td  id='ppPro'></td>" +
            "                            <td class='tdCabDet'><b>CIU</b></td>" +
            "                            <td  id='ppCiu'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet'><b>Forma Pago 1</b></td>" +
            "                            <td  id='ppPago1'></td>" +
            "                            <td class='tdCabDet'><b>Cantidad de días</b></td>" +
            "                            <td  id='ppPagoDias1'></td>" +
            "                        </tr>" +
            "                        <tr id='divForPago2'>" +
            "                            <td class='tdCabDet'><b>Forma Pago 2</b></td>" +
            "                            <td  id='ppPago2'></td>" +
            "                            <td class='tdCabDet'><b>Cantidad de días</b></td>" +
            "                            <td  id='ppPagoDias2'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet'><b>Cuenta 1</b></td>" +
            "                            <td  id='ppCuenta1'></td>" +
            "                            <td class='tdCabDet'><b>Número de cuenta 1</b></td>" +
            "                            <td  id='ppCuentaNum1'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet'><b>Cuenta 2</b></td>" +
            "                            <td  id='ppCuenta2'></td>" +
            "                            <td class='tdCabDet'><b>Número de cuenta 2</b></td>" +
            "                            <td  id='ppCuentaNum2'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet'><b>Cuenta Detracción </b></td>" +
            "                            <td  id='ppCuenta3'></td>" +
            "                            <td class='tdCabDet'><b>Número de cuenta detracción</b></td>" +
            "                            <td  id='ppCuentaNum3'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet'><b>Referencia 1</b></td>" +
            "                            <td colspan='3' id='ppRef1'></td>" +
            "                        </tr>" +
            "                        <tr id='divppRef2'>" +
            "                            <td class='tdCabDet'><b>Referencia 2</b></td>" +
            "                            <td colspan='3' id='ppRef2'></td>" +
            "                        </tr>" +
            "                        <tr id='divppRef3'>" +
            "                            <td class='tdCabDet'><b>Referencia 3</b></td>" +
            "                            <td colspan='3' id='ppRef3'></td>" +
            "                        </tr>" +
            "                        <tr>" +
            "                            <td class='tdCabDet'><b>Documentos</b></td>" +
            "                            <td colspan='3' id='ppDoc'></td>" +
            "                        </tr>" +
            "                    </tbody>" +
            "                </table>" +*/
            "            </div>",
        onOpen: function () {
            if (nSolCodigo > 0) {
                for (var i in arrayMonitoreoBCP) {

                    if (arrayMonitoreoBCP[i]['nSolCodigo'] == nSolCodigo) {

                        $("#pnSolCodigo").val(nSolCodigo);
                        console.log(arrayMonitoreoBCP[i]['cJsnCadena']);
                        console.log(syntaxHighlight(arrayMonitoreoBCP[i]['cJsnCadena']));
                        $("#vistaJson").html(syntaxHighlight(arrayMonitoreoBCP[i]['cJsnCadena']));
                        
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

function moni_calificarProveedor(cod) {
    console.log(cod);

}