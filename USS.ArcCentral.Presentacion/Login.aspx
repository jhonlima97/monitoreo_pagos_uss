<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="USS.ArcCentral.Presentacion.Login" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server" lang="es">
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="author" content="USS" />
    <link rel="icon" type="image/x-icon" href="img/USS.ico" />
    <title>UNIVERSIDAD SEÑOR DE SIPÁN</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    <link href="CSS/master_intra.css" rel="stylesheet" />
</head>
        
<body class="__bg_verde">
    
    <div class="container">
        <div class="row justify-content-center align-items-center minh-100">
            <div class="col-12 col-md-6 __bg_blanco  ">
                <div class="col-12 text-center">
                    <div class="__logo ">
                        <img src="img/logouss.svg" />
                    </div>
                </div>
                <div class="col-12">
                    <form id="form1" runat="server" class="__loginintra">
                        <div class="form-group">
                            <div class="form-group">
                                <asp:TextBox ID="UserName" runat="server" class="form-control __bor" placeholder="Usuario"></asp:TextBox>
                            </div>
                            <div class="form-group">
                                 <asp:TextBox ID="Password" runat="server" class="form-control __bor" TextMode="Password" placeholder="Contraseña"></asp:TextBox>
                            </div>
                        </div>
                        <asp:CheckBox ID="RememberMe" runat="server" Font-Size="8pt" Text="Remember me next" Visible="false"/>
                        <asp:ImageButton ID="ImgCancelar" runat="server" ImageUrl="img/Login_r9_c7.jpg" Visible="false" />
                        <div class="row">
                            <div class="col-12 text-center">
                                <small></small>
                            </div>
                            <div class="col-12">
                                <asp:Button ID="ImgIngresar" runat="server" class="btn btn-secondary btn-block text-center" onclick="ImgIngresar_Click" Text="Ingresar"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="__alerta text-center">
                    <asp:Label ID="FailureText" runat="server" Font-Size="8pt" ForeColor="Red"></asp:Label>
                </div>
            </div>
        </div>
    </div>

</body>
</html>