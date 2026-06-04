var arrayResumenBiPay = [];

function navegacion_ResumenBiPay_aspx() {
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

        resuBiPay_LoadForm();
    }
}

function resuBiPay_LoadForm() {
    var html = "<style> .tdCabDet{background-color: #cdcdcd;color: #6f6f6f;} </style>" +
        "<style>pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }.string { color: green; }.number { color: darkorange; } .boolean { color: blue; } .null { color: magenta; } .key { color: red; } </style>" +
        "<div class='page-title'>" +
        "    <div class='title_left' >" +
        "        <h3>Resumen BiPay</h3>" +
        "    </div >" +
        "</div >" +
        "<div class='clearfix'></div>" +
        "<div class='row'>" +
        "    <div class='col-md-12 col-sm-12 col-xs-12' id='frmLista'>" +
        "        <div class='x_panel'>" +
        "            <div class='x_title'>" +
        "               <button class='btn btn-sm btn_pri_nuevo' onclick='resuBiPay_listarMonitoreo();'> <span class='fa fa-refresh fa_new'></span> Actualizar</button>" +
        "            </div>" +
        "            <div class='x_content'>" +
        "                <div>" +
        "                   <div class='table-responsive'>" +
        "                        <table class='table table-bordered tabResumen' id='tabla_list_resumen_bipay'>" +
        "                            <thead>" +
        "                                <tr> " +
        "                                    <td rowspan='2'>Fecha</td>" +
        "                                    <td rowspan='2'>Total día (S/)</td>" +
        "                                    <td rowspan='2'>Movimientos</td>" +
        "                                    <td colspan='2'>01: Aplicativo móvil</td>" +
        "                                    <td colspan='2'>02: USSD</td>" +
        "                                </tr> " +
        "                                <tr> " +
        "                                    <td>S/</td>" +
        "                                    <td>#</td>" +
        "                                    <td>S/</td>" +
        "                                    <td>#</td>" +
        "                                </tr> " +
        "                            </thead>" +
        "                            <tbody id='tabListaResumenBiPay' >" +
        "                           </tbody>" +
        "                        </table>" +
        "                   </div>" +
        "               </div>" +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "</div>";

    $("#FormContenido").html(html);

    resuBiPay_listarMonitoreo();

    $("#frmContenido1").css("display", "none");
}

function resuBiPay_listarMonitoreo() {

    var Data = {
    };

    $.ajax({
        type: "POST",
        url: "../Forms/srvGeneral.svc/Get_Listado_ResumenBiPay",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            arrayResumenBiPay = response.d;

            resuBiPay_LoadForm_lista_impresion();
        },
        error: function (result) {
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });
}

function resuBiPay_LoadForm_lista_impresion() {

    var html1 = '';

    if (arrayResumenBiPay.length > 0) {

        for (var i in arrayResumenBiPay) {

            if (arrayResumenBiPay[i]['Tipo'] == 1) {
                html1 += "<tr>";
            } else {
                html1 += "<tr class='tr_total'>";
            }

            html1 += "    <td>" + arrayResumenBiPay[i]['fechaOperacion'] + "</td>";
            html1 += "    <td>" + arrayResumenBiPay[i]['tDia'] + "</td>";
            html1 += "    <td>" + arrayResumenBiPay[i]['oDia'] + "</td>";

            html1 += "    <td>" + arrayResumenBiPay[i]['C01'] + "</td>";
            html1 += "    <td>" + arrayResumenBiPay[i]['oC01'] + "</td>";

            html1 += "    <td>" + arrayResumenBiPay[i]['C02'] + "</td>";
            html1 += "    <td>" + arrayResumenBiPay[i]['oC02'] + "</td>";

            html1 += "</tr>";
        }

        $("#tabListaResumenBiPay").html(html1);

    } else {
        $("#tabListaResumenBiPay").html("");
    }
}
