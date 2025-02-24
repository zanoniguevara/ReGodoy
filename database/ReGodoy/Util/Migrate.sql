--- FABRICAS
INSERT INTO [dbo].[Empresa_Emp]
           (Emp_Nombre, Tip_Codigo, Est_CodigoEmp, Emp_NatJur, Nac_Codigo, Tgg_Codigo, Zon_Codigo, Emp_Contacto,
			Emp_Telefono1, Emp_Telefono2, Emp_Fax, Emp_Correo, Emp_Direccion, Emp_CodigoOld)
SELECT NMB_FABRICA, 22, 140, 1, NAC_CODIGO, Tgg_Codigo, ZON_CODIGO, 
		FAB_CONTACTO, FAB_TEL1, FAB_TEL2, FAB_FAX, FAB_EMAIL, FAB_DIR1, ID_FABRICA
FROM (
SELECT FAB_DIR1,
	(
	SELECT	TOP 1 dbo.Nacion_Nac.Nac_Codigo
	FROM	dbo.Nacion_Nac INNER JOIN
			dbo.Zona_Zon ON dbo.Nacion_Nac.Nac_Codigo = dbo.Zona_Zon.Nac_Codigo
	WHERE	(dbo.Zona_Zon.Zon_ActCiu = 1) 
			AND (dbo.Zona_Zon.Zon_CodigoPadre IS NOT NULL)
			AND (dbo.Nacion_Nac.Nac_ISO3 IN ('ARG','BRA','CHN','USA','IND','MEX','THA'))
			AND rf.FAB_DIR1   LIKE '% ' + dbo.Zona_Zon.Zon_Nombre + '%'
			) NAC_CODIGO,
	(
	SELECT	TOP 1 dbo.Zona_Zon.Zon_Codigo
	FROM	dbo.Nacion_Nac INNER JOIN
			dbo.Zona_Zon ON dbo.Nacion_Nac.Nac_Codigo = dbo.Zona_Zon.Nac_Codigo
	WHERE	(dbo.Zona_Zon.Zon_ActCiu = 1) 
			AND (dbo.Zona_Zon.Zon_CodigoPadre IS NOT NULL)
			AND (dbo.Nacion_Nac.Nac_ISO3 IN ('ARG','BRA','CHN','USA','IND','MEX','THA'))
			AND rf.FAB_DIR1   LIKE '% ' + dbo.Zona_Zon.Zon_Nombre + '%'
			) ZON_CODIGO,
	   NMB_FABRICA, FAB_CONTACTO, FAB_TEL1, FAB_TEL2, FAB_FAX, FAB_EMAIL, ID_FABRICA,
	   (SELECT TOP 1 Tgg_Codigo FROM [dbo].[TipoGralGes_Tgg] WHERE [Tgg_Order] = ID_TP_RAMO) Tgg_Codigo

FROM  RGodoy.dbo.RGR_FABRICA rf 
WHERE rf.fab_avo='a' 
 ) empresas
GO



INSERT INTO [dbo].[Empresa_Emp]
           (Emp_Rif_Ci, Emp_Nombre, Tip_Codigo, Est_CodigoEmp, Emp_NatJur, Nac_Codigo, Tgg_Codigo, Zon_Codigo, Emp_Contacto,
			Emp_Telefono1, Emp_Telefono2, Emp_Fax, Emp_Correo, Emp_Direccion, Emp_CodigoOld)

 
