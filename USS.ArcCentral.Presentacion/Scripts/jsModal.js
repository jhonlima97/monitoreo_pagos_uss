function Modal(msje) {
    var modal = "";
    modal += "<div class='modal-header'>" +
            "   <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span>" +
            "   </button>" +
            "   <h4 class='modal-title' id='myModalLabel2'>Archivo Central</h4>" +
            "</div>" +
            "<div class='modal-body'>" +
            msje +
            //"   <h4>Text in a modal</h4>" +
            //"   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>" +
            //"   <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>" +
            "</div>" +
            "<div class='modal-footer'>" +
            "   <button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>" +
            //"   <button type='button' class='btn btn-primary'>Save changes</button>" +
        "</div>";
    console.log("ddaa");
    $("#DivModal").html(modal);
}