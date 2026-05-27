using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using dll_Integrated;
using System.Data.SqlClient;

namespace USS.ArcCentral.DataAccess
{
    public class clsLogin : clsDataAccess, IDisposable
    {
        public clsLogin(bool bOnlyConnect = false, bool bTrans = false)
            : base(Properties.Settings.Default.BDSIPANConnectionString, bOnlyConnect, bTrans)
        {
        }

        public object Get_User(String cPerUsuCodigo,
                              String cPerUsuClave,
                              int bPerUsuClaCryp = 1,
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

        #region "Idisponsable"
        // Para detectar llamadas redundantes
        private bool disposedValue = false;

        // IDisposable
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposedValue)
            {
                if (disposing)
                {
                    // TODO: Liberar recursos administrados cuando se llamen explícitamente
                }

                // TODO: Liberar recursos no administrados compartidos
            }
            this.disposedValue = true;
        }

        #region " IDisposable Support "
        // Visual Basic agregó este código para implementar correctamente el modelo descartable.
        public void Dispose()
        {
            // No cambie este código. Coloque el código de limpieza en Dispose (ByVal que se dispone como Boolean).
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        #endregion
        #endregion
    }
}
