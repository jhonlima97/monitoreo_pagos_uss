# monitoreo_pagos_uss

Plataforma de **monitoreo y conciliación de pagos multi-banco** para la
Universidad Señor de Sipán (USS).

> Anteriormente conocida internamente como `75_BBVA_CONCILIACION`. El nombre
> original solo reflejaba el banco con el que arrancó el proyecto (BBVA), pero
> hoy concentra la operación de varios bancos y pasarelas. Esta versión renombrada
> existe únicamente en este repositorio personal; en la organización el proyecto
> continúa con el nombre original por políticas internas.

---

## Índice

- [Descripción](#descripción)
- [Bancos / pasarelas soportados](#bancos--pasarelas-soportados)
- [Aporte personal a este proyecto](#aporte-personal-a-este-proyecto)
- [Arquitectura](#arquitectura)
- [Stack técnico](#stack-técnico)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Configuración local](#configuración-local)
- [Despliegue](#despliegue)
- [Seguridad y privacidad](#seguridad-y-privacidad)
- [Estado](#estado)
- [Licencia y uso](#licencia-y-uso)

---

## Descripción

Aplicación web interna que permite:

- **Cargar y procesar** los archivos de extractos / conciliación que emiten los
  bancos y pasarelas de pago.
- **Consultar y filtrar** los pagos recibidos por fecha y por banco.
- **Conciliar** automáticamente los pagos del banco contra los pagos
  registrados en el sistema académico/administrativo de la USS.
- **Generar resúmenes** consolidados de los pagos por banco y en línea.
- **Monitorear en línea** los pagos que ingresan a la institución por todas las
  vías habilitadas.

El sistema centraliza en un solo dashboard la operación que antes se hacía banco
por banco, manualmente, contra los reportes de cada entidad.

---

## Bancos / pasarelas soportados

| Código | Entidad        | Tipo                       |
|--------|----------------|----------------------------|
| BBVA   | Banco BBVA     | Recaudación bancaria       |
| BCP    | Banco BCP      | Recaudación bancaria       |
| BIPAY  | Empresa Bitel  | Recaudación bancaria       |
| GKN    | Banco KasNet   | Recaudación bancaria       |

Cada banco se integra a través de:

- Un archivo de extracto/conciliación con formato propio.
- Procedimientos almacenados en SQL Server (`usp_<banco>_monitoreo_consultas`,
  `usp_<banco>_monitoreo_conciliacion_archivo`, `usp_<banco>_Monitoreo_Resumen`).
- Entidades y servicios WCF dedicados en la capa de negocio y presentación.

---

## Aporte personal a este proyecto

El proyecto original fue creado por la empresa exclusivamente para la operación
**BBVA**. Los siguientes módulos / cambios fueron desarrollados por mí
sobre la base existente:

### Módulos nuevos  

- **Módulo BiPay** — integración de la pasarela BiPay.
  - Entidades: `ConsultasBiPay`, `ConciliacionBiPay`, `ResumenBiPay`.
  - Scripts: `ConciliacionBIPAY.js`, `MonitoreoBIPAY.js`, `ResumenBIPAY.js`.

### Cambios transversales

- **Migración de .NET Framework 4.5 → 4.8** en todos los proyectos de la
  solución, incluyendo ajustes de `web.config`, `httpRuntime targetFramework`,
  redirects de ensamblados (`Newtonsoft.Json` 13.x) y compatibilidad TLS.
- Ampliación de los métodos de servicio en `clsSistema` para los módulos de pago.
- Renombrado funcional de la plataforma para reflejar su rol real:
  `75_BBVA_CONCILIACION` → `monitoreo_pagos_uss`.

---

## Arquitectura

Aplicación en **3 capas** sobre ASP.NET WebForms + WCF (servicios `.svc`):

```
+----------------------------------------------------------+
|  USS.ArcCentral.Presentacion        (Web / UI / WCF)     |
|  - WebForms (.aspx) + master + scripts JS por módulo     |
|  - Servicios WCF AJAX: srvGeneral, srvPersona            |
+----------------------------------------------------------+
                          |
                          v
+----------------------------------------------------------+
|  USS.ArcCentral.BusinessLogic                            |
|  - Entidades por banco (BBVA/BCP/BiPay/GKN)              |
|  - Lógica de conciliación, consulta y resumen            |
+----------------------------------------------------------+
                          |
                          v
+----------------------------------------------------------+
|  USS.ArcCentral.DataAccess                               |
|  - clsSistema (SPs por banco), clsLogin (auth + persona) |
|  - SQL Server (BD ASBANC / BDSipan)                      |
|  - Procedimientos almacenados por banco                  |
+----------------------------------------------------------+
```

---

## Stack técnico

| Componente            | Versión                          |
|-----------------------|----------------------------------|
| .NET Framework        | **4.8** (migrado desde 4.5)      |
| Lenguaje              | C#                               |
| UI                    | ASP.NET WebForms + Bootstrap 4.3 |
| Servicios             | WCF (webHttpBinding / AJAX)      |
| Base de datos         | Microsoft SQL Server             |
| ORM / acceso a datos  | ADO.NET + `dll_Integrated`       |
| Front-end             | jQuery / jQuery UI               |
| JSON                  | Newtonsoft.Json 13.0             |
| Hosting               | IIS                              |

---

## Estructura del repositorio

```
monitoreo_pagos_uss/
├── monitoreo_pagos_uss.sln
├── README.md
├── CLAUDE.md
├── .gitignore
├── web.config                          # config raíz (límites de request)
│
├── USS.FactElectronica.DataAccess/     # Capa de datos
│   ├── App.config                      # *** IGNORADO: contiene credenciales
│   ├── clsSistema.cs                   # Stored procs por banco
│   ├── clsLogin.cs                     # Auth (sp_User_Validate) + imagen persona
│   └── Properties/Settings.settings    # *** IGNORADO: connection string
│
├── USS.FactElectronica.BusinessLogic/  # Capa de negocio
│   └── Entidades/
│       ├── ConsultasBBVA.cs            # módulo original (empresa)
│       ├── ConciliacionBBVA.cs
│       ├── ResumenBBVA.cs
│       ├── ConsultasBCP.cs             # módulo agregado
│       ├── ConciliacionBCP.cs
│       ├── ResumenBCP.cs
│       ├── ConsultasBiPay.cs           # módulo agregado
│       ├── ConciliacionBiPay.cs
│       ├── ResumenBiPay.cs
│       ├── ConsultasGKN.cs             # módulo agregado
│       ├── ConciliacionGKN.cs
│       ├── ResumenGKN.cs
│       ├── ResumenOnline.cs            # módulo agregado
│       └── ...
│
└── USS.ArcCentral.Presentacion/        # Capa de presentación / web
    ├── Login.aspx
    ├── Default.aspx
    ├── Pages/
    │   └── MasterArchivo.aspx          # Página principal (post-login)
    ├── Services/
    │   ├── srvGeneral.svc              # WCF AJAX: datos de bancos
    │   └── srvPersona.svc             # WCF AJAX: imagen de usuario
    ├── Scripts/                        # JS por módulo / banco
    │   ├── getImageUser.js
    │   ├── Monitoreo<Banco>.js
    │   ├── Conciliacion<Banco>.js
    │   └── Resumen<Banco>.js
    ├── CSS/
    ├── img/
    ├── Web.config
    ├── Web_local.config                # *** IGNORADO
    └── Web_produccion.config           # *** IGNORADO
```

---

## Configuración local

### Requisitos

- Windows con Visual Studio 2022
- .NET Framework 4.8 Developer Pack
- Internet Information Services  - IIS
- SQL Server (instancia con la BD `ASBANC` / `BDSipan` y sus SPs)
- Acceso a la red interna USS (los servidores SQL están en IPs privadas)

### Pasos

1. Clonar el repositorio.
2. Abrir `monitoreo_pagos_uss.sln` en Visual Studio.
3. Restaurar paquetes NuGet (`Tools > NuGet Package Manager > Restore`).
4. Crear los archivos de configuración locales (no están en el repo por
   contener credenciales):
   - `USS.FactElectronica.DataAccess/App.config` — connection string a SQL Server.
   - `USS.FactElectronica.DataAccess/Properties/Settings.settings` — connection
     string a SQL Server (puede regenerarse desde Visual Studio abriendo el
     archivo `.settings`).
   - `USS.ArcCentral.Presentacion/Web_local.config` o `Web_produccion.config`
     según el entorno.
5. Compilar y ejecutar `USS.ArcCentral.Presentacion` (proyecto de inicio).

---

## Despliegue

- Publicación a IIS desde Visual Studio (`Publish > Folder` o WebDeploy).
- En producción se utiliza `Web_produccion.config` con `security mode="Transport"`
  (HTTPS) en los bindings WCF.
- La base de datos y los stored procs deben existir previamente; el proyecto
  **no** incluye migraciones ni scripts de creación de esquema.

---

## Seguridad y privacidad

Este es un repositorio **personal** que documenta el trabajo realizado. Por eso:

- **No se publican credenciales**. Todos los archivos que contienen connection
  strings, IPs internas, usuarios o passwords están listados en `.gitignore`:
  - `App.config`
  - `Properties/Settings.settings`
  - `Properties/Settings.Designer.cs`
  - `Web_local.config`
  - `Web_produccion.config`
  - `bin/`, `obj/`, `*.dll.config`
- **No se publican datos de personas**. Los extractos bancarios que se procesan
  para conciliación no se versionan (ver reglas `*conciliacion*` / `extracto*`
  en `.gitignore`); cualquier muestra real permanece local.
- **No se incluyen los `.dll` propietarios** (`dll_Integrated.dll`,
  `Integrated.dll`) ni el contenido de `packages/`.

Si detectas datos sensibles que se hayan filtrado, por favor abre un issue y
serán removidos del historial.

---

## Estado

- En **producción** en la empresa sigue corriendo bajo el nombre original (`75_CONCILIACION`).
- Este repositorio refleja la base de código pero con configuraciones y datos
  sensibles removidos.
- El enlace a Producción, es netamente interno, por lo que no se publica aquí.

---

## Licencia y uso

Código de propiedad de la Universidad Señor de Sipán; aquí se publica con fines únicamente 
de portafolio y documentación del trabajo realizado por mi autoría en los módulos identificados 
arriba. Queda estrictamente prohibido usar, sin previa autorización de mi persona y de la entidad.
