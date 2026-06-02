
var arrayConciliacionGKN = [];
var reader = new FileReader;

function onChangeGKN(event) {
    var file = event.target.files[0];
    reader.readAsText(file);
    reader.onload = onLoadGKN;
}

function onLoadGKN() {
    var result = reader.result; // Obtienes el texto
    // En tu ejemplo lo obtienes de una petición HTTP

    var lineas = result.split('\n');

    var htmlcab = "";
    var htmlcur = "";
    var htmlpie = "";
    console.log(lineas.length);
    var canti = 0;
    var cuentas = "";

    // listamos las ctacte
    for (var linea of lineas) {

        if (canti == lineas.length) {
            break;
        } else {

            if (canti > 0 && canti < lineas.length) { // cuerpo 
                if (linea.slice(29, 45) == '000000000000000')
                {
                    cuentas += linea.slice(13, 27).replace(/^0+/, '') + ",";
                }
                else
                {
                    cuentas += linea.slice(29, 45) + ",";
                }
                
            }
        }
        canti++;
    }

    cuentas = cuentas.substring(0, cuentas.length);
    //console.log(cuentas.substring(0, cuentas.length - 1));

    //Consulta los recibos
    var Data = {
        cDetalle: cuentas,
        cUsrCodigo: "-"
    };
    $.ajax({
        type: "POST",
        url: "../Forms/srvGeneral.svc/Get_Listado_ConciliacionGKN",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            //console.log("mostrando departamentos");
            //console.log(response);
            console.log(response.d);
            var foo = response.d;

            arrayConciliacionGKN = response.d;

            var divColor = "";
            var divImagen = "";

            canti = 0;
            for (var linea of lineas) {

                if (canti == lineas.length) {
                    break;
                } else {
                    if (canti == 0) { //cabecera

                        htmlcab += "<tr>";
                        htmlcab += "<td>" + linea.slice(1, 4) + "</td>";//Canal
                        htmlcab += "<td>" + linea.slice(4, 12) + "</td>";//Fecha
                        htmlcab += "<td>" + linea.slice(13, 21).replace(/^0+/, '') + "</td>";//Nº Registros
                        //htmlcab += "<td>" + linea.slice(61, 70).replace(/^0+/, '') + "." + linea.slice(71, 73) + "</td>";//Monto
                        htmlcab += "<td>" + linea.slice(22, 33).replace(/^0+/, '') + "." + linea.slice(34, 36) + "</td>";//Monto
                        htmlcab += "<td>" + linea.slice(62, 68) + "</td>";//Servicio
                        //htmlcab += "<td></td>";
                        htmlcab += "</tr>";
                    }

                    if (canti > 0) { // cuerpo 

                        for (var i in arrayConciliacionGKN) {
                            if (linea.slice(0, 1) != 'E') {
                                //if linea.slice(29, 45) == "000000000000000"
                                if (arrayConciliacionGKN[i]['cCtaCteRecibo'] == linea.slice(130, 150)) {
                                    if (arrayConciliacionGKN[i]['nEstado'] == 1) {
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
                            htmlcab += "<td>" + linea.slice(1, 4) + "</td>";//Cuenta
                            htmlcab += "<td>" + linea.slice(4, 12) + "</td>";//Fecha
                            htmlcab += "<td>" + linea.slice(13, 21).replace(/^0+/, '') + "</td>";//Nº Registros
                            //htmlcab += "<td>" + linea.slice(22, 35) + "</td>";//Fecha
                            htmlcab += "<td>" + linea.slice(22, 33).replace(/^0+/, '') + "." + linea.slice(34, 36) + "</td>";//Monto
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
                            htmlcur += "<tr " + divColor + ">";

                            htmlcur += "<td>" + linea.slice(1, 21) + "</td>";//Cuenta
                            htmlcur += "<td>" + linea.slice(130, 150).replace(/^0+/, '') + "</td>";//CodIdeDep
                            //htmlcur += "<td>" + linea.slice(130, 150) + "</td>";//DatAddDep
                            htmlcur += "<td>" + linea.slice(21, 35) + "</td>";//Fecha
                            //htmlcur += "<td>" + linea.slice(74, 86).replace(/^0+/, '') + "." + linea.slice(86, 88) + "</td>";//PagMon
                            //htmlcur += "<td>" + linea.slice(89, 102).replace(/^0+/, '') + "." + linea.slice(102, 103) + "</td>";//PagMor
                            htmlcur += "<td>" + linea.slice(79, 89).replace(/^0+/, '') + "." + linea.slice(89, 91) + "</td>";//PagTot
                            htmlcur += "<td>" + linea.slice(99, 105) + "</td>";//NumOperacion
                            //htmlcur += "<td>" + linea.slice(156, 168) + "</td>";//Terminal
                            //htmlcur += "<td>" + linea.slice(168, 174) + "</td>";//HoraAte
                            htmlcur += "<td>" + linea.slice(0, 1) + "</td>";//Valor
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
    input.addEventListener('change', onChangeGKN);
}

var arrayProveedores = [];
function navegacion_ConciliacionGKN_aspx() {
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
        prov_LoadForm_GKN();
    }
}

function prov_LoadForm_GKN() {
    var html = "<style> .tdCabDet{background-color: #cdcdcd;color: #6f6f6f;} </style>" +
        "<div class='page-title'>" +
        "    <div class='title_left' >" +
        "        <h3>Lector de conciliación GKN</h3>" +
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
                        "<td>Canal</td>" +
                        "<td>Fecha</td>" +
                        "<td>Registros</td>" +
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
                    //"<td>CodIdeDep</td>" +
                    "<td>DatAddDep</td>" +
                    "<td>Fecha</td>" +
                    //"<td>PagMon</td>" +
                    //"<td>PagMor</td>" +
                    "<td>PagTot</td>" +
                    "<td>NumOperacion</td>" +
                    //"<td>Terminal</td>" +
                    //"<td>HoraAte</td>" +
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

    input.addEventListener('change', onChangeGKN);

}