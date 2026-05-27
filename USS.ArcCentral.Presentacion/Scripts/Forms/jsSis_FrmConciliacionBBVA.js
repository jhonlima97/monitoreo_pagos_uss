
var arrayConciliacionBBVA = [];
var reader = new FileReader;

function onChangeBBVA(event) {
  var file = event.target.files[0];
  reader.readAsText(file);
  reader.onload = onLoadBBVA;
}

function onLoadBBVA() {
    var result = reader.result; // Obtienes el texto
    // En tu ejemplo lo obtienes de una petición HTTP

    var lineas = result.split('\n');

    var htmlcab = "";
    var htmlcur = "";
    var htmlpie = "";
    // console.log(lineas.length);
    var canti = 0;
    var cuentas = "";

    // listamos las ctacte
    for(var linea of lineas) {

        if (canti == lineas.length - 1  ) {
            break;
        }else{

            if (canti > 0 && canti < lineas.length - 2  ) { // cuerpo 
               cuentas += linea.slice(42, 57) + ",";
            }
        }
        canti ++;
    }

    cuentas = cuentas.substring(0, cuentas.length - 1);
    //console.log(cuentas.substring(0, cuentas.length - 1));

    //Consulta los recibos
    var Data = {
        cDetalle: cuentas,
        cUsrCodigo: "-"
    };
    $.ajax({
        type: "POST",
        url: "../Forms/srvGeneral.svc/Get_Listado_ConciliacionBBVA",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            //console.log("mostrando departamentos");
            //console.log(response);
            // console.log(response.d);
            // var foo = response.d;

            arrayConciliacionBBVA = response.d;

            var divColor  ="";
            var divImagen ="";

            canti = 0;
            for(var linea of lineas) {

                if (canti == lineas.length - 1  ) {
                    break;
                }else{

                    if (canti == 0) { //cabecera
                        htmlcab += "<tr>";
                        //htmlcab +="<td>"+linea.slice(0, 2)+"</td>";//Tipo Reg
                        htmlcab +="<td>"+linea.slice(2, 13)+"</td>";
                        htmlcab +="<td>"+linea.slice(13, 16)+"</td>";
                        htmlcab +="<td>"+linea.slice(16, 19)+"</td>";
                        htmlcab +="<td>"+linea.slice(19, 27)+"</td>";
                        htmlcab +="<td>"+linea.slice(27, 45)+"</td>";
                        //htmlcab +="<td>"+linea.slice(45, 152)+"</td>";
                        //htmlcab +="<td>"+linea+"</td>";
                        htmlcab +="</tr>";     
                    }
                    if (canti > 0 && canti < lineas.length - 2  ) { // cuerpo 

                        for (var i in arrayConciliacionBBVA) {
                            if (  arrayConciliacionBBVA[i]['cCtaCteRecibo'] == linea.slice(42, 57)) {
                                if ( arrayConciliacionBBVA[i]['nEstado'] == 1 ) {
                                     divImagen ="<img src='../img/check1.png' style='width:17px' alt='no'>";
                                     divColor = "";
                                }else{
                                    divImagen ="<img src='../img/eliminar1.png' style='width:17px' alt='no'>";
                                    divColor = "style='background-color: rgb(255 176 176 / 18%);'";
                                }
                                break;
                            }
                        }

                        htmlcur += "<tr "+divColor+">";
                        //htmlcur +="<td>"+linea.slice(0, 2)+"</td>";//Tipo Reg
                        htmlcur +="<td>"+linea.slice(2, 32)+"</td>";
                        htmlcur +="<td>"+linea.slice(32, 42)+"</td>";
                        htmlcur +="<td>"+linea.slice(42, 57)+"</td>";
                        htmlcur +="<td>"+linea.slice(57, 80)+"</td>";
                        htmlcur +="<td>"+linea.slice(80, 93).replace(/^0+/, '')+"."+linea.slice(93, 95)+"</td>";
                        htmlcur +="<td>"+linea.slice(95, 108).replace(/^0+/, '')+"."+linea.slice(108, 110)+"</td>";
                        htmlcur +="<td>"+linea.slice(110, 123).replace(/^0+/, '')+"."+linea.slice(123, 125)+"</td>";
                        htmlcur +="<td>"+linea.slice(125, 129)+"</td>";
                        htmlcur +="<td>"+linea.slice(129, 135)+"</td>";
                        htmlcur +="<td>"+linea.slice(135, 143)+"</td>";
                        htmlcur +="<td>"+linea.slice(143, 145)+"</td>";
                        htmlcur +="<td>"+linea.slice(145, 147)+"</td>";
                        htmlcur +="<td>"+divImagen+"</td>";

                        // htmlcur +="<td>"+linea.slice(147, 152)+"</td>";
                       // htmlcur +="<td>"+linea+"</td>";  
                        htmlcur +="</tr>"; 
                    }

                    if (canti == lineas.length - 2 ) { // final
                        htmlpie += "<tr>";
                        //htmlpie +="<td>"+linea.slice(0, 2)+"</td>"; //Tipo Reg
                        htmlpie +="<td>"+linea.slice(2, 11).replace(/^0+/, '')+"</td>";
                        htmlpie +="<td>"+linea.slice(11, 24).replace(/^0+/, '')+"."+linea.slice(24, 26)+"</td>";
                        htmlpie +="<td>"+linea.slice(26, 39).replace(/^0+/, '')+"."+linea.slice(39, 41)+"</td>";
                        htmlpie +="<td>"+linea.slice(41, 54).replace(/^0+/, '')+"."+linea.slice(54, 56)+"</td>";
                        htmlpie +="<td>"+linea.slice(56, 152)+"</td>";
                        //htmlpie +="<td>"+linea+"</td>";  
                        htmlpie +="</tr>"; 
                    }

                }
                canti ++;
            }
              
            $("#listaCabeza").html(htmlcab);
            $("#listaCuerpo").html(htmlcur);
            $("#listaTotales").html(htmlpie);

        },
        error: function (result) {
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });
    

    
  
}


