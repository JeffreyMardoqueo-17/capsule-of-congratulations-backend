exports.sendMessage = (req, res) => {
    const { name, message, images } = req.body;

    if (!name || !message) {
        return res.status(400).json({ error: 'El nombre y el mensaje son obligatorios' });
    }

    // Aquí iría la lógica para guardar el mensaje
    res.status(201).json({
        message: 'Felicitación enviada exitosamente',
        data: { name, message, images },
    });
};

exports.getMessages = (req, res) => {
    // Aquí iría la lógica para obtener los mensajes de la base de datos
    const messages = [
        { id: 1, name: 'Amigo 1', message: '¡Feliz cumpleaños!', images: [] },
        { id: 2, name: 'Amigo 2', message: 'Te deseo lo mejor en tu día.', images: [] },
    ];

    res.status(200).json({
        message: 'Mensajes recuperados exitosamente',
        data: messages,
    });
};
