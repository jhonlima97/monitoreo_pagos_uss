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

    // 2) Expandir líneas -> filas lógicas.
    //    El campo índice 5 (N° Recibo) puede traer 1..N recibos separados por coma
    var filas = [];          // filas lógicas a pintar
    var recibosUnicos = [];  // lista plana de recibos individuales para consultar al backend

    for (var i = 1; i < lineas.length; i++) {
        var campos = lineas[i].split('|');
        if (campos.length < 12) continue;

        var recibosLinea = campos[5]
            .split(',')
            .map(function (r) { return r.trim(); })
            .filter(function (r) { return r !== ''; });

        var nRecibos = recibosLinea.length;

        for (var r = 0; r < nRecibos; r++) {
            filas.push({
                identificacion: campos[0],
                nombreCliente: campos[1],
                fechaPago: formatearFecha(campos[2]), // DDMMYYYY -> DD/MM/YYYY
                nombreServicio: campos[3],
                idServicio: campos[4],
                nroRecibo: recibosLinea[r],
                nroOpBipay: campos[6],
                rucPartner: campos[7],
                nombrePartner: campos[8],
                codCompania: campos[9],
                moneda: campos[10],
                montoCsvLinea: parseFloat(campos[11]) || 0, // monto COMBINADO de la línea
                recibosEnLinea: nRecibos,
                idxEnLinea: r
            });
            recibosUnicos.push(recibosLinea[r]);
        }
    }

    var cuentas = recibosUnicos.join(',');

    // 3) Consultar estado en USS. El SP devuelve { cCtaCteRecibo, nEstado }.
    var Data = {
        cDetalle: cuentas,
        cUsrCodigo: cPerCodigoActual
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

            // 4) Pintar el detalle a partir de las filas lógicas
            for (var f = 0; f < filas.length; f++) {
                var fila = filas[f];

                // Cruce con USS por recibo INDIVIDUAL
                var nEstado = 0;
                for (var j = 0; j < arrayConciliacionBiPay.length; j++) {
                    if (String(arrayConciliacionBiPay[j]['cCtaCteRecibo']).trim() === String(fila.nroRecibo).trim()) {
                        nEstado = arrayConciliacionBiPay[j]['nEstado'];
                        break;
                    }
                }

                var divImagen = "<img src='../img/eliminar1.png' style='width:17px' alt='no'>";
                var divColor = "style='background-color: rgb(255 176 176 / 18%);'";
                if (nEstado == 1) {
                    divImagen = "<img src='../img/check1.png' style='width:17px' alt='no'>";
                    divColor = '';
                }

                // Monto por fila:
                //  - 1 recibo en la línea  -> monto del CSV tal cual (formato antiguo)
                //  - N recibos en la línea -> reparto del combinado entre N
                var montoFila;
                if (fila.recibosEnLinea === 1) {
                    montoFila = fila.montoCsvLinea;
                } else {
                    var base = Math.floor((fila.montoCsvLinea / fila.recibosEnLinea) * 100) / 100;
                    montoFila = (fila.idxEnLinea < fila.recibosEnLinea - 1)
                        ? base
                        : (fila.montoCsvLinea - base * (fila.recibosEnLinea - 1));
                }

                htmlcur += '<tr ' + divColor + '>';
                htmlcur += '<td>' + fila.identificacion + '</td>';
                htmlcur += '<td>' + fila.nombreCliente + '</td>';
                htmlcur += '<td>' + fila.fechaPago + '</td>';
                htmlcur += '<td>' + fila.nombreServicio + '</td>';
                htmlcur += '<td>' + fila.idServicio + '</td>';
                htmlcur += '<td>' + fila.nroRecibo + '</td>';
                htmlcur += '<td>' + fila.nroOpBipay + '</td>';
                htmlcur += '<td>' + fila.rucPartner + '</td>';
                htmlcur += '<td>' + fila.nombrePartner + '</td>';
                htmlcur += '<td>' + fila.codCompania + '</td>';
                htmlcur += '<td>' + fila.moneda + '</td>';
                htmlcur += '<td style="text-align:right;">' + montoFila.toFixed(2) + '</td>';
                htmlcur += '<td>' + divImagen + '</td>';
                htmlcur += '</tr>';
            }

            // 5) Totales
            //    - Registros: filas lógicas (un pago por recibo) -> el archivo nuevo da 2
            //    - Monto total: suma del monto COMBINADO de cada LÍNEA del CSV (contado una
            var totalRegistros = filas.length;
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
        prov_LoadForm_BIPAY();
    }
}

function prov_LoadForm_BIPAY() {
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
