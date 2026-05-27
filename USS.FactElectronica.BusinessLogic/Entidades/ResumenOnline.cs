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
    public class ResumenOnline : Integrated.LoadEntity
    {
        public int Tipo { get; set; }
        public String fechaOperacion { get; set; }
        public double WW { get; set; }
        public double MV { get; set; }

        public int oWW { get; set; }
        public int oMV { get; set; }

        public double tDia { get; set; }
        public int oDia { get; set; }
        public Decimal Total { get; set; }
        public int Operaciones { get; set; }

        public IList<Object> Get_Listado_ResumenOnline(String cUsrCodigo, TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsSistema objInsVirt = new clsSistema(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Listado_ResumenOnline(cUsrCodigo);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }
    }
}
