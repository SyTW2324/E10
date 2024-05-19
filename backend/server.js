const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors'); // Importar el middleware cors para que permita peticiones
const User = require('./models/User');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3000', // Permitir solicitudes desde el frontend
  }));

// Codificar la contraseña
const encodedPassword = encodeURIComponent(process.env.MONGO_PASSWORD);

// Construir el URI de conexión con la contraseña codificada
const dbURI = process.env.MONGO_URI.replace('<password>', encodedPassword);

// Conectar a MongoDB Atlas
mongoose.connect(dbURI)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch(err => console.log('Error al conectar a MongoDB Atlas:', err));

// Ruta de registro
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    // Validar datos de entrada
    if (!username || !password) {
        return res.status(400).json({ message: 'Por favor, proporciona un nombre de usuario y una contraseña' });
    }

    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ username });
    if (userExists) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear nuevo usuario
    const newUser = new User({ username, password });

    try {
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
});

// Ruta de login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    // Validar datos de entrada
    if (!username || !password) {
        return res.status(400).json({ message: 'Por favor, proporciona un nombre de usuario y una contraseña' });
    }

    // Buscar usuario en la base de datos
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso' });
});

// Servir archivos estáticos de React
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Manejar todas las rutas, redirigiéndolas al index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
