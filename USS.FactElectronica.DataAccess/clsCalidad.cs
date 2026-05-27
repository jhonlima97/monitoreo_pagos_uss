using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using dll_Integrated;
using System.Data.SqlClient;

namespace USS.ArcCentral.DataAccess
{
    public class clsCalidad : clsDataAccess
    {
        public clsCalidad(bool bOnlyConnect = false, bool bTrans = false, SqlConnection Cn = null, SqlTransaction Trans = null)
            : base(Properties.Settings.Default.BDSIPANConnectionString, bOnlyConnect, bTrans, Cn, Trans)
        {
        }

        // ***********************  add Andy 29/06/2020 **********************************

        // Calidad
        public Object Get_Jerarquia_procesos(TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Get_List_Proceso"))
            {
                //cmd.Parameters.Add("@pnArcCenEstCodigo", System.Data.SqlDbType.Int).Value = nArcCenEstCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public String Set_Upd_Jerarquia_procesos(Int32 nSGCProCodigo,
                                                String cSGCProCodigo,
                                                String cSGCProNombre,
                                                Int32 nSGCProMacroproceso,
                                                Int32 nSGCProResponsable,
                                                String cPerUsuario,
                                                TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Set_Upd_Proceso"))
            {
                cmd.Parameters.Add("@pnSGCProCodigo", System.Data.SqlDbType.Int).Value = nSGCProCodigo;
                cmd.Parameters.Add("@pcSGCProCodigo", System.Data.SqlDbType.VarChar).Value = cSGCProCodigo;
                cmd.Parameters.Add("@pcSGCProNombre", System.Data.SqlDbType.VarChar).Value = cSGCProNombre;
                cmd.Parameters.Add("@pnSGCProMacroproceso", System.Data.SqlDbType.Int).Value = nSGCProMacroproceso;
                cmd.Parameters.Add("@pnSGCProResponsable", System.Data.SqlDbType.Int).Value = nSGCProResponsable;
                cmd.Parameters.Add("@pcPerUsuario", System.Data.SqlDbType.VarChar).Value = cPerUsuario;
                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        }

        public Object Get_Interface(Int32 nIntCodigo,
                                    Int32 nIntClase,
                                    Int32 nIntTipo,
                                    TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Resoluciones_Get_List_Interface")) // Verificar o cambiar Nombre
            {
                cmd.Parameters.Add("@pnIntCodigo", System.Data.SqlDbType.Int).Value = nIntCodigo;
                cmd.Parameters.Add("@pnIntClase", System.Data.SqlDbType.Int).Value = nIntClase;
                cmd.Parameters.Add("@pnIntTipo", System.Data.SqlDbType.Int).Value = nIntTipo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public String Set_Upd_Interface(Int32 nIntCodigo,
                                Int32 nIntClase,
                                String cIntNombre,
                                String cIntDescripcion,
                                TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Resoluciones_Set_Upd_Interface"))
            {
                cmd.Parameters.Add("@pnIntCodigo", System.Data.SqlDbType.Int).Value = nIntCodigo;
                cmd.Parameters.Add("@pnIntClase", System.Data.SqlDbType.Int).Value = nIntClase;
                cmd.Parameters.Add("@pcIntNombre", System.Data.SqlDbType.VarChar).Value = cIntNombre;
                cmd.Parameters.Add("@pcIntDescripcion", System.Data.SqlDbType.VarChar).Value = cIntDescripcion;
                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        }

        public Object Get_Parametro(Int32 nIntCodigo,
                            Int32 nIntClase,
                            //Int32 nIntTipo,
                            TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Get_List_Interface")) // Verificar o cambiar Nombre
            {
                cmd.Parameters.Add("@pnIntCodigo", System.Data.SqlDbType.Int).Value = nIntCodigo;
                cmd.Parameters.Add("@pnIntClase", System.Data.SqlDbType.Int).Value = nIntClase;
                //cmd.Parameters.Add("@pnIntTipo", System.Data.SqlDbType.Int).Value = nIntTipo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public String Set_Upd_Parametro(Int32 nIntCodigo,
                                        Int32 nIntClase,
                                        String cIntNombre,
                                        String cIntDescripcion,
                                        TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Set_Upd_Interface"))
            {
                cmd.Parameters.Add("@pnIntCodigo", System.Data.SqlDbType.Int).Value = nIntCodigo;
                cmd.Parameters.Add("@pnIntClase", System.Data.SqlDbType.Int).Value = nIntClase;
                cmd.Parameters.Add("@pcIntNombre", System.Data.SqlDbType.VarChar).Value = cIntNombre;
                cmd.Parameters.Add("@pcIntDescripcion", System.Data.SqlDbType.VarChar).Value = cIntDescripcion;
                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        }

        public String Del_Parametro(Int32 pnParCodigo,
                                    Int32 pnParClase,
                                    Int32 pnEstado,
                                    TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_ArchivoCentral_Del_parametro"))
            {
                cmd.Parameters.Add("@pnParCodigo", System.Data.SqlDbType.Int).Value = pnParCodigo;
                cmd.Parameters.Add("@pnParClase", System.Data.SqlDbType.Int).Value = pnParClase;
                cmd.Parameters.Add("@pnEstado", System.Data.SqlDbType.Int).Value = pnEstado;
                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        }



        /*
        // Resoluciones
        public Object Get_Resoluciones(Int32 nSGRResCodigo, TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Resoluciones_Get_Resoluciones"))
            {
                cmd.Parameters.Add("@nSGRResCodigo", System.Data.SqlDbType.Int).Value = nSGRResCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }
        */


        /*

        
        public Object Get_Documentos(TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Get_List_Documentos"))
            {
                //cmd.Parameters.Add("@pnArcCenEstCodigo", System.Data.SqlDbType.Int).Value = nArcCenEstCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public String Set_Upd_Documentos(Int32 nSGCDocCodigo,
                                        String cSGCDocCodigo,
                                        String cSGCDocTitulo,
                                        String cSGCDocNomAct,
                                        Int32 nCategoria,
                                        Int32 nSGCDocTipo,
                                        Int32 nSGCProCodigo,
                                        Int32 nVersion,
                                        String cDescripcion,
                                        String cDocumento,
                                        String cPerElaboracion,
                                        String cPerRevision,
                                        String cPerAprobacion,
                                        String cFecha,
                                        String cPerCodigo,
                                        Int32 nNewVersion,
                                        TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Set_Upd_Documento"))
            {
                cmd.Parameters.Add("@nSGCDocCodigo", System.Data.SqlDbType.Int).Value = nSGCDocCodigo;
                cmd.Parameters.Add("@cSGCDocCodigo", System.Data.SqlDbType.VarChar).Value = cSGCDocCodigo;
                cmd.Parameters.Add("@cSGCDocTitulo", System.Data.SqlDbType.VarChar).Value = cSGCDocTitulo;
                cmd.Parameters.Add("@cSGCDocNomActividad", System.Data.SqlDbType.VarChar).Value = cSGCDocNomAct;
                cmd.Parameters.Add("@nCategoria", System.Data.SqlDbType.Int).Value = nCategoria;
                cmd.Parameters.Add("@nSGCDocTipo", System.Data.SqlDbType.Int).Value = nSGCDocTipo;
                cmd.Parameters.Add("@nSGCProCodigo", System.Data.SqlDbType.Int).Value = nSGCProCodigo;
                cmd.Parameters.Add("@nVersion", System.Data.SqlDbType.Int).Value = nVersion;
                cmd.Parameters.Add("@cDescripcion", System.Data.SqlDbType.VarChar).Value = cDescripcion;
                cmd.Parameters.Add("@cDocumento", System.Data.SqlDbType.VarChar).Value = cDocumento;
                cmd.Parameters.Add("@cPerElaboracion", System.Data.SqlDbType.VarChar).Value = cPerElaboracion;
                cmd.Parameters.Add("@cPerRevision", System.Data.SqlDbType.VarChar).Value = cPerRevision;
                cmd.Parameters.Add("@cPerAprobacion", System.Data.SqlDbType.VarChar).Value = cPerAprobacion;
                cmd.Parameters.Add("@cFecha", System.Data.SqlDbType.VarChar).Value = cFecha;
                cmd.Parameters.Add("@cPerCodigo", System.Data.SqlDbType.VarChar).Value = cPerCodigo;
                cmd.Parameters.Add("@nNewVersion", System.Data.SqlDbType.VarChar).Value = nNewVersion;
                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        }

        public Object Get_Versiones_Documento(Int32 nSGCDocCodigo, TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Get_Doc_Versiones"))
            {
                cmd.Parameters.Add("@nSGCDocCodigo", System.Data.SqlDbType.Int).Value = nSGCDocCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        // INDICADORES

        public Object Get_Indicadores(Int32 nSGCIndCodigo,TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Get_Indicadores"))
            {
                cmd.Parameters.Add("@nSGCIndCodigo", System.Data.SqlDbType.Int).Value = nSGCIndCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public String Set_Upd_Indicador(Int32 nSGCIndCodigo,
                                        Int32 nProceso,
                                        Int32 nArea,
                                        String cResGestion,
                                        String cResIndicador,
                                        String cSGCCodIndicador,
                                        String cSGCIndNombre,
                                        String cProposito,
                                        Int32 nTipo,
                                        String cFuente,
                                        String cNumerador,
                                        String cDenominador,
                                        Int32 nAcomulado,
                                        String cValorMin,
                                        String cValorMax,
                                        String cMeta,
                                        Int32 nPeriodo,
                                        Int32 nMedida,
                                        String cDetalle,
                                        String cDocumento,
                                        String cPerUsuario,
                                        TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Set_Upd_Indicador"))
            {
                cmd.Parameters.Add("@nSGCIndCodigo", System.Data.SqlDbType.Int).Value = nSGCIndCodigo;
                cmd.Parameters.Add("@nSGCProCodigo", System.Data.SqlDbType.Int).Value = nProceso;
                cmd.Parameters.Add("@nSGCIndArea", System.Data.SqlDbType.Int).Value = nArea;
                cmd.Parameters.Add("@cPerIndResGestion", System.Data.SqlDbType.VarChar).Value = cResGestion;
                cmd.Parameters.Add("@cPerIndResIndicador", System.Data.SqlDbType.VarChar).Value = cResIndicador;
                cmd.Parameters.Add("@cSGCIndCodigo", System.Data.SqlDbType.VarChar).Value = cSGCCodIndicador;
                cmd.Parameters.Add("@cSGCIndNombre", System.Data.SqlDbType.VarChar).Value = cSGCIndNombre;
                cmd.Parameters.Add("@cSGCIndDescripcion", System.Data.SqlDbType.VarChar).Value = cProposito;
                cmd.Parameters.Add("@nSGCIndTipo", System.Data.SqlDbType.Int).Value = nTipo;
                cmd.Parameters.Add("@cSGCIndFuenteInfo", System.Data.SqlDbType.VarChar).Value = cFuente;
                cmd.Parameters.Add("@cSGCIndNumerador", System.Data.SqlDbType.VarChar).Value = cNumerador;
                cmd.Parameters.Add("@cSGCIndDenominador", System.Data.SqlDbType.VarChar).Value = cDenominador;
                cmd.Parameters.Add("@nSGCIndAcomulado", System.Data.SqlDbType.Int).Value = nAcomulado;
                cmd.Parameters.Add("@nSGCIndValorMin", System.Data.SqlDbType.VarChar).Value = cValorMin;
                cmd.Parameters.Add("@nSGCIndValorMax", System.Data.SqlDbType.VarChar).Value = cValorMax;
                cmd.Parameters.Add("@nSGCIndMeta", System.Data.SqlDbType.VarChar).Value = cMeta;
                cmd.Parameters.Add("@cSGCIndDocumento", System.Data.SqlDbType.VarChar).Value = cDocumento;
                cmd.Parameters.Add("@nSGCIndTipoPeriodo", System.Data.SqlDbType.Int).Value = nPeriodo;
                cmd.Parameters.Add("@nSGCIndMedida", System.Data.SqlDbType.Int).Value = nMedida;
                cmd.Parameters.Add("@cDetalle", System.Data.SqlDbType.VarChar).Value = cDetalle;
                cmd.Parameters.Add("@cPerUsuario", System.Data.SqlDbType.VarChar).Value = cPerUsuario;

                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        }

        public String Del_Indicador(Int32 nSGCIndCodigo,
                                    String cPerUsuario,
                                    TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Del_Indicador"))
            {
                cmd.Parameters.Add("@nSGCIndCodigo", System.Data.SqlDbType.Int).Value = nSGCIndCodigo;
                cmd.Parameters.Add("@cPerUsuario", System.Data.SqlDbType.VarChar).Value = cPerUsuario;
                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        }




        //Seguimiento
        public Object Get_Seguimiento(Int32 nSGCIndCodigo, TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Get_Seguimiento"))
            {
                cmd.Parameters.Add("@nSGCIndCodigo", System.Data.SqlDbType.Int).Value = nSGCIndCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public String Set_Upd_Seguimiento(Int32 nSGCIndProCodigo,
                                            Int32 nSGCSegCodigo,
                                            String nSGCSegResultado,
                                            String cSGCSegObservacion,
                                            String cPerCodigo,
                                            TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Set_Upd_Seguimiento"))
            {
                cmd.Parameters.Add("@pnSGCIndProCodigo", System.Data.SqlDbType.Int).Value = nSGCIndProCodigo;
                cmd.Parameters.Add("@pnSGCSegCodigo", System.Data.SqlDbType.Int).Value = nSGCSegCodigo;
                cmd.Parameters.Add("@pnSGCSegResultado", System.Data.SqlDbType.VarChar).Value = nSGCSegResultado;
                cmd.Parameters.Add("@pcSGCSegObservacion", System.Data.SqlDbType.VarChar).Value = cSGCSegObservacion;
                cmd.Parameters.Add("@pcPerCodigo", System.Data.SqlDbType.VarChar).Value = cPerCodigo;
                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        } */


        public Object Get_Usuarios_Calidad(TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Resoluciones_Gestion_Usuarios"))
            {
                cmd.Parameters.Add("@nOpcion", System.Data.SqlDbType.Int).Value = 1;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }
        public Object Get_Permisos_Usuario_Calidad( String cPerCodigo,TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Resoluciones_Gestion_Usuarios"))
            {
                cmd.Parameters.Add("@nOpcion", System.Data.SqlDbType.Int).Value = 2;
                cmd.Parameters.Add("@cPerCodigo", System.Data.SqlDbType.VarChar).Value = cPerCodigo;
                cmd.Parameters.Add("@cText", System.Data.SqlDbType.VarChar).Value = "53";
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public String Set_Upd_Permiso_Usuario_Calidad(String cPerCodigo,
                                                    String cTexto,
                                                    String cPerUsuario,
                                                    TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Resoluciones_Gestion_Usuarios"))
            {
                cmd.Parameters.Add("@nOpcion", System.Data.SqlDbType.VarChar).Value = 3;
                cmd.Parameters.Add("@cPerCodigo", System.Data.SqlDbType.VarChar).Value = cPerCodigo;
                cmd.Parameters.Add("@cText", System.Data.SqlDbType.VarChar).Value = cTexto;
                cmd.Parameters.Add("@cPerUsuario", System.Data.SqlDbType.VarChar).Value = cPerUsuario;
                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        }

        public String Del_Permiso_Usuario_Calidad(String cPerCodigo,
                                                String cPerUsuario,
                                                TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Resoluciones_Gestion_Usuarios"))
            {
                cmd.Parameters.Add("@nOpcion", System.Data.SqlDbType.VarChar).Value = 4;
                cmd.Parameters.Add("@cPerCodigo", System.Data.SqlDbType.VarChar).Value = cPerCodigo;
                cmd.Parameters.Add("@cPerUsuario", System.Data.SqlDbType.VarChar).Value = cPerUsuario;
                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        }

        public Object Get_Search_Persona(String cTexto, TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Resoluciones_Gestion_Usuarios"))
            {
                cmd.Parameters.Add("@nOpcion", System.Data.SqlDbType.Int).Value = 5;
                cmd.Parameters.Add("@cText", System.Data.SqlDbType.VarChar).Value = cTexto;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public String Del_Proceso(Int32 nSGCProCodigo,
                                    String cPerUsuario,
                                    TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Del_Proceso"))
            {
                cmd.Parameters.Add("@nSGCProCodigo", System.Data.SqlDbType.Int).Value = nSGCProCodigo;
                cmd.Parameters.Add("@cPerUsuario", System.Data.SqlDbType.VarChar).Value = cPerUsuario;
                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        }

        public String Del_Documento(Int32 nSGCDocCodigo,
                                    String cPerUsuario,
                                    TypeData TypeData = TypeData.gTypeExecuteScalar)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_Calidad_Del_Documento"))
            {
                cmd.Parameters.Add("@nSGCDocCodigo", System.Data.SqlDbType.Int).Value = nSGCDocCodigo;
                cmd.Parameters.Add("@cPerUsuario", System.Data.SqlDbType.VarChar).Value = cPerUsuario;
                return Convert.ToString(this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans));
            }
        }

       
        // Listado de areas
        public Object Get_Lst_UO(TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("dbo.usp_ArchivoCentral_Get_areas"))
            {
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }




    }
}
