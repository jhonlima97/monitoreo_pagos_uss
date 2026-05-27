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
    public class ConsultasBiPay : Integrated.LoadEntity
    {
        public int nSolCodigo { get; set; }
        public int nSolTipo { get; set; }
        public string cSolTipo { get; set; }
        public string canalOperacion { get; set; }
        public string fechaOperacion { get; set; }
        public string horaOperacion { get; set; }
        public string numeroReferenciaDeuda { get; set; }
        public string resultCode { get; set; }
        public string cJsnCadena { get; set; }
        public string numeroDocumento { get; set; }
        public double importeDeudaPagada { get; set; }
        public string numeroOperacionRecaudos { get; set; }
        public string formaPago { get; set; }
        public string codigoMoneda { get; set; }
        public int nProcesado { get; set; }
        public int nConCodigo { get; set; }

        public IList<object> Get_Listado_ConsultasBiPay(string fecha,
                                                         string fechaFin,
                                                         string cUsrCodigo,
                                                         TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (clsSistema objInsVirt = new clsSistema(true, false))
            {
                SqlDataReader dr = (SqlDataReader)objInsVirt.Get_Listado_ConsultasBiPay(fecha, fechaFin, cUsrCodigo);

                IList<object> lDoc;
                lDoc = LoadList(this, dr);

                objInsVirt.Cn.Close();

                return lDoc;
            }
        }
    }
}