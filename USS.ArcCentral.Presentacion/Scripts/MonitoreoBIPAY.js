var arrayMonitoreoBiPay = [];

function navegacion_ServiciosBiPay_aspx() {
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
        moni_LoadFormBiPay();
    }
}

function moni_LoadFormBiPay() {
    var html = "<style> .tdCabDet{background-color: #cdcdcd;color: #6f6f6f;} </style>" +
        "<style>pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }.string { color: green; }.number { color: darkorange; } .boolean { color: blue; } .null { color: magenta; } .key { color: red; } </style>" +
        "<div class='page-title'>" +
        "    <div class='title_left' >" +
        "        <h3>Monitoreo BiPay</h3>" +
        "    </div >" +
        "</div >" +
        "<div class='clearfix'></div>" +
        "<div class='row'>" +
        "    <div class='col-md-12 col-sm-12 col-xs-12' id='frmLista'>" +
        "        <div class='x_panel'>" +
        "            <div class='x_title' style='padding-bottom: 12px;'>" +
        "               <div class='col-md-3'> Del <input type='date' class='form-control' id='fechaBiPayInicio'> </div>" +
        "               <div class='col-md-3'> Hasta <input type='date' class='form-control' id='fechaBiPayFin'> </div>" +
        "               <button class='btn btn-sm btn-success' onclick='moni_listarMonitoreoBiPay();'> <span class='fa fa-search fa_new'></span> Listar</button>" +
        "            </div>" +
        "            <div class='x_content'>" +
        "               <div style='border: 1px solid silver;padding: 5px 0px;border-radius: 10px;'>" +
        "                   <div style='display: inline-block;width: 100%;'>" +
        "                       <div class='form-group col-md-3' style='margin-bottom: 0px;' >" +
        "                           <label>Tipo de solicitud</label>" +
        "                           <select class='form-control' id='cboTipoSolicitudBiPay' onchange='moni_LoadForm_lista_impresion_BiPay()'>" +
        "                               <option value='0'>Todos</option>" +
        "                               <option value='1'>CONSULTA</option>" +
        "                               <option value='2' selected>PAGO</option>" +
        "                               <option value='3'>EXTORNO</option>" +
        "                           </select>" +
        "                       </div>" +
        "                       <div class='form-group col-md-3' style='margin-bottom: 0px;' >" +
        "                           <label>Canal de operación</label>" +
        "                           <select class='form-control' id='cboCanalOperacionBiPay' onchange='moni_LoadForm_lista_impresion_BiPay()'>" +
        "                               <option value='-'>Todos</option>" +
        "                               <option value='01'>01: Aplicativo móvil</option>" +
        "                               <option value='02'>02: USSD</option>" +
        "                           </select>" +
        "                       </div>" +
        "                   </div>" +
        "                </div>" +
        "                <div class='table-responsive'>" +
        "                    <table class='display' id='tabla_list_bipay'>" +
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
        "                            </tr>" +
        "                        </thead>" +
        "                        <tbody id='tabListaBiPay'>" +
        "                        </tbody>" +
        "                    </table>" +
        "                </div>" +
        "                <div>" +
        "                   <div class='table-responsive'>" +
        "                        <table class='table table-bordered' style='width:50%;margin-left:auto;margin-right:auto;'>" +
        "                            <tbody>" +
        "                                <tr>" +
        "                                    <td>Monto total de pago</td>" +
        "                                    <td id='totaldepagoBiPay'>S/ 0</td>" +
        "                                </tr>" +
        "                                <tr>" +
        "                                    <td>Número de solicitudes de pago</td>" +
        "                                    <td id='cantidadRecibosBiPay'>0</td>" +
        "                                </tr>" +
        "                                <tr>" +
        "                                    <td>Número de solicitudes de pago - procesadas</td>" +
        "                                    <td id='cantidadRecibosPagadosBiPay'>0</td>" +
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
    $("#fechaBiPayInicio").val(today);
    $("#fechaBiPayFin").val(today);

    moni_listarMonitoreoBiPay();

    $("#frmContenido1").css("display", "none");
}

