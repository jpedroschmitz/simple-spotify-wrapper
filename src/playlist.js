export default function playlists() {
  return {
    getMyPlaylists: () => this.request(`${this.apiURL}me/playlists`),
    getPlaylistTracks: playlistId => this.request(`${this.apiURL}playlists/${playlistId}/tracks`),
    getPlaylist: playlistId => this.request(`${this.apiURL}playlists/${playlistId}`),
    getUserPlaylists: userId => this.request(`${this.apiURL}users/${userId}/playlists`),
  };
}
