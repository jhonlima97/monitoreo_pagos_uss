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
    public class UO : Integrated.LoadEntity
    {
        public int nUniOrgCodigo { set; get; }
        public String cUniOrgNombre { set; get; }
        public String cPerJuridica { set; get; }
        public String cPerNombre { set; get; }
        public Object Cn { get; set; }
        public Object Trans { get; set; }
        public Boolean bTrans { get; set; }

        public IList<Object> Get_Lst_UO(TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsCalidad objUniOrg = new clsCalidad(true))
            {
                SqlDataReader dr = (SqlDataReader)objUniOrg.Get_Lst_UO(TypeData);
                IList<Object> lCon;
                lCon = LoadList(this, dr);
                objUniOrg.Cn.Close();
                return lCon;
            }
        }
    }
}
