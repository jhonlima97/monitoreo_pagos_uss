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
    public class PermisosCalidad : Integrated.LoadEntity
    {
        public int nIntCodigo { get; set; }
        public String cIntJerarquia { get; set; }
        public String cIntNombre { get; set; }
        public String cIntDescripcion { get; set; }
        public int Estado { get; set; }

        public IList<Object> Get_Permisos_Usuario_Calidad(String cPerCodigo , TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsCalidad objIns = new clsCalidad(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objIns.Get_Permisos_Usuario_Calidad(cPerCodigo, TypeData);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objIns.Cn.Close();
                return lDoc;
            }
        }

        public String Set_Upd_Permiso_Usuario_Calidad(String cPerCodigo,
                                                    String cTexto,
                                                    String cPerUsuario)
        {
            using (clsCalidad objIns = new clsCalidad(true))
            {
                String dr = (String)objIns.Set_Upd_Permiso_Usuario_Calidad(cPerCodigo,
                                                                        cTexto,
                                                                        cPerUsuario);
                /*IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objIns.Cn.Close();
                return lDoc;*/
                return dr;
            }
        }
        //Del_Permiso_Usuario_Calidad
        public String Del_Permiso_Usuario_Calidad(String cPerCodigo,
                                            String cPerUsuario)
        {
            using (clsCalidad objIns = new clsCalidad(true))
            {
                String dr = (String)objIns.Del_Permiso_Usuario_Calidad(cPerCodigo,
                                                                        cPerUsuario);
                /*IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objIns.Cn.Close();
                return lDoc;*/
                return dr;
            }
        }
    }
}
