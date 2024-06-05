import React, { useState } from 'react';
import * as Yup from 'yup'

//queda pendiente arreglar el formato del componente y controlar que los datos sean correctos

const AddSongForm = (props) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [duration, setDuration] = useState(1);
  const [genres, setGenres] = useState('');
  const [single, setSingle] = useState(false);
  const [reproductions, setReproductions] = useState(1);
  const [listener, setListener] = useState(1);
  
  const songSchema = Yup.object().shape({
    name: Yup.string().required('El nombre de la canción es requerido'),
    author: Yup.string().required('El autor de la canción es requerido'),
    duration: Yup.number().required('La duración de la canción es requerida'),
    genres: Yup.string().required('El género de la canción es requerido'),
    single: Yup.boolean(),
    reproductions: Yup.number().integer('Las reproducciones debe ser un número entero'),
    listener: Yup.number().integer('Los oyentes debe ser un número entero'),
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
        reproductions: Number(reproductions),
        listener: Number(listener)
      };
      await songSchema.validate(song);
      props.onSubmit(song);
      setName('');
      setAuthor('');
      setDuration('');
      setGenres('');
      setSingle(false);
      setReproductions('');
      setListener('');
    } catch (error) {
      console.log(error);
      // TODO: Show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column',justifyContent: 'space-around', height: '100%'}}>
      <input type="text" className='form-group-input' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" className='form-group-input' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <input type="number" className='form-group-input' value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" required />
      <input type="text" className='form-group-input' value={genres} onChange={(e) => setGenres(e.target.value)} placeholder="Genres" required />
      <label style={{paddingRight: '0px'}}>
        Single
        <input type="checkbox" checked={single} onChange={(e) => setSingle(e.target.checked)} />
      </label>
      <input type="number" className='form-group-input' value={reproductions} onChange={(e) => setReproductions(e.target.value)} placeholder="Reproductions" required />
      <input type="number" className='form-group-input' value={listener} onChange={(e) => setListener(e.target.value)} placeholder="Listener" required />
      <button type="submit" className="form-group-button">Add Song</button>
    </form>
  );
}

export default AddSongForm;