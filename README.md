# freeboard-leaflet-realtime

Richard Wen  
rrwen.dev@gmail.com  

* [Documentation](https://rrwen.github.io/freeboard-leaflet-realtime)

Freeboard plugin for real time Leaflet web maps

[![npm version](https://badge.fury.io/js/freeboard-leaflet-realtime.svg)](https://badge.fury.io/js/freeboard-leaflet-realtime)
[![Build Status](https://travis-ci.org/rrwen/freeboard-leaflet-realtime.svg?branch=master)](https://travis-ci.org/rrwen/freeboard-leaflet-realtime)
[![Coverage Status](https://coveralls.io/repos/github/rrwen/freeboard-leaflet-realtime/badge.svg?branch=master)](https://coveralls.io/github/rrwen/freeboard-leaflet-realtime?branch=master)
[![npm](https://img.shields.io/npm/dt/freeboard-leaflet-realtime.svg)](https://www.npmjs.com/package/freeboard-leaflet-realtime)
[![GitHub license](https://img.shields.io/github/license/rrwen/freeboard-leaflet-realtime.svg)](https://github.com/rrwen/freeboard-leaflet-realtime/blob/master/LICENSE)
[![Donarbox Donate](https://img.shields.io/badge/donate-Donarbox-yellow.svg)](https://donorbox.org/rrwen)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NQNSAHK5X46D2)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/rrwen/freeboard-leaflet-realtime.svg?style=social)](https://twitter.com/intent/tweet?text=Freeboard%20plugin%20for%20real%20time%20Leaflet%20web%20maps:%20https%3A%2F%2Fgithub.com%2Frrwen%2Ffreeboard-leaflet-realtime%20%23nodejs%20%23npm)

## Install

1. Install [Node.js](https://nodejs.org/en/)
2. Install [freeboard-leaflet-realtime](https://www.npmjs.com/package/freeboard-leaflet-realtime) via `npm`

```
npm install --save freeboard-leaflet-realtime
```

For the latest developer version, see [Developer Install](#developer-install).

## Usage

An example usage of freeboard-leaflet-realtime:

```javascript
var freeboardleafletrealtime = require('freeboard-leaflet-realtime');
```

See [Documentation](https://rrwen.github.io/freeboard-leaflet-realtime) for more details.


## Contributions

1. Reports for issues and suggestions can be made using the [issue submission](https://github.com/rrwen/freeboard-leaflet-realtime/issues) interface.
2. Code contributions are submitted via [pull requests](https://github.com/rrwen/freeboard-leaflet-realtime/pulls)

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## Developer Notes

### Developer Install

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

### Tests

1. Clone into current path `git clone https://github.com/rrwen/freeboard-leaflet-realtime`
2. Enter into folder `cd freeboard-leaflet-realtime`
3. Ensure [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) are installed and available
4. Run tests
5. Results are saved to [tests/log](tests/log) with each file corresponding to a version tested

```
npm install
npm test
```

### Documentation

Use [documentationjs](https://www.npmjs.com/package/documentation) to generate html documentation in the `docs` folder:

```
npm run docs
```

See [JSDoc style](http://usejsdoc.org/) for formatting syntax.

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
2. Run tests and check for OK status
3. Generate documentation
4. Login to npm
5. Publish to npm

```
npm test
npm run docs
npm login
npm publish
```

### Implementation

The module [freeboard-leaflet-realtime](https://www.npmjs.com/package/freeboard-leaflet-realtime) uses the following npm packages for its implementation:

npm | Purpose
--- | ---
component | description
component | description
component | description
component | description

```
component   <-- detail
    |
component   <-- detail
    |
component   <-- detail
    |
component   <-- detail
```
