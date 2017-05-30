import {createStore, applyMiddleware} from 'redux';
import {gameReducer} from './reducers';
export default createStore(gameReducer);
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunk));