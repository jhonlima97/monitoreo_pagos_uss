using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;
using USS.ArcCentral.BusinessLogic.Entidades;
using Newtonsoft.Json;

namespace USS.ArcCentral.Presentacion.Forms
{
    [ServiceContract(Namespace = "USS.ArcCentral.Presentacion")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class srvInterface
    {
        [OperationContract]
        public List<Interface> Get_Interface(int nIntCodigo,
                                             int nIntClase,
                                             int nParTipo)
        {
            Interface mn = new Interface();
            IList<Object> iMnu = mn.Get_Interface(nIntCodigo, nIntClase, nParTipo);
            String sMenu = JsonConvert.SerializeObject(iMnu);
            List<Interface> lMnu = JsonConvert.DeserializeObject<List<Interface>>((String)sMenu);
            return lMnu;
        }

        [OperationContract]
        public String Set_Upd_Interface(Int32 nIntCodigo,
                                       Int32 nIntClase,
                                       String cIntNombre,
                                       String cIntDescripcion)
        {

            Interface s = new Interface();
            String resp = s.Set_Upd_Interface(nIntCodigo,
                                                nIntClase,
                                                cIntNombre,
                                                cIntDescripcion);
            //String sSerie = JsonConvert.SerializeObject(iSerie);
            return resp;
            //List<Serie> lSerie = JsonConvert.DeserializeObject<List<Serie>>((String)sSerie);
            //return lSerie;

        }

        [OperationContract]
        public ComboVariosParametros Get_Load_Combos_VariosParametros() //int nIntCodigo1,
                                                                        //int nIntClase1,
                                                                        //int nIntCodigo2,
                                                                        //int nIntClase2)
        {
            ComboVariosParametros se = new ComboVariosParametros();
            se.pnIntCodigo1 = 0;
            se.pnIntClase1 = 4301;
            se.pnIntTipo1 = 1;

            se.pnIntCodigo2 = 0;
            se.pnIntClase2 = 4303;
            se.pnIntTipo2 = 1;

            se.pnIntCodigo3 = 0;
            se.pnIntClase3 = 5301;
            se.pnIntTipo3 = 1;

            se.pnIntCodigo4 = 0;
            se.pnIntClase4 = 4307;
            se.pnIntTipo4 = 1;
            //se.pcJuridica = pcJuridica;
            se.Get_Load_Combos_VariosParametros();
            return se;
        }


    }
}
