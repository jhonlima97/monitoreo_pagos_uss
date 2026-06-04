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
    public class ResumenBCP : Integrated.LoadEntity
    {
        public int Tipo { get; set; }
        public String fechaOperacion { get; set; }
        public double BM { get; set; }
        public double TN { get; set; }
        public double IB { get; set; }
        public double FI { get; set; }
        public double PZ { get; set; }
        public double CJ { get; set; }
        public int oBM { get; set; }
        public int oTN { get; set; }
        public int oIB { get; set; }
        public int oFI { get; set; }
        public int oPZ { get; set; }
        public int oCJ { get; set; }
        public double tDia { get; set; }
        public int oDia { get; set; }
        public Decimal Total { get; set; }
        public int Operaciones { get; set; }

        public IList<Object> Get_Listado_ResumenBCP(String cUsrCodigo, TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsSistema objInsVirt = new clsSistema(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Listado_ResumenBCP(cUsrCodigo);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }
    }
}
