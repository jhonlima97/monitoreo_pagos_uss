<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FrmRegProveedores.aspx.cs" Inherits="USS.ArcCentral.Presentacion.FrmRegProveedores" %>

<!DOCTYPE html>

<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="keywords" content="distancia, educacion a distancia, traslado, uss, universidad señor de sipán, estudia en la uss, Medicina Humana, Enfermería, Estomatología, Administración, Administración Pública, Contabilidad, Negocios Internacionales, Turismo y Negocios, Derecho, Ciencias de la Comunicación, Psicología, Artes y Diseño Gráfico Empresarial, Trabajo Social, Arquitectura, Ingeniería Agroindustrial y Comercio Exterior, Ingeniería Civil, Ingeniería de Sistemas, Ingeniería Industrial, Ingeniería Mecánica Eléctrica, Ingeniería Económica">
    <meta name="author" content="Jenner Castillo">
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png" />
    <title>USS UNIVERSIDAD SEÑOR DE SIPÁN</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" >
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
    <link rel="stylesheet" href="https://owlcarousel2.github.io/OwlCarousel2/assets/owlcarousel/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://owlcarousel2.github.io/OwlCarousel2/assets/owlcarousel/assets/owl.theme.default.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css">
    <link href="css/master.css" rel="stylesheet">
    <style>
        .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
            position: relative;
            width: 100%;
            padding-right: 10px;
            padding-left: 10px;
        }
        /*Loading*/
        #m_preload {
            position: fixed;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            top: 0;
            left: 0;
            display: none;
            z-index: 9999;
        }
        #m_preload > div {
            position: absolute;
            left: 50%;
            top: 48%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            padding: 15px 15px;
        }
        #m_preload > div > img {
            width: 120px;
        }
        /*Fin Loading*/

        .__bor2{
            padding: 0.8rem 1rem;
            font-size: 0.8rem;
            line-height: 1.4;
        }
        .__selectformu{
            padding: 0.2rem 0.6rem;
        }

        .form-group {
            margin-bottom: 0.5rem;
        }

        .infoDiv1{
            font-size: 10px; margin-bottom: 0px;
        }
        .infoDiv1_1{
            font-size: 10px; margin-bottom: 0px;width: 100%;padding-left: 10px;
        }
        .GuiaRojo{
            color: #ea6c6c;
        }

    </style>
