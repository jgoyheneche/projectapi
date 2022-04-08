UPDATE [BDAngular].[dbo].[Cancha]
SET cancha = @cancha, precio = @precio, activo = @activo
WHERE id = @id

SELECT *
FROM [BDAngular].[dbo].[Cancha]
WHERE id = @Id

