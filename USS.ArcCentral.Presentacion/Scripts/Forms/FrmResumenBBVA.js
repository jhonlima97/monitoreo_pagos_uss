

var arrayResumenBBVA = [];
function navegacion_ResumenBBVA_aspx() {
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
        resuBBVA_LoadForm();
    }
}

function resuBBVA_LoadForm() {
    var html = "<style> .tdCabDet{background-color: #cdcdcd;color: #6f6f6f;} </style>" +
        "<style>pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }.string { color: green; }.number { color: darkorange; } .boolean { color: blue; } .null { color: magenta; } .key { color: red; } </style>" +
        "<div class='page-title'>" +
        "    <div class='title_left' >" +
        "        <h3>Resumen BBVA</h3>" +
        "    </div >" +
        "</div >" +
        "<div class='clearfix'></div>" +
        "<div class='row'>" +
        "    <div class='col-md-12 col-sm-12 col-xs-12' id='frmLista'>" +
        "        <div class='x_panel'>" +
        "            <div class='x_title'>" +
        "               <button class='btn btn-sm btn_pri_nuevo' onclick='resuBBVA_listarMonitoreo();'> <span class='fa fa-refresh fa_new'></span> Actualizar</button>" +
        "            </div>" +
        "            <div class='x_content'>" +
        "                <div>" +
        "                   <div class='table-responsive'>" +
        "                        <table class='table table-bordered tabResumen' id='tabla_list_resumen'>" +
        "                            <thead>" +                                
        "                                <tr> " +                                  
        "                                    <td rowspan='2'>Fecha</td>" +                                  
        "                                    <td rowspan='2'>Total día (S/)</td>" +
        "                                    <td rowspan='2'>Movimientos</td>" +
        "                                    <td colspan='2'>TF: Terminal financiero </td>" +
        "                                    <td colspan='2'>CN: Banca por internet</td>" +
        "                                    <td colspan='2'>RD: Redex</td>" +
        "                                    <td colspan='2'>MC: Cajero Automático</td>" +
        "                                    <td colspan='2'>BX: Saldo express</td>" +
        "                                    <td colspan='2'>BT: Banca por teléfono</td>" +
        "                                </tr> " +
        "                                <tr> " +
        "                                    <td>S/</td>" +
        "                                    <td>#</td>" +
        "                                    <td>S/</td>" +
        "                                    <td>#</td>" +
        "                                    <td>S/</td>" +
        "                                    <td>#</td>" +
        "                                    <td>S/</td>" +
        "                                    <td>#</td>" +
        "                                    <td>S/</td>" +
        "                                    <td>#</td>" +
        "                                    <td>S/</td>" +
        "                                    <td>#</td>" +
        "                                </tr> " +
        "                            </thead>" +
        "                            <tbody id='tabListaResumen' >" +                                
        "                           </tbody>" +
        "                        </table>" +
        "                   </div>" +
        "               </div>" +
        /*"                <div class='divInformativo1' >" +
        "                   <label for=''> <p id='cantidadRecibos'> <b>  Cantidad de recibos pagados: 0 </b></p></label>" +
        "                </div>" +
        "                <div class='divInformativo1'>" +
        "                   <label for=''> <p id='totaldepago'><b>  Total de pago: 0</b></p></label>" +
        "                </div>" +*/
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "</div>";

    $("#FormContenido").html(html);

    /*var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    $("#fechaGuiaInicio").val(today);
    $("#fechaGuiaFin").val(today);*/

    resuBBVA_listarMonitoreo();

    $("#frmContenido1").css("display", "none");

}

function resuBBVA_listarMonitoreo() {

    var Data = {
    };
    $.ajax({
        type: "POST",
        url: "../Forms/srvGeneral.svc/Get_Listado_ResumenBBVA",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            //console.log("mostrando departamentos");
            //console.log(response);
            //console.log(response.d);
            var foo = response.d;

            arrayResumenBBVA = response.d;
            resuBBVA_LoadForm_lista_impresion();
            //console.log(arrayConsultas);
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

function resuBBVA_LoadForm_lista_impresion() {

    // var cboTipoSol = $("#cboTipoSolicitud").val(); 
    // var cboCanalOpe = $("#cboCanalOperacion").val(); 
    //console.log(arrayResumenBBVA.length );
    var html1 = '';
    if (arrayResumenBBVA.length > 0) {

        for (var i in arrayResumenBBVA) {

            if (arrayResumenBBVA[i]['Tipo'] == 1) {
                html1 += "<tr>";
                html1 += "    <td>" + arrayResumenBBVA[i]['fechaOperacion'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['tDia'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oDia'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['TF'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oTF'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['CN'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oCN'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['RD'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oRD'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['MC'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oMC'] + "</td>";            
                html1 += "    <td>" + arrayResumenBBVA[i]['BX'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oBX'] + "</td>";            
                html1 += "    <td>" + arrayResumenBBVA[i]['BT'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oBT'] + "</td>";
                html1 += "</tr>";
            }else{
                html1 += "<tr class='tr_total'>";
                html1 += "    <td>" + arrayResumenBBVA[i]['fechaOperacion'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['tDia'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oDia'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['TF'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oTF'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['CN'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oCN'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['RD'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oRD'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['MC'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oMC'] + "</td>";            
                html1 += "    <td>" + arrayResumenBBVA[i]['BX'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oBX'] + "</td>";            
                html1 += "    <td>" + arrayResumenBBVA[i]['BT'] + "</td>";
                html1 += "    <td>" + arrayResumenBBVA[i]['oBT'] + "</td>";
                html1 += "</tr>";

            }


           
        }
        //console.log(html1);
        //var table = $('#tabla_list_proveedores').DataTable();
        //$("#cantidadRecibos").html("<b>"+cantidadRecibos+"</b>");
        //$("#cantidadRecibosPagados").html("<b>"+cantidadRecibosPagados+"</b>");
        //$("#totaldepago").html("<b> S/ "+totaldepago+"</b>");
        //table.destroy();
        $("#tabListaResumen").html(html1);
        //$('#tabla_list_proveedores').DataTable();
    }else{
        //var table = $('#tabla_list_proveedores').DataTable();
        //table.destroy();
        $("#tabListaResumen").html("");
        //$('#tabla_list_proveedores').DataTable();
    }
}
