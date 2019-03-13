import API_URL from '../data/config';
import toJSON from './utils';

const search = (query, type) => fetch(`${API_URL}search?q=${query}&type=${type}`).then(toJSON);
const searchArtists = query => search(query, 'artist');
const searchAlbums = query => search(query, 'album');
const searchTracks = query => search(query, 'track');
const searchPlaylists = query => search(query, 'playlist');

export {
  search,
  searchArtists,
  searchAlbums,
  searchTracks,
  searchPlaylists,
};
