using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Web.Services;
using System.Data.SqlClient;
using System.Web.Security;

namespace USS.ArcCentral.Presentacion.Pages
{
    public partial class MasterArchivo : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack == false)
            {
                FormsIdentity identity = User.Identity as FormsIdentity;
                if (identity == null || !identity.IsAuthenticated)
                {
                    Response.Redirect("~/Login.aspx");
                    return;
                }

                string cPerCodigo = identity.Ticket.UserData;
                Page.ClientScript.RegisterStartupScript(this.GetType(), "myScript", "Master('" + cPerCodigo + "')", true);
            }
        }
    }
}