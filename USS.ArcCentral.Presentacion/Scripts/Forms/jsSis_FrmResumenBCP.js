

var arrayResumenBCP = [];
function navegacion_ResumenBCP_aspx() {
    if (sessvars.username != "") {
        var html = "<div class='modal fade bs-example-modal-sm' tabindex='-1' role='dialog' aria-hidden='true'>" +
            "   <div class='modal-dialog modal-sm'>" +
            "       <div id='DivModal' class='modal-content'>" +
            "       </div>" +
            "   </div>" +
            "</div>" +
            "<div id='FormContenido'></div>";
        $("#Contenido").html(html);
        $("#Contenido").css('min-height', '660px');
        resuBCP_LoadForm();
    }
}

function resuBCP_LoadForm() {
    var html = "<style> .tdCabDet{background-color: #cdcdcd;color: #6f6f6f;} </style>" +
        "<style>pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }.string { color: green; }.number { color: darkorange; } .boolean { color: blue; } .null { color: magenta; } .key { color: red; } </style>" +
        "<div class='page-title'>" +
        "    <div class='title_left' >" +
        "        <h3>Resumen BCP</h3>" +
        "    </div >" +
        "</div >" +
        "<div class='clearfix'></div>" +
        "<div class='row'>" +
        "    <div class='col-md-12 col-sm-12 col-xs-12' id='frmLista'>" +
        "        <div class='x_panel'>" +
        "            <div class='x_title'>" +
        "               <button class='btn btn-sm btn_pri_nuevo' onclick='resuBCP_listarMonitoreo();'> <span class='fa fa-refresh fa_new'></span> Actualizar</button>" +
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
        "                                    <td colspan='2'>BM: Banca Móvil </td>" +
        "                                    <td colspan='2'>TN: Telecrédito</td>" +
        "                                    <td colspan='2'>IB: Banca por internet (ViaBCP)</td>" +
        "                                    <td colspan='2'>FI: Ventanilla</td>" +
        "                                    <td colspan='2'>PZ: Agente BCP</td>" +
        "                                    <td colspan='2'>CJ: Cajero Automático</td>" +
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

    resuBCP_listarMonitoreo();

    $("#frmContenido1").css("display", "none");

}

function resuBCP_listarMonitoreo() {

    var Data = {
    };
    $.ajax({
        type: "POST",
        url: "../Forms/srvGeneral.svc/Get_Listado_ResumenBCP",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            //console.log("mostrando departamentos");
            //console.log(response);
            //console.log(response.d);
            var foo = response.d;

            arrayResumenBCP = response.d;
            resuBCP_LoadForm_lista_impresion();
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

function resuBCP_LoadForm_lista_impresion() {

    // var cboTipoSol = $("#cboTipoSolicitud").val(); 
    // var cboCanalOpe = $("#cboCanalOperacion").val(); 
    //console.log(arrayResumenBCP.length );
    var html1 = '';
    if (arrayResumenBCP.length > 0) {

        for (var i in arrayResumenBCP) {

            if (arrayResumenBCP[i]['Tipo'] == 1) {
                html1 += "<tr>";
                html1 += "    <td>" + arrayResumenBCP[i]['fechaOperacion'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['tDia'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oDia'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['BM'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oBM'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['TN'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oTN'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['IB'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oIB'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['FI'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oFI'] + "</td>";            
                html1 += "    <td>" + arrayResumenBCP[i]['PZ'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oPZ'] + "</td>";            
                html1 += "    <td>" + arrayResumenBCP[i]['CJ'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oCJ'] + "</td>";
                html1 += "</tr>";
            }else{
                html1 += "<tr class='tr_total'>";
                html1 += "    <td>" + arrayResumenBCP[i]['fechaOperacion'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['tDia'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oDia'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['BM'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oBM'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['TN'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oTN'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['IB'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oIB'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['FI'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oFI'] + "</td>";            
                html1 += "    <td>" + arrayResumenBCP[i]['PZ'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oPZ'] + "</td>";            
                html1 += "    <td>" + arrayResumenBCP[i]['CJ'] + "</td>";
                html1 += "    <td>" + arrayResumenBCP[i]['oCJ'] + "</td>";
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
