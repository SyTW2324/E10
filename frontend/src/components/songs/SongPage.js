import React, { useEffect, useState } from 'react';
import AddSongForm from './songs.component';
import { useSelector, useDispatch } from 'react-redux';
import { addSong, fetchSongs, updateSongLyrics } from '../../redux/actions/songActions';
import { useNavigate } from 'react-router-dom';

const SongPage = () => {
    const songs = useSelector(state => state.song.songs);
    const dispatch = useDispatch();
    const error = useSelector(state => state.song.error);
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);
    const [showForm, setShowForm] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);
    const [lyrics, setLyrics] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        dispatch(fetchSongs());
        const intervalId = setInterval(() => {
            dispatch(fetchSongs());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [dispatch]);

    const handleAddSong = (song) => {
        dispatch(addSong(song));
        setShowForm(false);
    };

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleSongClick = (song) => {
        setSelectedSong(song);
        setLyrics(song.lyrics || '');
    };

    const handleUpdateLyrics = async () => {
        try {
            await dispatch(updateSongLyrics({ id: selectedSong._id, lyrics })).unwrap();
            setMessage('Letra actualizada con éxito');
        } catch (error) {
            setMessage('Error al actualizar la letra');
        }
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
            <div className="max-w-4xl w-full space-y-8 bg-gray-900 p-8 rounded shadow-md text-center">
                {error && <div className="text-red-500 text-sm">{error}</div>}
                {!showForm && (
                    <>
                        <h1 className="text-4xl font-bold mb-4 text-blue-700">Canciones disponibles actualmente</h1>
                        <table className="w-full mb-4 table-auto">
                            <thead>
                                <tr>
                                    <th className="border-b-2 p-2 text-blue-500">Nombre de la canción</th>
                                    <th className="border-b-2 p-2 text-blue-500">Autor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {songs.map((song) => (
                                    <tr key={song.id} onClick={() => handleSongClick(song)} className="cursor-pointer hover:bg-gray-100">
                                        <td className="border-b p-2 text-blue-500 hover:underline">{song.name}</td>
                                        <td className="border-b p-2 text-blue-500">{song.author}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="w-full py-2 px-4 bg-gradient-to-b from-purple-800 to-purple-900 text-white rounded-md hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" onClick={() => setShowForm(true)}>Añadir Canción</button>
                    </>
                )}
                {showForm && (
                    <div>
                        <p className="text-gray-300 text-lg mb-4">En el siguiente formulario podrás añadir una canción a la base de datos de MusicWiki</p>
                        <AddSongForm onSubmit={handleAddSong} />
                    </div>
                )}
                {selectedSong && (
                    <div className="mt-4 p-4 border-t border-gray-300 w-full text-left">
                        <h2 className="text-2xl font-bold mb-2">Detalles de la canción</h2>
                        <p><strong>Nombre:</strong> {selectedSong.name}</p>
                        <p><strong>Autor:</strong> {selectedSong.author}</p>
                        <p><strong>Duración:</strong> {selectedSong.duration} minutos</p>
                        <p><strong>Géneros:</strong> {selectedSong.genres}</p>
                        <p><strong>Reproducciones:</strong> {selectedSong.reproductions}</p>
                        <p><strong>Single:</strong> {selectedSong.single ? 'Sí' : 'No'}</p>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                            rows="4"
                            value={lyrics}
                            onChange={(e) => setLyrics(e.target.value)}
                            placeholder="Añadir letra de la canción aquí"
                        ></textarea>
                        <button className="mt-2 py-2 px-4 bg-gradient-to-b from-purple-800 to-purple-900 text-white rounded-md hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" onClick={handleUpdateLyrics}>Guardar Letra</button>
                        <button className="mt-2 py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={() => setSelectedSong(null)}>Cerrar</button>
                        {message && <p className={`mt-2 text-sm ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SongPage;
