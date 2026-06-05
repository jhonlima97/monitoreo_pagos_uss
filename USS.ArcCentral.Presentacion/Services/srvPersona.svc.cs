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

namespace USS.ArcCentral.Presentacion.Services
{
    [ServiceContract(Namespace = "USS.ArcCentral.Presentacion")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class srvPersona
    {
        [OperationContract]
        public List<PerImagen> Get_PerImagen(String pcPerCodigo)
        {
            PerImagen mn = new PerImagen();
            IList<Object> iMnu = mn.Get_PerImagen(pcPerCodigo);
            String sMenu = JsonConvert.SerializeObject(iMnu);
            List<PerImagen> lMnu = JsonConvert.DeserializeObject<List<PerImagen>>((String)sMenu);
            return lMnu;
        }
    }
}
