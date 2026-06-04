using System;
using System.Collections.Generic;
using USS.ArcCentral.DataAccess;
using System.Data.SqlClient;

namespace USS.ArcCentral.BusinessLogic.Entidades
{
    public class ConciliacionBIPAY : Integrated.LoadEntity
    {

        public String cCtaCteRecibo { get; set; }
        public int nEstado { get; set; }

        
        public IList<Object> Get_Listado_ConciliacionBiPay(String fecha, String cUsrCodigo)
        {
            using (clsSistema objInsVirt = new clsSistema(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Listado_ConciliacionBiPay(fecha, cUsrCodigo);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }

    }
}
