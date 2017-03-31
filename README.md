# Performance Matters - Server Side Rendered Web App

## About this repo
Refactored version of the Web App From Scratch app to a server side rendered version in Node.js.

## Core Functionality
With this app the user can search the Giphy database for all kinds of gifs. The gifs are then displayed as a MP4 (to save data and network traffic) on the main page. When the user clicks on a specific image, they are then routed to the detail page which displays the actual GIF version of the image for them to download or copy.

![App Screenshot](https://raw.github.com/SadisticSun/Performance-WebApp-ServerSide/master/readme-img/screenshot.png?raw=true)

## Special Tech Features
* Everything rendered server side for maximum compatiblity with browsers
* Service Worker implementen to cache pages and requests

## Optimizations
### Before
These are the scores for the app without any optimization work done.

Desktop
![Before optimizations](https://raw.github.com/SadisticSun/Performance-WebApp-ServerSide/master/readme-img/before_desktop.png?raw=true)

Mobile
![Before optimizations](https://raw.github.com/SadisticSun/Performance-WebApp-ServerSide/master/readme-img/before_mobile.png?raw=true)

### After
These are the scores for the app after optimizations.

Desktop
![After optimizations](https://raw.github.com/SadisticSun/Performance-WebApp-ServerSide/master/readme-img/after_desktop.png?raw=true)

Mobile
![After optimizations](https://raw.github.com/SadisticSun/Performance-WebApp-ServerSide/master/readme-img/after_mobile.png?raw=true)

Lighthouse Score
![Lighthouse check](https://raw.github.com/SadisticSun/Performance-WebApp-ServerSide/master/readme-img/lighthouse.png?raw=true)

## Link to Heroku App
See the app live at: https://quiet-reef-49994.herokuapp.com/

## Dependency List
* Compression
* Body Parser
* Browserify
* EJS
* Express
* Request
* Watchify

## Usage

In terminal:

1.  Navigate to directory
2.  Install depencencies with

```
npm install
```
3. Run app with
```
node server.js
```
or, if you use Nodemon:
```
nodemon server.js
```

4. Test app at:
```
http://localhost:3000
```
