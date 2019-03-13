import API_URL from '../data/config';
import toJSON from './utils';

const getAlbum = id => fetch(`${API_URL}albums/${id}`).then(toJSON);
const getAlbums = ids => fetch(`${API_URL}albums/?ids=${ids}`).then(toJSON);
const getAlbumTracks = id => fetch(`${API_URL}albums/${id}/tracks`).then(toJSON);

export {
  getAlbum,
  getAlbums,
  getAlbumTracks,
};
