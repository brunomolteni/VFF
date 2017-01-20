# V.F.F.
## Vue + Feathers + Fractal
```
localhost:3000 // Styleguide (You're looking at it)
localhost:4000 // UI
localhost:5000 // API
```

This living styleguide is automatically reloaded when it detects file changes, and proxies all /api requests to the UI server, which in turn proxies all unhandled request to the API server, so that you can use the same URLs in all enviroments. Check out the components on the left to see how the UI is composed.

This is all automatically generated from .html files inside components folders, where the .html file has the same name as the component folder, using _layout.html as the layout for the rendered components. All thanks to [Fractal](http://fractal.build/guide)


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