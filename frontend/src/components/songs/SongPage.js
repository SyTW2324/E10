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
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [dispatch]);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleAddSong = (song) => {
        dispatch(addSong(song));
        setShowForm(false);
    };

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-lavender-web text-lavender-web">
            <div className="max-w-4xl w-full p-5 rounded-lg shadow-lg text-center bg-tropical-indigo text-lavender-web">
                <h1 className="text-3xl font-bold mb-4 text-ultra-violet">
                    {showForm ? "Agregar Canción" : "Canciones disponibles actualmente"}
                </h1>
                {error && <div className="text-cardinal">{error}</div>}
                {!showForm && (
                    <>
                        <table className="w-full mb-2 text-left text-lavender-web">
                            <thead>
                                <tr>
                                    <th className="px-1 text-ultra-violet">Nombre de la canción</th>
                                    <th className="px-1 text-ultra-violet">Autor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {songs.map((song) => (
                                    <tr key={song.id} onClick={() => handleSongClick(song)} className="cursor-pointer hover:bg-ultra">
                                        <td className="px-1">{song.name}</td>
                                        <td className="px-1">{song.author}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button onClick={() => setShowForm(true)} className="py-2 px-4 bg-ultra hover:bg-ultra-violet text-lavander-web rounded-lg transition duration-200 ease-in-out">Añadir Canción</button>
                    </>
                )}
                {showForm && (
                    <AddSongForm onSubmit={handleAddSong} />
                )}
                {selectedSong && (
                    <div className="p-2">
                        <div className="h-4"></div>
                        <h2 className="text-2xl font-bold mb-1 text-ultra-violet">Detalles de la canción</h2>
                        <p><strong className="text-ultra-violet">Nombre:</strong> {selectedSong.name}</p>
                        <p><strong className="text-ultra-violet">Autor:</strong> {selectedSong.author}</p>
                        <p><strong className="text-ultra-violet">Duración:</strong> {selectedSong.duration} minutos</p>
                        <p><strong className="text-ultra-violet">Géneros:</strong> {selectedSong.genres}</p>
                        <p><strong className="text-ultra-violet">Reproducciones:</strong> {selectedSong.reproductions}</p>
                        <p><strong className="text-ultra-violet">Single:</strong> {selectedSong.single ? 'Sí' : 'No'}</p>
                        <div className="h-4"></div>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded bg-lavender-web text-black"
                            rows="4"
                            value={lyrics}
                            onChange={(e) => setLyrics(e.target.value)}
                            placeholder="Añadir letra de la canción aquí"
                        ></textarea>
                        <button className="mt-2 py-2 px-4 bg-ultra hover:bg-ultra-violet text-lavander-web rounded-lg transition duration-200 ease-in-out mr-4" onClick={handleUpdateLyrics}>Guardar Letra</button>
                        <button className="mt-2 py-2 px-4 bg-ultra hover:bg-ultra-violet text-lavander-web rounded-lg transition duration-200 ease-in-out" onClick={() => setSelectedSong(null)}>Cerrar</button>
                        {message && <p className={`mt-2 text-sm ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SongPage;
