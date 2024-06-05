import {React} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const user = useSelector(state => state.user.user);
    const navigate = useNavigate();
  
  
    const navigateMusic = () => {
      navigate('/songs');
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{ background: 'linear-gradient(#2a00b7, #42006c)'}}>
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">Bienvenido a MusicWiki</h1>
                <p className="text-gray-700 text-lg">
                    Explora un vasto mundo de información sobre tus canciones y artistas favoritos. En MusicWiki, encontrarás detalles sobre la historia, las letras y el significado detrás de las canciones que amas. Únete a nuestra comunidad para descubrir nuevas músicas, aprender sobre tus artistas favoritos y compartir tus propios descubrimientos musicales. ¡Sumérgete en el universo musical con nosotros!
                </p>
                {user && (
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue -700" onClick={navigateMusic}> Ir a la página de canciones </button>
                )}
            </div>
        </div>
    );
};

export default Home;
