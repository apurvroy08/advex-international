

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers'; // You'll create this shortly

const store = createStore(rootReducer, composeWithDevTools());

export default store;