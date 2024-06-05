import React, { useState } from 'react';
import * as Yup from 'yup';

// queda pendiente arreglar el formato del componente y controlar que los datos sean correctos

const AddSongForm = (props) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [duration, setDuration] = useState(1);
  const [genres, setGenres] = useState('');
  const [single, setSingle] = useState(false);
  const [reproductions, setReproductions] = useState(1);
  
  const songSchema = Yup.object().shape({
    name: Yup.string().required('El nombre de la canción es requerido'),
    author: Yup.string().required('El autor de la canción es requerido'),
    duration: Yup.number().required('La duración de la canción es requerida'),
    genres: Yup.string().required('El género de la canción es requerido'),
    single: Yup.boolean(),
    reproductions: Yup.number().integer('Las reproducciones deben ser un número entero'),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const song = {
        name,
        author,
        duration: Number(duration),
        genres,
        single,
        reproductions: Number(reproductions),
      };
      await songSchema.validate(song);
      props.onSubmit(song);
      setName('');
      setAuthor('');
      setDuration(1);
      setGenres('');
      setSingle(false);
      setReproductions(1);
    } catch (error) {
      console.log(error);
      // TODO: Show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-around h-full">
      <label className="mb-2">
        <span className="block text-gray-700">Name</span>
        <input 
          type="text" 
          className="form-group-input border rounded p-2 w-full" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name" 
          required 
        />
      </label>
      <label className="mb-2">
        <span className="block text-gray-700">Author</span>
        <input 
          type="text" 
          className="form-group-input border rounded p-2 w-full" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          placeholder="Author" 
          required 
        />
      </label>
      <label className="mb-2">
        <span className="block text-gray-700">Duration</span>
        <input 
          type="number" 
          className="form-group-input border rounded p-2 w-full" 
          value={duration} 
          onChange={(e) => setDuration(e.target.value)} 
          placeholder="Duration" 
          required 
        />
      </label>
      <label className="mb-2">
        <span className="block text-gray-700">Genres</span>
        <input 
          type="text" 
          className="form-group-input border rounded p-2 w-full" 
          value={genres} 
          onChange={(e) => setGenres(e.target.value)} 
          placeholder="Genres" 
          required 
        />
      </label>
      <label className="flex items-center mb-2">
        <span className="text-gray-700 mr-2">Single</span>
        <input 
          type="checkbox" 
          checked={single} 
          onChange={(e) => setSingle(e.target.checked)} 
        />
      </label>
      <label className="mb-2">
        <span className="block text-gray-700">Reproductions</span>
        <input 
          type="number" 
          className="form-group-input border rounded p-2 w-full" 
          value={reproductions} 
          onChange={(e) => setReproductions(e.target.value)} 
          placeholder="Reproductions" 
          required 
        />
      </label>
      <button type="submit" className="form-group-button bg-blue-500 text-white p-2 rounded">Add Song</button>
    </form>
  );
}

export default AddSongForm;
