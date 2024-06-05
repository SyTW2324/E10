const { Song } = require("./song");


const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: Array, required: true },
  duration: { type: Number, required: true },
  genres: { type: Array, required: true },
  songList: { type: Array, required: true}
});

module.exports = mongoose.model('Song', SongSchema);


/**
 * Clase encargada de definir el funcionamiento de una lista de reproducción de diversas canciones (Playlist) de una plataforma digital.
 */
class Playlist {
  /**
   * Constructor de la clase Playlist que define el funcionamiento de una lista de reproducción.
   * @param {string} name Nombre de la playlist.
   * @param {Array} songList Lista de canciones que componen la playlist.
   * @param {number} duration Duración total de la playlist en horas y minutos.
   * @param {Array} genres Géneros musicales que se incluyen dentro de la playlist.
   
  constructor(name, songList, duration, genres) {
    this.name = name;
    this.songList = songList;
    this.duration = duration;
    this.genres = genres;
  }

  /**
  * Método encargado de obtener la lista de canciones de la playlist.
  * @returns {Array} devuelve el atributo asociado a la lista de canciones de la playlist.
  */
  getSongs() {
    return this.songList;
  }

  /**
  * Método que se encarga de obtener el nombre de una canción del array de canciones.
  * @returns {string} devuelve el nombre de una canción de todas las que recoge la lista.
  
  getNameSong() {
    for (let i = 0; i < this.songList.length; i++) {
      return this.songList[i].getName();
    }
    return "No existe ningún nombre";
  }

  /**
  * Método encargado de obtener el nombre de los artistas de las canciones de la playlist.
  * @returns {string} devuelve el autor de la lista de canciones.
  
  getArtistSong() {
    for (let i = 0; i < this.songList.length; i++) {
      return this.songList[i].getAutor();
    }
    return "No existe ningún Artista o Grupo asociado";
  }

  /**
  * Método encargado de obtener la duración de las canciones que hay en la playlist.
  * @returns {number} devuelve la duración de las canciones de la Playlist.
  
  getDurationSong() {
    for (let i = 0; i < this.songList.length; i++) {
      return this.songList[i].getDuration();
    }
    return -1;
  }

  /**
  * Método encargado de obtener los géneros de las canciones de la playlist.
  * @returns {string} obtiene el género de las canciones de la playlist.
  
  getGenrePlaylist() {
    for (let i = 0; i < this.songList.length; i++) {
      return this.songList[i].getGenres();
    }
    return "No existe Género";
  }

  /**
  * Método que devuelve la duración total de la playlist.
  * @returns {number} devuelve la duración.
  
  getDuration() {
    return this.duration;
  }

  /**
  * Método que devuelve los géneros de las songList de la playlist.
  * @returns {Array} devuelve los géneros de la playlist.
  
  getGenres() {
    return this.genres;
  }

  /**
  * Método que devuelve el nombre de la playlist.
  * @returns {string} devuelve el nombre de la playlist.
  
  getName() {
    return this.name;
  }

  /**
  * Establece un array de canciones al array de canciones de una playlist.
  * @param {Array} newItem nuevo conjunto de canciones que pertenecerán a una playlist.
  
  setPlaylistSong(newItem) {
    this.songList = newItem;
  }
}

module.exports = { Playlist };*/
