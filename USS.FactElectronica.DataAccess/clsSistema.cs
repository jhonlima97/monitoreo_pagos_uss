using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using dll_Integrated;
using System.Data.SqlClient;


namespace USS.ArcCentral.DataAccess
{
    public class clsSistema : clsDataAccess
    {
        public clsSistema(bool bOnlyConnect = false, bool bTrans = false, SqlConnection Cn = null, SqlTransaction Trans = null)
        : base(Properties.Settings.Default.BDSIPANConnectionString, bOnlyConnect, bTrans, Cn, Trans)
        {
        }

        public Object Get_Listado_ConsultasBBVA(String cFecha,
                                                String cFechaFin,
                                                String cUsrCodigo,
                                                TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_BBVA_monitoreo_consultas"))
            {
                cmd.Parameters.Add("@cFecha", System.Data.SqlDbType.VarChar).Value = cFecha;
                cmd.Parameters.Add("@cFechaFin", System.Data.SqlDbType.VarChar).Value = cFechaFin;
                cmd.Parameters.Add("@cUsuario", System.Data.SqlDbType.VarChar).Value = cUsrCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public Object Get_Listado_ConciliacionBBVA(String cDetalle,
                                                    String cUsrCodigo,
                                                    TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_BBVA_monitoreo_conciliacion_archivo"))
            {
                cmd.Parameters.Add("@cDetalle", System.Data.SqlDbType.VarChar).Value = cDetalle;
                cmd.Parameters.Add("@cUsuario", System.Data.SqlDbType.VarChar).Value = cUsrCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }
        public Object Get_Listado_ResumenBBVA(TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_BBVA_Monitoreo_Resumen"))
            {
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public Object Get_Listado_ConsultasBCP(String cFecha,
                                                String cFechaFin,
                                                String cUsrCodigo,
                                                TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_BCP_Monitoreo_Consultas"))
            {
                cmd.Parameters.Add("@cFecha", System.Data.SqlDbType.VarChar).Value = cFecha;
                cmd.Parameters.Add("@cFechaFin", System.Data.SqlDbType.VarChar).Value = cFechaFin;
                cmd.Parameters.Add("@cUsuario", System.Data.SqlDbType.VarChar).Value = cUsrCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public Object Get_Listado_ConciliacionBCP(String cDetalle,
                                                    String cUsrCodigo,
                                                    TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_BBVA_monitoreo_conciliacion_archivo"))
            {
                cmd.Parameters.Add("@cDetalle", System.Data.SqlDbType.VarChar).Value = cDetalle;
                cmd.Parameters.Add("@cUsuario", System.Data.SqlDbType.VarChar).Value = cUsrCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public Object Get_Listado_ResumenBCP(String cUsrCodigo, TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_BCP_Monitoreo_Resumen"))
            {
                cmd.Parameters.Add("@cUsuario", System.Data.SqlDbType.VarChar).Value = cUsrCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public Object Get_Listado_ConsultasGKN(String cFecha,
                                        String cFechaFin,
                                        String cUsrCodigo,
                                        TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_GloboKas_Monitoreo_Consultas"))
            {
                cmd.Parameters.Add("@cFecha", System.Data.SqlDbType.VarChar).Value = cFecha;
                cmd.Parameters.Add("@cFechaFin", System.Data.SqlDbType.VarChar).Value = cFechaFin;
                cmd.Parameters.Add("@cUsuario", System.Data.SqlDbType.VarChar).Value = cUsrCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public Object Get_Listado_ConciliacionGKN(String cDetalle,
                                                    String cUsrCodigo,
                                                    TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_BBVA_monitoreo_conciliacion_archivo"))
            {
                cmd.Parameters.Add("@cDetalle", System.Data.SqlDbType.VarChar).Value = cDetalle;
                cmd.Parameters.Add("@cUsuario", System.Data.SqlDbType.VarChar).Value = cUsrCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }
        public Object Get_Listado_ResumenGKN(String cUsrCodigo, TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_GloboKas_Monitoreo_Resumen"))
            {
                cmd.Parameters.Add("@cUsuario", System.Data.SqlDbType.VarChar).Value = cUsrCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public Object Get_Listado_ResumenOnline(String cUsrCodigo, TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("usp_PagosEnLinea_Monitoreo_Resumen"))
            {
                cmd.Parameters.Add("@cUsuario", System.Data.SqlDbType.VarChar).Value = cUsrCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }


        /*
         Modulo BiPay
        */

        public Object Get_Listado_ConsultasBiPay(String cFecha,
                                         String cFechaFin,
                                         String cUsrCodigo,
                                         TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_BiPay_monitoreo_consultas"))
            {
                cmd.Parameters.Add("@cFecha", System.Data.SqlDbType.VarChar).Value = cFecha;
                cmd.Parameters.Add("@cFechaFin", System.Data.SqlDbType.VarChar).Value = cFechaFin;
                cmd.Parameters.Add("@cUsuario", System.Data.SqlDbType.VarChar).Value = cUsrCodigo;

                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public Object Get_Listado_ResumenBiPay(TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_BiPay_Monitoreo_Resumen"))
            {
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public Object Get_Listado_ConciliacionBiPay(String cDetalle, String cUsrCodigo,
                                                    TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("ASBANC.dbo.usp_BiPay_monitoreo_conciliacion_archivo"))
            {
                cmd.Parameters.Add("@cDetalle", System.Data.SqlDbType.VarChar).Value = cDetalle;
                cmd.Parameters.Add("@cUsuario", System.Data.SqlDbType.VarChar).Value = cUsrCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

    }
}
