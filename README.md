# freeboard-leaflet-realtime

Richard Wen  
rrwen.dev@gmail.com  

Freeboard plugin for real time Leaflet web maps

[![npm version](https://badge.fury.io/js/freeboard-leaflet-realtime.svg)](https://badge.fury.io/js/freeboard-leaflet-realtime)
[![Build Status](https://travis-ci.org/rrwen/freeboard-leaflet-realtime.svg?branch=master)](https://travis-ci.org/rrwen/freeboard-leaflet-realtime)
[![npm](https://img.shields.io/npm/dt/freeboard-leaflet-realtime.svg)](https://www.npmjs.com/package/freeboard-leaflet-realtime)
[![GitHub license](https://img.shields.io/github/license/rrwen/freeboard-leaflet-realtime.svg)](https://github.com/rrwen/freeboard-leaflet-realtime/blob/master/LICENSE)
[![Donarbox Donate](https://img.shields.io/badge/donate-Donarbox-yellow.svg)](https://donorbox.org/rrwen)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NQNSAHK5X46D2)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/rrwen/freeboard-leaflet-realtime.svg?style=social)](https://twitter.com/intent/tweet?text=Freeboard%20plugin%20for%20real%20time%20Leaflet%20web%20maps:%20https%3A%2F%2Fgithub.com%2Frrwen%2Ffreeboard-leaflet-realtime%20%23nodejs%20%23npm)

## Install

1. Install [git](https://git-scm.com/)
2. Clone [freeboard](https://github.com/Freeboard/freeboard)
3. Change into directory `freeboard`

```
git clone https://github.com/Freeboard/freeboard.git
cd freeboard
```

For the latest developer version, see [Developer Install](#developer-install).

## Usage

After [cloning freeboard](#install), edit `head.js` in `freeboard/index.html` to include the `freeboard-leaflet-realtime` plugin:

```javascript
head.js(...,
	'https://cdn.rawgit.com/rrwen/freeboard-leaflet-realtime/16eb2e42/index.js',
	...)
```

Open `freeboard/index.html` to use the new plugin.

## Contributions

1. Reports for issues and suggestions can be made using the [issue submission](https://github.com/rrwen/freeboard-leaflet-realtime/issues) interface.
2. Code contributions are submitted via [pull requests](https://github.com/rrwen/freeboard-leaflet-realtime/pulls)

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## Developer Notes

### Developer Install

Install from `npm`:

1. Install [Node.js](https://nodejs.org/en/)
2. Install [freeboard-leaflet-realtime](https://www.npmjs.com/package/freeboard-leaflet-realtime) via `npm`

```
npm install --save freeboard-leaflet-realtime
```

Install the latest developer version with `npm` from github:

```
npm install git+https://github.com/rrwen/freeboard-leaflet-realtime
```
  
Install from `git` cloned source:

1. Ensure [git](https://git-scm.com/) is installed
2. Clone into current path
3. Install via `npm`

```
git clone https://github.com/rrwen/freeboard-leaflet-realtime
cd freeboard-leaflet-realtime
npm install
```

### Upload to Github

1. Ensure [git](https://git-scm.com/) is installed
2. Inside the `freeboard-leaflet-realtime` folder, add all files and commit changes
3. Push to github

```
git add .
git commit -a -m "Generic update"
git push
```

### Upload to npm

1. Update the version in `package.json`
2. Login to npm
3. Publish to npm

```
npm login
npm publish
```

### Implementation

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
