using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Security;
using Microsoft.VisualBasic.ApplicationServices;

namespace USS.ArcCentral.BusinessLogic.Entidades
{
    public class IdentityUser
    {
        public string UserCode()
        {
            try
            {
                User u = new User();
                FormsIdentity id = (FormsIdentity)Convert.ChangeType(u.CurrentPrincipal.Identity, typeof(FormsIdentity));
                FormsAuthenticationTicket Ticket = id.Ticket;

                return Ticket.UserData;
            }
            catch (Exception e)
            {
                string error = e.Message.ToString();
            }

            return string.Empty;
        }
    }
}
