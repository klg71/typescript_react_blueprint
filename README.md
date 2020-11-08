# Typescript React blueprint

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Wie wurde das Projekt erstellt?
`create-react-app` global mit npm installieren

In den Ordner, in dem man das Projekt erstellen möchte: 
`npx create-react-app my-app --template typescript` ausführen (my-app durch Appnamen ersetzem)

Mehr Details: https://create-react-app.dev/docs/getting-started/

## Verwendete Bibliotheken:

### axios
Axios ist ein Web-Client mit dem wir das Backend ansprechen werden

###antd
Antd ist eine Frontend-Komponenten Bibliothek: https://ant.design/

Alternativen wären beispielsweise reactstrap oder material-ui

## Wie erreichen wir unseren Backend-Service?
In der package.json wird der Proxy auf die Adresse des Servers gesetzt.
