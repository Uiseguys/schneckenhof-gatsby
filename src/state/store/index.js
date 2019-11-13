import { applyMiddleware, createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import { createLogger } from "redux-logger"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import combineReducers from "../reducers/index"

// Middleware to keep track of all that's happening in the store
const middleware = applyMiddleware(promise, thunk, createLogger())

// Store types
// The Actual Store
const persistConfig = { key: "schneckenhof-cart", storage }
const persistedReducer = persistReducer(persistConfig, combineReducers)

export let store = createStore(persistedReducer, middleware)
export let persistor = persistStore(store)
