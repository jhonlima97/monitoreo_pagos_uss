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
    public class srvUO
    {
        [OperationContract]
        public List<UO> Get_Lst_UO()
        {
            UO uo = new UO();
            IList<Object> iMnu = uo.Get_Lst_UO();
            String sMenu = JsonConvert.SerializeObject(iMnu);
            List<UO> lMnu = JsonConvert.DeserializeObject<List<UO>>((String)sMenu);
            return lMnu;
        }

    }
}
