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
    public class UsuarioCalidad : Integrated.LoadEntity
    {
        public String cPerCodigo { get; set; }
        public String cPerApellido { get; set; }
        public String cPerNombre { get; set; }
        public int nPerEstado { get; set; }
        public String Nombre { get; set; }
        public Object Cn { get; set; }
        public Object Trans { get; set; }
        public Boolean bTrans { get; set; }

        public IList<Object> Get_Usuarios_Calidad(TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsCalidad objIns = new clsCalidad(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objIns.Get_Usuarios_Calidad(TypeData);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objIns.Cn.Close();
                return lDoc;
            }
        }

        public IList<Object> Get_Search_Persona(String cTexto,TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsCalidad objIns = new clsCalidad(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objIns.Get_Search_Persona(cTexto, TypeData);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objIns.Cn.Close();
                return lDoc;
            }
        }





    }
}
