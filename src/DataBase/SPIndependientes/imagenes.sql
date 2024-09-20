CREATE PROCEDURE SPImagenGetPorFelicitacionId
    @FelicitacionId INT
AS
BEGIN
    SELECT * FROM Imagenes WHERE felicitacion_id = @FelicitacionId;
END;
GO
CREATE PROCEDURE SPImagenCreate
    @FelicitacionId INT,
    @UrlImagen VARCHAR(255)
AS
BEGIN
    INSERT INTO Imagenes (felicitacion_id, url_imagen, fecha_creacion)
    VALUES (@FelicitacionId, @UrlImagen, GETDATE());

    SELECT SCOPE_IDENTITY() AS Id;
END;
GO
CREATE PROCEDURE SPImagenDelete
    @Id INT
AS
BEGIN
    DELETE FROM Imagenes WHERE id = @Id;
END;
