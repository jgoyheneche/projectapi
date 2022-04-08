UPDATE [BDAngular].[dbo].[Estado]
SET Estado = @Estado, Activo = @Activo
WHERE id = @id

SELECT *
FROM [BDAngular].[dbo].[Estado]
WHERE id = @id