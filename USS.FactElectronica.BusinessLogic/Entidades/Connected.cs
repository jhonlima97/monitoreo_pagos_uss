using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using USS.ArcCentral.DataAccess;

namespace USS.ArcCentral.BusinessLogic.Entidades
{
    public class Connected : IDisposable
    {
        public SqlConnection Cn { set; get; }
        public SqlTransaction MyTrans { set; get; }

        public Connected(Boolean bTrans = false)
        {
            clsConected Con = new clsConected(bTrans);
            Cn = Con.Cn;
            MyTrans = Con.Trans;
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
