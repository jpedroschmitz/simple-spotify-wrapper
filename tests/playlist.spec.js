/* eslint-disable */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Playlists', () => {

  let spotify;
  let stubedFetch;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({
      json: () => {
        JSON.stringify({ playlists: 'name' });
      }
    });
  });

  afterEach( () => {
    stubedFetch.restore();
  });

  describe('Smoke Tests', () => {
    it('should exist the spotify.playlist.getMyPlaylists method', () => {
      expect(spotify.playlist.getMyPlaylists).to.exist;
    });

    it('should exist the spotify.playlist.getPlaylistTracks method', () => {
      expect(spotify.playlist.getPlaylistTracks).to.exist;
    });

    it('should exist the spotify.playlist.getPlaylist method', () => {
      expect(spotify.playlist.getPlaylist).to.exist;
    });

    it('should exist the spotify.playlist.getUserPlaylists method', () => {
      expect(spotify.playlist.getUserPlaylists).to.exist;
    });
  });

  describe('spotify.playlist.getMyPlaylists method', () => {
    it('should call the fetch function', () => {
      const playlists = spotify.playlist.getMyPlaylists();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = spotify.playlist.getMyPlaylists();
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/me/playlists');
    });

    it('should return the correct data from Promise', () => {
      const playlists = spotify.playlist.getMyPlaylists();
      playlists
        .then(data => expect(data).to.be.eql({ playlists: 'name' }))
        .catch(err => new Error(err));
    });
  });

  describe('spotify.playlist.getPlaylistTracks method', () => {
    it('should call the fetch function', () => {
      const playlists = spotify.playlist.getPlaylistTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = spotify.playlist.getPlaylistTracks('3cEYpjA9oz9GiPac4AsH4n');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks');
    });

    it('should return the correct data from Promise', () => {
      const playlists = spotify.playlist.getPlaylistTracks('3cEYpjA9oz9GiPac4AsH4n');
      playlists
        .then(data => expect(data).to.be.eql({ playlists: 'name' }))
        .catch(err => new Error(err));
    });
  });

  describe('spotify.playlist.getPlaylist method', () => {
    it('should call the fetch function', () => {
      const playlists = spotify.playlist.getPlaylist();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = spotify.playlist.getPlaylist('3cEYpjA9oz9GiPac4AsH4n');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n');
    });

    it('should return the correct data from Promise', () => {
      const playlists = spotify.playlist.getPlaylist('3cEYpjA9oz9GiPac4AsH4n');
      playlists
        .then(data => expect(data).to.be.eql({ playlists: 'name' }))
        .catch(err => new Error(err));
    });
  });

  describe('spotify.playlist.getUserPlaylists method', () => {
    it('should call the fetch function', () => {
      const playlists = spotify.playlist.getUserPlaylists();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = spotify.playlist.getUserPlaylists('jpedroschmitz');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/users/jpedroschmitz/playlists');
    });

    it('should return the correct data from Promise', () => {
      const playlists = spotify.playlist.getPlaylist('jpedroschmitz');
      playlists
        .then(data => expect(data).to.be.eql({ playlists: 'name' }))
        .catch(err => new Error(err));
    });
  });
});