SELECT  RIF_CLIENTE, NMB_CLIENTE, 20 tip, 140 est, 1 jur ,
		( 
			SELECT DISTINCT TOP 1 dbo.Nacion_Nac.Nac_Codigo
			FROM	dbo.Nacion_Nac INNER JOIN
					Venezuela.dbo.Ciudad ON dbo.Nacion_Nac.Nac_ISO3 = Venezuela.dbo.Ciudad.PaisCodigo INNER JOIN
					dbo.Zona_Zon ON dbo.Nacion_Nac.Nac_Codigo = dbo.Zona_Zon.Nac_Codigo AND Venezuela.dbo.Ciudad.CiudadNombre = dbo.Zona_Zon.Zon_Nombre
					and (dbo.Zona_Zon.Zon_ActCiu = 1) AND (dbo.Zona_Zon.Zon_CodigoPadre IS NOT NULL)
			WHERE CLI_DIR1 + NMB_CIU + NMB_EDO  LIKE '%' + ciudadnombre + '%' AND  dbo.Nacion_Nac.nAC_iso2 =  NMB_ABR_PAI
		) nac, 4 tgg,
		( 
			SELECT DISTINCT TOP 1 dbo.Zona_Zon.Zon_Codigo
			FROM	dbo.Nacion_Nac INNER JOIN
					Venezuela.dbo.Ciudad ON dbo.Nacion_Nac.Nac_ISO3 = Venezuela.dbo.Ciudad.PaisCodigo INNER JOIN
					dbo.Zona_Zon ON dbo.Nacion_Nac.Nac_Codigo = dbo.Zona_Zon.Nac_Codigo AND Venezuela.dbo.Ciudad.CiudadNombre = dbo.Zona_Zon.Zon_Nombre
					and (dbo.Zona_Zon.Zon_ActCiu = 1) AND (dbo.Zona_Zon.Zon_CodigoPadre IS NOT NULL)
			WHERE CLI_DIR1 + NMB_CIU + NMB_EDO  LIKE '%' + ciudadnombre + '%' AND  dbo.Nacion_Nac.nAC_iso2 =  NMB_ABR_PAI
		) ciudad, NMB_CONTACTO, CLI_TEL1, isnull (CLI_TEL3, CLI_TEL2) CLI_TEL2, CLI_FAX, CLI_EMAIL, CLI_DIR1, ID_CLIENTE
FROM    RGodoy.dbo.BUC_CIUDAD INNER JOIN
		RGodoy.dbo.BUC_ESTADOS ON RGodoy.dbo.BUC_CIUDAD.CDG_EDO = RGodoy.dbo.BUC_ESTADOS.CDG_EDO INNER JOIN
		RGodoy.dbo.RGR_CLIENTE ON RGodoy.dbo.BUC_CIUDAD.CDG_CIU = RGodoy.dbo.RGR_CLIENTE.CDG_CIU AND RGodoy.dbo.BUC_CIUDAD.CDG_EDO = RGodoy.dbo.RGR_CLIENTE.CDG_EDO INNER JOIN
		RGodoy.dbo.BUC_REGION ON RGodoy.dbo.BUC_ESTADOS.CDG_RGN = RGodoy.dbo.BUC_REGION.CDG_RGN INNER JOIN
		RGodoy.dbo.BUC_PAIS ON RGodoy.dbo.BUC_REGION.CDG_PAI = RGodoy.dbo.BUC_PAIS.CDG_PAI 
WHERE   (RGodoy.dbo.RGR_CLIENTE.CLI_AVO = 'A') 
GO

 SELECT * FROM Empresa_Emp
--ALTER INDEX [PK_TipoGralGes_Tpg] ON [dbo].[TipoGralGes_Tgg] REORGANIZE WITH ( LOB_COMPACTION = ON )
--ALTER INDEX [PK_Comercio_Com_1] ON [dbo].[Empresa_Emp] REORGANIZE WITH ( LOB_COMPACTION = ON )
 
--DBCC CHECKIDENT ('Empresa_Emp', RESEED, 0)
--DBCC CHECKIDENT ('TipoGralGes_Tgg', RESEED, 0)


--Para los clientes se debe cambiar el nombre de los paises son 3 a considerar 
--Mexico                             
--República de Panamá                
--United States  


ALTER TABLE [Empresa_Emp]
ALTER COLUMN Emp_Contacto VARCHAR(160); 