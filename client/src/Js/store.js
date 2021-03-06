import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import reducer from "./reducers/ContactReducer"
import rootReducer from './reducers/rootReducer';
const middleware=[thunk]

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
export default store