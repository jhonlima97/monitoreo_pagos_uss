function MenuMasterHor(cPerCodigo) {
    var Data = {
        pcPerCodigo : cPerCodigo, 
        pcIntJerarquia: 53,
        pnSisGruCodigo : 1, 
        pnSisGruTipo : 5605, 
        pnObjTipo: 5605,
        pnIntTipo : 0
    };
    /*
    $.ajax({ 
        type: "POST",
        url: "../Forms/srvMenu.svc/UserMenu",
        data: JSON.stringify(Data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var foo = response.d;

            //*********************************
            //Variables para asignar Menu
            var arrayMenuIntCodigo = new Array();
            var arrayMenuJerarquia = new Array();
            var arrayMenuNombre = new Array();
            var arrayMenuDescripcion = new Array();
            var arrayMenucValor = new Array();
            //**********************************
            //Variables para asignar SubMenus
            var arraySubMenuIntCodigo = new Array();
            var arraySubMenuJerarquia = new Array();
            var arraySubMenuNombre = new Array();
            var arraySubMenuDescripcion = new Array();

            var arrayTotalJerarquia = new Array();

            var cMnJerarquia;
            var cSubMnDescripcion = "";
            var array_js = new Array();
            var i = 0;
            var j = 0;


            if (foo != null && $.isArray(foo)) {
                $.each(foo, function (index, value) {
                    if (value.cIntTarget == "#") {
                        arrayMenuJerarquia[i] = value.cIntJerarquia;
                        arrayMenuDescripcion[i] = value.cIntDescripcion;
                        arrayTotalJerarquia[i] = value.cIntJerarquia.length;
                        //Icono de menu
                        var cIcono = ''
                        //console.log(value.cIntJerarquia);
                        switch (value.cIntJerarquia) {
                            case '5301':
                                cIcono = 'fa fa-sitemap'; break;
                            case '5302':
                                cIcono = 'fa fa-book'; break;                            
                            case '5303':
                                cIcono = 'fa fa-line-chart';  break;                            
                            case '5304':
                                cIcono = 'fa fa-sliders'; break;
                            default:
                                cIcono = 'fa fa-clone'; break;
                        }
                        arraySubMenuNombre[i] = cIcono;//arrayMenucValor[i];
                        i = i + 1;
                    }

                    if ((value.cIntTarget != "#") && (value.cIntTarget != "##")) {
                        arraySubMenuIntCodigo[j] = value.cIntTarget;
                        arraySubMenuJerarquia[j] = value.cIntJerarquia;
                        arraySubMenuDescripcion[j] = value.cIntDescripcion;
                        j = j + 1;
                    }
                });
            }

            var menu = "<ul class='nav side-menu'>";
            for (i = 0; i < arrayMenuDescripcion.length; i++) {
                menu += "<li id='" + arrayMenuJerarquia[i] + "'><a><i class='" + arraySubMenuNombre[i] + "'></i>" + arrayMenuDescripcion[i] + "<span class='fa fa-chevron-down'></span></a>" +
                    "<ul class='nav child_menu' id='child_menu" + arrayMenuJerarquia[i] + "'>";
                for (j = 0; j < arraySubMenuDescripcion.length; j++) {
                    if ((arrayMenuJerarquia[i] == arraySubMenuJerarquia[j].substring(0, arrayTotalJerarquia[i]))) {
                        arraySubMenuIntCodigo[j] = arraySubMenuIntCodigo[j].replace("../Forms/", "");
                        arraySubMenuIntCodigo[j] = arraySubMenuIntCodigo[j].replace(".", "_");
                        menu += "<li class='subMenu' ><a href='#' onclick='estilo_subMenu(); navegacion_" + arraySubMenuIntCodigo[j] + "();'>" + arraySubMenuDescripcion[j] + "</a>" +
                                "</li>";
                    }
                }
                menu += "</ul></li>";
            }
            menu += "</ul>";

            $("#cssmenu").html(menu);
            init_sidebar_2();
        },
        error: function (result) {
            alert('ERROR ' + result.status + ' ' + result.statusText);
        }

        //
    });
    */
    var menu = "<ul class='nav side-menu'>";
    menu += "<li id='4302' class='active'>" +
                "<a> <i class='fa fa-book'></i> Interconexion <span class='fa fa-chevron-down' ></span ></a>" +
                "<ul class='nav child_menu' id = 'child_menu4302' style = 'display: block;' > " +
                    "<li class='subMenu' > <a href='#' onclick='estilo_subMenu(); navegacion_CaliDocumentos_aspx();'>Gestión de proveedores</a></li>" +
                "</ul > ";
            "</li >";
    menu += "</ul>";

    $("#cssmenu").html(menu);
    console.log(menu);
    //init_sidebar_2();
}


function init_sidebar_2() {
    (jQuery,
        "smartresize");
    var CURRENT_URL = window.location.href.split("#")[0].split("?")[0],
        $BODY = $("body"),
        $MENU_TOGGLE = $("#menu_toggle"),
        $SIDEBAR_MENU = $("#sidebar-menu"),
        $SIDEBAR_FOOTER = $(".sidebar-footer"),
        $LEFT_COL = $(".left_col"),
        $RIGHT_COL = $(".right_col"),
        $NAV_MENU = $(".nav_menu"),
        $FOOTER = $("footer"),
        randNum = function () {
            return Math.floor(21 * Math.random()) + 20
        }
    var a = function () {
        $RIGHT_COL.css("min-height", $(window).height());
        var a = $BODY.outerHeight(),
            b = $BODY.hasClass("footer_fixed") ? -10 : $FOOTER.height(), c = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(), d = a < c ? c : a;
        d -= $NAV_MENU.height() + b,
            $RIGHT_COL.css("min-height", d)
    }
        ;
    $SIDEBAR_MENU.find("a").on("click", function (b) {
        var c = $(this).parent();
        c.is(".active") ? (c.removeClass("active active-sm"), $("ul:first", c).slideUp(function () {
            a()
        }
        )) : (c.parent().is(".child_menu") ? $BODY.is(".nav-sm") && ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()) : ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()), c.addClass("active"), $("ul:first", c).slideDown(function () {
            a()
        }
        ))
    }
    ),
        $MENU_TOGGLE.on("click", function () {
            $BODY.hasClass("nav-md") ? ($SIDEBAR_MENU.find("li.active ul").hide(), $SIDEBAR_MENU.find("li.active").addClass("active-sm").removeClass("active")) : ($SIDEBAR_MENU.find("li.active-sm ul").show(), $SIDEBAR_MENU.find("li.active-sm").addClass("active").removeClass("active-sm")), $BODY.toggleClass("nav-md nav-sm"), a()
        }
        ),
        $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent("li").addClass("current-page"),
        $SIDEBAR_MENU.find("a").filter(function () {
            return this.href == CURRENT_URL
        }
        ).parent("li").addClass("current-page").parents("ul").slideDown(function () {
            a()
        }
        ).parent().addClass("active"),
        a(),
        $.fn.mCustomScrollbar && $(".menu_fixed").mCustomScrollbar({
            autoHideScrollbar: !0, theme: "minimal", mouseWheel: {
                preventDefault: !0
            }
        }
        )
    a();
}