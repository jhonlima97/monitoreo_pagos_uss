using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using dll_Integrated;
using System.Data.SqlClient;
using System.Data;
using System.Reflection;
using System.Web.Security;
using USS.ArcCentral.BusinessLogic.Entidades;

namespace USS.ArcCentral.Presentacion
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ExpireAllCookies();
        }

        private void ExpireAllCookies()
        {
            if (HttpContext.Current != null)
            {
                int cookieCount = HttpContext.Current.Request.Cookies.Count;
                for (var i = 0; i < cookieCount; i++)
                {
                    var cookie = HttpContext.Current.Request.Cookies[i];
                    if (cookie != null)
                    {
                        var cookieName = cookie.Name;
                        var expiredCookie = new HttpCookie(cookieName) { Expires = DateTime.Now.AddDays(-1) };
                        HttpContext.Current.Response.Cookies.Add(expiredCookie);
                    }
                }

                HttpContext.Current.Request.Cookies.Clear();
            }
        }



        protected void ImgIngresar_Click(object sender, EventArgs e)
        {
            bool IsApproved = false;
            bool IsValid = false;

            UserName.Text = UserName.Text.ToUpper();
            string User = this.UserName.Text;
            string Pass = this.Password.Text;
            //Session["UserName"] = User;

            if ((string.IsNullOrEmpty(User)) || (string.IsNullOrEmpty(Pass)))
            {
                return;
            }

            try
            {
                //Seuss.EnterpriseLibrary.Types.Usuario Usuario = new Seuss.EnterpriseLibrary.Types.Usuario(User, Pass);

                //BLUsuario ObjUsuario = new BLUsuario();
                //BEUsuario usu = ObjUsuario.GetValidaUsuario(Convert.ToString(Usuario.cPerUsuCodigo), Convert.ToString(Usuario.cPerUsuClave));
                //List<BEUsuario> lista = ObjUsuario.GetValidaListUsuario(Convert.ToString(Usuario.cPerUsuCodigo), Convert.ToString(Usuario.cPerUsuClave));
                Usuario U = new Usuario();
                U.Load(User, Pass);

                if (U.cPerCodigo != "")
                {
                    IsValid = true;
                    try
                    {
                        //ClaveMoodleUPDATE(UserName.ToString.ToLower, Password.ToString, smdlMessage)
                    }
                    catch (Exception)
                    {
                    }
                    //Session("SEUSS_U") = User.ToLower;
                    //Session("SEUSS_P") = Pass.ToString;
                }
                else
                {
                    IsValid = false;
                }

                if (IsValid)
                {

                    if (Convert.ToUInt32(U.cPerUsuEstado) > 0)
                    {
                        IsApproved = true;
                    }

                    if (IsApproved)
                    {
                        //Creando Cookie de Autenticacion
                        //Page.ClientScript.RegisterStartupScript(this.GetType(), "myScript", "VarActualDatos('" + U.cPerUsuCodigo + "','" + U.cPerUsuClave + "')", true);
                        bool IsPersistent = RememberMe.Checked;

                        //FormsAuthentication.SetAuthCookie(UserName, IsPersistent)
                        FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(1,
                        User,
                        DateTime.Now,
                        DateTime.Now.AddMinutes(30),
                        IsPersistent,
                        Convert.ToString(U.cPerCodigo),
                        FormsAuthentication.FormsCookiePath
                        );

                        //Encripta el ticket.
                        string encTicket = FormsAuthentication.Encrypt(ticket);

                        //Crea la cookie.
                        Response.Cookies.Add(new HttpCookie(FormsAuthentication.FormsCookieName, encTicket));

                        //Redirecciona a la URL original 
                        string Pagina = FormsAuthentication.GetRedirectUrl(User, IsPersistent);
                        //Response.Redirect(Pagina);

                        Response.Redirect("Default.aspx");

                        //Google_Valida(Pagina, U.cPerCodigo, User, Pass);
                        //Google_Valida(U.cPerCodigo, User, Pass);
                    }
                    else
                    {
                        FailureText.Text = "Usuario desactivado.";
                    }
                }
                else
                {
                    //'DbTransaccion.Insert(1003, Usuario.cPerUsuCodigo, String.Empty, "Login Failed " & UserName)
                    FailureText.Text = "Usuario y/o password incorrecto. Intente de nuevo.";
                }

                U = null;
            }
            catch (Exception Excepcion)
            {
                //Seuss.EnterpriseLibrary.Logger.ClsLogger.WriteToEventLog(ex, "ValidateUser", "", "");
                string error = Excepcion.Message.ToString();
            }
            return;
        }

        protected void ImgCancelar_Click(object sender, ImageClickEventArgs e)
        {

        }
    }
}