function  subirDocumento() {
    console.log("andyy");
    var input = myForm.myInput;
    var reader = new FileReader;
    input.addEventListener('change', onChangeBBVA);
}


var arrayProveedores = [];
function navegacion_ConciliacionBBVA_aspx() {
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
        prov_LoadForm();
    }
}

function prov_LoadForm(){
    var html = "<style> .tdCabDet{background-color: #cdcdcd;color: #6f6f6f;} </style>" +
        "<div class='page-title'>" +
        "    <div class='title_left' >" +
        "        <h3>Lector de conciliación BBVA</h3>" +
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
                "<label>Seleccione un archivo</label>"+
              "<input name='myInput' type='file' accept='.txt' >" + // onchange='subirDocumento()'
            "</form>" +
        "</div>" +
        "<div style='padding-top: 10px;'></div>" +
        "<div class='col-md-12'>" +
            "<label style='background-color: #9d9d9d;padding: 2px;color: white;width: 100%;' >Cabecera</label>" +
            "<table class='table' style='margin-bottom: 10px;'>" +
                "<thead>" +
                    "<tr>" +
                        // "<td>Tipo Reg</td>" +
                        "<td>RUC</td>" +
                        "<td>Código de clase</td>" +
                        "<td>Tipo de moneda</td>" +
                        "<td>Fecha de proceso</td>" +
                        "<td>Cuenta recaudadora</td>" +
                        //"<td>Vacío</td>" +
                    "</tr>" +
                "</thead>" +
                "<tbody id='listaCabeza'>" +
                "</tbody>" +
            "</table>" +
            "<label style='background-color: #9d9d9d;padding: 2px;color: white;width: 100%;'  >Detalle</label>" +
            "<table class='table tablaandy' style='margin-bottom: 10px;'>" +
                "<thead>" +
                    "<tr>" +
                        // "<td>Tipo Reg</td>" +
                        "<td>Nombre del cliente</td>" +
                        "<td>Cuenta</td>" +
                        "<td>Recibo</td>" +
                        "<td>Referencias</td>" +
                        "<td>Importe de origen</td>" +
                        "<td>Importe depósito</td>" +
                        "<td>Mora</td>" +
                        "<td>Oficina pago</td>" +
                        "<td>Nro. de movimiento</td>" +
                        "<td>Fecha de pago</td>" +
                        "<td>Tipo valor</td>" +
                        "<td>Canal entrada</td>" +
                        // "<td>Vacío</td>" +
                        "<td>Estado pago USS</td>" +
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

        /*"                <div class='table-responsive'>" +
        "                    <table class='display' id='tabla_list_proveedores'>" +
        "                        <thead>" +
        "                            <tr>" +
        "                               <th>RUC</th>" +
        "                               <th style='width: 25%;'>Razón Social</th>" +
        "                               <th>T. Persona</th>" +
        "                               <th>Producto</th>" +
        "                               <th>Teléfono</th>" +
        "                               <th>Correo</th>" +
        "                               <th></th>" +
        "                            </tr>" +
        "                        </thead>" +
        "                        <tbody id='tabListaProveedores'>" +
        "                        </tbody>" +
        "                    </table>" +
        "                </div>" +
        "            </div>" +*/

        "        </div>" +
        "    </div>"+
        "</div>";

        $("#FormContenido").html(html);
        $("#frmContenido1").css("display", "none");

        var input = myForm.myInput;
        
        input.addEventListener('change', onChangeBBVA);

        /*
        var Data = {
            cProvRuc: "",
            cUsrCodigo: "-"
        };
        $.ajax({
            type: "POST",
            url: "../Forms/srvProveedores.svc/Get_Listado_Proveedores",
            data: JSON.stringify(Data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                //console.log("mostrando departamentos");
                //console.log(response);
                console.log(response.d);
                var foo = response.d;

                arrayProveedores = response.d;
                prov_LoadForm_lista_impresion();
                //console.log(arrayProveedores);
                var print = "";
                var print1 = "";
                var print2 = "";
                print1 += "<option value='0'>Seleccione</option>";
                print2 += "<option value='0'>Seleccione</option>";
                $.each(foo, function (index, value) {
                    print += "<option value='" + value.nConValor + "'>" + value.cConDescripcion + "</option>";
                });
                //print += "</select>";
                $("#selectFormaPago1").html(print1 + print);
                $("#selectFormaPago2").html(print2 + print);

            },
            error: function (result) {
                alert('ERROR ' + result.status + ' ' + result.statusText);
            }
        });
        */
}