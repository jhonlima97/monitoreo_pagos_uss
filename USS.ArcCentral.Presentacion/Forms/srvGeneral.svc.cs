using System;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Activation;
using USS.ArcCentral.BusinessLogic.Entidades;
using Newtonsoft.Json;

namespace USS.ArcCentral.Presentacion.Forms
{
    [ServiceContract(Namespace = "USS.ArcCentral.Presentacion")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class srvGeneral
    {

        [OperationContract]
        public List<ConsultasBBVA> Get_Listado_ConsultasBBVA(String cFecha, String cFechaFin, String cUsrCodigo)
        {
            ConsultasBBVA d = new ConsultasBBVA();
            IList<Object> iEscuela = d.Get_Listado_ConsultasBBVA(cFecha, cFechaFin, cUsrCodigo);
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ConsultasBBVA> lEscuela = JsonConvert.DeserializeObject<List<ConsultasBBVA>>((String)sEscuela);
            return lEscuela;
        }

        [OperationContract]
        public List<ConciliacionBBVA> Get_Listado_ConciliacionBBVA(String cDetalle, String cUsrCodigo)
        {
            ConciliacionBBVA d = new ConciliacionBBVA();
            IList<Object> iEscuela = d.Get_Listado_ConciliacionBBVA(cDetalle, cUsrCodigo);
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ConciliacionBBVA> lEscuela = JsonConvert.DeserializeObject<List<ConciliacionBBVA>>((String)sEscuela);
            return lEscuela;
        }

        [OperationContract]
        public List<ResumenBBVA> Get_Listado_ResumenBBVA()
        {
            ResumenBBVA d = new ResumenBBVA();
            IList<Object> iEscuela = d.Get_Listado_ResumenBBVA();
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ResumenBBVA> lEscuela = JsonConvert.DeserializeObject<List<ResumenBBVA>>((String)sEscuela);
            return lEscuela;
        }


        [OperationContract]
        public List<ConsultasBCP> Get_Listado_ConsultasBCP(String cFecha, String cFechaFin, String cUsrCodigo)
        {
            ConsultasBCP d = new ConsultasBCP();
            IList<Object> iEscuela = d.Get_Listado_ConsultasBCP(cFecha, cFechaFin, cUsrCodigo);
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ConsultasBCP> lEscuela = JsonConvert.DeserializeObject<List<ConsultasBCP>>((String)sEscuela);
            return lEscuela;
        }

        [OperationContract]
        public List<ConciliacionBCP> Get_Listado_ConciliacionBCP(String cDetalle, String cUsrCodigo)
        {
            ConciliacionBCP d = new ConciliacionBCP();
            IList<Object> iEscuela = d.Get_Listado_ConciliacionBCP(cDetalle, cUsrCodigo);
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ConciliacionBCP> lEscuela = JsonConvert.DeserializeObject<List<ConciliacionBCP>>((String)sEscuela);
            return lEscuela;
        }

        [OperationContract]
        public List<ResumenBCP> Get_Listado_ResumenBCP(String cUsrCodigo)
        {
            ResumenBCP d = new ResumenBCP();
            IList<Object> iEscuela = d.Get_Listado_ResumenBCP(cUsrCodigo);
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ResumenBCP> lEscuela = JsonConvert.DeserializeObject<List<ResumenBCP>>((String)sEscuela);
            return lEscuela;
        }

        [OperationContract]
        public List<ConsultasGKN> Get_Listado_ConsultasGKN(String cFecha, String cFechaFin, String cUsrCodigo)
        {
            ConsultasGKN d = new ConsultasGKN();
            IList<Object> iEscuela = d.Get_Listado_ConsultasGKN(cFecha, cFechaFin, cUsrCodigo);
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ConsultasGKN> lEscuela = JsonConvert.DeserializeObject<List<ConsultasGKN>>((String)sEscuela);
            return lEscuela;
        }

        [OperationContract]
        public List<ConciliacionGKN> Get_Listado_ConciliacionGKN(String cDetalle, String cUsrCodigo)
        {
            ConciliacionGKN d = new ConciliacionGKN();
            IList<Object> iEscuela = d.Get_Listado_ConciliacionGKN(cDetalle, cUsrCodigo);
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ConciliacionGKN> lEscuela = JsonConvert.DeserializeObject<List<ConciliacionGKN>>((String)sEscuela);
            return lEscuela;
        }

        [OperationContract]
        public List<ResumenGKN> Get_Listado_ResumenGKN(String cUsrCodigo)
        {
            ResumenGKN d = new ResumenGKN();
            IList<Object> iEscuela = d.Get_Listado_ResumenGKN(cUsrCodigo);
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ResumenGKN> lEscuela = JsonConvert.DeserializeObject<List<ResumenGKN>>((String)sEscuela);
            return lEscuela;
        }

        [OperationContract]
        public List<ResumenOnline> Get_Listado_ResumenOnline(String cUsrCodigo)
        {
            ResumenOnline d = new ResumenOnline();
            IList<Object> iEscuela = d.Get_Listado_ResumenOnline(cUsrCodigo);
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ResumenOnline> lEscuela = JsonConvert.DeserializeObject<List<ResumenOnline>>((String)sEscuela);
            return lEscuela;
        }

        /*
         Modulo BiPay
         */
        [OperationContract]
        public List<ConsultasBIPAY> Get_Listado_ConsultasBiPay(String cFecha, String cFechaFin, String cUsrCodigo)
        {
            ConsultasBIPAY d = new ConsultasBIPAY();
            IList<Object> iEscuela = d.Get_Listado_ConsultasBiPay(cFecha, cFechaFin, cUsrCodigo);
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ConsultasBIPAY> lEscuela = JsonConvert.DeserializeObject<List<ConsultasBIPAY>>((String)sEscuela);
            return lEscuela;
        }

        
        [OperationContract]
        public List<ResumenBIPAY> Get_Listado_ResumenBiPay()
        {
            ResumenBIPAY d = new ResumenBIPAY();
            IList<Object> iEscuela = d.Get_Listado_ResumenBiPay();
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ResumenBIPAY> lEscuela = JsonConvert.DeserializeObject<List<ResumenBIPAY>>((String)sEscuela);
            return lEscuela;
        }

        [OperationContract]
        public List<ConciliacionBIPAY> Get_Listado_ConciliacionBiPay(String cDetalle, String cUsrCodigo)
        {
            ConciliacionBIPAY d = new ConciliacionBIPAY();
            IList<Object> iEscuela = d.Get_Listado_ConciliacionBiPay(cDetalle, cUsrCodigo);
            String sEscuela = JsonConvert.SerializeObject(iEscuela);
            List<ConciliacionBIPAY> lEscuela = JsonConvert.DeserializeObject<List<ConciliacionBIPAY>>((String)sEscuela);
            return lEscuela;
        }

    }
}
