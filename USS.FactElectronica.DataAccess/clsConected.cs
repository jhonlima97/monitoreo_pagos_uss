using System;
using dll_Integrated;

namespace USS.ArcCentral.DataAccess
{
    public class clsConected : clsDataAccess
    {
        //public SqlConnection Conect { set; get; }
        //public SqlTransaction MyTrans { set; get; }

        public clsConected(Boolean bTrans = false)
            : base(Properties.Settings.Default.BDSIPANConnectionString, true, bTrans, null)
        {
            //Conect = Cn;
            //MyTrans = Trans;
        }
    }
}
