/* eslint-disable */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('SpotifyWrapper Library', () => {

  it('should create an instance of SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    let spotify = new SpotifyWrapper({
      apiURL: 'blabla'
    });

    expect(spotify.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    let spotify = new SpotifyWrapper({});

    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1/');
  });

  it('should receive token as an option', () => {
    let spotify = new SpotifyWrapper({
      token: 'foo'
    });

    expect(spotify.token).to.be.equal('foo');
  });

  describe('request method', () => {
    let stubedFetch;

    beforeEach( () => {
      stubedFetch = sinon.stub(global, 'fetch');
      stubedFetch.resolves({ json: () => {} });
    });

    afterEach( () => {
      stubedFetch.restore();
    });

    it('should exist the request method', () => {
      let spotify = new SpotifyWrapper({ });
      expect(spotify.request).to.exist;
    });

    it('should call fetch function', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      spotify.request('url');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      spotify.request('url');
      expect(stubedFetch).to.have.been.calledWith('url');
    });

    it('should call fetch with the correct header', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      const headers = {
        headers: {
          Authorization: `'Bearer foo'`,
        },
      };
      spotify.request('url');

      expect(stubedFetch).to.have.been.calledWith('url', headers);
    });
  });
});
