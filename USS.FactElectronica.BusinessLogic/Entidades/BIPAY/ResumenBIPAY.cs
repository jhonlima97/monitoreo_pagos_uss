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
    public class ResumenBIPAY : Integrated.LoadEntity
    {
        public int Tipo { get; set; }
        public String fechaOperacion { get; set; }
        public double C01 { get; set; }   // Aplicativo móvil
        public double C02 { get; set; }   // USSD
        public int oC01 { get; set; }
        public int oC02 { get; set; }
        public double tDia { get; set; }
        public int oDia { get; set; }
        public Decimal Total { get; set; }
        public int Operaciones { get; set; }

        public IList<Object> Get_Listado_ResumenBiPay(TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsSistema objInsVirt = new clsSistema(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Listado_ResumenBiPay();
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }
    }
}