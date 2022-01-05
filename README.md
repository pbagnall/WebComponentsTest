# Web Components Test

The is an experiment to see how well Web Components work as a common basis for implementing components for React and Angular.

web-component includes an index.html which uses DropDown.js to implement a simple drop-down component. It provides a very simple demonstration of the dropdown being used.
TODO: get the second dropdown to set it's options from a function.

react-app reimplements the same functionality as the index.html from web-component in a React application. It includes the DropDown.js web component as a sym-link to ensure it's using the exact same code.

angular-app reimplements the same functionality again, this time in an Angular application. As with the React app it includes the DropDown.js as a sym-link.

## Building

To run the build script do

```
node build.mjs
```

This will build the react and angular apps, and copy them and the web-component into the public folder. Browse to public/index.html to view.