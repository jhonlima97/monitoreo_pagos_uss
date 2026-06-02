
var arrayConciliacionBCP = [];
var reader = new FileReader;

function onChangeBCP(event) {
    var file = event.target.files[0];
    reader.readAsText(file);
    reader.onload = onLoadBCP;
}

function onLoadBCP() {
    var result = reader.result; // Obtienes el texto
    // En tu ejemplo lo obtienes de una petición HTTP

    var lineas = result.split('\n');

    var htmlcab = "";
    var htmlcur = "";
    var htmlpie = "";
    console.log(lineas.length);
    var canti = 0;
    var cuentas = "";
    var idss = "";

    // listamos las ctacte
    for (var linea of lineas) {

        if (canti == lineas.length) {
            break;
        } else {


            if (canti > 0 && canti < lineas.length) { // cuerpo 

                var cCtaCteRec = linea.slice(202, 217);
                cCtaCteRec = cCtaCteRec.trim();
                if (cCtaCteRec.length < 15) {
                    cCtaCteRec = linea.slice(29, 45);
                }

                if (cCtaCteRec == '000000000000000')
                {
                    cuentas += linea.slice(13, 27).replace(/^0+/, '') + ",";
                }
                else
                {
                    
                    cuentas +=cCtaCteRec + "," ;//linea.slice(29, 45) + ",";
                }

                idss += linea.slice(13, 27).replace(/^0+/, '')  + ",";
                
            }
        }
        canti++;
    }

    cuentas = cuentas.substring(0, cuentas.length);
    idss = idss.substring(0, idss.length);
    //console.log(cuentas.substring(0, cuentas.length - 1));

    //Consulta los recibos
    var Data = {
        cDetalleId: idss,
        cDetalle: cuentas,
        cUsrCodigo: "-"
    };

    console.log(Data);
    $.ajax({
        type: "POST",
        url: "../Forms/srvGeneral.svc/Get_Listado_ConciliacionBCP",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            //console.log("mostrando departamentos");
            //console.log(response);
            console.log(response.d);
            var foo = response.d;

            arrayConciliacionBCP = response.d;

            var divColor = "";
            var divImagen = "";
            var cCtaCteRec = "";

            canti = 0;
            for (var linea of lineas) {

                if (canti == lineas.length) {
                    break;
                } else {
                    if (canti == 0) { //cabecera

                        htmlcab += "<tr>";
                        htmlcab += "<td>" + linea.slice(2, 12) + "</td>";//Cuenta
                        htmlcab += "<td>" + linea.slice(14, 22) + "</td>";//Fecha
                        htmlcab += "<td>" + linea.slice(22, 31).replace(/^0+/, '') + "</td>";//Nº Registros
                        htmlcab += "<td>" + linea.slice(31, 44).replace(/^0+/, '') + "." + linea.slice(44, 46) + "</td>";//Monto
                        htmlcab += "<td>" + linea.slice(62, 68) + "</td>";//Servicio
                        //htmlcab += "<td></td>";
                        htmlcab += "</tr>";
                    }

                    if (canti > 0) { // cuerpo 

                        cCtaCteRec = linea.slice(202, 217);
                        cCtaCteRec = cCtaCteRec.trim();
                        if (cCtaCteRec.length < 15) {
                            cCtaCteRec = linea.slice(29, 45);
                        }

                        for (var i in arrayConciliacionBCP) {
                            if (linea.slice(196, 197) != 'E') {
                                //if linea.slice(29, 45) == "000000000000000"
                                if (arrayConciliacionBCP[i]['cCtaCteRecibo'] == cCtaCteRec) {
                                    if (arrayConciliacionBCP[i]['nEstado'] == 1) {
                                        divImagen = "<img src='../img/check1.png' style='width:17px' alt='no'>";
                                        divColor = "";
                                    } else {
                                        divImagen = "<img src='../img/eliminar1.png' style='width:17px' alt='no'>";
                                        divColor = "style='background-color: rgb(255 176 176 / 18%);'";
                                    }
                                    break;
                                }
                            } else {
                                divImagen = "<img src='../img/check1.png' style='width:17px' alt='no'>";
                                divColor = "";
                            }
                        }

                        if (linea.length <= 74) {

                            //"<td>Cuenta</td>" +
                            //    "<td>Fecha</td>" +
                            //    "<td>Nº Registros</td>" +
                            //    "<td>Monto</td>" +
                            //    "<td>Servicio</td>" +
                            htmlcab += "<tr>";
                            htmlcab += "<td>" + linea.slice(2, 12) + "</td>";//Cuenta
                            htmlcab += "<td>" + linea.slice(14, 22) + "</td>";//Fecha
                            htmlcab += "<td>" + linea.slice(22, 31).replace(/^0+/, '') + "</td>";//Nº Registros
                            htmlcab += "<td>" + linea.slice(31, 44).replace(/^0+/, '') + "." + linea.slice(44, 46) + "</td>";//Monto
                            htmlcab += "<td>" + linea.slice(62, 68) + "</td>";//Servicio
                            //htmlcab += "<td></td>";
                            htmlcab += "</tr>";
                        }
                        else {

                            //"<tr>" +
                            //    "<td>Cuenta</td>" +
                            //    "<td>CodIdeDep</td>" +
                            //    "<td>DatAddDep</td>" +
                            //    "<td>Fecha</td>" +
                            //    "<td>PagMon</td>" +
                            //    "<td>PagMor</td>" +
                            //    "<td>PagTot</td>" +
                            //    "<td>NumOperacion</td>" +
                            //    "<td>Terminal</td>" +
                            //    "<td>HoraAte</td>" +
                            //    "<td>Valor</td>" +
                            //    "</tr>" +
                            //if (linea.length > 75)

                            //cCtaCteRec = linea.slice(29, 45);
                            

                            htmlcur += "<tr " + divColor + ">";

                            htmlcur += "<td>" + linea.slice(2, 12) + "</td>";//Cuenta
                            htmlcur += "<td>" + linea.slice(13, 27).replace(/^0+/, '') + "</td>";//CodIdeDep
                            htmlcur += "<td>" + cCtaCteRec + "</td>";//DatAddDep
                            htmlcur += "<td>" + linea.slice(55, 65) + "</td>";//Fecha
                            htmlcur += "<td>" + linea.slice(74, 86).replace(/^0+/, '') + "." + linea.slice(86, 88) + "</td>";//PagMon
                            htmlcur += "<td>" + linea.slice(89, 102).replace(/^0+/, '') + "." + linea.slice(102, 103) + "</td>";//PagMor
                            htmlcur += "<td>" + linea.slice(104, 116).replace(/^0+/, '') + "." + linea.slice(116, 118) + "</td>";//PagTot
                            htmlcur += "<td>" + linea.slice(124, 130) + "</td>";//NumOperacion
                            htmlcur += "<td>" + linea.slice(156, 168) + "</td>";//Terminal
                            htmlcur += "<td>" + linea.slice(168, 174) + "</td>";//HoraAte
                            htmlcur += "<td>" + linea.slice(196, 197) + "</td>";//Valor
                            htmlcur += "<td>" + divImagen + "</td>";
                            htmlcur += "</tr>";
                        }
                    }


                }
                canti++;
            }

            $("#listaCabeza").html(htmlcab);
            $("#listaCuerpo").html(htmlcur);
            //$("#listaTotales").html(htmlpie);

        },
        error: function (result) {
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });

}

