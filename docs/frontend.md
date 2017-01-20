# Frontend
```
localhost:4000
```
The UI server includes automatic live-reloading, compilation, transpilation & bundling thanks to [vbuild](https://vbuild.js.org/#/).

**App** component serves as a wrapper for the whole app, giving it global styles, and it is mounted on load using whatever element has the id "app" content as a template, in this case there's a default in case of no template: *Search-Results* component.

**Search-Results** is a *Container* component, handling API calling and handling data to its child components, and laying out the other components to form the UI. In this case is the only route availabe but we could use other components in a similar manner for different routes.

The rest of the components are *Presentational* components, implementing a props-in, events-out architecture.

They are separated in the following categories:
 - **Components**: Single pieces of UI that serve a specific content, don't have any child components
 - **Modules**: More complete pieces of UI that use Components as pieces.
 - **Pages**: A complete app route with all functionality needed.

#### Things to improve:

 - Implement an SVG icon system ([Vue Icons](https://github.com/vue-comps/vue-icons)) 
 - Implement routing and better state-handling ([Vue-router](https://github.com/vuejs/vue-router) & [Vuex](https://github.com/vuejs/vuex))
 - Implement real Google Maps integration

Made with [Vue](https://vuejs.org/)