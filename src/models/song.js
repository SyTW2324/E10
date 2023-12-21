// song.js
/**
 * Clase encargada de representar una Canción en el sistema, el cual es una cantidad de atributos definidos.
 */
class Song {
  /**
   * Constructor de una canción en el sistema.
   * @param {string} name - Título de la canción.
   * @param {String[]} author - Autor de la canción.
   * @param {number} duration - Tiempo de duración de la canción musical.
   * @param {genreInfo[]} genres - Género en el que se engloba la canción.
   * @param {boolean} single - Flag que determina si fue un single o es lanzado en un álbum.
   * @param {number} reproductions - Número total de reproducciones de esta canción.
   * @param {number} listener - Oyentes de la canción.
   */
  constructor(name, author, duration, single, reproductions, listener) {
    this.author = author
    this.duration = this.isFormat(duration)
    //this.genres = genres;
    this.name = name
    this.reproductions = reproductions
    this.single = single
    this.listener = listener
  }

  /**
   * Método encargado de obtener el título de una canción.
   * @returns {string} - Devuelve el título de una canción.
   */
  getName() {
    return this.name
  }

  /**
   * Método encargado de obtener los oyentes de una canción.
   * @returns {number} - Devuelve los oyentes de una canción.
   */
  getListener() {
    return this.listener
  }

  /**
   * Método que obtiene el autor de la canción ya sea un artista.
   * @returns {String[]} - Devuelve un array de strings que ha compuesto la canción.
   */
  getAutor() {
    return this.author
  }

  /**
   * Método que obtiene la duración de la canción.
   * @returns {number} - Devuelve la duración total de la canción.
   */
  getDuration() {
    return this.duration
  }

  /**
   * Método que obtiene el atributo encargado de definir el género de una canción.
   * @returns {genreInfo[]} - Devuelve el género en el que se engloba una canción.
   */
  /**getGenres() {
      return this.genres;
    }
    */
  /**
   * Método que obtiene el número total de reproducciones de una canción.
   * @returns {number} - El número total de reproducciones de la canción.
   */
  getReproducciones() {
    return this.reproductions
  }

  /**
   * Método encargado de determinar si fue un single o no.
   * @returns {boolean} - Devuelve un flag que determina si es un single (true) o no (false).
   */
  getSingle() {
    return this.single
  }

  /**
   * Método que convierte un número al formato XX.XX.
   * @param {number} numero - Número en formato.
   * @returns {number} - Devuelve el número en formato de minutos y segundos.
   */
  isFormat(numero) {
    let numberFormat
    const RE = /^\d*(\.\d{1})?\d{0,1}$/
    const stringNumber = numero.toString()
    if (RE.test(stringNumber)) {
      numberFormat = numero
    } else {
      numberFormat = NaN
    }
    return numberFormat
  }
}

export default Song
