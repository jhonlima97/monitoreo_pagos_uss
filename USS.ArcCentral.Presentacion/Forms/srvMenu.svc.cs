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
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class srvMenu
    {
        [OperationContract]
        public List<PUGA> UserMenu(String pcPerCodigo,
                                   String pcIntJerarquia,
                                   int pnSisGruCodigo,
                                   int pnSisGruTipo,
                                   int pnObjTipo,
                                   int pnIntTipo)
        {
            PUGA mn = new PUGA();
            IList<Object> iMnu = mn.Get_Permiso_By_UserMenu(pcPerCodigo,
                                                            pcIntJerarquia,
                                                            pnSisGruCodigo,
                                                            pnSisGruTipo,
                                                            pnObjTipo,
                                                            pnIntTipo);
            String sMenu = JsonConvert.SerializeObject(iMnu);
            List<PUGA> lMnu = JsonConvert.DeserializeObject<List<PUGA>>((String)sMenu);
            return lMnu;
        }
    }
}
