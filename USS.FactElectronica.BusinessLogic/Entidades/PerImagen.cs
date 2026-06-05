using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using USS.ArcCentral.DataAccess;
using System.Data.SqlClient;
using dll_Integrated;
using Integrated;

namespace USS.ArcCentral.BusinessLogic.Entidades
{
    public class PerImagen : Integrated.LoadEntity
    {
        public String cPerCodigo { get; set; }
        public String cPerNombre { get; set; }
        public String cPerApellido { get; set; }
        public String iPerImaFoto { get; set; }
        

        public IList<Object> Get_PerImagen(String pcPerCodigo,
                                           TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsLogin objInsVirt = new clsLogin(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_PerImagen(pcPerCodigo);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }
    }
}
