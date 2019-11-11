/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
//require("regenerator-runtime")
//require("core-js")

const React = require("react")
const { BrowserRouter } = require("react-router-dom")
const { Provider } = require("react-redux")
const { PersistGate } = require("redux-persist/integration/react")

const { store, persistor } = require("./src/state/store/index")

exports.wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>{element}</BrowserRouter>
      </PersistGate>
    </Provider>
  )
}
