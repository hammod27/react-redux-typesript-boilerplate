import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import actionMiddleware from "src/store/middleware/actionMiddleware";
import composeEnhancers from "src/store/middleware/composeEnhancers";
import store from "src/store/index";

const middleware = [reduxThunk, actionMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export default () => createStore(store, enhancer);
