using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace USS.ArcCentral.Presentacion.UploadFile
{
    /// <summary>
    /// Descripción breve de SubirArchivo
    /// </summary>
    public class SubirArchivo : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            try
            {
                /*
                HttpPostedFile postedFile = context.Request.Files["Filedata"];

                string savepath = "";
                string tempPath = "";

                tempPath = System.Configuration.ConfigurationManager.AppSettings["FolderPath"];
                savepath = context.Server.MapPath(tempPath);

                string filename = postedFile.FileName;
                if (!Directory.Exists(savepath))
                    Directory.CreateDirectory(savepath);

                postedFile.SaveAs(savepath + @"/" + filename);
                context.Response.Write(tempPath + "/" + filename);
                context.Response.StatusCode = 200;*/

                context.Response.ContentType = "text/plain";
                HttpPostedFile uploadFiles = context.Request.Files["Filedata"];
                string pathToSave = HttpContext.Current.Server.MapPath("~/Documentos/") + uploadFiles.FileName;
                uploadFiles.SaveAs(pathToSave);

                context.Response.Write(uploadFiles.FileName);
            }
            catch (Exception ex)
            {
                context.Response.Write("Error: " + ex.Message);
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}