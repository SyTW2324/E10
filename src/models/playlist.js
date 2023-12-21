// playlist.js
import { Song } from './song'
//import { genreInfo } from "./song";

/**
 * Clase encargada de definir el funcionamiento de una lista de reproducción de diversas canciones (Playlist) de una plataforma digital.
 */
class Playlist {
  /**
   * Constructor de la clase Playlist que define el funcionamiento de una lista de reproducción.
   * @param {string} name - Nombre de la playlist.
   * @param {Song[]} songList - Lista de canciones que componen la playlist.
   * @param {number} duration - Duración total de la playlist en horas y minutos.
   * @param {genreInfo[]} genres - Géneros musicales que se incluyen dentro de la playlist.
   */
  constructor(name, songList, duration) {
    this.songList = songList
    this.duration = duration
    //this.genres = genres;
    this.name = name
  }

  /**
   * Método encargado de obtener la lista de canciones de la playlist.
   * @returns {Song[]} - Devuelve el atributo asociado a la lista de canciones de la playlist.
   */
  getSongs() {
    return this.songList
  }

  /**
   * Método que se encarga de obtener el nombre de una canción del array de canciones.
   * @returns {string} - Devuelve el nombre de una canción de todas las que recoge la lista.
   */
  getNameSong() {
    this.songList.forEach((item) => {
      return item.getName()
    })
    return 'No existe ningún nombre'
  }

  /**
   * Método encargado de obtener el nombre de los artistas de las canciones de la playlist.
   * @returns {string} - Devuelve el autor de la lista de canciones.
   */
  getArtistSong() {
    this.songList.forEach((item) => {
      return item.getAutor()
    })
    return 'No existe ningún Artista o Grupo asociado'
  }

  /**
   * Método encargado de obtener la duración de las canciones que hay en las playlist.
   * @returns {number} - Devuelve la duración de las canciones de la Playlist.
   */
  getDurationSong() {
    this.songList.forEach((item) => {
      return item.getDuration()
    })
    return -1
  }

  /**
  * Método encargado de obtener los géneros de las canciones de la playlist.
  * @returns {string} - Obtiene el género de las canciones de la playlist.
  
  getGenrePlaylist() {
    this.songList.forEach((item) => {
      return item.getGenres();
    });
    return "No existe Género";
  }*/

  /**
   * Método que devuelve la duración total de la playlist.
   * @returns {number} - Devuelve la duración.
   */
  getDuration() {
    return this.duration
  }

  /**
  * Método que devuelve los géneros de las songList de la playlist.
  * @returns {genreInfo[]} - Devuelve los géneros de la playlist.
  
  getGenres() {
    return this.genres;
  }*/

  /**
   * Método que devuelve el nombre de la playlist.
   * @returns {string} - Devuelve el nombre de la playlist.
   */
  getName() {
    return this.name
  }

  /**
   * Establece un array de canciones al array de canciones de una playlist.
   * @param {Song[]} newItem - Nuevo conjunto de canciones que pertenecerán a una playlist.
   */
  setPlaylistSong(newItem) {
    this.songList = newItem
  }
}

export default Playlist
