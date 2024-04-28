/**
 * Objeto genreInfo que define los diferentes géneros reconocidos dentro del sistema.
 */
const genreInfo = ['CLASICA', 'ROCK', 'HIP-HOP', 'REGGEATON', 'POP', 'TRAP', 'PUNK', 'K-POP', 'METAL', 'CUMBIA', 'BLUES', 'JAZZ', 'COUNTRY', 'EDM', 'FLAMENCO', 'SALSA', 'REGGAE', 'GOSPEL', 'DISCO', 'BANDA SONORA', 'ALTERNATIVO', 'ELECTROPOP', 'SOUL', 'R&B', 'RAP', 'INDIE'];

/**
 * Clase encargada de representar una Canción en el sistema, el cual es una cantidad de atributos definidos.
 */
class Song {
  /**
   * Constructor de una canción en el sistema.
   * @param {string} name título de la canción.
   * @param {Array} author autor de la canción.
   * @param {number} duration tiempo de duración de la canción musical.
   * @param {Array} genres género en el que se engloba la canción.
   * @param {boolean} single flag que determina si fue un single o es lanzado en un álbum.
   * @param {number} reproductions número total de reproducciones de esta canción.
   * @param {number} listener oyentes de la canción.
   */
  constructor(name, author, duration, genres, single, reproductions, listener) {
    this.name = name;
    this.author = author;
    this.duration = this.isFormat(duration);
    this.genres = genres;
    this.single = single;
    this.reproductions = reproductions;
    this.listener = listener;
  }

  /**
   * Método encargado de obtener el título de una canción.
   * @returns {string} devuelve el título de una canción.
   */
  getName() {
    return this.name;
  }

  /**
   * Método encargado de obtener los oyentes de una canción.
   * @returns {number} devuelve los oyentes de una canción.
   */
  getListener() {
    return this.listener;
  }

  /**
   * Método que obtiene el autor de la canción ya sea un artista.
   * @returns {Array} devuelve un array de string que ha compuesto la canción.
   */
  getAutor() {
    return this.author;
  }

  /**
   * Método que obtiene la duración de la canción.
   * @returns {number} devuelve la duración total de la canción.
   */
  getDuration() {
    return this.duration;
  }

  /**
   * Método que obtiene el atributo encargado de definir el género de una canción.
   * @returns {Array} devuelve el género en el que se engloba una canción.
   */
  getGenres() {
    return this.genres;
  }

  /**
   * Método que obtiene el número total de reproducciones de una canción.
   * @returns {number} el número total de reproducciones de la canción.
   */
  getReproducciones() {
    return this.reproductions;
  }

  /**
   * Método encargado de determinar si fue un single o no.
   * @returns {boolean} devuelve un flag que determina si es un single (true) o no (false).
   */
  getSingle() {
    return this.single;
  }

  /**
   * Método que convierte un número al formato XX.XX.
   * @param {number} numero número en formato.
   * @returns {number} devuelve el número en formato de minutos y segundos.
   */
  isFormat(numero) {
    let numberFormat;
    const RE = /^\d*(\.\d{1})?\d{0,1}$/;
    const stringNumber = numero.toString();
    if (RE.test(stringNumber)) {
      numberFormat = numero;
    } else {
      numberFormat = NaN;
    }
    return numberFormat;
  }
}

module.exports = { Song, genreInfo };