function subirDocumento() {
    console.log("andyy");
    var input = myForm.myInput;
    var reader = new FileReader;
    input.addEventListener('change', onChangeBCP);
}

var arrayProveedores = [];
function navegacion_ConciliacionBCP_aspx() {
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
        prov_LoadForm_BCP();
    }
}

function prov_LoadForm_BCP() {
    var html = "<style> .tdCabDet{background-color: #cdcdcd;color: #6f6f6f;} </style>" +
        "<div class='page-title'>" +
        "    <div class='title_left' >" +
        "        <h3>Lector de conciliación BCP</h3>" +
        "    </div >" +
        "</div >" +
        "<div class='clearfix'></div>" +
        "<div class='row'>" +
        "    <div class='col-md-12 col-sm-12 col-xs-12' id='frmLista'>" +
        "        <div class='x_panel' style='padding: 0px;'>" +
        //"            <div class='x_title'>" +
        //"                <button class='btn btn-sm btn_pri_nuevo' onclick='reso_nuevo_resolucion();'> <span class='fa fa-plus-circle fa_new'></span> Nuevo Indicador</button>" +
        //"            </div>" +
        "            <div class='x_content'>" +
        "<div class='col-md-12'>" +
            "<form name='myForm' style='padding: 10px;border: 1px solid #ccc;background-color: #97d700;color: #4f4f4f;'>" +
            "<label>Seleccione un archivo</label>" +
            "<input name='myInput' type='file' accept='.txt' >" + // onchange='subirDocumento()'
            "</form>" +
        "</div>" +

        "<div class='col-md-12'>" +
            "<label style='background-color: #9d9d9d;padding: 2px;color: white;width: 100%;' >Cabecera</label>" +
            "<table class='table' style='margin-bottom: 10px;'>" +
                "<thead>" +
                    "<tr>" +
                        "<td>Cuenta</td>" +
                        "<td>Fecha</td>" +
                        "<td>Nº Registros</td>" +
                        "<td>Monto</td>" +
                        "<td>Servicio</td>" +
                    "</tr>" +
                "</thead>" +
                "<tbody id='listaCabeza'>" +
                "</tbody>" +
            "</table>" +
            "<label style='background-color: #9d9d9d;padding: 2px;color: white;width: 100%;'  >Detalle</label>" +
            "<table class='table tablaandy' style='margin-bottom: 10px;'>" +
                "<thead>" +
                "<tr>" +
                    "<td>Cuenta</td>" +
                    "<td>CodIdeDep</td>" +
                    "<td>DatAddDep</td>" +
                    "<td>Fecha</td>" +
                    "<td>PagMon</td>" +
                    "<td>PagMor</td>" +
                    "<td>PagTot</td>" +
                    "<td>NumOperacion</td>" +
                    "<td>Terminal</td>" +
                    "<td>HoraAte</td>" +
                    "<td>Valor</td>" +
                "</tr>" +
                "</thead>" +
                "<tbody id='listaCuerpo'>" +
                "</tbody>" +
            "</table>" +
            "<label style='background-color: #9d9d9d;padding: 2px;color: white;width: 100%;'  >Totales</label>" +
            "<table class='table' style='font-size: 10px;margin-bottom: 10px;' >" +
                "<thead>" +
                    "<tr>" +
                        // "<td>Tipo Reg</td>" +
                        "<td>Total de registros grabados</td>" +
                        "<td>Total pagos</td>" +
                        "<td>Total depósitos</td>" +
                        "<td>Total mora</td>" +
                        "<td>Vacío</td>" +
                    "</tr>" +
                "</thead>" +
            "<tbody id='listaTotales'>" +
            "</tbody>" +
            "</table>" +
        "</div>" +
        "        </div>" +
        "    </div>" +
        "</div>";

    $("#FormContenido").html(html);
    $("#frmContenido1").css("display", "none");

    var input = myForm.myInput;

    input.addEventListener('change', onChangeBCP);

}