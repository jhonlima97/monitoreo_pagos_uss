var arrayConciliacionBiPay = [];
var reader = new FileReader();
function onChangeBiPay(event) {
    var file = event.target.files[0];
    if (!file) return;

    // Validar extensión
    if (!/\.csv$/i.test(file.name)) {
        alert('Solo se permiten archivos .csv');
        event.target.value = ''; // limpiar el input
        return;
    }

    // Validar formato del nombre: YYYYMMDD_[RUC].csv
    if (!/^\d{8}_\d{11}\.csv$/i.test(file.name)) {
        alert('El nombre del archivo debe tener el formato YYYYMMDD_[RUC].csv\nEjemplo: 20260529_20479748102.csv');
        event.target.value = '';
        return;
    }

    reader.readAsText(file, 'UTF-8');
    reader.onload = onLoadBipay;
}

function onLoadBipay() {
    // 1) Limpiar BOM y normalizar saltos de línea
    var result = reader.result.replace(/^\uFEFF/, '');
    var lineas = result.split(/\r?\n/).filter(function (l) { return l.trim() !== ''; });

    if (lineas.length < 2) {
        alert('El archivo no contiene registros.');
        return;
    }

    // 2) Construir lista de recibos (campo índice 5 según spec 5.6/5.7) para consultar al backend
    var recibos = [];
    for (var i = 1; i < lineas.length; i++) {
        var c = lineas[i].split('|');
        if (c.length >= 6) recibos.push(c[5]);
    }
    var cuentas = recibos.join(',');

    // 3) Consultar estado en USS
    var Data = {
        cDetalle: cuentas,
        cUsrCodigo: '-'
    };

    $.ajax({
        type: 'POST',
        url: '../Forms/srvGeneral.svc/Get_Listado_ConciliacionBiPay',
        data: JSON.stringify(Data),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (response) {
            arrayConciliacionBiPay = response.d || [];

            var htmlcur = '';

            // 4) Pintar detalle (lineas[0] es la cabecera de columnas, la saltamos)
            for (var i = 1; i < lineas.length; i++) {
                var campos = lineas[i].split('|');
                if (campos.length < 12) continue;

                var identificacion = campos[0];
                var nombreCliente = campos[1];
                var fechaPago = formatearFecha(campos[2]); // DDMMYYYY -> DD/MM/YYYY
                var nombreServicio = campos[3];
                var idServicio = campos[4];
                var nroRecibo = campos[5];
                var nroOpBipay = campos[6];
                var rucPartner = campos[7];
                var nombrePartner = campos[8];
                var codCompania = campos[9];
                var moneda = campos[10];
                var montoPagado = campos[11];

                // Cruce con el estado del USS
                var divImagen = "<img src='../img/eliminar1.png' style='width:17px' alt='no'>";
                var divColor = "style='background-color: rgb(255 176 176 / 18%);'";
                for (var j in arrayConciliacionBiPay) {
                    if (arrayConciliacionBiPay[j]['cCtaCteRecibo'] == nroRecibo) {
                        if (arrayConciliacionBiPay[j]['nEstado'] == 1) {
                            divImagen = "<img src='../img/check1.png' style='width:17px' alt='no'>";
                            divColor = '';
                        }
                        break;
                    }
                }

                htmlcur += '<tr ' + divColor + '>';
                htmlcur += '<td>' + identificacion + '</td>';
                htmlcur += '<td>' + nombreCliente + '</td>';
                htmlcur += '<td>' + fechaPago + '</td>';
                htmlcur += '<td>' + nombreServicio + '</td>';
                htmlcur += '<td>' + idServicio + '</td>';
                htmlcur += '<td>' + nroRecibo + '</td>';
                htmlcur += '<td>' + nroOpBipay + '</td>';
                htmlcur += '<td>' + rucPartner + '</td>';
                htmlcur += '<td>' + nombrePartner + '</td>';
                htmlcur += '<td>' + codCompania + '</td>';
                htmlcur += '<td>' + moneda + '</td>';
                htmlcur += '<td style="text-align:right;">' + montoPagado + '</td>';
                htmlcur += '<td>' + divImagen + '</td>';
                htmlcur += '</tr>';
            }

            // 5) Totales calculados (BiPay no envía fila de totales)
            var totalRegistros = lineas.length - 1;
            var totalMonto = 0;
            for (var k = 1; k < lineas.length; k++) {
                var cc = lineas[k].split('|');
                if (cc.length >= 12) totalMonto += parseFloat(cc[11]) || 0;
            }

            var htmlpie = '<tr>' +
                '<td>' + totalRegistros + '</td>' +
                '<td style="text-align:right;">' + totalMonto.toFixed(2) + '</td>' +
                '</tr>';

            $('#listaCuerpo').html(htmlcur);
            $('#listaTotales').html(htmlpie);
        },
        error: function (result) {
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });
}

// Convierte "09052026" -> "09/05/2026"
function formatearFecha(ddmmyyyy) {
    if (!ddmmyyyy || ddmmyyyy.length !== 8) return ddmmyyyy;
    return ddmmyyyy.substr(0, 2) + '/' + ddmmyyyy.substr(2, 2) + '/' + ddmmyyyy.substr(4, 4);
}

function navegacion_ConciliacionBiPay_aspx() {
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

function prov_LoadForm() {
    var html = "<style> .tdCabDet{background-color: #cdcdcd;color: #6f6f6f;} </style>" +
        "<div class='page-title'>" +
        "    <div class='title_left' >" +
        "        <h3>Lector de conciliación BiPay</h3>" +
        "    </div >" +
        "</div >" +
        "<div class='clearfix'></div>" +
        "<div class='row'>" +
        "    <div class='col-md-12 col-sm-12 col-xs-12' id='frmLista'>" +
        "        <div class='x_panel' style='padding: 0px;'>" +
        "            <div class='x_content'>" +
        "<div class='col-md-12'>" +
        "<form name='myForm' style='padding: 10px;border: 1px solid #ccc;background-color: #97d700;color: #4f4f4f;'>" +
            "<label>Seleccione un archivo</label>" +
            "<input name='myInput' type='file' accept='.csv' >" +
        "</form>" +
        "</div>" +
        "<div style='padding-top: 10px;'></div>" +
        "<div class='col-md-12'>" +

        // ===== Detalle =====
        "<label style='background-color: #9d9d9d;padding: 2px;color: white;width: 100%;'>Detalle</label>" +
        "<table class='table tablaandy' style='margin-bottom: 10px;'>" +
            "<thead>" +
                "<tr>" +
                "<td>Identificación del cliente</td>" +
                "<td>Nombre del cliente</td>" +
                "<td>Fecha de pago</td>" +
                "<td>Nombre del servicio</td>" +
                "<td>ID del servicio</td>" +
                "<td>N° Recibo</td>" +
                "<td>N° Operación BiPay</td>" +
                "<td>RUC del partner</td>" +
                "<td>Nombre de Partner</td>" +
                "<td>Código de la compañía</td>" +
                "<td>Moneda</td>" +
                "<td style='text-align:right;'>Monto pagado</td>" +
                "<td>Estado pago USS</td>" +
                "</tr>" +
            "</thead>" +
        "<tbody id='listaCuerpo'>" +
        "</tbody>" +
        "</table>" +

        // ===== Totales =====
        "<label style='background-color: #9d9d9d;padding: 2px;color: white;width: 100%;'>Totales</label>" +
        "<table class='table' style='font-size: 10px;margin-bottom: 10px;'>" +
            "<thead>" +
                "<tr>" +
                "<td>Total de registros</td>" +
                "<td style='text-align:right;'>Monto total</td>" +
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
    input.addEventListener('change', onChangeBiPay);
}
