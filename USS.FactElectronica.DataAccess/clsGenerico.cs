using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

        public Object Get_Permiso_By_UserMenu(String cPerCodigo,
                                              String cIntJerarquia,
                                              int nSisGruCodigo,
                                              int nSisGruTipo,
                                              int nObjTipo,
                                              int nIntTipo,
                                              TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("usp_Intranet_Get_Menu_By_user"))
            {
                cmd.Parameters.Add("@cPerCodigo", System.Data.SqlDbType.VarChar).Value = cPerCodigo;
                cmd.Parameters.Add("@cIntJerarquia", System.Data.SqlDbType.VarChar).Value = cIntJerarquia;
                cmd.Parameters.Add("@nSisGruCodigo", System.Data.SqlDbType.Int).Value = nSisGruCodigo;
                cmd.Parameters.Add("@nSisGruTipo", System.Data.SqlDbType.Int).Value = nSisGruTipo;
                cmd.Parameters.Add("@nObjTipo", System.Data.SqlDbType.Int).Value = nObjTipo;
                cmd.Parameters.Add("@nIntTipo", System.Data.SqlDbType.Int).Value = nIntTipo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public Object Get_Constante(int pnConCodigo,
                                     TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("sp_Constante_Get"))
            {
                cmd.Parameters.Add("@nConCodigo", System.Data.SqlDbType.Int).Value = pnConCodigo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        /*add andy 15-03-2022*/
        public Object Get_Obj_Interface(int pnTipo = 0,
                                int pnIntClase = 0,
                                TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("sp_Interface_Get"))
            {
                cmd.Parameters.Add("@nTipo", System.Data.SqlDbType.Int).Value = pnTipo;
                cmd.Parameters.Add("@nIntClase", System.Data.SqlDbType.Int).Value = pnIntClase;

                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

        public Object Get_Constante_Proveedor(int nConCodigo,
                                             int nTipo = 0,
                                             TypeData TypeData = TypeData.gTypeDataReader)
        {
            using (SqlCommand cmd = new SqlCommand("sp_Constante_Get"))
            {
                cmd.Parameters.Add("@nConCodigo", System.Data.SqlDbType.Int).Value = nConCodigo;
                cmd.Parameters.Add("@nTipo", System.Data.SqlDbType.Int).Value = nTipo;
                return this.Get_objData_With_Connexion(cmd, System.Data.CommandType.StoredProcedure, TypeData, Cn, Trans);
            }
        }

    }

}
