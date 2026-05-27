using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using dll_Integrated;
using Newtonsoft.Json;

namespace USS.ArcCentral.BusinessLogic.Entidades
{
    public class ComboVariosParametros
    {
        public int pnIntCodigo1 { get; set; }
        public int pnIntClase1 { get; set; }
        public int pnIntTipo1 { get; set; }
        public int pnIntCodigo2 { get; set; }
        public int pnIntClase2 { get; set; }
        public int pnIntTipo2 { get; set; }
        public int pnIntCodigo3 { get; set; }
        public int pnIntClase3 { get; set; }
        public int pnIntTipo3 { get; set; }
        public int pnIntCodigo4 { get; set; }
        public int pnIntClase4 { get; set; }
        public int pnIntTipo4 { get; set; }

        public List<Interface> lMacro = new List<Interface>();
        public List<Interface> lTipoDoc = new List<Interface>();
        public List<Interface> lEstDoc = new List<Interface>();
        public List<Interface> lObjCal = new List<Interface>();

        public void Get_Load_Combos_VariosParametros(TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (Connected objConec = new Connected(false))
            {
                Interface macro = new Interface();
                Interface tipodoc = new Interface();
                Interface estdoc = new Interface();
                Interface objcal = new Interface();

                macro.Cn = objConec.Cn;
                tipodoc.Cn = objConec.Cn;
                estdoc.Cn = objConec.Cn;
                objcal.Cn = objConec.Cn;

                IList<Object> iCalidad = macro.Get_Interface(pnIntCodigo1, pnIntClase1, pnIntTipo1, TypeData);
                String sConstante2 = JsonConvert.SerializeObject(iCalidad);
                lMacro = JsonConvert.DeserializeObject<List<Interface>>((String)sConstante2);

                IList<Object> iUO = tipodoc.Get_Interface(pnIntCodigo2, pnIntClase2, pnIntTipo2, TypeData);
                String sUo = JsonConvert.SerializeObject(iUO);
                lTipoDoc = JsonConvert.DeserializeObject<List<Interface>>((String)sUo);

                IList<Object> iMac = estdoc.Get_Interface(pnIntCodigo3, pnIntClase3, pnIntTipo3, TypeData);
                String sMac = JsonConvert.SerializeObject(iMac);
                lEstDoc = JsonConvert.DeserializeObject<List<Interface>>((String)sMac);

                IList<Object> iObjcal = objcal.Get_Interface(pnIntCodigo4, pnIntClase4, pnIntTipo4, TypeData);
                String sObjcal = JsonConvert.SerializeObject(iObjcal);
                lObjCal = JsonConvert.DeserializeObject<List<Interface>>((String)sObjcal);

                objConec.Cn.Close();
            }
        }

    }
}
