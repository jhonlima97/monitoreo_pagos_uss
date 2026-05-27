using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Web.Services;
using System.Data.SqlClient;
using USS.ArcCentral.BusinessLogic.Entidades;

namespace USS.ArcCentral.Presentacion.Forms
{
    public partial class MasterArchivo : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (Page.IsPostBack == false)
            {
                IdentityUser Id = new IdentityUser();
                if (Id.UserCode() == String.Empty)
                {
                    Response.Redirect("~/Login.aspx");
                }

                string cPerCodigo = Id.UserCode();

                Page.ClientScript.RegisterStartupScript(this.GetType(), "myScript", "Master('" + cPerCodigo + "')", true);
            }
        }
    }
}