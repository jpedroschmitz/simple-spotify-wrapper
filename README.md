# Simple Spotify Wrapper

[![Build Status](https://travis-ci.org/jpedroschmitz/simple-spotify-wrapper.svg?branch=master)](https://travis-ci.org/jpedroschmitz/simple-spotify-wrapper) [![Coverage Status](https://coveralls.io/repos/github/jpedroschmitz/spotify-wrapper/badge.svg?branch=master)](https://coveralls.io/github/jpedroschmitz/spotify-wrapper?branch=master)

A small and awesome wrapper to get general information from the [Spotify Web API](https://developer.spotify.com/documentation/web-api/).


## Installation

You can install the library using `npm`:

```sh
$ npm i simple-spotify-wrapper
```

or using `yarn`:

```sh
$ yarn add simple-spotify-wrapper
```

## How to use

### ES6

```js
// import the library
import SpotifyWrapper from 'simple-spotify-wrapper';

// create a instance
const spotify = new SpotifyWrapper({
  token: 'PUT YOUR TOKEN HERE'
});

const albums = spotify.search.albums('Choose your artist');
albums.then(data => console.log(data.albums));
```

### CommonJS

```js
var spotifyWrapper = require('spotify-wrapper');
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="spotify-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `SpotifyWrapper`. Check this example:

```js
const spotify = new SpotifyWrapper({
    token: 'PUT YOUR TOKEN HERE'
});
const albums = spotify.search.albums('Choose your artist');
albums.then(data => console.log(data.albums.items));
```

## Methods

*Observation: In the next few weeks I plan to realese a new version that covers all GET methods from artists, playlists and tracks.*

Below are all the methods that the library provide:

- [search.artists(query)](#searchartistsquery)
- [search.albums(query)](#searchalbumsquery)
- [search.tracks(query)](#searchtracksquery)
- [search.playlists(query)](#searchplaylistsquery)
- [album.getAlbum(id)](#albumgetalbumid)
- [album.getAlbums(ids)](#albumgetalbumsids)
- [album.getTracks(id)](#albumgettracksid)

### search.artists(query)

> Search for informations about Artists with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *artist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
search.artists('Isadora Pompeo')
  .then(data => {
    // do what you want here
  })
```

#### [⇯ go back](#methods)

### search.albums(query)

> Search for informations about Albums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *album*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.albums('Isadora Pompeo')
  .then(data => {
    // do what you want here
  })
```

#### [⇯ go back](#methods)

### search.tracks(query)

> Search for informations about Tracks with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *track*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.tracks('Isadora Pompeo')
  .then(data => {
    // do what you want here
  })
```

#### [⇯ go back](#methods)

### search.playlists(query)

> Search for informations about Playlists with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *playlist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.tracks('Isadora Pompeo')
  .then(data => {
    // do what you want here
  })
```

#### [⇯ go back](#methods)

### album.getAlbum(id)

> Search for informations about a specific Album with a id.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* | 'Specific id'|


**Example**

```js
spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want here
  })
```

#### [⇯ go back](#methods)

### album.getAlbums(ids)

> Search for informations about a specific Album with their ids.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ids`      |*Array of strings* | ['id1', 'id2'] |


**Example**

```js
spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '1A2GTWGtFfWp7KSQTwWOyo'])
  .then(data => {
    // do what you want here
  })
```

#### [⇯ go back](#methods)

### album.getTracks(id)

> Search for all tracks from a specific album.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* | 'Specific id'|


**Example**

```js
spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want here
  })
```

#### [⇯ go back](#methods)

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
42+ ✔ | 39+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to node.

## Testing

To run the tests you can use the following command inside the project folder:

```sh
npm test
```

Or if you want to test the coverage use:

```sh
npm run test:coverage
```

## Projects using this library

- [Spotify Player](https://github.com/jpedroschmitz/spotify-player)

## To do list

- Implement GET [artists](https://developer.spotify.com/console/artists/) methods;
- Implement GET [playlists](https://developer.spotify.com/console/playlists/) methods;
- Implement GET [tracks](https://developer.spotify.com/console/tracks/) methods;

## Authors

| ![João Pedro Schmitz](https://avatars2.githubusercontent.com/u/26466516?v=3&s=150)|
|:---------------------:|
|  [João Pedro Schmitz](https://github.com/jpedroschmitz/)   |

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## Project License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
