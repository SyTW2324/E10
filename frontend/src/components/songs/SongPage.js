import { React, useEffect, useState } from 'react';
import AddSongForm from './songs.component';
import { useSelector, useDispatch } from 'react-redux';
import { addSong, fetchSongs } from '../../redux/actions/songActions'; // Asegúrate de que esta es la ruta correcta a tus acciones de Redux
import { useNavigate } from 'react-router-dom';

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-800 to-purple-900">
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center w-full max-w-md">
            {error && <div className="text-red-500 text-sm">{error}</div>}
                {!showForm && (
                <>    
                <h1 className="text-4xl font-bold mb-4 text-blue-700">Canciones disponibles actualmente</h1>
                <table className="w-full mb-4">
                    <thead>
                        <tr>
                        <th className="border-b-2 p-2">Nombre de la canción</th>
                        <th className="border-b-2 p-2">Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => (
                        <tr key={song.id}>
                            <td className="border-b p-2">{song.name}</td>
                            <td className="border-b p-2">{song.author}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    <button className="w-full p-2 bg-gradient-to-b from-purple-800 to-purple-900 text-white rounded mb-4" onClick={() => setShowForm(true)}>Añadir Canción</button>
                </>
                )}
                
                {showForm && (
                   <div>
                        <p className="text-gray-700 text-lg mb-4">En el siguiente formulario podras añadir una cancion a la base de datos de MusicWiki</p>
                        <AddSongForm onSubmit={handleAddSong} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SongPage;
