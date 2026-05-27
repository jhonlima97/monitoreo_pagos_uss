using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Data;
using USS.ArcCentral.DataAccess;
using dll_Integrated;
using Integrated;

namespace USS.ArcCentral.BusinessLogic.Entidades
{
    public class PUGA : Integrated.LoadEntity 
    {
        public int nIntCodigo { get; set; }
        public int nIntClase { get; set; }
        public String cIntJerarquia { get; set; }
        public String cIntNombre { get; set; }
        public String cIntDescripcion { get; set; }
        public int nIntTipo { get; set; }
        public String cPerCodigo { get; set; }
        public int nSisGruCodigo { get; set; }
        public int nSisGruTipo { get; set; }
        public int nObjCodigo { get; set; }
        public int nObjTipo { get; set; }
        public String Nombre { get; set; }
        public String cIntTarget { get; set; }
        public String cMenu { get; set; }
        public String nParent { get; set; }

        public IList<Object> Get_Permiso_By_UserMenu(String pcPerCodigo,
                                                     String pcIntJerarquia,
                                                     int pnSisGruCodigo,
                                                     int pnSisGruTipo,
                                                     int pnObjTipo,
                                                     int pnIntTipo,
                                                     TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsGenerico objPla = new clsGenerico(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objPla.Get_Permiso_By_UserMenu(pcPerCodigo,
                                                                                 pcIntJerarquia,
                                                                                 pnSisGruCodigo,
                                                                                 pnSisGruTipo,
                                                                                 pnObjTipo,
                                                                                 pnIntTipo);
                IList<Object> lPUGA;
                lPUGA = LoadList(this, dr);
                objPla.Cn.Close();
                return lPUGA;
            }
        }
    }
}
