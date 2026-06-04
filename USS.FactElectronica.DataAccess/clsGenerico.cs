using System;
using dll_Integrated;
using System.Data.SqlClient;


namespace USS.ArcCentral.DataAccess
{
    public class clsGenerico : clsDataAccess
    {
        public clsGenerico(bool bOnlyConnect = false, bool bTrans = false)
            : base(Properties.Settings.Default.BDSIPANConnectionString, bOnlyConnect, bTrans)
        {
        }

        public Object Get_PerImagen(String pcPerCodigo,
                                    TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Administ_Get_PerImagen_Persona"))
            {
                cmd.Parameters.Add("@pcPerCodigo", System.Data.SqlDbType.Char).Value = pcPerCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }
    }
}
