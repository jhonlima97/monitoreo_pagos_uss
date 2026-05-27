function Get_PerImage(cPerCodigo) {
    var Data = {
        pcPerCodigo: cPerCodigo
    };
    $.ajax({
        type: "POST",
        url: "../Forms/srvPersona.svc/Get_PerImagen",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var foo = response.d;
            var tbl = "";
            var table = "";
            var nombre = "";

            if (foo != null && $.isArray(foo)) {
                $.each(foo, function (index, value) {
                    //console.log(value);
                    tbl += "<img src='data:image/gif;base64," + value.iPerImaFoto + "' class='img-circle profile_img' />";
                    table += "<span>Bienvenido,</span>" +
                        "<h2>" + value.cPerNombre + "</h2>";
                    nombre = value.cPerNombre;
                    //console.log(value);
                });
            }
            tbl += "";
            table += "";
            $("#Div_Image").html(tbl);
            $("#Div_User").html(table);
            $("#username_rigth").html(nombre);
        },
        error: function (result) {
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }
    });
}