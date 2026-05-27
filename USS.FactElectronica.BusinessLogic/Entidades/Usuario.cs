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
    public class Usuario : Integrated.LoadEntity
    {
        public String cPerCodigo { get; set; }
        public String cPerUsuCodigo { get; set; }
        public String cPerUsuClave { get; set; }
        public String cPerApellido { get; set; }
        public String cPerNombre { get; set; }
        public int cPerUsuEstado { get; set; }

        public void Load(String pcPerUsuCodigo, String pcPerUsuClave, TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsLogin objLog = new clsLogin(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objLog.Get_User(pcPerUsuCodigo, pcPerUsuClave, 1, TypeData);
                //Usuario U = new Usuario();
                Load(this, dr);
                objLog.Cn.Close();
                //return U;
            }
        }
    }
}
