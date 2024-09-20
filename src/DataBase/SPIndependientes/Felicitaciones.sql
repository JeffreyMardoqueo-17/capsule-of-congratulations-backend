CREATE PROCEDURE SPFelicitacionCreate
    @Nombre VARCHAR(50),
    @Apellido VARCHAR(50),
    @Mensaje TEXT
AS
BEGIN
    INSERT INTO Felicitaciones (nombre, apellido, mensaje, fecha_creacion)
    VALUES (@Nombre, @Apellido, @Mensaje, GETDATE());

    SELECT SCOPE_IDENTITY() AS Id;
END;
GO
CREATE PROCEDURE SPFelicitacionGet
    @Id INT = NULL
AS
BEGIN
    IF @Id IS NULL
    BEGIN
        SELECT * FROM Felicitaciones;
    END
    ELSE
    BEGIN
        SELECT * FROM Felicitaciones WHERE id = @Id;
    END
END;
GO
CREATE PROCEDURE SPFelicitacionUpdate
    @Id INT,
    @Nombre VARCHAR(50),
    @Apellido VARCHAR(50),
    @Mensaje TEXT
AS
BEGIN
    UPDATE Felicitaciones
    SET nombre = @Nombre, apellido = @Apellido, mensaje = @Mensaje, fecha_actualizacion = GETDATE()
    WHERE id = @Id;

    SELECT * FROM Felicitaciones WHERE id = @Id;
END;
go
CREATE PROCEDURE SPFelicitacionDelete
    @Id INT
AS
BEGIN
    DELETE FROM Felicitaciones WHERE id = @Id;
END;
