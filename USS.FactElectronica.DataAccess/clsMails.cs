using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Net.Mail;
using System.Web;
using System.Data;
using dll_Integrated;
using Integrated;

namespace USS.ArcCentral.DataAccess
{
    public class clsMails : clsDataAccess
    {
        public clsMails(bool bOnlyConnect = false, bool bTrans = false, SqlConnection Cn = null, SqlTransaction Trans = null)
            : base(Properties.Settings.Default.BDSIPANConnectionString, bOnlyConnect, bTrans, Cn, Trans)
        {
        }

        public int Send_Mail(String MailOrigen,
                                String MailDestino,
                                String MailAsunto,
                                String MailCuerpo,
                                String MailUser,
                                String MailPassword,
                                String FileArchivo,
                                String cMailConfirma = "",
                                int nServerTipo = 1)
        {

            String File = "";
            File = FileArchivo;
            System.Net.Mail.MailMessage Mail = new System.Net.Mail.MailMessage();
            System.Net.Mail.SmtpClient Servidor = new System.Net.Mail.SmtpClient();
            Mail.From = new System.Net.Mail.MailAddress(MailOrigen);

            if (cMailConfirma != "")
            {
                Mail.To.Add(cMailConfirma);
                Mail.Bcc.Add(MailDestino);
            }
            else
            {
                Mail.To.Add(MailDestino);
            }

            Mail.Subject = MailAsunto;
            Mail.Body = MailCuerpo;

            Mail.IsBodyHtml = true;
            Mail.Priority = MailPriority.Normal;

            switch (nServerTipo)
            {
                case 1: //USS
                    Servidor.Host = Properties.Settings.Default.SMTP_HOST_INTERNAL;
                    break;
                case 2: //Google
                    Servidor.Host = "smtp.gmail.com"; //MailCredential.gMaiCreGmlServer
                    Servidor.Port = 587;
                    Servidor.UseDefaultCredentials = false;
                    Servidor.EnableSsl = true;
                    break;
            }


            if (FileArchivo != "")
            {
                Mail.Attachments.Add(new System.Net.Mail.Attachment(File));
            }

            Servidor.Credentials = new System.Net.NetworkCredential(MailUser, MailPassword);

            try
            {
                Servidor.Send(Mail);
                //Servidor = "";
                Mail.Dispose();
                //Mail = "";
            }
            catch (Exception)
            {
                throw;
            }
            return 1;
        }


    }
}
