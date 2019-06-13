import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ROOT from "./reducers/root";
import ReduxThunk from "redux-thunk";

const middleware = composeWithDevTools(applyMiddleware(ReduxThunk));
const store = createStore(ROOT, middleware);

export default store;
