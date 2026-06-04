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
    public class ConsultasBCP : Integrated.LoadEntity
    {
        public double nSolCodigo { get; set; }
        public int nSolTipo { get; set; }
        public String cSolTipo { get; set; }
        public String canalOperacion { get; set; }
        public String fechaOperacion { get; set; }
        public String horaOperacion { get; set; }
        public String numeroReferenciaDeuda { get; set; }
        public String resultCode { get; set; }
        public String cJsnCadena { get; set; }
        public String numeroDocumento { get; set; }
        public double importeDeudaPagada { get; set; }
        public String numeroOperacionRecaudos { get; set; }
        public String formaPago { get; set; }
        public String codigoMoneda { get; set; }
        public int nProcesado { get; set; }
        public double nConCodigo { get; set; }

        public IList<Object> Get_Listado_ConsultasBCP(String fecha,
                                                    String fechaFin,
                                                    String cUsrCodigo,
                                                    TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsSistema objInsVirt = new clsSistema(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Listado_ConsultasBCP(fecha, fechaFin, cUsrCodigo);
                IList<Object> lDoc;
                lDoc = LoadList(this, dr);
                objInsVirt.Cn.Close();
                return lDoc;
            }
        }

    }
}
