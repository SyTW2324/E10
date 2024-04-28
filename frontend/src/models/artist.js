// artist.js
import { Song } from './song'
import { genreInfo } from './song'

/**
 * Clase encargada de especificar a los diferentes músicos o artistas que han compuesto una canción.
 */
class Artist {
  /**
   * Constructor de la entidad Artistas dentro del sistema.
   * @param {string} name - Nombre del artista.
   * @param {genreInfo[]} genres - Géneros en los que suele trabajar el artista.
   * @param {Song[]} songList - Lista de las canciones que ha publicado un artista.
   * @param {number} listenerMensual - Cantidad de oyentes mensuales de un artista.
   */
  constructor(name, songList, listenerMensual) {
    this.name = name
    //this.genres = genres;
    this.songList = songList
    this.listenerMensual = listenerMensual
  }

  /**
   * Método encargado de devolver el nombre del artista.
   * @returns {string} - Devuelve el nombre del artista.
   */
  getName() {
    return this.name
  }

  /**
   * Método que devuelve los géneros musicales relacionados.
   * @returns {genreInfo[]} - Devuelve el género musical relacionado a ese artista.
   
  getGenre() {
    return this.genres;
  }*/

  /**
   * Método encargado de devolver todas las canciones que tiene un artista.
   * @returns {Song[]} - Devuelve las canciones que ha lanzado el artista.
   */
  getSongList() {
    return this.songList
  }

  /**
   * Método que visualiza la cantidad de oyentes mensuales que tiene un artista.
   * @returns {number} - Devuelve la cantidad numérica de oyentes mensuales de un artista.
   */
  getOyentesMensual() {
    return this.listenerMensual
  }

  /**
   * Método encargado de obtener los oyentes mensuales de un artista.
   * @returns {number} - Devuelve los oyentes mensuales de un artista.
   */
  getListeners() {
    return this.listenerMensual
  }

  /**
   * Función que calcula la cantidad de oyentes mensuales totales en base al trabajo individual.
   * @returns {number} - Devuelve la suma del trabajo individual más la cantidad de oyentes mensuales.
   */
  calOyentes() {
    let result = 0
    if (this.songList.length > 0) {
      this.songList.forEach((song) => {
        result += song.getListener()
      })
    }
    return result
  }

  /**
   * Método que establece un nuevo nombre a un artista.
   * @param {string} newName - Nuevo nombre que se le quiere asociar a un artista.
   */
  setName(newName) {
    this.name = newName
  }
}

export default Artist
