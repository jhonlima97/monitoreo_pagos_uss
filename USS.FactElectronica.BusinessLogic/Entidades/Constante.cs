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
    public class Constante : Integrated.LoadEntity
    {
        public int nConCodigo { get; set; }
        public int nConValor { get; set; }
        public String cConDescripcion { get; set; }
        public IList<Object> Get_Constante_Proveedor(int nConCodigo,
                                                    int nTipo,
                                  TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsGenerico objInsVirt = new clsGenerico(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Constante_Proveedor(nConCodigo, nTipo);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }
    }
}
