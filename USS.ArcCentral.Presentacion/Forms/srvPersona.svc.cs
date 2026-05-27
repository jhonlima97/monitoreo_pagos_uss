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

        [OperationContract]
        public List<UsuarioCalidad> Get_Usuarios_Calidad()
        {
            UsuarioCalidad p = new UsuarioCalidad();
            IList<Object> iMnu = p.Get_Usuarios_Calidad();
            String sMenu = JsonConvert.SerializeObject(iMnu);
            List<UsuarioCalidad> lMnu = JsonConvert.DeserializeObject<List<UsuarioCalidad>>((String)sMenu);
            return lMnu;
        }

        [OperationContract]
        public List<UsuarioCalidad> Get_Search_Persona(String cTexto)
        {
            UsuarioCalidad p = new UsuarioCalidad();
            IList<Object> iMnu = p.Get_Search_Persona(cTexto);
            String sMenu = JsonConvert.SerializeObject(iMnu);
            List<UsuarioCalidad> lMnu = JsonConvert.DeserializeObject<List<UsuarioCalidad>>((String)sMenu);
            return lMnu;
        }

        [OperationContract]
        public List<PermisosCalidad> Get_Permisos_Usuario_Calidad(String cPerCodigo)
        {
            PermisosCalidad p = new PermisosCalidad();
            IList<Object> iMnu = p.Get_Permisos_Usuario_Calidad(cPerCodigo);
            String sMenu = JsonConvert.SerializeObject(iMnu);
            List<PermisosCalidad> lMnu = JsonConvert.DeserializeObject<List<PermisosCalidad>>((String)sMenu);
            return lMnu;
        }

        [OperationContract]
        public String Set_Upd_Permiso_Usuario_Calidad(String cPerCodigo,
                                                    String cTexto,
                                                    String cPerUsuario)//TypeData TypeData = TypeData.gTypeDataReader
        {

            PermisosCalidad s = new PermisosCalidad();
            String resp = s.Set_Upd_Permiso_Usuario_Calidad(cPerCodigo,
                                                        cTexto,
                                                        cPerUsuario);
            //String sSerie = JsonConvert.SerializeObject(iSerie);
            return resp;
            //List<Serie> lSerie = JsonConvert.DeserializeObject<List<Serie>>((String)sSerie);
            //return lSerie;
        }

        [OperationContract]
        public String Del_Permiso_Usuario_Calidad(String cPerCodigo,
                                                    String cPerUsuario)//TypeData TypeData = TypeData.gTypeDataReader
        {

            PermisosCalidad s = new PermisosCalidad();
            String resp = s.Del_Permiso_Usuario_Calidad(cPerCodigo,
                                                        cPerUsuario);
            //String sSerie = JsonConvert.SerializeObject(iSerie);
            return resp;
            //List<Serie> lSerie = JsonConvert.DeserializeObject<List<Serie>>((String)sSerie);
            //return lSerie;
        }

        /*
        [OperationContract]
        public List<Persona> Get_Search_Persona(int pnUniOrgCodigo,
                                                int pnOption,
                                                String pcParametro,
                                                String pcFiltro)
        {
            Persona p = new Persona();
            IList<Object> iMnu = p.Get_Search_Persona(pnUniOrgCodigo,
                                                       pnOption,
                                                       pcParametro,
                                                       pcFiltro);
            String sMenu = JsonConvert.SerializeObject(iMnu);
            List<Persona> lMnu = JsonConvert.DeserializeObject<List<Persona>>((String)sMenu);
            return lMnu;
        }*/
        /*
        [OperationContract]
        public List<Persona> Get_Datos_Persona(String pcPerCodigo)
        {
            Persona mn = new Persona();
            IList<Object> iMnu = mn.Get_Datos_Usuario(pcPerCodigo);
            String sMenu = JsonConvert.SerializeObject(iMnu);
            List<Persona> lMnu = JsonConvert.DeserializeObject<List<Persona>>((String)sMenu);
            return lMnu;
        }*/
    }
}
