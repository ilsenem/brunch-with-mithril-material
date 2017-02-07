# Brunch + Babel/ES6 + Mithril + Material Design Lite

This is a modern JS skeleton for [Brunch](http://brunch.io) with [Mithril](http://mithril.js.org) and [Material Design Lite](https://getmdl.io) included.

## What is included

* JSX transpilation
* ESLint linting
* Mithril and Material Design Lite (with font and icons)

## Installation

Clone this repo manually or use `brunch new <dir> -s ilsenem/brunch-with-mithril-material`
or simply with `brunch new <dir> -s mithril-mdl`.

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

## ES7

To use proposed JS features not included into ES6, do this:

* `npm install --save-dev babel-preset-stage-0`
* in `.babelrc`, add the preset: `"presets": ["es2015", "stage-0"]`
