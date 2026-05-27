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
    public class ResumenGKN : Integrated.LoadEntity
    {
        public int Tipo { get; set; }
        public String fechaOperacion { get; set; }
        public double POS { get; set; }
        public double WEB { get; set; }
        public int oPOS { get; set; }
        public int oWEB { get; set; }

        public double tDia { get; set; }
        public int oDia { get; set; }
        public Decimal Total { get; set; }
        public int Operaciones { get; set; }

        public IList<Object> Get_Listado_ResumenGKN(String cUsrCodigo, TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsSistema objInsVirt = new clsSistema(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Listado_ResumenGKN(cUsrCodigo);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }
    }
}
