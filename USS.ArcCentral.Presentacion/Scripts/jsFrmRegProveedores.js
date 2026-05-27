var ayuda_distrito = 0;
var cod_evento = 0;
var tipo_evento = 0;
var arrayProveedores = [];
var arrayProvDocumentos = [];

function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode
    return (key >= 48 && key <= 57)
}

function validarEmail(correo) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(correo)) {
        return true;
    } else {
        return false;
    }
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
}

function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function ValidadRucEmpresa() {
    //console.log($("#txtRuc").val().length);
    if ($("#txtRuc").val().length == 11 && $("#txtRuc").val() != $("#rucporvalidar").val()) {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        var resultado = '';

        fetch("https://consultaruc.win/api/ruc/" + $("#txtRuc").val(), requestOptions)
            .then(response => response.text())
            //.then(result =>  resultado = result )
            .then(function (response) {
                // console.log(response);
                var array = JSON.parse("" + response + "");

                if (array.result == false) {
                    $.alert("RUC NO EXISTE");
                    $("#ContenidoRucValido").css("display", "none");
                    //console.log(array.result);
                } else {
                    //console.log(array.result);
                    var yahay = 0;
                    var cantDoc = 0;
                    for (var i in arrayProveedores) {
                        if (arrayProveedores[i]['cProvRUC'] == $("#txtRuc").val()) {
                            $("#selectTipoPersona").val(arrayProveedores[i]['nProvTipo']);
                            $("#pnProvCodigo").val(arrayProveedores[i]['nProvCodigo']);
                            cambioTipoPersona();
                            cantDoc = (arrayProveedores[i]['nProvTipo'] == 1 ? 3 : 5);
                            yahay++;
                            break;
                        }
                    }

                    if (yahay > 0) {
                        $("#txtRazon").val(array.result.razon_social);
                        //$("#ContenidoRucValido").css("display","");

                        //console.log(cantDoc);
                        // Trae documentos
                        var Data = {
                            cProvRuc: $("#txtRuc").val(),
                            cUsrCodigo: "-"
                        };
                        $.ajax({
                            type: "POST",
                            url: "Forms/srvProveedores.svc/Get_Listado_Proveedores",
                            data: JSON.stringify(Data),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (response) {
                                //console.log("mostrando departamentos");
                                var foo = response.d;
                                var htmlDoc = "";
                                arrayProvDocumentos = response.d;
                                //console.log(arrayProvDocumentos);

                                //analisis que le falta documentos
                                var validaddd = 0;
                                var nomCapeta = '';
                                var codTipoArchivo = 0;

                                if ($("#selectTipoPersona").val() == 1) {
                                    for (var j in arrayProvDocumentos) {
                                        if (arrayProvDocumentos[j]['nIntCodigo'] == 100001) { validaddd++; }
                                        if (arrayProvDocumentos[j]['nIntCodigo'] == 100002) { validaddd++; }
                                        if (arrayProvDocumentos[j]['nIntCodigo'] == 100003) { validaddd++; }
                                        //arrayProvDocumentos[j]

                                        codTipoArchivo = arrayProvDocumentos[j]['nIntCodigo'];
                                        nomCapeta = CapNomCarpeta(codTipoArchivo);
                                        html = '<a href="https://campus.uss.edu.pe/Campus/FileProv/' + nomCapeta + '/' + arrayProvDocumentos[j]['cProvInsFilLink'] + '" target="_blank" ><img src="img/check1.png" style="width: 35px; margin-top: 18px;" alt=""></a> '
                                        $("#doc" + codTipoArchivo).html(html);
                                        $("#docCompleto" + codTipoArchivo).val(1);

                                    }

                                    if (validaddd == 3) {
                                        $('#proceso1').removeClass('__proceso01');
                                        $('#proceso2').removeClass('__proceso01');
                                        $('#proceso3').addClass('__proceso01');

                                        $("#datosGenerales").css("display", "none");
                                        $("#datosDocumentos").css("display", "none");
                                        $("#datosFin").css("display", "");

                                    } else {
                                        $('#proceso1').removeClass('__proceso01');
                                        $('#proceso2').addClass('__proceso01');

                                        $.alert('Complete el registro de los documentos faltantes', '');

                                        $("#datosGenerales").css("display", "none");
                                        $("#datosDocumentos").css("display", "");
                                        $("#datosFin").css("display", "none");
                                    }
                                }

                                if ($("#selectTipoPersona").val() == 2) {
                                    for (var j in arrayProvDocumentos) {
                                        if (arrayProvDocumentos[j]['nIntCodigo'] == 100001) { validaddd++; }
                                        if (arrayProvDocumentos[j]['nIntCodigo'] == 100002) { validaddd++; }
                                        if (arrayProvDocumentos[j]['nIntCodigo'] == 100003) { validaddd++; }
                                        if (arrayProvDocumentos[j]['nIntCodigo'] == 100004) { validaddd++; }
                                        if (arrayProvDocumentos[j]['nIntCodigo'] == 100005) { validaddd++; }

                                        codTipoArchivo = arrayProvDocumentos[j]['nIntCodigo'];
                                        nomCapeta = CapNomCarpeta(codTipoArchivo);
                                        html = '<a href="https://campus.uss.edu.pe/Campus/FileProv/' + nomCapeta + '/' + arrayProvDocumentos[j]['cProvInsFilLink'] + '" target="_blank" ><img src="img/check1.png" style="width: 35px; margin-top: 18px;" alt=""></a> '
                                        $("#doc" + codTipoArchivo).html(html);
                                        $("#docCompleto" + codTipoArchivo).val(1);

                                    }

                                    if (validaddd == 5) {
                                        $('#proceso1').removeClass('__proceso01');
                                        $('#proceso2').removeClass('__proceso01');
                                        $('#proceso3').addClass('__proceso01');

                                        $("#datosGenerales").css("display", "none");
                                        $("#datosDocumentos").css("display", "none");
                                        $("#datosFin").css("display", "");

                                    } else {
                                        $('#proceso1').removeClass('__proceso01');
                                        $('#proceso2').addClass('__proceso01');

                                        $.alert('Complete el registro de los documentos faltantes', '');

                                        $("#datosGenerales").css("display", "none");
                                        $("#datosDocumentos").css("display", "");
                                        $("#datosFin").css("display", "none");
                                    }
                                }

                            },
                            error: function (result) {
                                alert('ERROR ' + result.status + ' ' + result.statusText);
                            }
                        });
                    } else {
                        $("#txtRazon").val(array.result.razon_social);
                        $("#ContenidoRucValido").css("display", "");
                    }
                    //$.alert("Todo bien");
                }
            })
            .catch(error => console.log('error', error));

        $("#rucporvalidar").val($("#txtRuc").val());
    }

    if ($("#txtRuc").val().length < 11) {
        $("#rucporvalidar").val("");
        $("#txtRazon").val("");
        $("#ContenidoRucValido").css("display", "none");
    }
}

