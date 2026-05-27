using System;


namespace USS.ArcCentral.BusinessLogic.Entidades
{
    public class Persona : Integrated.LoadEntity
    {
        public String cPerCodigo { get; set; }
        public String cPerNombre { get; set; }
        public String cPerApellido { get; set; }
        public String cIntDescripcion { get; set; }
        public Int32 nUniOrgCodigo { get; set; }
        public Int32 nPerJurFilCodigo { get; set; }
        public String cPerJurFilAbrev { get; set; }
        public String Detalle { get; set; }

        /*public IList<Object> Get_Search_Persona(int pnUniOrgCodigo,
                                                int pnOption,
                                                String pcParametro,
                                                String pcFiltro,
                                                TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsArcCentral objInsVirt = new clsArcCentral(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Search_Persona(pnUniOrgCodigo,
                                                                                pnOption,
                                                                                pcParametro,
                                                                                pcFiltro);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }*/
        /*
        public IList<Object> Get_Datos_Usuario(String pcPerCodigo)
        {
            using (clsArcCentral objIns = new clsArcCentral(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objIns.Get_Datos_Usuario(pcPerCodigo);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objIns.Cn.Close();
                return lDoc;
            }
        }
        */

    }
}