</head>
<body>

    <header >
      <div class="__blanco " style="height: 70px;">
        <div class="container-fluid ">
            <a class="uss-logotipo" href="./">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305 50">
                <path d="M81.9 2.7h1.7v44.5h-1.7z" class="st0"></path>
                <path d="M45.5 47.3c.8.1 1.6.2 2.5.2 3.6 0 6.4-.9 8.4-2.7 2.1-1.8 3.1-4.3 3.1-7.4 0-2.3-.6-4.1-1.7-5.6s-3-2.8-5.7-4c-1.3-.6-3.3-1.4-5.9-2.4-2.6-1-4.3-1.8-5.2-2.4-1.9-1.3-3.3-2.8-4.1-4.4-.8-1.6-1.2-3.7-1.2-6.1 0-3.9 1.3-7 4-9.2C42.4 1.1 46 0 50.7 0c1.9 0 3.8.2 5.6.5 1.9.3 3.6.8 5.2 1.4l.9.3c.3.1.5.2.6.3.1.1.2.3.2.6V13c0 .4-.1.7-.3.8-.2.1-.7.2-1.3.2-.9 0-1.5-.3-1.9-1-.4-.7-.6-1.8-.6-3.5.1-.6-.1-1.5-.6-2.5s-1-1.8-1.7-2.5c-.8-.7-1.7-1.2-2.8-1.6-1-.3-2.2-.5-3.6-.5-2.9 0-5.2.7-6.8 2.2-1.6 1.4-2.4 3.5-2.4 6.1 0 2.1.4 3.8 1.3 5.1.9 1.3 2.3 2.4 4.3 3.3 1.5.7 3.6 1.5 6.3 2.4 2.7 1 4.5 1.7 5.4 2.3 2.5 1.6 4.2 3.2 5.2 4.9 1 1.7 1.5 3.8 1.5 6.4 0 4.7-1.5 8.3-4.6 10.9-3.1 2.6-7.3 3.9-12.8 3.9-1.7 0-3.5-.2-5.4-.5-.3-.1-.6-.1-.9-.2 1.3-.3 2.6-.8 4-1.9"></path>
                <path d="M5.8 33.6V8.3c0-1.7-.2-2.9-.6-3.5-.4-.7-1.1-1-2.1-1.1l-1.9-.2C.4 3.5 0 3 0 2.2c0-.5.1-.9.2-1 .1-.1.4-.2 1-.2.1 0 .5 0 1 .1 2.2.1 4.3.2 6.4.2 2 0 4.2-.1 6.4-.2.6 0 .9-.1 1-.1.5 0 .8.1.9.2.1.1.1.5.1 1 0 .8-.4 1.3-1.1 1.3l-1.9.1c-1 .1-1.7.4-2.1 1.2-.4.7-.6 1.9-.6 3.5v24.4c0 5.4.9 9.2 2.7 11.4 1.8 2.2 4 3.3 8.4 3.3s7.7-1.1 9.8-3.4c2.1-2.3 3.2-5.8 3.2-10.5v-8.7c.6.8 2.3.9 3 1.5v3.9c0 4.5-.3 8-1 10.3-.7 2.3-1.8 4.2-3.4 5.8-1.3 1.3-2.9 2.2-4.9 2.8-2 .6-4.5.9-7.4.9-6 0-9.4-1.3-11.9-3.8-2.7-2.5-4-6.7-4-12.6"></path><path d="M29.8 47.2c.9.2 1.9.3 3 .3 3.5 0 6.4-.9 8.4-2.7 2.1-1.8 3.1-4.3 3.1-7.4 0-2.3-.6-4.1-1.7-5.6s-3-2.8-5.7-4c-1.3-.6-3.3-1.4-5.9-2.4-2.6-1-4.3-1.8-5.2-2.4-1.9-1.3-3.3-2.8-4.1-4.4-.8-1.6-1.2-3.7-1.2-6.1 0-3.9 1.3-7 4-9.2 2.6-2.2 6.3-3.3 11-3.3 1.9 0 3.8.2 5.6.5.4.1.8.2 1.2.2-1.5.4-2.9.8-4.3 2-.9-.2-1.8-.3-2.9-.3-2.9 0-5.2.7-6.8 2.2C26.9 6 26 8.1 26 10.7c0 2.1.4 3.8 1.3 5.1.9 1.3 2.3 2.4 4.3 3.3 1.5.7 3.6 1.5 6.3 2.4 2.7 1 4.5 1.7 5.4 2.3 2.5 1.6 4.2 3.2 5.2 4.9 1 1.7 1.5 3.8 1.5 6.4 0 4.7-1.5 8.3-4.6 10.9-3.1 2.6-7.4 3.9-12.8 3.9-1.7 0-3.5-.2-5.4-.5-1.3-.2-2.8-.6-4.4-1.1h7v-1.1zM100 15.9V6.5c0-.9-.1-1.5-.2-1.8-.1-.2-.4-.4-.8-.4l-.7-.1c-.3 0-.5-.2-.5-.6 0-.2 0-.4.1-.5.1-.1.2-.1.4-.1h.4c1.1.1 2.3.1 3.4.1s2.3 0 3.4-.1h.4c.2 0 .4 0 .4.1.1.1.1.2.1.5 0 .4-.2.6-.5.6l-.7.1c-.4 0-.6.2-.8.4-.1.2-.2.8-.2 1.8v9.8c0 1.8.4 3.1 1.1 3.9.7.8 1.9 1.2 3.6 1.2.8 0 1.6-.1 2.2-.3.6-.2 1.2-.6 1.7-1s.8-1.1 1-1.9c.2-.8.3-2.1.3-4 0-1.8 0-3.5-.1-5 0-1.5-.1-2.4-.1-2.8-.1-.7-.2-1.3-.4-1.6-.2-.3-.5-.5-.9-.5l-.7-.1h-.1c-.3 0-.4-.2-.4-.6 0-.3 0-.4.1-.5.1-.1.2-.1.4-.1.1 0 .4 0 1 .1.6 0 1.2.1 1.7.1.8 0 1.6 0 2.5-.1h.5c.2 0 .4 0 .4.1.1.1.1.2.1.5s-.1.5-.3.6h-.1l-.5.1c-.9.1-1.3 2.3-1.4 6.4v3c0 3.1-.3 5.1-.9 6.1-.6 1-1.4 1.7-2.4 2.1-1 .4-2.4.7-4.2.7-3 0-5-.5-6.2-1.5-1.5-1-2.1-2.8-2.1-5.3m22.6-1v-9c0-.4-.1-.8-.3-1.1-.2-.3-.4-.5-.7-.5l-.7-.1c-.4 0-.5-.2-.5-.6 0-.2 0-.4.1-.5.1-.1.2-.1.4-.1h5.1c.1 0 .1 0 .1.1 0 0 .1.1.2.3.5.7 1 1.4 1.5 2.2l9.1 11.9v-1.7c0-4.7-.1-7.5-.1-8.5 0-1.2-.2-2-.4-2.4-.2-.4-.5-.6-.9-.7l-.7-.1h-.1c-.3 0-.4-.2-.4-.6 0-.2 0-.4.1-.5.1-.1.2-.1.4-.1.1 0 .4 0 1 .1.6 0 1.2.1 1.7.1s1.1 0 1.7-.1c.6 0 .9-.1 1-.1.2 0 .4 0 .4.1.1.1.1.2.1.5s-.1.5-.3.6h-.2l-.5.1c-.3.1-.6.2-.8.5-.2.2-.3.6-.4 1.1-.1.5-.1 1.5-.2 3.2 0 1.7-.1 3.6-.1 5.6 0 2.1 0 4.2.1 6.3v.6c0 .3 0 .4-.1.5-.1.1-.2.2-.3.2h-2.3c-.3 0-.8-.5-1.4-1.4-.5-.8-1-1.5-1.4-2.1L123.9 7c0 1 0 2.5.1 4.3.1 3.5.1 5.7.1 6.7 0 1.2.2 2 .4 2.4.2.4.5.6.9.7l.7.1h.1c.3 0 .4.2.4.6 0 .2 0 .4-.1.5-.1.1-.2.1-.4.1-.1 0-.4 0-1-.1-.6 0-1.2-.1-1.7-.1s-1.1 0-1.7.1c-.6 0-.9.1-1 .1-.2 0-.3 0-.4-.1-.1-.1-.1-.2-.1-.5s.1-.5.3-.6h.2l.6-.1c.8-.1 1.3-1.9 1.3-5.3v-.9zm22.9 4V6.5c0-1-.1-1.6-.2-1.8-.1-.2-.4-.4-.8-.4l-.7-.1c-.3 0-.5-.2-.5-.6 0-.2 0-.4.1-.5.1-.1.2-.1.4-.1h.4c1.2.1 2.3.1 3.5.1 1.1 0 2.3 0 3.4-.1h.4c.2 0 .4 0 .4.1.1.1.1.2.1.5 0 .4-.2.6-.5.6l-.7.1c-.4 0-.6.2-.8.4-.1.2-.2.8-.2 1.8v12.6c0 .8.1 1.4.2 1.6.1.2.4.3.8.4l.7.1h.1c.3 0 .4.2.4.6 0 .2 0 .4-.1.5-.1.1-.2.1-.4.1h-.4c-1.1-.1-2.2-.1-3.4-.1-1.2 0-2.3 0-3.5.1h-.4c-.2 0-.4 0-.4-.1-.1-.1-.1-.2-.1-.5s.1-.5.4-.6h.1l.7-.1c.4 0 .6-.2.8-.4.1-.2.2-.7.2-1.6v-.2zm16 2.8l-4.7-13.8c-.5-1.5-.9-2.4-1.2-2.8-.3-.4-.6-.7-.9-.7l-.4-.1h-.2c-.2 0-.3-.2-.3-.6 0-.2 0-.4.1-.5.1-.1.2-.1.4-.1h.3c1.1.1 2.3.1 3.4.1 1.2 0 2.3 0 3.5-.1h.3c.2 0 .3 0 .4.1.1.1.1.2.1.5 0 .4-.1.5-.4.6h-.1l-.4.1c-.4 0-.6.2-.8.4-.2.2-.3.5-.3.8 0 .2 0 .4.1.7.1.3.2.6.3 1l3.8 11.4 3.7-11.2c.1-.3.2-.6.2-.9.1-.3.1-.6.1-.9 0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.9-.4h-.5c-.3 0-.4-.2-.4-.6 0-.3 0-.4.1-.5.1-.1.2-.1.5-.1h.4c.7.1 1.5.1 2.2.1.7 0 1.4 0 2.2-.1h.3c.3 0 .4 0 .5.1.1.1.1.2.1.5s-.1.5-.4.6h-.3c-.4 0-.7.3-1.1.8-.3.5-.8 1.5-1.3 3l-4.8 13.6v.1c-.1.4-.3.6-.5.6h-2.1c-.3-.1-.5-.3-.7-.8zm15.1-2.8V6.5c0-1-.1-1.6-.2-1.8-.1-.2-.4-.4-.8-.4l-.7-.1c-.4 0-.5-.2-.5-.6 0-.2 0-.4.1-.5.1-.1.2-.1.4-.1h.4c1.5.1 3 .1 4.6.1 2.6 0 5.2 0 7.6-.1h1.3c.2 0 .3 0 .4.1.1.1.1.2.1.4v3.6c0 .1 0 .2-.1.3-.1.1-.2.1-.4.1h-.8c-.4 0-.6-.2-.7-.7 0-.1-.1-.3-.1-.3-.2-.9-.5-1.5-.9-1.8-.4-.3-1.1-.4-2.2-.4h-3.3c-.1.5-.1 1-.1 1.4v5.6h1c.7 0 1.3-.1 1.6-.3.3-.2.6-.5.7-1 .1-.2.1-.5.1-.9s.2-.6.6-.6h.7c.2 0 .3 0 .4.1.1 0 .1.1.1.2v4.7c0 .5 0 .9.1 1.4v.1c0 .1 0 .1-.1.2-.1 0-.2.1-.4.1h-.7c-.3 0-.5-.2-.6-.6 0-.3-.1-.6-.1-.9-.2-.5-.4-.8-.7-1-.3-.2-.9-.3-1.6-.3h-1v8.3c.2 0 .3.1.5.1h2.8c1.2 0 1.9-.1 2.3-.4.4-.3.7-1 1-2.2.1-.2.1-.4.1-.7.1-.5.3-.8.7-.8h.9c.2 0 .3.1.3.2.1.1.1.3.1.5v4c0 .3 0 .6-.1.7-.1.1-.2.1-.4.1h-1c-2.4-.1-4.9-.2-7.7-.2-1.7 0-3.4 0-5 .1h-.4c-.2 0-.4 0-.4-.1-.1-.1-.1-.2-.1-.5s.2-.5.4-.6h.1l.7-.1c.4 0 .6-.2.8-.4.1-.2.2-.7.2-1.6zm18.2 0V6.5c0-1-.1-1.6-.2-1.8-.1-.2-.4-.4-.8-.4l-.7-.1c-.4 0-.5-.2-.5-.6 0-.2 0-.4.1-.5.1-.1.2-.1.5-.1h.5c1 .1 2 .1 2.9.1.7 0 1.7 0 3.2-.1 1.5 0 2.6-.1 3.4-.1 1.7 0 3 .3 3.8 1 .8.7 1.2 1.7 1.2 3.1 0 1.5-.4 2.6-1.1 3.4-.8.8-2 1.3-3.8 1.6l4.2 6.2c.6 1 1.1 1.6 1.5 2 .4.4.7.6 1.1.7l.4.1c.2 0 .3.1.3.1 0 .1.1.2.1.5 0 .2 0 .4-.1.5-.1.1-.2.1-.4.1h-.3c-.7-.1-1.4-.1-2.1-.1-.8 0-1.5 0-2.3.1h-.2c-.2 0-.4-.3-.8-.9-.4-.8-.7-1.4-1.1-2l-4.3-6.9h-.1v6.7c0 .8.1 1.4.2 1.6.1.2.4.3.8.4l.7.1h.1c.3 0 .4.2.4.6 0 .2 0 .4-.1.5-.1.1-.2.1-.4.1h-.4c-1.1-.1-2.3-.1-3.4-.1s-2.3 0-3.4.1h-.4c-.2 0-.4 0-.4-.1-.1-.1-.1-.2-.1-.5s.1-.5.4-.6h.1l.7-.1c.4 0 .6-.2.8-.4.1-.2.2-.7.2-1.6v-.2zm4.1-7.1h.2c1.6 0 2.8-.3 3.6-1 .8-.6 1.1-1.6 1.1-3 0-1.2-.3-2.1-.9-2.7-.6-.6-1.6-.9-2.9-.9h-1.1v7.6zm15.3 4.9h.8c.4 0 .6.3.7 1 0 .2 0 .3.1.4.2 1.2.6 2 1.2 2.5s1.4.8 2.5.8c1.3 0 2.3-.3 3.1-1 .7-.7 1.1-1.6 1.1-2.7 0-.5-.1-.9-.2-1.3s-.3-.7-.6-.9c-.5-.5-1.7-1-3.5-1.5-.5-.1-.8-.2-1.1-.3-1.6-.5-2.8-1.2-3.6-2-.8-.8-1.2-1.9-1.2-3.2 0-1.8.7-3.2 2-4.3 1.3-1 3.1-1.6 5.4-1.6.9 0 1.8.1 2.7.2.9.1 1.8.3 2.6.5.2.1.4.1.4.2.1.1.1.2.1.4v3.4c0 .2 0 .3-.1.3 0 .4-.2.4-.4.4h-.8c-.4 0-.6-.3-.7-.8v-.1c-.2-1.1-.5-1.9-1.1-2.4-.6-.5-1.5-.7-2.6-.7s-1.9.3-2.6.9c-.6.6-1 1.3-1 2.2 0 .4.1.8.2 1.2.2.4.4.7.7 1 .5.5 1.6 1 3.1 1.4.4.1.6.2.8.2 2.1.6 3.5 1.2 4.3 2.1.8.8 1.2 2 1.2 3.5 0 2-.7 3.6-2.1 4.7-1.4 1.1-3.4 1.7-6 1.7-1 0-2-.1-2.9-.2-1-.1-1.9-.3-2.7-.6-.3-.1-.4-.3-.4-.8v-1.4c0-.7 0-1.5-.1-2.3v-.3c0-.2.1-.3.1-.3.2-.3.4-.3.6-.3m19.1 2.2V6.5c0-1-.1-1.6-.2-1.8-.1-.2-.4-.4-.8-.4l-.7-.1c-.3 0-.5-.2-.5-.6 0-.2 0-.4.1-.5.1-.1.2-.1.4-.1h.4c1.2.1 2.3.1 3.5.1 1.1 0 2.3 0 3.4-.1h.4c.2 0 .4 0 .4.1.1.1.1.2.1.5 0 .4-.2.6-.5.6l-.7.1c-.4 0-.6.2-.8.4-.1.2-.2.8-.2 1.8v12.6c0 .8.1 1.4.2 1.6.1.2.4.3.8.4l.7.1h.1c.3 0 .4.2.4.6 0 .2 0 .4-.1.5-.1.1-.2.1-.4.1h-.4c-1.1-.1-2.2-.1-3.4-.1-1.2 0-2.3 0-3.5.1h-.4c-.2 0-.4 0-.4-.1-.1-.1-.1-.2-.1-.5s.1-.5.4-.6h.1l.7-.1c.4 0 .6-.2.8-.4.1-.2.2-.7.2-1.6v-.2zm11.5-12.4c0-.9-.1-1.5-.2-1.8-.1-.2-.4-.4-.8-.4l-.7-.1c-.4 0-.5-.2-.5-.6 0-.2 0-.4.1-.5.1-.1.2-.1.4-.1h.4c1.1.1 2.2.1 3.4.1.7 0 1.8 0 3.3-.1 1.5 0 2.6-.1 3.3-.1 1.3 0 2.3.1 3 .3.7.2 1.3.4 1.9.8 1 .7 1.8 1.7 2.2 2.9.5 1.2.7 2.9.7 4.9 0 2.2-.2 3.9-.6 5.3-.4 1.4-1 2.5-1.9 3.3-.6.6-1.4 1-2.4 1.3-.9.3-2.5.4-4.6.4-.6 0-1.5 0-2.6-.1-1.2 0-2.1-.1-2.7-.1-.9 0-1.8 0-2.8.1h-.5c-.2 0-.4 0-.4-.1-.1-.1-.1-.2-.1-.5s.2-.5.4-.6h.1l.7-.1c.4 0 .7-.2.8-.4.1-.2.2-.8.2-1.8v-12zm4.1-2.1c0 .4 0 .8-.1 1.3v13.9c0 .4 0 .9.1 1.4h.1c.7.1 1.2.1 1.5.1 2.2 0 3.8-.7 4.8-2s1.5-3.5 1.5-6.4c0-3.1-.5-5.2-1.4-6.5-.9-1.2-2.5-1.9-4.7-1.9h-1.1c-.2.1-.4.1-.7.1m17.3 12.8l5-13.6v-.1c.1-.4.3-.6.5-.6h.1c.3 0 .7.1 1 .1.3 0 .7 0 1-.1h.1c.2 0 .4.2.5.5 0 .1 0 .1.1.2l4.8 13.8c.4 1.3.8 2.2 1.1 2.7.3.5.7.8 1 .9l.5.1h.1c.2 0 .3.1.3.1s.1 0 .1.1v.4c0 .2 0 .4-.1.5-.1.1-.2.1-.4.1h-.4c-1.2-.1-2.4-.1-3.6-.1-1.2 0-2.4 0-3.6.1h-.4c-.2 0-.4 0-.4-.1-.1-.1-.1-.2-.1-.5s0-.4.1-.5c.1-.1.2-.1.5-.1h.4c.4 0 .8-.1 1-.3.2-.2.3-.5.3-.8 0-.2 0-.5-.1-.8l-.3-.9-1.3-3.7h-5.5l-1.4 4.4c-.1.2-.1.4-.1.6v.5c0 .3.1.6.3.8.2.2.5.3.9.3l.6.1c.4 0 .5.2.5.6 0 .2 0 .4-.1.5-.1.1-.2.1-.4.1h-.5c-.9-.1-1.8-.1-2.5-.1-.8 0-1.6 0-2.5.1h-.5c-.2 0-.4 0-.4-.1-.1-.1-.1-.2-.1-.5 0-.4.2-.6.5-.6h.4c.6 0 1-.3 1.4-.8.6-.8 1.1-1.8 1.6-3.3m3-4.1h4.7l-2.2-6.7h-.2l-2.3 6.7zm17.6-6.6c0-.9-.1-1.5-.2-1.8-.1-.2-.4-.4-.8-.4h-.8c-.4 0-.5-.2-.5-.6 0-.2 0-.4.1-.5.1-.1.2-.1.4-.1h.4c1.1.1 2.2.1 3.4.1.7 0 1.8 0 3.2-.1 1.5 0 2.6-.1 3.3-.1 1.3 0 2.3.1 3 .3.7.2 1.3.4 1.9.8 1 .7 1.8 1.7 2.2 2.9.5 1.2.7 2.9.7 4.9 0 2.2-.2 3.9-.6 5.3-.4 1.4-1 2.5-1.9 3.3-.6.6-1.4 1-2.3 1.3-.9.3-2.5.4-4.6.4-.6 0-1.5 0-2.6-.1-1.2 0-2.1-.1-2.7-.1-.9 0-1.8 0-2.8.1h-.5c-.2 0-.4 0-.4-.1-.1-.1-.1-.2-.1-.5s.2-.5.5-.6h.1l.7-.1c.4 0 .7-.2.8-.4.1-.2.2-.8.2-1.8V6.5zm4.1-2.1c0 .4 0 .8-.1 1.3v13.9c0 .4 0 .9.1 1.4h.1c.7.1 1.2.1 1.5.1 2.2 0 3.8-.7 4.8-2s1.5-3.5 1.5-6.4c0-3.1-.5-5.2-1.4-6.5-.9-1.2-2.5-1.9-4.7-1.9h-1.1c-.2.1-.5.1-.7.1M100.6 42.3h.6c.3 0 .5.3.6.8 0 .2 0 .3.1.4.2 1 .5 1.7 1 2.1.5.4 1.2.7 2.1.7 1.1 0 1.9-.3 2.6-.8.6-.5.9-1.3.9-2.2 0-.4-.1-.7-.2-1-.1-.3-.3-.6-.5-.8-.5-.4-1.4-.8-2.9-1.2-.4-.1-.7-.2-.9-.3-1.3-.4-2.3-1-3-1.7-.6-.7-1-1.6-1-2.6 0-1.5.5-2.6 1.6-3.5 1.1-.9 2.6-1.3 4.4-1.3.7 0 1.5.1 2.2.2.7.1 1.5.3 2.2.5.2 0 .3.1.4.2.1.1.1.2.1.3v2.8c0 .1 0 .2-.1.3-.1 0-.2.1-.4.1h-.7c-.3 0-.5-.2-.6-.7v-.1c-.1-.9-.4-1.5-.9-2-.5-.4-1.2-.6-2.1-.6-.9 0-1.6.2-2.1.7-.5.5-.8 1.1-.8 1.8 0 .3.1.6.2.9.1.3.3.6.5.8.4.4 1.3.8 2.6 1.1.3.1.5.1.7.2 1.7.5 2.9 1 3.5 1.7.6.7 1 1.7 1 2.9 0 1.7-.6 3-1.7 3.9-1.2.9-2.8 1.4-5 1.4-.8 0-1.6-.1-2.4-.2-.8-.1-1.5-.3-2.2-.5-.2-.1-.4-.3-.4-.6v-1.1c0-.6 0-1.2-.1-1.9v-.3c0-.1 0-.2.1-.3.2-.1.3-.1.6-.1m15.6 1.8V33.9c0-.8-.1-1.3-.2-1.5-.1-.2-.3-.3-.6-.3h-.6c-.3 0-.4-.2-.4-.5 0-.2 0-.3.1-.4.1-.1.2-.1.4-.1h.3c1.2.1 2.5.1 3.8.1 2.2 0 4.3 0 6.3-.1h1.1c.2 0 .3 0 .3.1.1.1.1.2.1.4v2.9c0 .1 0 .2-.1.2-.1.1-.2.1-.3.1h-.7c-.3 0-.5-.2-.6-.6 0-.1 0-.2-.1-.3-.2-.8-.5-1.3-.8-1.5-.3-.2-.9-.3-1.8-.3h-2.7c0 .4-.1.8-.1 1.2V38h.8c.6 0 1.1-.1 1.3-.2.3-.2.5-.4.6-.8.1-.2.1-.4.1-.7 0-.3.2-.5.5-.5h.6c.2 0 .3 0 .3.1.1 0 .1.1.1.2v5c0 .1 0 .1-.1.2h-.8c-.3 0-.4-.2-.5-.5 0-.3-.1-.5-.1-.7-.1-.4-.3-.7-.6-.8-.3-.2-.7-.2-1.3-.2h-.8V46c.1 0 .3.1.4.1h2.3c1 0 1.6-.1 1.9-.3.3-.2.6-.8.8-1.8 0-.2.1-.4.1-.6.1-.4.2-.7.5-.7h.8c.1 0 .2 0 .3.1.1.1.1.2.1.4v3.3c0 .3 0 .5-.1.5-.1.1-.2.1-.3.1h-.9c-2-.1-4.1-.1-6.3-.1-1.4 0-2.8 0-4.1.1h-.3c-.2 0-.3 0-.4-.1-.1-.1-.1-.2-.1-.4 0-.3.1-.4.4-.5h.7c.3 0 .5-.1.6-.3.1-.2.2-.6.2-1.3v-.4zm15.1-3.2v-7.4c0-.3-.1-.7-.2-.9-.2-.3-.4-.4-.6-.4h-.6c-.3 0-.4-.2-.4-.5 0-.2 0-.3.1-.4.1-.1.2-.1.4-.1h4.1c.1 0 .1 0 .1.1l.2.2c.4.6.8 1.2 1.3 1.8l7.5 9.8v-1.4c0-3.9-.1-6.2-.1-7 0-1-.1-1.6-.3-2-.2-.3-.4-.5-.8-.5h-.7c-.2 0-.3-.2-.3-.5 0-.2 0-.3.1-.4.1-.1.2-.1.4-.1h4.4c.2 0 .3 0 .4.1.1.1.1.2.1.4 0 .3-.1.4-.3.5h-.1l-.4.1c-.3 0-.5.2-.6.4-.2.2-.3.5-.3.9s-.1 1.3-.1 2.7c0 1.4-.1 2.9-.1 4.6 0 1.8 0 3.5.1 5.2v.5c0 .2 0 .4-.1.4 0 .1-.1.1-.3.1h-1.9c-.3 0-.6-.4-1.2-1.2-.4-.7-.8-1.3-1.2-1.7l-7.2-9.7V38c0 2.9.1 4.7.1 5.5 0 1 .1 1.6.3 2 .2.3.4.5.8.5h.6c.2 0 .3.2.3.5 0 .2 0 .3-.1.4 0 .1-.2.1-.3.1H130c-.2 0-.3 0-.3-.1 0 0-.1-.2-.1-.4 0-.3.1-.4.3-.5h.1l.5-.1c.7-.1 1-1.6 1.1-4.4v-.6zm9.7-15c-.1.9-.4 1.6-.8 2-.4.5-.9.7-1.5.7-.1 0-.3 0-.6-.1h-.1l-1.2-.3h-.7c-.2 0-.4.1-.6.2-.2.2-.3.4-.4.7h-.7c.1-.9.4-1.6.8-2.1s.9-.7 1.6-.7h.4c.1 0 .2 0 .4.1l1.2.3h.5c.2 0 .4-.1.6-.2.2-.2.3-.4.4-.7h.7zm7.7 13.1c0-1.7.2-3.1.5-4.1.3-1 .9-1.8 1.7-2.5.6-.5 1.4-.9 2.4-1.2 1-.3 2.1-.4 3.4-.4 1.2 0 2.3.1 3.4.4 1 .3 1.8.7 2.4 1.2.8.7 1.3 1.5 1.7 2.5.3 1 .5 2.4.5 4.1 0 1.7-.2 3.1-.5 4.1-.3 1-.9 1.9-1.7 2.5-.6.5-1.4.9-2.4 1.2-1 .3-2.1.4-3.4.4-1.2 0-2.3-.1-3.4-.4-1-.3-1.8-.7-2.4-1.2-.8-.7-1.3-1.5-1.7-2.5-.3-1-.5-2.3-.5-4.1m3.6 0c0 1.8.1 3 .2 3.8.1.8.4 1.4.7 1.8.4.6.8 1 1.4 1.2.6.3 1.2.4 2 .4s1.5-.1 2-.4c.6-.3 1-.7 1.4-1.2.3-.5.5-1.1.7-1.8.1-.8.2-2 .2-3.8 0-1.8-.1-3.1-.2-3.8-.1-.7-.4-1.4-.7-1.8-.4-.5-.8-.9-1.4-1.2-.6-.3-1.2-.4-2-.4s-1.4.1-2 .4c-.6.3-1 .7-1.4 1.2-.3.5-.5 1.1-.7 1.9-.1.7-.2 2-.2 3.7m16.6 5.1V33.9c0-.8-.1-1.3-.2-1.5-.1-.2-.3-.3-.6-.3h-.6c-.3 0-.4-.2-.4-.5 0-.2 0-.3.1-.4.1-.1.2-.1.4-.1h.4c.8.1 1.6.1 2.4.1.6 0 1.4 0 2.7-.1 1.2 0 2.2-.1 2.8-.1 1.4 0 2.5.3 3.1.8.7.5 1 1.4 1 2.6 0 1.2-.3 2.2-.9 2.8-.6.6-1.7 1.1-3.1 1.3l3.5 5.1c.5.8.9 1.4 1.3 1.7.3.3.6.5.9.5h.3c.2 0 .2.1.3.1v.4c0 .2 0 .3-.1.4 0 .1-.2.1-.4.1h-.3c-.6-.1-1.2-.1-1.8-.1-.6 0-1.3 0-1.9.1h-.2c-.2 0-.4-.3-.6-.8-.3-.6-.6-1.2-.9-1.7l-3.6-5.7h-.1v5.5c0 .7.1 1.1.2 1.3.1.2.3.3.6.3h.7c.2 0 .4.2.4.5 0 .2 0 .3-.1.4-.1.1-.2.1-.4.1h-.3c-.9-.1-1.9-.1-2.8-.1-.9 0-1.9 0-2.8.1h-.3c-.2 0-.3 0-.4-.1-.1-.1-.1-.2-.1-.4 0-.3.1-.4.4-.5h.7c.3 0 .5-.1.6-.3.1-.2.2-.6.2-1.3zm3.4-5.8h.2c1.3 0 2.3-.3 2.9-.8.6-.5.9-1.4.9-2.5 0-1-.3-1.8-.8-2.2-.5-.5-1.3-.7-2.4-.7h-.9v6.2zm20.8-4.4c0-.8-.1-1.3-.2-1.5-.1-.2-.3-.3-.7-.3h-.6c-.3 0-.4-.2-.4-.5 0-.2 0-.3.1-.4.1-.1.2-.1.4-.1h.3c.9.1 1.8.1 2.8.1h5.5c1.1 0 1.9.1 2.5.2.6.1 1.1.4 1.5.7.8.6 1.5 1.4 1.8 2.4.4 1 .6 2.4.6 4 0 1.8-.2 3.2-.5 4.4-.3 1.1-.8 2-1.6 2.7-.5.5-1.2.9-1.9 1.1-.8.2-2 .3-3.8.3h-4.4c-.7 0-1.5 0-2.3.1h-.4c-.2 0-.3 0-.4-.1-.1-.1-.1-.2-.1-.4 0-.3.1-.4.4-.5h.7c.3 0 .5-.1.7-.3.1-.2.2-.7.2-1.5V33.9zm3.4-1.7c0 .3 0 .7-.1 1v11.4c0 .4 0 .7.1 1.2h.1c.6.1 1 .1 1.3.1 1.8 0 3.1-.5 4-1.6.8-1.1 1.2-2.9 1.2-5.3 0-2.5-.4-4.3-1.1-5.3-.8-1-2-1.5-3.9-1.5h-1.6m14.6 11.9V33.9c0-.8-.1-1.3-.2-1.5-.1-.2-.3-.3-.6-.3h-.6c-.3 0-.4-.2-.4-.5 0-.2 0-.3.1-.4.1-.1.2-.1.4-.1h.3c1.2.1 2.5.1 3.8.1 2.2 0 4.3 0 6.3-.1h1.1c.2 0 .3 0 .3.1.1.1.1.2.1.4v2.9c0 .1 0 .2-.1.2-.1.1-.2.1-.3.1h-.7c-.3 0-.5-.2-.6-.6 0-.1 0-.2-.1-.3-.2-.8-.5-1.3-.8-1.5-.3-.2-.9-.3-1.8-.3h-2.7c0 .4-.1.8-.1 1.2V38h.8c.6 0 1.1-.1 1.3-.2.3-.2.5-.4.6-.8.1-.2.1-.4.1-.7 0-.3.2-.5.5-.5h.6c.2 0 .3 0 .3.1.1 0 .1.1.1.2v5c0 .1 0 .1-.1.2h-.9c-.3 0-.4-.2-.5-.5 0-.3-.1-.5-.1-.7-.1-.4-.3-.7-.6-.8-.3-.2-.7-.2-1.3-.2h-.8V46c.1 0 .3.1.4.1h2.3c1 0 1.6-.1 1.9-.3.3-.2.6-.8.8-1.8 0-.2.1-.4.1-.6.1-.4.3-.7.5-.7h.8c.1 0 .2 0 .3.1.1.1.1.2.1.4v3.3c0 .3 0 .5-.1.5-.1.1-.2.1-.3.1h-.8c-2-.1-4.1-.1-6.3-.1-1.4 0-2.8 0-4.1.1h-.3c-.2 0-.3 0-.4-.1-.1-.1-.1-.2-.1-.4 0-.3.1-.4.4-.5h.7c.3 0 .5-.1.6-.3.1-.2.2-.6.2-1.3v-.4zm21.7-1.8h.6c.3 0 .5.3.6.8 0 .2 0 .3.1.4.2 1 .5 1.7 1 2.1.5.4 1.2.7 2.1.7 1.1 0 1.9-.3 2.6-.8.6-.5.9-1.3.9-2.2 0-.4-.1-.7-.2-1-.1-.3-.3-.6-.5-.8-.5-.4-1.4-.8-2.9-1.2-.4-.1-.7-.2-.9-.3-1.3-.4-2.3-1-3-1.7-.6-.7-.9-1.6-.9-2.6 0-1.5.5-2.6 1.6-3.5 1.1-.9 2.6-1.3 4.4-1.3.7 0 1.5.1 2.2.2.7.1 1.4.3 2.1.5.2 0 .3.1.4.2.1.1.1.2.1.3v2.8c0 .1 0 .2-.1.3-.1 0-.2.1-.4.1h-.7c-.3 0-.5-.2-.6-.7v-.1c-.1-.9-.4-1.5-.9-2-.5-.4-1.2-.6-2.1-.6-.9 0-1.6.2-2.1.7-.5.5-.8 1.1-.8 1.8 0 .3.1.6.2.9.1.3.3.6.5.8.4.4 1.3.8 2.6 1.1.3.1.5.1.7.2 1.7.5 2.9 1 3.5 1.7.6.7 1 1.7 1 2.9 0 1.7-.6 3-1.7 3.9s-2.8 1.4-5 1.4c-.8 0-1.6-.1-2.4-.2-.8-.1-1.5-.3-2.2-.5-.2-.1-.4-.3-.4-.6v-1.1c0-.6 0-1.2-.1-1.9v-.3c0-.1 0-.2.1-.3.3-.1.4-.1.6-.1m15.8 1.8V33.9c0-.8-.1-1.3-.2-1.5-.1-.2-.3-.3-.6-.3h-.6c-.3 0-.4-.2-.4-.5 0-.2 0-.3.1-.4.1-.1.2-.1.4-.1h.3c1 .1 1.9.1 2.9.1.9 0 1.9 0 2.8-.1h.3c.2 0 .3 0 .4.1.1.1.1.2.1.4 0 .3-.1.5-.4.5h-.6c-.3 0-.5.1-.6.3-.1.2-.2.7-.2 1.5v10.4c0 .7.1 1.1.2 1.3.1.2.3.3.6.3h.7c.2 0 .4.2.4.5 0 .2 0 .3-.1.4-.1.1-.2.1-.4.1h-.3c-.9-.1-1.9-.1-2.8-.1-1 0-1.9 0-2.9.1h-.3c-.2 0-.3 0-.4-.1-.1-.1-.1-.2-.1-.4 0-.3.1-.4.4-.5h.7c.3 0 .5-.1.6-.3.1-.2.2-.6.2-1.3v-.2zm9.5 0V33.9c0-.8-.1-1.3-.2-1.5-.1-.2-.3-.3-.6-.3h-.6c-.3 0-.4-.2-.4-.5 0-.2 0-.3.1-.4.1-.1.2-.1.4-.1h.3c1 .1 1.9.1 2.8.1h4.6c1.8 0 3 .3 3.6.9.7.6 1 1.7 1 3.2 0 1.9-.5 3.2-1.4 4-1 .8-2.6 1.2-4.9 1.2h-1.1v3.7c0 .8.1 1.3.2 1.5.1.2.3.3.6.3h.8c.3 0 .4.2.4.5 0 .2 0 .3-.1.4-.1.1-.2.1-.4.1h-.3c-1-.1-2-.1-3-.1-.9 0-1.9 0-2.8.1h-.3c-.2 0-.3 0-.4-.1-.1-.1-.1-.2-.1-.4 0-.3.1-.4.4-.5h.7c.3 0 .5-.1.6-.3.1-.2.2-.6.2-1.3v-.3zm3.4-4.8h.5c1.2 0 2-.3 2.6-.9.6-.6.8-1.6.8-3 0-1.2-.2-2-.7-2.5-.5-.5-1.3-.8-2.4-.8h-.8v7.2zm11.7 3.5l4.2-11.2v-.1c.1-.3.3-.5.4-.5h.1c.3 0 .5.1.8.1.3 0 .5 0 .8-.1h.1c.2 0 .3.1.4.4v.1l4 11.4c.4 1.1.7 1.8.9 2.2.3.4.6.7.9.7l.4.1h.3l.1.1v.3c0 .2 0 .3-.1.4-.1.1-.2.1-.4.1h-.3c-1-.1-2-.1-3-.1s-2 0-3 .1h-.3c-.2 0-.3 0-.4-.1-.1-.1-.1-.2-.1-.4s0-.3.1-.4c0 0 .2-.1.4-.1h.4c.4 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.2 0-.4-.1-.7-.1-.2-.1-.5-.2-.8l-1.1-3.1h-4.5l-1.2 3.6c-.1.2-.1.3-.1.5v.4c0 .3.1.5.3.7.2.2.4.3.7.3h.5c.3 0 .4.2.4.5 0 .2 0 .3-.1.4-.1.1-.2.1-.4.1h-.4c-.8 0-1.5-.1-2.1-.1-.6 0-1.3 0-2.1.1h-.4c-.2 0-.3 0-.4-.1-.1-.1-.1-.2-.1-.4 0-.3.1-.5.4-.5h.4c.5 0 .9-.3 1.2-.7.6-.1 1-1 1.5-2.2m2.4-3.4h3.9l-1.9-5.5h-.2l-1.8 5.5zm1.1-9.8l3.1-3.2c.3-.3.6-.6.8-.7.2-.1.5-.2.7-.2.3 0 .5.1.7.3.2.2.3.4.3.7 0 .2-.1.4-.2.6-.1.2-.4.4-.9.6l-3.5 1.9h-1zm13.5 11.3v-7.4c0-.4-.1-.7-.2-.9-.2-.3-.4-.4-.6-.4h-.6c-.3 0-.4-.2-.4-.5 0-.2 0-.3.1-.4.1-.1.2-.1.4-.1h4.1c.1 0 .1 0 .1.1l.2.2c.4.6.8 1.2 1.3 1.8l7.5 9.8v-1.4c0-3.9-.1-6.2-.1-7 0-1-.1-1.6-.3-2-.2-.3-.4-.5-.8-.5h-.7c-.2 0-.4-.2-.4-.5 0-.2 0-.3.1-.4 0-.1.2-.1.4-.1h4.4c.2 0 .3 0 .4.1.1.1.1.2.1.4 0 .3-.1.4-.3.5h-.1l-.4.1c-.3 0-.5.2-.6.4-.2.2-.3.5-.3.9s-.1 1.3-.1 2.7c0 1.4-.1 2.9-.1 4.6 0 1.8 0 3.5.1 5.2v.5c0 .2 0 .4-.1.4 0 .1-.1.1-.3.1h-1.9c-.3 0-.6-.4-1.2-1.2-.4-.7-.8-1.3-1.2-1.7l-7.2-9.7V38c0 2.9.1 4.7.1 5.5 0 1 .1 1.6.3 2 .2.3.4.5.8.5h.6c.2 0 .3.2.3.5 0 .2 0 .3-.1.4-.1.1-.2.1-.3.1h-4.4c-.2 0-.3 0-.3-.1 0 0-.1-.2-.1-.4 0-.3.1-.4.3-.5h.1l.5-.1c.7-.1 1-1.6 1.1-4.4v-.6z"></path>
              </svg>
            </a>
            <a class="uss-iso" href="./">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 86 66">
                <path d="M84.3,37.9c-1.3-2.3-3.6-4.4-6.8-6.5c-2.3-1.3-4.6-2.3-7.1-3.1c-3.5-1.3-6.3-2.3-8.3-3.2
                  c-2.3-0.9-4.3-2.4-5.7-4.4c-1.2-2-1.8-4.4-1.7-6.7c-0.2-3,1-6,3.2-8.1C60,4,63,3,66.9,3c1.6,0,3.3,0.2,4.8,0.7
                  c1.3,0.6,2.4,1.4,3.4,2.3c1,0.9,1.7,2.1,2.3,3.3c0.6,1.1,0.9,2.2,1,3.4c-0.1,1.6,0.1,3.1,0.7,4.6c0.5,0.9,1.4,1.4,2.4,1.4
                  c0.6,0.1,1.2,0,1.8-0.3c0.3-0.2,0.5-0.6,0.4-1V4.2c0-0.2-0.1-0.5-0.2-0.7C83.3,3.3,83,3.1,82.7,3l-1.2-0.5c-2.2-0.8-4.6-1.5-6.9-1.9
                  c-2.5-0.4-5-0.6-7.5-0.6c-6.2,0-11,1.5-14.5,4.4s-5.2,7-5.2,12.1c-0.1,2.8,0.4,5.6,1.6,8.1c1.1,2,2.5,3.7,4.3,5
                  c-0.9-0.4-1.9-0.7-3-1.1c-3.5-1.3-6.3-2.3-8.3-3.2c-2.3-0.9-4.2-2.5-5.7-4.4c-1.2-2-1.8-4.3-1.7-6.7c-0.2-3,1-6,3.2-8.1
                  c2.1-1.9,5.1-2.9,9-2.9c1.3,0,2.6,0.1,3.8,0.4c1.6-1.3,3.6-2.2,5.6-2.6l-1.6-0.3C52.1,0.2,49.5,0,47,0c-6.2,0-11,1.5-14.5,4.4
                  s-5.2,6.9-5.2,12.1c-0.1,2.8,0.4,5.6,1.6,8.1c1.3,2.4,3.2,4.4,5.4,5.9c2.1,1.3,4.4,2.4,6.8,3.1c2.2,0.8,4,1.6,5.5,2.2v8.4
                  c0,6.3-1.4,10.9-4.2,13.9s-7.1,4.5-12.9,4.5s-8.7-1.5-11.1-4.4s-3.5-7.9-3.5-15.1V11c-0.1-1.6,0.2-3.2,0.8-4.6
                  c0.6-0.9,1.6-1.5,2.7-1.5l2.5-0.2l0,0c0.8,0,1.5-0.6,1.5-1.4c0-0.1,0-0.2,0-0.3c0-0.5,0-1-0.2-1.4c-0.4-0.2-0.8-0.4-1.2-0.3
                  c-0.2,0-0.6,0.1-1.3,0.1c-2.9,0.2-5.7,0.3-8.4,0.3c-2.7,0-5.6-0.1-8.5-0.3c-0.7,0-1.2-0.1-1.4-0.1c-0.5-0.1-0.9,0-1.3,0.3
                  C0.1,1.8,0,2.3,0,3c-0.1,0.8,0.4,1.6,1.2,1.7c0.1,0,0.2,0,0.3,0l0,0L4,4.9c1.1,0,2.2,0.6,2.8,1.5C7.4,7.2,7.6,8.8,7.6,11v33.3
                  c0,7.8,1.7,13.3,5,16.6s7.8,5,15.7,5c2.6,0,5.1-0.2,7.6-0.7c2.3,0.5,4.6,0.7,7,0.7c7.2,0,12.8-1.7,16.9-5.2s6.2-8.2,6.2-14.4
                  c0.1-2.9-0.6-5.8-2-8.4c-1.2-2-2.9-3.7-4.8-5.1c0.5,0.2,1.1,0.4,1.7,0.7c3.4,1.3,6,2.4,7.7,3.2c3.5,1.5,6.1,3.3,7.5,5.2
                  c1.6,2.1,2.3,4.8,2.2,7.4c0.2,3.7-1.3,7.3-4.1,9.8c-2.7,2.4-6.4,3.6-11.1,3.6c-1.1,0-2.2-0.1-3.3-0.3c-1.6,1.2-3.4,2.1-5.3,2.7
                  c0.4,0.1,0.8,0.2,1.2,0.2c2.3,0.5,4.7,0.7,7.1,0.7c7.2,0,12.9-1.7,16.9-5.2s6.1-8.3,6.1-14.4C86.3,43.5,85.8,40.5,84.3,37.9z
                   M54.6,59c-2.7,2.4-6.4,3.6-11.1,3.6H43c0.7-0.5,1.3-1,1.9-1.6c2.1-2.1,3.7-4.8,4.5-7.7c0.9-3,1.4-7.6,1.4-13.6v-2.3
                  c2.2,1,4.2,2.5,5.8,4.4c1.6,2.1,2.3,4.8,2.2,7.4C58.8,52.9,57.3,56.5,54.6,59z"/>
                </svg>
            </a>
        </div>
      </div>
    </header>
    <main>
         <div class="__pagosgeneral" >
          <div class="container ">
            <div class="row">
              <div class="col-12 d-flex align-items-center justify-content-between" style="text-align:center;color:white;">
                  <h1 style="width:100%;">Registro de proveedores</h1>
              </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex align-items-center justify-content-between">
                    <span  id="proceso1" class="__proceso __proceso01">1 <div class="__txt">Datos</div></span>
                    <span class="__procesolinea"></span>
                    <span  id="proceso2" class="__proceso">2 <div class="__txt">Documentos</div></span>
                    <span  class="__procesolinea"></span>
                    <span id="proceso3" class="__proceso">3 <div class="__txt">Fin</div></span>
                </div>
            </div>
          </div>
        </div>

        <div class="__formregistro" id="contForEventos" >
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-4 __tituevent" style="padding: 50px 5%;">
                   <!--  <h4 id="titEvento">Datos generales de la empresa</h4>-->
                   <p>LA UNIVERSIDAD SEÑOR DE SIPAN S.A.C. CONVOCA A TODOS LOS PROVEEDORES DE BIENES Y SERVICIOS A INSCRIBIRSE EN SU REGISTRO DE PROVEEDORES, PARA LO CUAL DEBERAN LLENAR UN FORMULARIO Y ADJUNTAR LOS DOCUMENTOS REQUERIDOS</p>
              </div>
              <div class="col-12 col-md-8 __formregis" style="padding: 30px 50px;">
                <form data-toggle="validator" role="form"  >

                    <div id="datosGenerales" >
                        <h4>Datos generales</h4>
                        <div class="form-group row">
                            <div class="col-md-10">
                                <input type="hidden" id="pnProvCodigo" value="0">
                                <input type="hidden" id="rucporvalidar" value="">
                                <label class="infoDiv1">RUC <span class="GuiaRojo">*</span> </label>
                                <input type="text"  class="form-control __bor2" id="txtRuc" placeholder="RUC" pattern="[0-9]{8}" onKeyPress="return soloNumeros(event);" maxlength="11" onkeyup="ValidadRucEmpresa()" autocomplete="off">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-10">
                                <label class="infoDiv1">Razon Social <span class="GuiaRojo">*</span></label>
                                <input type="text"  class="form-control __bor2" id="txtRazon" onkeypress="return soloLetras(event)" disabled="disabled" placeholder="Nombres o Razón Social" >
                            </div>
                        </div> 
                        <div id="ContenidoRucValido" style="display: none;">

                            <div class="form-group row">    
                                <div class="col-md-7">
                                    <label class="infoDiv1">Tipo de persona <span class="GuiaRojo">*</span></label>
                                    <select class="form-control __bor2 __selectformu" name="selectTipoPersona" id="selectTipoPersona" onchange="cambioTipoPersona()" >
                                        <option value="1" selected>Persona Natural</option>
                                        <option value="2">Persona Juridica</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <label class="infoDiv1">Agente de retención <span class="GuiaRojo">*</span></label>
                                    <select class="form-control __bor2 __selectformu" name="selectAgenteReten" id="selectAgenteReten" >
                                        <option value="1" selected>Si</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>
                            </div> 
                            <div class="form-group row">
                                <div class="col-md-10">
                                    <label class="infoDiv1">Domicilio fiscal <span class="GuiaRojo">*</span></label>
                                    <input type="text"  class="form-control __bor2" id="txtDomicilio" placeholder="Domicilio fiscal" >
                                </div>
                            </div>                  
                            <div class="form-group row">
                                <div class="col-md-5">
                                    <label class="infoDiv1">Teléfono <span class="GuiaRojo">*</span></label>
                                    <input type="text"  class="form-control __bor2" id="txtTelefono" onKeyPress="return soloNumeros(event)" pattern="[0-9]{9}" placeholder="Teléfono" maxlength="9" >
                                </div>
                                <div class="col-md-5">
                                    <label class="infoDiv1">Correo electronico <span class="GuiaRojo">*</span></label>
                                    <input type="email"  class="form-control __bor2" id="txtMail" placeholder="Correo electronico" >
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-10">
                                    <label class="infoDiv1">Fecha de inicio de operaciones <span class="GuiaRojo">*</span></label>
                                    <input title="" class="form-control __bor2" placeholder="Fecha de inicio de operaciones" class="textbox-n" type="text" onfocus="(this.type='date')"  id="txtFechaInicio">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-10">
                                    <label class="infoDiv1">Representante Legal <span class="GuiaRojo">*</span></label>
                                    <input type="text"  class="form-control __bor2" id="txtRepresentante" onkeypress="return soloLetras(event)" placeholder="Representante Legal" >
                                </div>
                            </div>
                            <h4>Información de la empresa</h4>
                            <div class="form-group row">
                                <div class="col-md-10">
                                    <label class="infoDiv1">Contacto <span class="GuiaRojo">*</span></label>
                                    <input type="text"  class="form-control __bor2" id="txtContacto" onkeypress="return soloLetras(event)" placeholder="Contacto" >
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-10">
                                    <label class="infoDiv1">Correo de contacto <span class="GuiaRojo">*</span></label>
                                    <input type="email"  class="form-control __bor2" id="txtContactoMail" placeholder="Correo electronico de Contacto" >
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-10">
                                    <label class="infoDiv1">Nº de sucursales <span class="GuiaRojo">*</span></label>
                                    <input type="text"  class="form-control __bor2" id="txtNumSucursales" placeholder="Nº de sucursales, representaciones y/o distribuidores" >
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label class="infoDiv1">Producto o Servicio que ofrece <span class="GuiaRojo">*</span></label>
                                    <input type="text"  class="form-control __bor2" id="txtProducto" placeholder="Producto o Servicio que ofrece" >
                                </div>
                                <div class="col-md-4">
                                    <label class="infoDiv1">CIU <span class="GuiaRojo">*</span></label>
                                    <input type="text"  class="form-control __bor2" id="txtCiu" onKeyPress="return soloNumeros(event);" placeholder="CIU" >
                                </div>
                            </div>
                            <div class="form-group row">    
                                <div class="col-xs-5 col-md-5">
                                    <label class="infoDiv1">Forma de pago 1 <span class="GuiaRojo">*</span> </label>
                                    <select class="form-control __bor2 __selectformu" name="selectFormaPago1" id="selectFormaPago1" onchange="cambioFormaPago(1)" >
                                        <option value="0">Forma de pago 1</option>
                                    </select>
                                </div>
                                <div class="col-xs-5 col-md-5" id="frmCantiDias1" style="display: none;" >
                                    <label class="infoDiv1">Cantidad de días</label>
                                    <input type="text"  class="form-control __bor2" id="txtCantDiasPago1" pattern="[0-9]{8}" onKeyPress="return soloNumeros(event);" maxlength="2" placeholder="Cantidad de días" >
                                </div>
                            </div>
                            <div class="form-group row">    
                                <div class="col-md-5">
                                    <label class="infoDiv1">Forma de pago 2 (Opcional) </label>
                                    <select class="form-control __bor2 __selectformu" name="selectFormaPago2" id="selectFormaPago2" onchange="cambioFormaPago(2)"  >
                                        <option value="0">Forma de pago 2</option>
                                    </select>
                                </div>
                                <div class="col-xs-5 col-md-5" id="frmCantiDias2" style="display: none;">
                                    <label class="infoDiv1">Cantidad de días</label>
                                    <input type="text"  class="form-control __bor2" id="txtCantDiasPago2" pattern="[0-9]{8}" onKeyPress="return soloNumeros(event);" maxlength="2" placeholder="Cantidad de días" >
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="infoDiv1_1">Número de Cuenta <span class="GuiaRojo">*</span> </label>
                                <div class="col-md-2">
                                  <select class="form-control __bor2 __selectformu" name="selectTipoCuenta1" id="selectTipoCuenta1" >
                                    <option value="0">Seleccione</option>
                                    <option value="10">Bancaria</option>
                                    <option value="11">Interbancaria</option>
                                    <!--  <option value="12">Detracción</option>-->
                                  </select>
                                </div>
                                <div class="col-md-3">
                                  <select class="form-control __bor2 __selectformu" name="selectTipoBanco1" id="selectTipoBanco1" >
                                     <option value="0">Banco</option>
                                  </select>
                                </div>
                                <div class="col-md-5">
                                  <input type="text"  class="form-control __bor2" id="txtCuentaBancaria1" onKeyPress="return soloNumeros(event)" pattern="[0-9]{9}" placeholder="N° Cuenta" maxlength="18" >
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="infoDiv1_1">Número de Cuenta (Opcional) </label>
                                <div class="col-md-2">
                                  <select class="form-control __bor2 __selectformu" name="selectTipoCuenta2" id="selectTipoCuenta2" >
                                    <option value="0">Seleccione</option>
                                    <option value="10">Bancaria</option>
                                    <option value="11">Interbancaria</option>
                                    <!--  <option value="12">Detracción</option>-->
                                  </select>
                                </div>
                                <div class="col-md-3">
                                  <select class="form-control __bor2 __selectformu" name="selectTipoBanco2" id="selectTipoBanco2" >
                                     <option value="0">Banco</option>
                                  </select>
                                </div>
                                <div class="col-md-5">
                                  <input type="text"  class="form-control __bor2" id="txtCuentaBancaria2" onKeyPress="return soloNumeros(event)" pattern="[0-9]{9}" placeholder="N° Cuenta" maxlength="18" >
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="infoDiv1_1">Detracción <span class="GuiaRojo">*</span> </label>
                                <div class="col-md-2">
                                  <select class="form-control __bor2 __selectformu" name="selectTipoCuenta3" id="selectTipoCuenta3" >
                                    <option value="12">Detracción</option>
                                  </select>
                                </div>
                                <div class="col-md-3">
                                  <select class="form-control __bor2 __selectformu" name="selectTipoBanco3" id="selectTipoBanco3" >
                                     <option value="1000143079">BANCO DE LA NACION</option>
                                  </select>
                                </div>
                                <div class="col-md-5">
                                  <input type="text"  class="form-control __bor2" id="txtCuentaBancaria3" onKeyPress="return soloNumeros(event)" pattern="[0-9]{9}" placeholder="N° Cuenta" maxlength="18" >
                                </div>
                            </div>
                            <h4>Referencias comerciales</h4>
                            <div class="form-group row">
                                <div class="col-md-10">
                                    <label class="infoDiv1">Referencia 1 <span class="GuiaRojo">*</span></label>
                                    <input type="text"  class="form-control __bor2" id="txtRef1" placeholder="Referencia 1 (Nombre de Empresa,Teléfono y Contacto)"  >
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-10">
                                    <label class="infoDiv1">Referencia 2 </label>
                                    <input type="text"  class="form-control __bor2" id="txtRef2" placeholder="Referencia 2 (Nombre de Empresa,Teléfono y Contacto)"  >
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-10">
                                    <label class="infoDiv1">Referencia 3 </label>
                                    <input type="text"  class="form-control __bor2" id="txtRef3" placeholder="Referencia 3 (Nombre de Empresa,Teléfono y Contacto)"  >
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col ">
                                    <button type="button" class="btn btn-secondary  text-center" id="btnPrimerPaso" onclick="btnSiguienteFormulario();">SIGUIENTE</button>
                                </div>
                            </div>

                            
                        </div>
                        

                        <div>
                            <p style="font-size: 9px;">(*) Datos requeridos</p>
                        </div>
                    </div>
                    <div id="datosDocumentos"  style="display: none;"  >
                        <h4>Documentos a presentar </h4>
                        <div class="form-group row">
                            <div class="col-md-9">
                                <label class="infoDiv1">Carta de Presentación (Remitir catálogos de productos y lista de precios referenciales). </label>
                                <input type="file" style="padding-top: 5px;" accept="image/*,.pdf" class="form-control __bor2" id="txtArchivo100001" placeholder="" 
                                onchange="subirArchivoUnico(100001)"  >
                            </div>
                            <div class="col-md-2" id="doc100001"></div>
                            <input type="hidden" id="docCompleto100001" value="0">
                        </div>
                        <div class="form-group row">
                            <div class="col-md-9">
                                <label class="infoDiv1">Copia de documento de identidad del proveedor. </label>
                                <input type="file" style="padding-top: 5px;" accept="image/*,.pdf" class="form-control __bor2" id="txtArchivo100002" placeholder=""  
                                    onchange="subirArchivoUnico(100002)">
                            </div>
                            <div class="col-md-2" id="doc100002"></div>
                            <input type="hidden" id="docCompleto100002" value="0">
                        </div>
                        <div class="form-group row">
                            <div class="col-md-9">
                                <label class="infoDiv1">Copia del Registro Único de Contribuyentes (R.U.C)</label>
                                <input type="file" style="padding-top: 5px;" accept="image/*,.pdf" class="form-control __bor2" id="txtArchivo100003" placeholder=""
                                    onchange="subirArchivoUnico(100003)"  >
                            </div>
                            <div class="col-md-2" id="doc100003"></div>
                            <input type="hidden" id="docCompleto100003" value="0">
                        </div>
                        <!-- ------  -->
                        <div id="contenidoExtra">
                            <div class="form-group row">
                                <div class="col-md-9">
                                    <label class="infoDiv1">Copia del Testimonio de constitución de la empresa con la constancia de inscripción en los registros públicos, así como cualquier otra modificatoria</label>
                                    <input type="file" style="padding-top: 5px;" accept="image/*,.pdf" class="form-control __bor2" id="txtArchivo100004" placeholder=""
                                        onchange="subirArchivoUnico(100004)">
                                </div>
                                <div class="col-md-2" id="doc100004"></div>
                                <input type="hidden" id="docCompleto100004" value="0">
                            </div>
                            <div class="form-group row">
                                <div class="col-md-9">
                                    <label class="infoDiv1">Vigencia de Poderes expedido por el Registro de Personas Jurídicas, con no más de quince días de antigüedad de la fecha de su expedición</label>
                                    <input type="file" style="padding-top: 5px;" accept="image/*,.pdf" class="form-control __bor2" id="txtArchivo100005" placeholder="" 
                                        onchange="subirArchivoUnico(100005)">
                                </div>
                                <div class="col-md-2" id="doc100005"></div>
                                <input type="hidden" id="docCompleto100005" value="0">
                            </div>
                            <div class="form-group row">
                                <div class="col-md-9">
                                    <label class="infoDiv1"> Licencia de funcionamiento actualizada o constancia de trámite respectivo</label>
                                    <input type="file" style="padding-top: 5px;" accept="image/*,.pdf" class="form-control __bor2" id="txtArchivo100006" placeholder="" 
                                        onchange="subirArchivoUnico(100006)">
                                </div>
                                <div class="col-md-2" id="doc100006"></div>
                                <input type="hidden" id="docCompleto100006" value="0">
                            </div>
                            <div class="form-group row">
                                <div class="col-md-9">
                                    <label class="infoDiv1">Resolución ministerial de aprobación del producto dado por el MINSA /SENASA (aplica productos químicos y médicos)</label>
                                    <input type="file" style="padding-top: 5px;" accept="image/*,.pdf" class="form-control __bor2" id="txtArchivo100007" placeholder="" 
                                        onchange="subirArchivoUnico(100007)">
                                </div>
                                <div class="col-md-2" id="doc100007"></div>
                                <input type="hidden" id="docCompleto100007" value="0">
                            </div>
                            <div class="form-group row">
                                <div class="col-md-9">
                                    <label class="infoDiv1">Certificaciones y Acreditaciones con que cuenta</label>
                                    <input type="file" style="padding-top: 5px;" accept="image/*,.pdf" class="form-control __bor2" id="txtArchivo100008" placeholder="" 
                                        onchange="subirArchivoUnico(100008)">
                                </div>
                                <div class="col-md-2" id="doc100008"></div>
                                <input type="hidden" id="docCompleto100008" value="0">
                            </div>
                            <div class="form-group row">
                                <div class="col-md-9">
                                    <label class="infoDiv1">Constancia o certificado de representación de marca</label>
                                    <input type="file" style="padding-top: 5px;" accept="image/*,.pdf" class="form-control __bor2" id="txtArchivo100009" placeholder="" 
                                        onchange="subirArchivoUnico(100009)">
                                </div>
                                <div class="col-md-2" id="doc100009"></div>
                                <input type="hidden" id="docCompleto100009" value="0">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col ">
                                <button type="button" class="btn btn-secondary  text-center" id="btnPrimerPaso" onclick="btnSiguienteFormularioFin();">SIGUIENTE</button>
                            </div>
                        </div>
                        <div>
                            <p style="font-size: 9px;">(*) Datos requeridos</p>
                        </div>
                    </div>
                    <div id="datosFin" style="display: none;"  >
                        <h3>Gracias por registrarse.</h3>
                        <br>
                        <h3>Estamos felices que usted sea nuestro aliado comercial.</h3>
                    </div>

                    <div>
                        <br>
                        <input type="hidden" id="estadoVisual">
                    </div>
                    <!-- 
                      <div class="form-group row">
                        <div class="col-md-10" id="contEvento">
                          <select class="form-control __bor2 __selectformu" >
                            <option value="">Elige el taller</option>
                            <option>1</option>
                          </select>
                        </div>
                      </div>

                      <div class="form-group row">
                        <div class="col-md-10" id="contLugarProcedencia">
                           <select class="form-control __bor2 __selectformu" >
                              <option value="">Lugar de procedencia </option>
                              <option>1</option>
                            </select>
                          </div>
                      </div> -->

                </form>
              </div>
            </div>
          </div>
        </div>

    </main>

    <footer>
      <div class="container-fluid ">
        <div class="row">
          <div class="foot_mo">
            Universidad Señor de Sipán © 2022 Todos los derechos reservados
            <p><a href="https://www.facebook.com/ussipan" target="_blank" class="__redes"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/USSIPAN" target="_blank"  class="__redes"><i class="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/user/ussipan" target="_blank"  class="__redes"><i class="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/ussipan/" target="_blank"  class="__redes"><i class="fab fa-instagram"></i></a>
            <a href="https://pe.linkedin.com/company/ussipan" target="_blank"  class="__redes"><i class="fab fa-linkedin-in"></i></a></p>
          </div>
          <div class="bottom-bar__info">
            <div class="uss-isotipo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 66">
                <path d="M84.3 37.9c-1.3-2.3-3.6-4.4-6.8-6.5-2.3-1.3-4.6-2.3-7.1-3.1-3.5-1.3-6.3-2.3-8.3-3.2-2.3-.9-4.3-2.4-5.7-4.4-1.2-2-1.8-4.4-1.7-6.7-.2-3 1-6 3.2-8.1C60 4 63 3 66.9 3c1.6 0 3.3.2 4.8.7 1.3.6 2.4 1.4 3.4 2.3 1 .9 1.7 2.1 2.3 3.3.6 1.1.9 2.2 1 3.4-.1 1.6.1 3.1.7 4.6.5.9 1.4 1.4 2.4 1.4.6.1 1.2 0 1.8-.3.3-.2.5-.6.4-1V4.2c0-.2-.1-.5-.2-.7-.2-.2-.5-.4-.8-.5l-1.2-.5C79.3 1.7 76.9 1 74.6.6c-2.5-.4-5-.6-7.5-.6-6.2 0-11 1.5-14.5 4.4s-5.2 7-5.2 12.1c-.1 2.8.4 5.6 1.6 8.1 1.1 2 2.5 3.7 4.3 5-.9-.4-1.9-.7-3-1.1-3.5-1.3-6.3-2.3-8.3-3.2-2.3-.9-4.2-2.5-5.7-4.4-1.2-2-1.8-4.3-1.7-6.7-.2-3 1-6 3.2-8.1 2.1-1.9 5.1-2.9 9-2.9 1.3 0 2.6.1 3.8.4 1.6-1.3 3.6-2.2 5.6-2.6L54.6.7C52.1.2 49.5 0 47 0c-6.2 0-11 1.5-14.5 4.4s-5.2 6.9-5.2 12.1c-.1 2.8.4 5.6 1.6 8.1 1.3 2.4 3.2 4.4 5.4 5.9 2.1 1.3 4.4 2.4 6.8 3.1 2.2.8 4 1.6 5.5 2.2v8.4c0 6.3-1.4 10.9-4.2 13.9s-7.1 4.5-12.9 4.5-8.7-1.5-11.1-4.4-3.5-7.9-3.5-15.1V11c-.1-1.6.2-3.2.8-4.6.6-.9 1.6-1.5 2.7-1.5l2.5-.2c.8 0 1.5-.6 1.5-1.4V3c0-.5 0-1-.2-1.4-.4-.2-.8-.4-1.2-.3-.2 0-.6.1-1.3.1-2.9.2-5.7.3-8.4.3s-5.6-.1-8.5-.3c-.7 0-1.2-.1-1.4-.1-.5-.1-.9 0-1.3.3 0 .2-.1.7-.1 1.4-.1.8.4 1.6 1.2 1.7h.3l2.5.2c1.1 0 2.2.6 2.8 1.5.6.8.8 2.4.8 4.6v33.3c0 7.8 1.7 13.3 5 16.6s7.8 5 15.7 5c2.6 0 5.1-.2 7.6-.7 2.3.5 4.6.7 7 .7 7.2 0 12.8-1.7 16.9-5.2S66 52.5 66 46.3c.1-2.9-.6-5.8-2-8.4-1.2-2-2.9-3.7-4.8-5.1.5.2 1.1.4 1.7.7 3.4 1.3 6 2.4 7.7 3.2 3.5 1.5 6.1 3.3 7.5 5.2 1.6 2.1 2.3 4.8 2.2 7.4.2 3.7-1.3 7.3-4.1 9.8-2.7 2.4-6.4 3.6-11.1 3.6-1.1 0-2.2-.1-3.3-.3-1.6 1.2-3.4 2.1-5.3 2.7.4.1.8.2 1.2.2 2.3.5 4.7.7 7.1.7 7.2 0 12.9-1.7 16.9-5.2s6.1-8.3 6.1-14.4c.5-2.9 0-5.9-1.5-8.5zM54.6 59c-2.7 2.4-6.4 3.6-11.1 3.6H43c.7-.5 1.3-1 1.9-1.6 2.1-2.1 3.7-4.8 4.5-7.7.9-3 1.4-7.6 1.4-13.6v-2.3c2.2 1 4.2 2.5 5.8 4.4 1.6 2.1 2.3 4.8 2.2 7.4 0 3.7-1.5 7.3-4.2 9.8z"></path>
              </svg>
            </div>
            <p>Km 5 Carretera a Pimentel</br>
            Chiclayo, Perú</br>
            Teléfono (074) 481610</p>
            <a href="https://www.facebook.com/ussipan" target="_blank" class="__redes"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/USSIPAN" target="_blank"  class="__redes"><i class="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/user/ussipan" target="_blank"  class="__redes"><i class="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/ussipan/" target="_blank"  class="__redes"><i class="fab fa-instagram"></i></a>
            <a href="https://pe.linkedin.com/company/ussipan" target="_blank"  class="__redes"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
    <div id="m_preload">
        <div>
            <img src="../img/Icon/pre3.gif" alt=""/>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"></script>

    <script src="Scripts/jsFrmRegProveedores.js?x=v2"></script>

</body>
</html>
