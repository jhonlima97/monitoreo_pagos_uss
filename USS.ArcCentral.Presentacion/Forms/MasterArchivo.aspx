<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MasterArchivo.aspx.cs" Inherits="USS.ArcCentral.Presentacion.Forms.MasterArchivo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>USS - Interconexión</title>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" rel="stylesheet" />
    <link href="https://cdn.datatables.net/2.3.8/css/dataTables.bootstrap5.min.css" rel="stylesheet" />    
    <script  src="https://code.jquery.com/jquery-3.7.1.min.js" 
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    
    <script src="../Scripts/sessvars.js"></script>
    <script src="../Scripts/jsMenu.js"></script>
    <script src="../Scripts/jsImage.js"></script> 

<%--    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>--%>

    <!-- <script src="../Scripts/jspdf.min.js"></script>
    <script src="../Scripts/jspdf.plugin.autotable.min.js"></script>-->

    <script src="../Scripts/Forms/jsCal_FrmParametro.js?ver=151515"></script> 
    <script src="../Scripts/Forms/jsCal_FrmUsuarios.js?ver=151515"></script> 
    
    <script src="../Scripts/Forms/FrmMonitoreoBBVA.js?ver=151515"></script>    
    <script src="../Scripts/Forms/FrmResumenBBVA.js?ver=151515"></script>
    <script src="../Scripts/Forms/FrmConciliacionBBVA.js?ver=151515"></script>

    <script src="../Scripts/Forms/FrmMonitoreoBCP.js?ver=151515"></script>
    <script src="../Scripts/Forms/FrmResumenBCP.js?ver=151515"></script>
    <script src="../Scripts/Forms/FrmConciliacionBCP.js?ver=151515"></script>

    <script src="../Scripts/Forms/FrmMonitoreoGKN.js?ver=151515"></script>
    <script src="../Scripts/Forms/FrmResumenGKN.js?ver=151515"></script>
    <script src="../Scripts/Forms/FrmConciliacionGKN.js?ver=151515"></script>

    <%-- Modulo BiPay --%>
    <script src="../Scripts/Forms/FrmMonitoreoBIPAY.js?ver=151515"></script>
    <script src="../Scripts/Forms/FrmConciliacionBIPAY.js?ver=151515"></script>
    <script src="../Scripts/Forms/FrmResumenBIPAY.js?ver=151515"></script>

    <script src="../Scripts/Forms/jsSis_FrmResumenOnline.js?ver=151515"></script>


    <script type="text/javascript">
        function Master(cPerCodigo) {
            //console.log(cPerCodigo);
            sessvars.username = cPerCodigo;
            if (sessvars.username != "") {
                //MenuMasterHor(sessvars.username);
                Get_PerImage(sessvars.username);
            }
        }
        function MenuTemporal() {
            //alert("hhaa");

            var menu = "" +
                "<ul class='nav side-menu'>" +

                "   <li id='menu_bbva'>" +
                "       <a href='javascript:;'><i class='fa fa-book'></i> Interconexión BBVA <span class='fa fa-chevron-down'></span></a>" +
                "       <ul class='nav child_menu' id='child_menu_bbva' style='display: none;'>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ServiciosBBVA_aspx();'>Monitoreo</a></li>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ConciliacionBBVA_aspx();'>Conciliación</a></li>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ResumenBBVA_aspx();'>Resumen</a></li>" +
                "       </ul>" +
                "   </li>" +

                "   <li id='menu_bcp' class='active'>" +
                "       <a href='javascript:;'><i class='fa fa-book'></i> Interconexión BCP <span class='fa fa-chevron-down'></span></a>" +
                "       <ul class='nav child_menu' id='child_menu_bcp' style='display: block;'>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ServiciosBCP_aspx();'>Monitoreo BCP</a></li>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ConciliacionBCP_aspx();'>Conciliación BCP</a></li>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ResumenBCP_aspx();'>Resumen BCP</a></li>" +
                "       </ul>" +
                "   </li>" +

                "   <li id='menu_gkn'>" +
                "       <a href='javascript:;'><i class='fa fa-book'></i> Interconexión KasNet <span class='fa fa-chevron-down'></span></a>" +
                "       <ul class='nav child_menu' id='child_menu_gkn' style='display: none;'>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ServiciosGKN_aspx();'>Monitoreo GKN</a></li>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ConciliacionGKN_aspx();'>Conciliación GKN</a></li>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ResumenGKN_aspx();'>Resumen GKN</a></li>" +
                "       </ul>" +
                "   </li>" +

                "   <li id='menu_bipay' >" +
                "       <a href='javascript:;'><i class='fa fa-book'></i> Interconexión BiPay <span class='fa fa-chevron-down'></span></a>" +
                "       <ul class='nav child_menu' id='child_menu_bipay' style='display: none;'>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ServiciosBiPay_aspx();'>Monitoreo BiPay</a></li>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ConciliacionBiPay_aspx();'>Conciliación BiPay</a></li>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ResumenBiPay_aspx();'>Resumen BiPay</a></li>" +
                "       </ul>" +
                "   </li>" +

                "   <li id='menu_online' >" +
                "       <a href='javascript:;'><i class='fa fa-book'></i> Pagos en línea <span class='fa fa-chevron-down'></span></a>" +
                "       <ul class='nav child_menu' id='child_menu_online' style='display: none;'>" +
                "           <li class='subMenu'><a href='#' onclick='estilo_subMenu(); navegacion_ResumenOnline_aspx();'>Resumen pagos en línea</a></li>" +
                "       </ul>" +
                "   </li>" +

                "</ul>";

            $("#cssmenu").html(menu);

            // Permite abrir/cerrar cada bloque del menú
            $("#cssmenu .side-menu > li > a").off("click.menuTemporal").on("click.menuTemporal", function () {
                var $li = $(this).parent("li");
                var $subMenu = $li.children(".child_menu");

                if ($subMenu.length > 0) {
                    $subMenu.slideToggle(150);
                    $li.toggleClass("active");
                }
            });
        }
        function estilo_subMenu() {
            $(".subMenu").removeClass("active");
        }
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
        function soloNumeros(e) {
            var key = window.Event ? e.which : e.keyCode;
            return (key >= 48 && key <= 57)
        }
        function soloNumerosFloat(e) {
            var key = window.Event ? e.which : e.keyCode
            return (key >= 48 && key <= 57 || key == 46)
        }


        function zeroFill(number, width) {
            width -= number.toString().length;
            if (width > 0) {
                return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
            }
            return number + ""; // siempre devuelve tipo cadena
        }
        function existeFecha(fecha) {
            var fechaf = fecha.split("/");
            var day = fechaf[0];
            var month = fechaf[1];
            var year = fechaf[2];
            var date = new Date(year, month, '0');
            if ((day - 0) > (date.getDate() - 0)) {
                return false;
            }
            return true;
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

        function CerrarSesion() {
            sessionStorage.setItem("cPerValor", null);
            location.href = "../Login.aspx";
        }

        function syntaxHighlight(json) {
            if (typeof json != 'string') {
                json = JSON.stringify(json, undefined, 2);
            }
            json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                var cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    } else {
                        cls = 'string';
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean';
                } else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span><br>';
            });
        }

    </script>
    <style>
        canvas {
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
    </style>
    <link href="../CSS/estilos.css" rel="stylesheet"/>
</head>
<body class="nav-md">
    <form id="form1" runat="server" class="form-horizontal"></form>
    <div class="container-fluid body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile clearfix">
              <div id="Div_Image" class="profile_pic">
              </div>
              <div id="Div_User" class="profile_info">
              </div>
            </div>
            <!-- /menu profile quick info -->
            <br />
            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                <input type="hidden" id="varIniciarMenuu" value="0" />
              <div id="cssmenu" class="menu_section">
              </div>
            </div>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small" >
                <img src="../img/seus.jpg" alt="seuss" />
                <!-- -->
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>
              <ul class="nav navbar-nav ms-auto">
                    <li class="">
                        <a href="javascript:;" class="user-profile dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <span id="username_rigth"></span> 
                        </a>
                        <ul class="dropdown-menu dropdown-usermenu dropdown-menu-end">
                            <li>
                                <a href="#" onclick="CerrarSesion()">
                                    <i class="fa fa-sign-out float-end"></i> Salir
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div id="Contenido" class="right_col" role="main"> 
            
        </div>
        <!-- /page content -->

        <!-- footer content -->
        <footer>
          <div class="pull-right">
            <a href="">SEUSS - Sistema estandarizado y unificado Señor de Sipán</a>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>

    <!-- jQuery -->
    <%--<script src="../vendors/jquery/dist/jquery.min.js"></script>--%>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

    <script src="https://cdn.datatables.net/2.3.8/js/dataTables.min.js"></script>
     <script src="https://cdn.datatables.net/2.3.8/js/dataTables.bootstrap5.min.js"></script>
    <div id="m_preload">
        <div>
            <img src="../img/Icon/pre3.gif" alt=""/>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            MenuTemporal();

            // Reemplazo simple del toggle de Gentelella porque custom.min.js está comentado.
            $("#menu_toggle").off("click.menuToggle").on("click.menuToggle", function (e) {
                e.preventDefault();

                if ($("body").hasClass("nav-md")) {
                    $("body").removeClass("nav-md").addClass("nav-sm");
                } else {
                    $("body").removeClass("nav-sm").addClass("nav-md");
                }
            });
        });
    </script>

  </body>
</html>