/* eslint-disable */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {

  let spotify;
  let stubedFetch;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({
      json: () => {
        JSON.stringify({ album: 'name' });
      }
    });
  });

  afterEach( () => {
    stubedFetch.restore();
  });

  describe('Smoke Tests', () => {
    it('should exist the spotify.album.getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should exist the spotify.album.getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it('should exist the spotify.album.getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('spotify.album.getAlbum method', () => {
    it('should call fetch function', () => {
      const album = spotify.album.getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      const album2 = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk')
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });

    it('should return the correct data from Promise', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      album
        .then(data => expect(data).to.be.eql({ album: 'name' }))
        .catch(err => new Error(err));
    });
  });

  describe('spotify.album.getAlbums method', () => {
    it('should call fetch function', () => {
      const albums = spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
    });

    it('should return the correct data from Promise', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      albums
        .then(data => expect(data).to.be.eql({ album: 'name' }))
        .catch(err => new Error(err));
    });
  });

  describe('spotify.album.getTracks method', () => {
    it('should call fetch function', () => {
      const tracks = spotify.album.getTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('should return the correct data from Promise', () => {
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      tracks
        .then(data => expect(data).to.be.eql({ album: 'name' }))
        .catch(err => new Error(err));
    });
  });
});