function moni_listarMonitoreoBiPay() {

    var fechaBiPayInicio = $("#fechaBiPayInicio").val().toString();
    var fechaBiPayFin = $("#fechaBiPayFin").val().toString();

    fechaBiPayInicio = fechaBiPayInicio.replace("-", "").replace("-", "");
    fechaBiPayFin = fechaBiPayFin.replace("-", "").replace("-", "");

    var Data = {
        cFecha: fechaBiPayInicio,
        cFechaFin: fechaBiPayFin,
        cUsrCodigo: cPerCodigoActual
    };

    $.ajax({
        type: "POST",
        url: "../Services/srvGeneral.svc/Get_Listado_ConsultasBiPay",  // placeholder
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            arrayMonitoreoBiPay = response.d;
            moni_LoadForm_lista_impresion_BiPay();
        },
        error: function (result) {
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });
}

function moni_LoadForm_lista_impresion_BiPay() {

    var cboTipoSol = $("#cboTipoSolicitudBiPay").val();
    var cboCanalOpe = $("#cboCanalOperacionBiPay").val();

    var table = $('#tabla_list_bipay').DataTable();
    table.destroy();

    if (arrayMonitoreoBiPay.length > 0) {
        var html1 = '';
        var cantidadRecibos = 0;
        var cantidadRecibosPagados = 0;
        var totaldepago = 0;

        for (var i in arrayMonitoreoBiPay) {
            var validador = 0;

            // Filtro tipo de solicitud
            if (cboTipoSol > 0) {
                if (arrayMonitoreoBiPay[i]['nSolTipo'] == cboTipoSol) validador++;
            } else {
                validador++;
            }

            // Filtro canal de operación
            if (cboCanalOpe != '-') {
                if (arrayMonitoreoBiPay[i]['canalOperacion'] == cboCanalOpe) validador++;
            } else {
                validador++;
            }

            if (validador == 2) {
                var stilo = "";

                if (arrayMonitoreoBiPay[i]['nSolTipo'] == 2) {
                    cantidadRecibos++;
                    if (arrayMonitoreoBiPay[i]['nProcesado'] == 1) {
                        stilo = "style='background-color: #65b068;color: white;'";
                        cantidadRecibosPagados++;
                        totaldepago += parseFloat(arrayMonitoreoBiPay[i]['importeDeudaPagada']);
                    } else {
                        stilo = "style='background-color: #bbbbbb;color: white;'";
                    }
                }

                html1 += "<tr>";
                html1 += "    <td>" + arrayMonitoreoBiPay[i]['nSolCodigo'] + "</td>";
                html1 += "    <td " + stilo + ">" + arrayMonitoreoBiPay[i]['cSolTipo'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBiPay[i]['canalOperacion'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBiPay[i]['fechaOperacion'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBiPay[i]['horaOperacion'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBiPay[i]['numeroReferenciaDeuda'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBiPay[i]['numeroDocumento'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBiPay[i]['numeroOperacionRecaudos'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBiPay[i]['importeDeudaPagada'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBiPay[i]['formaPago'] + "</td>";
                html1 += "    <td>" + arrayMonitoreoBiPay[i]['codigoMoneda'] + "</td>";
                html1 += "</tr>";
            }
        }

        $("#cantidadRecibosBiPay").html("<b>" + cantidadRecibos + "</b>");
        $("#cantidadRecibosPagadosBiPay").html("<b>" + cantidadRecibosPagados + "</b>");
        $("#totaldepagoBiPay").html("<b> S/ " + totaldepago + "</b>");
        $("#tabListaBiPay").html(html1);

    } else {
        $("#tabListaBiPay").html("");
    }

    $('#tabla_list_bipay').DataTable({ "order": [[0, "desc"]] });
}

function moni_verPagoBiPay(nSolCodigo) {
    var titulo = (nSolCodigo == 0) ? "Nuevo documento" : "Datos de pago BiPay";

    $.confirm({
        columnClass: 'large',
        title: titulo,
        content: "<div>" +
            "   <input type='hidden' id='pnSolCodigoBiPay' value='0' />" +
            "   <pre id='vistaJsonBiPay'></pre>" +
            "</div>",
        onOpen: function () {
            if (nSolCodigo > 0) {
                for (var i in arrayMonitoreoBiPay) {
                    if (arrayMonitoreoBiPay[i]['nSolCodigo'] == nSolCodigo) {
                        $("#pnSolCodigoBiPay").val(nSolCodigo);
                        $("#vistaJsonBiPay").html(syntaxHighlight(arrayMonitoreoBiPay[i]['cJsnCadena']));
                    }
                }
            }
        },
        buttons: {
            Cerrar: function () { }
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