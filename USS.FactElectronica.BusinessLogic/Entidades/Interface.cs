using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Data;
using USS.ArcCentral.DataAccess;
using dll_Integrated;

namespace USS.ArcCentral.BusinessLogic.Entidades
{
    public class Interface : Integrated.LoadEntity
    {
        public Int32 nIntCodigo { get; set; }
        public Int32 nIntClase { get; set; }
        public String cIntJerarquia { get; set; }
        public String cIntNombre { get; set; }
        public String cIntDescripcion { get; set; }
        public Int32 nIntTipo { get; set; }



        public Object Cn { get; set; }
        public Object Trans { get; set; }
        public Boolean bTrans { get; set; }

        public IList<Object> Get_Interface(int pnParCodigo,
                                            int pnParClase,
                                            int pnParTipo,
                                            TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsCalidad objIns = new clsCalidad(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objIns.Get_Interface(pnParCodigo,
                                                                        pnParClase,
                                                                        pnParTipo,
                                                                        TypeData);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objIns.Cn.Close();
                return lDoc;
            }
        }

        public String Set_Upd_Interface(int pnParCodigo,
                                        int pnParClase,
                                        String pcParNombre,
                                        String pcParDescripcion)
        {
            using (clsCalidad objIns = new clsCalidad(true))
            {
                String dr = (String)objIns.Set_Upd_Interface(pnParCodigo,
                                                            pnParClase,
                                                            pcParNombre,
                                                            pcParDescripcion);
                /*IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objIns.Cn.Close();
                return lDoc;*/
                return dr;
            }
        }

        public String Del_Interface(Int32 pnParCodigo,
                                    Int32 pnParClase,
                                    Int32 pnEstado)
        {
            using (clsCalidad objIns = new clsCalidad(true))
            {
                String dr = (String)objIns.Del_Parametro(pnParCodigo,
                                                        pnParClase,
                                                        pnEstado);
                return dr;
            }
        }

        public IList<Object> Get_Obj_Interface(int pnTipo = 0,
                                        int pnIntClase = 0,
                                       TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsGenerico objInsVirt = new clsGenerico(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Obj_Interface(pnTipo, pnIntClase);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }

    }
}
