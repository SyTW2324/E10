// music.service.ts

import { Injectable } from '@angular/core';
import { Song } from './song';
import { Playlist } from './playlist';
import { Artist } from './artist';
import { genreInfo } from './song';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private songs: Song[] = [];
  private playlists: Playlist[] = [];
  private artists: Artist[] = [];

  constructor() {
    // Puedes inicializar canciones, listas de reproducción y artistas aquí si es necesario
  }

  // Métodos relacionados con canciones

  getAllSongs(): Song[] {
    return this.songs;
  }

  getSongByName(songName: string): Song | undefined {
    return this.songs.find((song) => song.getName() === songName);
  }

  // Métodos relacionados con listas de reproducción

  getAllPlaylists(): Playlist[] {
    return this.playlists;
  }

  getPlaylistByName(playlistName: string): Playlist | undefined {
    return this.playlists.find((playlist) => playlist.getName() === playlistName);
  }

  // Métodos relacionados con artistas

  getAllArtists(): Artist[] {
    return this.artists;
  }

  getArtistByName(artistName: string): Artist | undefined {
    return this.artists.find((artist) => artist.getName() === artistName);
  }

  // Otros métodos útiles

  getPopularSongs(): Song[] {
    // Implementa la lógica para obtener las canciones más populares
    // Puedes ordenar this.songs según el número de reproducciones, por ejemplo
    return this.songs;
  }

  // Puedes agregar más métodos según las necesidades de tu aplicación
}