function cambioFormaPago(numPago) {
    if ($("#selectFormaPago" + numPago).val() == 2) {
        $("#frmCantiDias" + numPago).css("display", "");
    } else {
        $("#frmCantiDias" + numPago).css("display", "none");
    }
}

function cargarFormaPago() {
    var Data = {
        nConCodigo: 6010,
        nTipo: 1
    };
    $.ajax({
        type: "POST",
        url: "Forms/srvProveedores.svc/Get_Constante_Proveedor",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            //console.log("mostrando departamentos");
            //console.log(response.d);
            var foo = response.d;
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
}

function cargarBancos() {
    var Data = {
        pnTipo: 12,
        pnIntClase: 7612
    };
    $.ajax({
        type: "POST",
        url: "Forms/srvProveedores.svc/Get_Interface_Proveedor",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            //console.log("mostrando departamentos");
            //console.log(response.d);
            var foo = response.d;
            var print = "";
            var print1 = "";
            var print2 = "";
            print1 += "<option value='0'>Seleccione</option>";
            //print2 += "<option value=''>Forma de pago 2</option>";
            $.each(foo, function (index, value) {
                print += "<option value='" + value.cIntJerarquia + "'>" + value.cIntDescripcion + "</option>";
            });
            //print += "</select>";
            $("#selectTipoBanco1").html(print1 + print);
            $("#selectTipoBanco2").html(print1 + print);
            //$("#selectTipoBanco3").html(print);

        },
        error: function (result) {
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });
}

function cargarProve() {
    var Data = {
        cProvRuc: "",
        cUsrCodigo: "-"
    };
    $.ajax({
        type: "POST",
        url: "Forms/srvProveedores.svc/Get_Listado_Proveedores",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            arrayProveedores = response.d;
            //console.log(arrayProveedores);
        },
        error: function (result) {
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });
}


function cambioTipoPersona() {
    if ($("#selectTipoPersona").val() == 1) {
        $("#contenidoExtra").css("display", "none");
    } else {
        $("#contenidoExtra").css("display", "");
    }
}

function btnSiguienteFormulario() { // PASO1

    //$("#pnProvCodigo").val(10);
    if ($("#pnProvCodigo").val() == 0) { // reg

        if ($("#txtRuc").val() == "" || $("#txtRuc").val() == undefined) {
            $.alert('Debe ingresar un Número RUC!', '');
            return false;
        }

        if ($("#txtRazon").val() == "" || $("#txtRazon").val() == undefined) {
            $.alert('Verificar Ruc y la Razón Social!', '');
            return false;
        }

        if ($("#txtDomicilio").val() == "" || $("#txtDomicilio").val() == undefined) {
            $.alert('Verificar el domicilio fiscal!', '');
            return false;
        }

        if ($("#txtTelefono").val() == "" || $("#txtTelefono").val() == undefined) {
            $.alert('Verificar el telefono!', '');
            return false;
        }

        if ($("#txtMail").val() == "" || $("#txtMail").val() == undefined) {
            $.alert('Verificar el Correo electronico !', '');
            return false;
        }
        if ($("#txtFechaInicio").val() == "" || $("#txtFechaInicio").val() == undefined) {
            $.alert('Verificar la fecha de Inicio de operaciones !', '');
            return false;
        }

        if ($("#txtRepresentante").val() == "" || $("#txtRepresentante").val() == undefined) {
            $.alert('Verificar el Representante Legal !', '');
            return false;
        }

        if ($("#txtCuentaBancaria3").val() == "" || $("#txtCuentaBancaria3").val() == undefined) {
            $.alert('Debe ingresar Número de cuenta de Detracción!', '');
            return false;
        }



        var txtCiu = 0;
        if ($("#txtCiu").val() == "" || $("#txtCiu").val() == undefined) {
            $.alert('Debe ingresar el CIU!', '');
            return false;
        }
        if ($("#txtProducto").val() == "" || $("#txtProducto").val() == undefined) {
            $.alert('Debe ingresar el Producto o Servicio que ofrece!', '');
            return false;
        }
        txtCiu = parseInt($("#txtCiu").val());


        var ubigueo = '';
        var SegundoNum = '';
        var selectTipoBanco2 = '';
        var txtCuentaBancaria2 = '';

        if ($("#selectTipoCuenta2").val() > 0) {
            if ($("#selectTipoBanco2").val() == "" || $("#selectTipoBanco2").val() == undefined || $("#selectTipoBanco2").val() == 0) {
                $.alert('Debe seleccionar un Banco para Número de Cuenta (Opcional)!', '');
                return false;
            }
            if ($("#txtCuentaBancaria2").val() == "" || $("#txtCuentaBancaria2").val() == undefined) {
                $.alert('Debe ingresar un Número de Cuenta (Opcional)!', '');
                return false;
            }

            selectTipoBanco2 = $("#selectTipoBanco2").val();
            txtCuentaBancaria2 = $("#txtCuentaBancaria2").val();
        }

        var DiasPago1 = 0;
        var DiasPago2 = 0;
        if ($("#selectFormaPago1").val() == 2) {
            DiasPago1 = parseInt($("#txtCantDiasPago1").val());
        }
        if ($("#selectFormaPago2").val() == 2) {
            DiasPago2 = parseInt($("#txtCantDiasPago2").val());
        }


        if ($("#txtRef1").val() == "" || $("#txtRef1").val() == undefined) {
            $.alert('Debe ingresar una referencia!', '');
            return false;
        }
        
        var arrayDeCadenas = $("#txtFechaInicio").val().split("-");
        var fechaInicio = arrayDeCadenas[2]+"/"+arrayDeCadenas[1]+"/"+arrayDeCadenas[0]

        var Data = {
            cProvOpeIni: fechaInicio,
            nProvTipo: $("#selectTipoPersona").val(),
            cProvRUC: $("#txtRuc").val(),
            nProvCIU: txtCiu,
            nProvAgente: $("#selectAgenteReten").val(),
            cProvRazon: $("#txtRazon").val(),
            cProvDomFiscal: $("#txtDomicilio").val(),
            cProvDomUbigeo: ubigueo,
            nProvTelTipo1: 1,
            cProvTelNumero: $("#txtTelefono").val(),
            nProvTelTipo2: 2,
            cProvTelNumero2: SegundoNum,
            cProvMail: $("#txtMail").val(),
            cProvRepIdentidad: "",
            cProvRepNombre: $("#txtRepresentante").val(),
            cProvConIdentidad: "",
            cProvConNombre: $("#txtContacto").val(),
            cProvConMail: $("#txtContactoMail").val(),
            cProvConTel1: "",
            cProvConTel2: "",
            cProvEmpSucursales: $("#txtNumSucursales").val(),
            cProvEmpOfrece: $("#txtProducto").val(),
            nProvEmpForma1: parseInt($("#selectFormaPago1").val()),
            nProvEmpForDia1: DiasPago1,
            nProvEmpForma2: parseInt($("#selectFormaPago2").val()),
            nProvEmpForDia2: DiasPago2,
            nProvEmpCtaTpo1: parseInt($("#selectTipoCuenta1").val()),//"BANCARIA",
            cProvEmpCtaBco1: $("#selectTipoBanco1").val(),//"BCP",
            cProvEmpCtaNum1: $("#txtCuentaBancaria1").val(),// NUMERO
            nProvEmpCtaTpo2: parseInt($("#selectTipoCuenta2").val()),
            cProvEmpCtaBco2: selectTipoBanco2,
            cProvEmpCtaNum2: txtCuentaBancaria2,
            nProvEmpCtaTpo3: $("#selectTipoCuenta3").val(),
            cProvEmpCtaBco3: $("#selectTipoBanco3").val(),
            cProvEmpCtaNum3: $("#txtCuentaBancaria3").val(),
            cProvEmpRef1: $("#txtRef1").val(),
            cProvEmpRef2: $("#txtRef2").val(),
            cProvEmpRef3: $("#txtRef3").val(),
            bPuedeActualizar: 0
        };
        console.log(Data);
        $.ajax({
            type: "POST",
            url: "Forms/srvProveedores.svc/Set_Upd_Proveedor",
            data: JSON.stringify(Data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                console.log(response);

                if (response) {
                    var foo = response.d;
                    if (isNaN(foo)) {
                        $.alert('Veriqfique los datos ingresados y vuelva a registrar.', '');
                    } else {
                        if (foo == 0) {
                            $.alert('Proveedor ya registrado.', '');
                        } else {
                            $("#pnProvCodigo").val(foo);
                            $('#proceso1').removeClass('__proceso01');
                            $('#proceso2').addClass('__proceso01');

                            $.alert('Datos Generales registrados correctamente', '');

                            $("#datosGenerales").css("display", "none");
                            $("#datosDocumentos").css("display", "");
                            $("#datosFin").css("display", "none");
                        }
                    }

                } else {
                    $.alert('Veriqfique los datos ingresados y vuelva a registrar', '');
                }

            },
            error: function (result) {
                console.log('ERROR ' + result.status + ' ' + result.statusText);
            }
        });

    }

    /*else{
                $('#proceso1').removeClass('__proceso01');
        $('#proceso2').addClass('__proceso01');

        $.alert('Datos Generales registrados', '');

        $("#datosGenerales").css("display", "none");
        $("#datosDocumentos").css("display", "");
        $("#datosFin").css("display", "none");
    }*/

}


function CapNomCarpeta(codTipoArchivo) {
    var nomCapeta = '';
    switch (codTipoArchivo) {
        case 100001:
            nomCapeta = 'CARTA';
            break;
        case 100002:
            nomCapeta = 'DNI';
            break;
        case 100003:
            nomCapeta = "RUC";
            break;
        case 100004:
            nomCapeta = "TESTI";
            break;
        case 100005:
            nomCapeta = "VIGEP";
            break;
        case 100006:
            nomCapeta = "LICEA";
            break;
        case 100007:
            nomCapeta = "RESOA";
            break;
        case 100008:
            nomCapeta = "CERTA";
            break;
        case 100009:
            nomCapeta = "CONSM";
            break;
        case 100012:
            nomCapeta = "RUC";
            break;
    }
    return nomCapeta;
}

function CapNomArchivo(codTipoArchivo) {
    var nomArchivo = '';
    switch (codTipoArchivo) {
        case 100001:
            nomArchivo = "Carta_de_Presentacion";
            break;
        case 100002:
            nomArchivo = "Copia_DNI";
            break;
        case 100003:
            nomArchivo = "Copia_RUC";
            break;
        case 100004:
            nomArchivo = "Copia_Testimonio";
            break;
        case 100005:
            nomArchivo = "Copia_Vigencia_Poderes";
            break;
        case 100006:
            nomArchivo = "Licencia_Funcionamiento";
            break;
        case 100007:
            nomArchivo = "Resolucion_Ministerial";
            break;
        case 100008:
            nomArchivo = "Certificado_Constancia";
            break;
        case 100009:
            nomArchivo = "Certi_Cons_Marca";
            break;
        case 100012:
            nomArchivo = "Copia_RUC";
            break;
    }
    return nomArchivo;
}


function subirArchivoUnico(codTipoArchivo) {
    console.log("entro");
    var nomCapeta = '';
    var nomArchivo = '';

    //$("#pnProvCodigo").val(6);
    console.log("cod:" + $("#pnProvCodigo").val());

    if ($("#pnProvCodigo").val() > 0) {
        console.log("Todo ok");
    }

    nomCapeta = CapNomCarpeta(codTipoArchivo);
    nomArchivo = CapNomArchivo(codTipoArchivo);

    if (codTipoArchivo > 0) {
        var selectFile = $("#txtArchivo" + codTipoArchivo);
        var unArchivo = selectFile[0].files[0];

        if (unArchivo) {
            //console.log(unArchivo["size"]);
            if (unArchivo["size"] <= 20971520) { // Acepta maximo 20MB
                var aArchivo = unArchivo["name"].split(".");
                var prefijo = aArchivo[aArchivo.length - 1];
                //subir?NCOD={ncod}&NTIP={ntip}&CFEC={cfec}&NPRO={npro}&NVER={nver}&CTIT={ctit}&CCOD={ccod}&CDES={cdes}&CPELA={cpela}&CPREV={cprev}&CPAPRO={cpapro}&CPER={cper}
                $.ajax({
                    type: "POST",
                    url: "Forms/srvFileUploadDocProveedor.svc/subir?NCOD=" + $("#pnProvCodigo").val() + "&NTIP=" + codTipoArchivo + "&CNOM=" + b64EncodeUnicode(nomArchivo + $("#pnProvCodigo").val())
                        + "&PREFIJO=" + prefijo + "&CPER=" + "-", // + $('#codUsuario').val()
                    contentType: false,
                    data: unArchivo,
                    processData: false,
                    async: false,
                    beforeSend: function () {
                        $('#m_preload').css("display", "block");
                    },
                    success: function (response) {
                        //console.log("reg");
                        $('#m_preload').css("display", "none");
                        console.log(response);
                        var html = '';
                        var arrayDeCadenas = response.split("//");

                        if (arrayDeCadenas[1] == "ok") {
                            html = '<a href="https://campus.uss.edu.pe/Campus/FileProv/' + nomCapeta + '/' + arrayDeCadenas[0] + '" target="_blank" ><img src="img/check1.png" style="width: 35px; margin-top: 18px;" alt=""></a> '
                            $("#doc" + codTipoArchivo).html(html);
                            $("#docCompleto" + codTipoArchivo).val(1);
                        } else {
                            $("#doc" + codTipoArchivo).html(html);
                            $("#docCompleto" + codTipoArchivo).val(0);
                        }
                        console.log("REGISTRO");
                        $('#m_preload').css("display", "none");
                        //m_alerta_ok("", "Se " + accion + " correctamente");
                        //doc_LoadForm_lista();

                    },
                    error: function (result) {
                        $('#m_preload').css("display", "none");
                        console.log('ERROR ' + result.status + ' ' + result.statusText);
                    }
                });
            } else {
                $('#m_preload').css("display", "none");
                m_alerta_mal("", "El archivo selecionado es mayor a 20 MB");
            }
        } else {
            //console.log("no existe");
            $.alert('Verificar archivo de ' + nomArchivo);
            return false;
        }
    }
}

function btnSiguienteFormularioFin() { // PASO2
    var validar = 0;
    if ($("#selectTipoPersona").val() == 1) {
        if ($("#docCompleto100001").val() == 1) {
            validar++;
        } else {
            $.alert('Falta Carta de Presentación', '');
            return false;
        }

        if ($("#docCompleto100002").val() == 1) {
            validar++;
        } else {
            $.alert('Falta Copia de DNI', '');
            return false;
        }

        if ($("#docCompleto100003").val() == 1) {
            validar++;
        } else {
            $.alert('Falta Copia de RUC', '');
            return false;
        }

        if (validar == 3) {
            $('#proceso2').removeClass('__proceso01');
            $('#proceso3').addClass('__proceso01');

            $("#datosGenerales").css("display", "none");
            $("#datosDocumentos").css("display", "none");
            $("#datosFin").css("display", "");
        }

    } else {
        if ($("#docCompleto100001").val() == 1) {
            validar++;
        } else {
            $.alert('Falta Carta de Presentación', '');
            return false;
        }

        if ($("#docCompleto100002").val() == 1) {
            validar++;
        } else {
            $.alert('Falta Copia de DNI', '');
            return false;
        }

        if ($("#docCompleto100003").val() == 1) {
            validar++;
        } else {
            $.alert('Falta Copia de RUC', '');
            return false;
        }

        if ($("#docCompleto100004").val() == 1) {
            validar++;
        } else {
            $.alert('Falta Copia de Testimonio', '');
            return false;
        }

        if ($("#docCompleto100005").val() == 1) {
            validar++;
        } else {
            $.alert('Falta Copia de Vigencia de Poderes', '');
            return false;
        }

        if (validar == 5) {
            $('#proceso2').removeClass('__proceso01');
            $('#proceso3').addClass('__proceso01');

            $("#datosGenerales").css("display", "none");
            $("#datosDocumentos").css("display", "none");
            $("#datosFin").css("display", "");
        }

    }
}


/*alertas*/
function m_alerta_ok(titulo, contenido) {
    $.alert({
        theme: 'modern',
        type: 'green',
        closeAnimation: 'scaleX',
        icon: 'fa fa-check',
        title: titulo,
        content: contenido,
        draggable: false
    });
}
function m_alerta_mal(titulo, contenido) {
    $.alert({
        theme: 'modern',
        type: 'red',
        closeAnimation: 'scaleX',
        icon: 'fa fa-times',
        title: titulo,
        content: contenido,
        draggable: false
    });
}
function m_alert_simple(titulo, contenido) {
    $.alert({
        theme: 'modern',
        type: 'red',
        title: titulo,
        content: contenido,
        columnClass: 'small'
    });
}










function descargarRecibo(cCodPago) {
    window.open('Report.aspx?TipoReporte=5&cPerCodigo=' + cCodPago, 'popup', 'width=750px,height=750px');
}


function btnSigForFinal(cNombCompleto) {
    $('#proceso2').removeClass('__proceso01');
    $('#proceso3').addClass('__proceso01');
    var html = "";
    html +=
        "<div class='container-fluid'>" +
        "   <div class='row'>" +
        "       <div class='col-12 col-md-6 __tituevent'>" +
        "           <h4>¡Felicidades!<br> " + cNombCompleto + "</h4>" +
        "           <p>Tu operación ha sido exitosa. Hemos enviado" +
        "               un copia del recibo a tu correo.</p>" +
        "       </div>" +
        "       <div class='col-12 col-md-6 __formregis '>" +
        "           <br><br>" +
        "           <svg width='88px' height='88px' viewBox='0 0 88 88' version='1.1'>" +
        "               <defs>" +
        "                   <polygon id='path-1' points='0 0 88 0 88 88 0 88'></polygon>" +
        "               </defs>" +
        "               <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>" +
        "                   <g id='Group-3'>" +
        "                       <mask id='mask-2' fill='white'>" +
        "                           <use xlink:href='#path-1'></use>" +
        "                       </mask>" +
        "                       <g id='Clip-2'></g>" +
        "                       <path d='M84.4648842,27.1369306 C83.6781571,26.3627262 82.4104067,26.3730391 81.6369389,27.1597663 C81.0859353,27.7210829 80.9511309,28.5195962 81.1912742,29.2164538 L81.1485493,29.2304499 C82.9687767,33.8049589 84.000067,38.7772513 84.000067,44 C84.000067,66.0917112 66.0917112,83.9993303 44,83.9993303 C21.9104987,83.9993303 4.00066967,66.0917112 4.00066967,44 C4.00066967,21.9075522 21.9104987,3.99993303 44,3.99993303 C55.3066247,3.99993303 65.5001925,8.70556328 72.7693158,16.2501883 L72.795098,16.2251427 C73.5855084,16.9352597 74.7965378,16.9183171 75.5501164,16.1522158 C76.3243207,15.3654886 76.3147444,14.0999481 75.5272806,13.3242705 C75.453617,13.2498703 75.3556445,13.2181949 75.2731412,13.1577908 C67.3064238,5.05626894 56.2635148,0 44,0 C19.6991177,0 0,19.6991177 0,44 C0,68.3008823 19.6991177,88 44,88 C68.3008823,88 88,68.3008823 88,44 C88,38.3441094 86.8943095,32.9548811 84.948854,27.9862718 C84.8553013,27.6776213 84.7109206,27.3807571 84.4648842,27.1369306 Z M43.9668514,55.1386717 L25.4139392,36.5857595 C25.0529876,36.2248079 24.5528118,36.0001339 24.0003348,36.0001339 C22.8946443,36.0001339 22.0003683,36.8966198 22.0003683,38.0001005 C22.0003683,38.5525774 22.2228324,39.0527532 22.5859939,39.4159147 L42.585659,59.4133699 C42.9495572,59.7772681 43.4467864,59.9997321 44,59.9997321 C44.5708928,59.9997321 45.0762251,59.7573789 45.4408599,59.3750649 L45.4467529,59.3824312 L78.8436155,24.3944351 C78.8458255,24.3981182 78.8495086,24.402538 78.8517185,24.4062212 L81.7069194,21.4103229 C81.7047094,21.408113 81.7032362,21.4044299 81.7010263,21.4007467 L87.4475231,15.380958 L87.44163,15.3750649 C87.783429,15.0177965 88,14.5352999 88,13.9997656 C88,12.896285 87.1049874,11.9997991 86.0000335,11.9997991 C85.4298773,11.9997991 84.9238084,12.2443622 84.558437,12.625203 L84.5547538,12.6193099 L79.4145084,18.0041185 C79.4100886,17.9982254 79.4064054,17.9923323 79.4027222,17.9879125 L76.613082,20.9123571 C76.6175018,20.9182502 76.6197117,20.9234066 76.6226583,20.9278264 L43.9668514,55.1386717 Z' id='Fill-1' fill='#97D700' mask='url(#mask-2)'></path>" +
        "                   </g>" +
        "               </g>" +
        "           </svg>" +
        "       </div>" +
        "   </div>" +
        "</div>";
    $("#contForEventos").html(html);
}



$(document).ready(function () {
    cargarBancos();
    cargarFormaPago();
    cambioTipoPersona();
    cargarProve();

})