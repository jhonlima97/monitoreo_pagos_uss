using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using USS.ArcCentral.DataAccess;
using System.Data.SqlClient;
using dll_Integrated;
using Integrated;
using System.Data;

namespace USS.ArcCentral.BusinessLogic.Entidades
{
    public class ConciliacionBCP : Integrated.LoadEntity
    {

        public String cCtaCteRecibo { get; set; }
        public int nEstado { get; set; }


        public IList<Object> Get_Listado_ConciliacionBCP(String fecha, String cUsrCodigo)
        {
            using (clsSistema objInsVirt = new clsSistema(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Listado_ConciliacionBCP(fecha, cUsrCodigo);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }

    }
}
