## Getting Started

The app was built using [create-react-app](https://github.com/facebookincubator/create-react-app)

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console and browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### Approach

I chose to go with React/Redux. Since your site is also built on those technologies.
The build system is what comes with react-scripts. 
The components are stateless and only call actions to update state which then filters down. All of the state is in one object and managed by the reducer. 

### Improvements

- I would go through and name functions and variables differently to make it easier to read and understand. 
- I would also add the feature that's on the zoom app on Bonobos.com where it first sets the Y value to 0 and then the X value a few miliseconds later when zooming out. 
- I would also like it better if the app zoomed in to where you click rather than the center of the image.
- Rewrite the reducer to be more modular and simpler. 
