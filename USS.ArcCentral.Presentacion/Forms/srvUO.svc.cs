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
using Newtonsoft.Json.Linq;
using dll_Integrated;
using System.Web;
using System.IO;

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
