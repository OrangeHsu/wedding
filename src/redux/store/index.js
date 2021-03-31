import { createStore, combineReducers, compose } from "redux"
import login from "../reducer/login"
import page from "../reducer/page"
import payConfig from "../reducer/payConfig"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const Store = createStore(combineReducers({ login, page, payConfig }), composeEnhancers())
export default Store
