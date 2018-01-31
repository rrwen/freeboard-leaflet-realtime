# freeboard-leaflet-realtime

Richard Wen  
rrwen.dev@gmail.com  

* [Demo](https://rrwen.github.io/freeboard-leaflet-realtime/)

Freeboard plugin for real time Leaflet web maps

[![npm version](https://badge.fury.io/js/freeboard-leaflet-realtime.svg)](https://badge.fury.io/js/freeboard-leaflet-realtime)
[![Build Status](https://travis-ci.org/rrwen/freeboard-leaflet-realtime.svg?branch=master)](https://travis-ci.org/rrwen/freeboard-leaflet-realtime)
[![npm](https://img.shields.io/npm/dt/freeboard-leaflet-realtime.svg)](https://www.npmjs.com/package/freeboard-leaflet-realtime)
[![GitHub license](https://img.shields.io/github/license/rrwen/freeboard-leaflet-realtime.svg)](https://github.com/rrwen/freeboard-leaflet-realtime/blob/master/LICENSE)
[![Donarbox Donate](https://img.shields.io/badge/donate-Donarbox-yellow.svg)](https://donorbox.org/rrwen)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NQNSAHK5X46D2)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/rrwen/freeboard-leaflet-realtime.svg?style=social)](https://twitter.com/intent/tweet?text=Freeboard%20plugin%20for%20real%20time%20Leaflet%20web%20maps:%20https%3A%2F%2Fgithub.com%2Frrwen%2Ffreeboard-leaflet-realtime%20%23nodejs%20%23npm)

## Install

1. Install [Node.js](https://nodejs.org) and [git](https://git-scm.com/)
2. Clone [freeboard](https://github.com/Freeboard/freeboard) and change directory
3. Install [freeboard-leaflet-realtime](https://github.com/rrwen/freeboard-leaflet-realtime) via `npm`

```
git clone https://github.com/Freeboard/freeboard.git
cd freeboard
npm install --save freeboard-leaflet-realtime
```

For the latest developer version, see [Developer Install](NOTES.md#developer-install).

## Usage

**Step 1.** After [cloning freeboard](#install) and installing [freeboard-leaflet-realtime](https://github.com/rrwen/freeboard-leaflet-realtime), you should have the following files:

* `freeboard/index.html`
* `freeboard/node_modules/freeboard-leaflet-realtime/index.js`

**Step 2.** Edit the `head.js()` function in `freeboard/index.html` to add the plugin:

```javascript
head.js(
	...,
	'node_modules/freeboard-leaflet-realtime/index.js',
	...
);
```

If you require a Content Delivery Network (CDN) link, you may use the following [rawgit](https://rawgit.com/) CDN without an `npm` install:

```javascript
head.js(
	...,
	'https://cdn.rawgit.com/rrwen/freeboard-leaflet-realtime/b466494e/index.js',
	...
);
```

**Step 3.** Open `freeboard/index.html` to use the added plugin interactively.

## Contributions

1. Reports for issues and suggestions can be made using the [issue submission](https://github.com/rrwen/freeboard-leaflet-realtime/issues) interface.
2. Code contributions are submitted via [pull requests](https://github.com/rrwen/freeboard-leaflet-realtime/pulls)

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## Implementation

The module [freeboard-leaflet-realtime](https://www.npmjs.com/package/freeboard-leaflet-realtime) uses the following npm packages for its implementation:

npm | Purpose
--- | ---
[freeboard](https://www.npmjs.com/package/freeboard) | Base dashboard that accepts this plugin
[leaflet](http://leafletjs.com/) | Web map providing tiles and layers
[leaflet-realtime](https://www.npmjs.com/package/leaflet-realtime) | Real time layers for leaflet


```
   freeboard        <-- base dashboard
       |
    leaflet         <-- Add leaflet webmap to dashboard pane
       |
leaflet-realtime    <-- Add realtime layer to leaflet
```

For more information, see [Developer Notes](NOTES.md).
