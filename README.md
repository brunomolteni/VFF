# VFF
## Vue + Feathers + Fractal

This is a minimalistic project using ES6 and a couple of frameworks and tools to create a rapid development stack with minimal config, a tight feedback loop (automatic live-reloading, compilation, transpilation & bundling for both front-end and back-end code) and a living styleguide of the components that make up the UI.


## Install
```
npm i
npm run i
```

## Develop
```
// in a single console (front+back+styleguide)
npm run dev

// separate consoles (better logs)
cd frontend && npm run dev

cd backend && npm run dev

npm run docs
```

## Build
```
npm run build
```

This project uses the following frameworks and tools:
 - [Vue](https://vuejs.org/v2/guide/)
 - [Feathers.js](https://docs.feathersjs.com)
 - [Fractal](http://fractal.build/guide)
 - [vbuild](https://github.com/egoist/vbuild)
 - [Backpack](https://github.com/palmerhq/backpack)
 - [Faker](https://github.com/marak/Faker.js/)
 - [Gulp](https://github.com/gulpjs/gulp)