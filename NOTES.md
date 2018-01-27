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
