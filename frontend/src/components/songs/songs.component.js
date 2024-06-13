import React, { useState } from 'react';
import * as Yup from 'yup';

const AddSongForm = (props) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [duration, setDuration] = useState('');
  const [genres, setGenres] = useState('');
  const [single, setSingle] = useState(false);
  const [reproductions, setReproductions] = useState('');

  const songSchema = Yup.object().shape({
    name: Yup.string().required('El nombre de la canción es requerido'),
    author: Yup.string().required('El autor de la canción es requerido'),
    duration: Yup.number().required('La duración de la canción es requerida'),
    genres: Yup.string().required('El género de la canción es requerido'),
    single: Yup.boolean(),
    reproductions: Yup.number().integer('Las reproducciones debe ser un número entero').required('Las reproducciones es requerido'),
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const song = {
        name,
        author,
        duration: Number(duration),
        genres,
        single,
        reproductions: Number(reproductions)
      };
      await songSchema.validate(song);
      props.onSubmit(song);
      setName('');
      setAuthor('');
      setDuration('');
      setGenres('');
      setSingle(false);
      setReproductions('');
    } catch (error) {
      console.log(error);
      // TODO: Show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 bg-tropical-indigo p-4 rounded-lg text-black">
      <input type="text" className="form-input mb-2 p-2 rounded border border-gray-300" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" className="form-input mb-2 p-2 rounded border border-gray-300" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <input type="number" className="form-input mb-2 p-2 rounded border border-gray-300" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" required />
      <input type="text" className="form-input mb-2 p-2 rounded border border-gray-300" value={genres} onChange={(e) => setGenres(e.target.value)} placeholder="Genres" required />
      <input type="number" className="form-input mb-2 p-2 rounded border border-gray-300" value={reproductions} onChange={(e) => setReproductions(e.target.value)} placeholder="Reproductions" required />
      <div className="flex items-center justify-center space-x-2">
        <label className="mr-2">Single</label>
        <input type="checkbox" checked={single} onChange={(e) => setSingle(e.target.checked)} />
      </div>
      <div className="h-6"></div>
      <button type="submit" className="mt-4 py-2 px-4 bg-ultra hover:bg-ultra-violet text-lavender-web rounded-lg transition duration-200 ease-in-out">Añadir Cancion</button>
    </form>
  );
}

export default AddSongForm;
