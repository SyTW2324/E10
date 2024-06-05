import {React, useEffect, useState} from 'react';
import AddSongForm from './songs.component';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addSong,fetchSongs } from '../../redux/actions/songActions'; // Asegúrate de que esta es la ruta correcta a tus acciones de Redux
import { useNavigate } from 'react-router-dom';
import './song.component.css';


const SongPage = () => {
    const songs = useSelector(state => state.song.songs); // Asegúrate de que esta es la ruta correcta al estado de las canciones en tu store de Redux
    const dispatch = useDispatch();
    const error = useSelector(state => state.song.error);
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);
    const [showForm, setShowForm] = useState(false);
    
    useEffect(() => {
        dispatch(fetchSongs());
        const intervalId = setInterval(() => {
            dispatch(fetchSongs());
          }, 1000); // Fetch songs every second
        
          // Clear the interval when the component unmounts
          return () => {
            clearInterval(intervalId);
          };
      }, [dispatch, songs]);

    const handleAddSong = (song) => {
        dispatch(addSong(song));
        setShowForm(false); // Oculta el formulario después de añadir una canción
    };

    useEffect(() => {
        if (!user) {
          // Si el usuario no está autenticado, redirige al formulario de inicio de sesión
          navigate('/login');
        }
    }, [user, navigate]);
    
    
    return (
        
        <div className="flex flex-col items-center justify-center h-screen" style={{ background: 'linear-gradient(#2a00b7, #42006c)'}}>
            <div className="bg-white p-8 rounded shadow-md text-center" style={{display: 'flex', flexDirection: 'column', height: 'fit-container ', width: 'fit-container'}} >
                <h1 className="text-4xl font-bold mb-4 text-blue-600">Canciones disponibles actualmente</h1>
                {error && <div>Error: {error}</div>}
                {!showForm && (
                <table>
                    <thead>
                        <tr>
                        <th>Nombre de la canción</th>
                        <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => (
                        <tr key={song.id}>
                            <td>{song.name}</td>
                            <td>{song.author}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                )}
                <button className="form-group-button" onClick={() => setShowForm(true)}>Añadir Canción</button> {/* Muestra el formulario cuando se hace clic en este botón */}
                    {showForm && (
                       <div>
                            <p className="text-gray-700 text-lg">
                            En el siguiente formulario podras añadir una cancion a la base de datos de MusicWiki
                            </p>
                            <AddSongForm onSubmit={handleAddSong}/>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default SongPage;