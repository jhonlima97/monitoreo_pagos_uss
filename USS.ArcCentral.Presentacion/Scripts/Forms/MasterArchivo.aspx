<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MasterArchivo.aspx.cs" Inherits="USS.ArcCentral.Presentacion.Forms.MasterArchivo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>USS - Calidad</title>
    <!-- Bootstrap -->
    <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="../vendors/nprogress/nprogress.css" rel="stylesheet" />
    <link href="../vendors/iCheck/skins/flat/green.css" rel="stylesheet" />
	<link href="../vendors/jquery-confirm/jquery-confirm.min.css" rel="stylesheet" />
    <link href="../vendors/jquery-dataTables/jquery.dataTables.min.css" rel="stylesheet" />
    <link href="../vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" />
    <!-- <link href="../vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" /> -->
    <link href="../vendors/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css" rel="stylesheet" />
    <!-- <link href="../vendors/uploadifive/uploadifive.css" rel="stylesheet"/> -->
    <link href="../vendors/animate.css/animate.min.css" rel="stylesheet" />
    <link href="../vendors/jsTree/css/style.css" rel="stylesheet" />

    <!-- Custom Theme Style -->
    <link href="../build/css/custom.min.css" rel="stylesheet" />

    <script src="../Scripts/jquery-1.10.2.min.js"></script>
    <script src="../Scripts/sessvars.js"></script>
    <script src="../Scripts/jsMenu.js"></script>
    <script src="../Scripts/jsImage.js"></script>
    <script src="../Scripts/jsModal.js"></script>
    <!-- <script src="../Scripts/jspdf.min.js"></script>
    <script src="../Scripts/jspdf.plugin.autotable.min.js"></script>-->
    <script src="../Scripts/Forms/jsCal_FrmReporteDoc.js"></script>

    <script type="text/javascript">
        function Master(cPerCodigo) {
            sessvars.username = cPerCodigo;
            if (sessvars.username != "") {
                MenuMasterHor(sessvars.username);
                Get_PerImage(sessvars.username);
            }
        }
        function estilo_subMenu() {
            $(".subMenu").removeClass("active");
        }
        function m_alerta_ok(titulo,contenido){
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
        function m_alerta_mal(titulo,contenido){
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
        function m_alert_simple(titulo,contenido) {
            $.alert({
                theme: 'modern',
                type: 'red',
                title: titulo,
                content: contenido,
                columnClass: 'small'
            });
        }
		function soloNumeros(e){
            var key = window.Event ? e.which : e.keyCode;
			return (key >= 48 && key <= 57)
        }
        function zeroFill( number, width ){
            width -= number.toString().length;
            if ( width > 0 )
            {
            return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
            }
            return number + ""; // siempre devuelve tipo cadena
        }
        function existeFecha(fecha){
              var fechaf = fecha.split("/");
              var day = fechaf[0];
              var month = fechaf[1];
              var year = fechaf[2];
              var date = new Date(year,month,'0');
              if((day-0)>(date.getDate()-0)){
                    return false;
              }
              return true;
        }
        function CerrarSesion() {
            sessionStorage.setItem("cPerValor", null);
            location.href = "../Login.aspx";
        }
    </script>
    <style>
        canvas {
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
    </style>
    <link href="../CSS/estilo.css" rel="stylesheet"/>
</head>
<body class="nav-md">
    <form id="form1" runat="server" class="form-horizontal"></form>
    <div class="container body">
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
              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <!-- <img src="images/img.jpg" alt="" /> -->
                      <span id="username_rigth"></span>
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="#" onclick="CerrarSesion()"><i class="fa fa-sign-out pull-right"></i> Salir</a></li>
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
            <a href="">SEUSS - Sistema Estandarizado y Unificafo Señor de Sipán</a>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>

    <!-- jQuery -->
    <script src="../vendors/jquery/dist/jquery.min.js"></script>
    <script src="../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../vendors/nprogress/nprogress.js"></script>
    <script src="../vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
    <script src="../vendors/iCheck/icheck.min.js"></script>
    <script src="../vendors/jquery-confirm/jquery-confirm.min.js"></script>
    <script src="../vendors/jquery-dataTables/jquery.dataTables.min.js"></script>
    <script src="../vendors/DateJS/build/date.js"></script>
    <script src="../vendors/moment/min/moment.min.js"></script>
    <script src="../vendors/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
    <!-- <script src="../vendors/uploadifive/jquery.uploadifive.min.js" type="text/javascript"></script>  -->
    <script src="../build/js/custom.min.js"></script>
    <script src="../vendors/jsTree/jstree.min.js"></script>
    <div id="m_preload">
        <div>
            <img src="../img/Icon/pre3.gif" alt=""/>
        </div>
    </div>

  </body>
</html>