using System;
using dll_Integrated;
using System.Data.SqlClient;

namespace USS.ArcCentral.DataAccess
{
    public class clsLogin : clsDataAccess
    {
        public clsLogin(bool bOnlyConnect = false, bool bTrans = false)
            : base(Properties.Settings.Default.BDSIPANConnectionString, bOnlyConnect, bTrans)
        {
        }

        public object Get_User(String cPerUsuCodigo, String cPerUsuClave, int bPerUsuClaCryp = 1,
                              TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("sp_User_Validate"))
            {
                cmd.Parameters.Add("@cPerUsuCodigo", System.Data.SqlDbType.VarChar).Value = cPerUsuCodigo;
                cmd.Parameters.Add("@cPerUsuClave", System.Data.SqlDbType.VarChar).Value = cPerUsuClave;
                cmd.Parameters.Add("@bPerUsuClaCryp", System.Data.SqlDbType.Bit).Value = bPerUsuClaCryp;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
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
