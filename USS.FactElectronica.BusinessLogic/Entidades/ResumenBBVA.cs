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
    public class ResumenBBVA : Integrated.LoadEntity
    {
        public int Tipo { get; set; }
        public String fechaOperacion { get; set; }
        public double TF { get; set; }
        public double CN { get; set; }
        public double RD { get; set; }
        public double MC { get; set; }
        public double BX { get; set; }
        public double BT { get; set; }
        public int oTF { get; set; }
        public int oCN { get; set; }
        public int oRD { get; set; }
        public int oMC { get; set; }
        public int oBX { get; set; }
        public int oBT { get; set; }
        public double tDia { get; set; }
        public int oDia { get; set; }
        public Decimal Total { get; set; }
        public int Operaciones { get; set; }

        public IList<Object> Get_Listado_ResumenBBVA(TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsSistema objInsVirt = new clsSistema(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Listado_ResumenBBVA();
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }
    }
}
