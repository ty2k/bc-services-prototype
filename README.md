# bc-services-prototype

This package is a prototype re-design of the [Services page](https://www2.gov.bc.ca/gov/content/home/services-a-z) on [gov.bc.ca](https://www2.gov.bc.ca/). It is comprised of a Node/Express back-end and a React front-end.

## File Structure
- `./server.js` is a Node/Express server that serves the React production build
- `./react-app/` holds a React app based on [bc-react-prototype-env](https://github.com/ty2k/bc-react-prototype-env)

## Installation
`npm i` to install the Express server dependencies

## Build
`npm run build` within the parent directory creates a production build of the React application after installing front-end dependencies

## Run
`npm run dev` to start the Express server with Nodemon for logging
`npm run start` to start the Express server
