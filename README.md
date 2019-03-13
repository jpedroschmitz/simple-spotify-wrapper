# Simple Spotify Wrapper

[![Build Status](https://travis-ci.org/jpedroschmitz/spotify-wrapper.svg?branch=master)](https://travis-ci.org/jpedroschmitz/spotify-wrapper) [![Coverage Status](https://coveralls.io/repos/github/jpedroschmitz/spotify-wrapper/badge.svg?branch=master)](https://coveralls.io/github/jpedroschmitz/spotify-wrapper?branch=master)

A small and awesome wrapper to work with the [Spotify Web API](https://developer.spotify.com/documentation/web-api/).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
42+ ✔ | 39+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to node.

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
// to import a specific method
import { method } from 'spotify-wrapper';

// to import everything
import * as spotifyWrapper from 'spotify-wrapper';
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

Below are all the methods that the library provide:

- [search.artists(query)]()
- [search.albums(query)]()
- [search.tracks(query)]()
- [search.playlists(query)]()
- [album.getAlbum(id)]()
- [album.getAlbums(ids)]()
- [album.getTracks(id)]()

<!-- ### searchAlbums(query)

> Search for informations about ALbums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *album*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'| -->


<!-- **Example**

```js
searchAlbums('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

#### [⇯ go back](#methods) -->

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

| ![João Pedro Schmitz](https://avatars2.githubusercontent.com/u/26466516?v=3&s=150)|
|:---------------------:|
|  [João Pedro Schmitz](https://github.com/willianjusten/)   |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
