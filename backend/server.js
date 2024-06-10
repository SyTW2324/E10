const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/user');
const Song = require('./models/song');

// Cargar variables de entorno
dotenv.config({ path: './backend/.env' });

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Configurar CORS
app.use(cors({
  origin: ['http://localhost:3000', 'https://musicwiki-b09c03390eba.herokuapp.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Codificar la contraseña
const encodedPassword = encodeURIComponent(process.env.MONGO_PASSWORD);
let dbURI = '';

if (process.env.MONGO_URI) {
  dbURI = process.env.MONGO_URI.replace('<password>', encodedPassword);
} else {
  console.error('MONGO_URI is not defined');
}

// Conectar a MongoDB Atlas
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => {
    console.log('Error al conectar a MongoDB Atlas:', err);
    process.exit(1);  // Exit the process with an error code
  });

// Rutas y controladores
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Por favor, proporciona un nombre de usuario y una contraseña' });
  }
  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }
  const newUser = new User({ username, password });
  try {
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Por favor, proporciona un nombre de usuario y una contraseña' });
  }
  const user = await User.findOne({ username });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
  }
  res.status(200).json({ message: 'Inicio de sesión exitoso' });
});

app.post('/api/songs', async (req, res) => {
  const { name, author, duration, genres, single, reproductions } = req.body;
  if (!name || !author || !duration || !genres || !reproductions) {
    return res.status(400).json({ message: 'Por favor, proporciona los datos requeridos correctamente' });
  }
  const newSong = new Song({ name, author, duration, genres, single, reproductions });
  try {
    await newSong.save();
    res.status(201).json({ message: 'Canción añadida con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al añadir la canción' });
  }
});

app.get('/api/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: 'Error al recuperar las canciones' });
  }
});

app.put('/api/songs/:id', async (req, res) => {
  const { id } = req.params;
  const { lyrics } = req.body;
  if (!lyrics) {
    return res.status(400).json({ message: 'La letra de la canción es requerida' });
  }
  try {
    const song = await Song.findByIdAndUpdate(id, { lyrics }, { new: true });
    if (!song) {
      return res.status(404).json({ message: 'Canción no encontrada' });
    }
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la canción' });
  }
});

// Servir archivos estáticos de React
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Manejar todas las rutas, redirigiéndolas al index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});