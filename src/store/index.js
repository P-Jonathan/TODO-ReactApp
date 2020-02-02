import { createStore, combineReducers } from 'redux';
import { stylesReducer } from '../reducers/styles';

const initialState = {};

const rootReducer = combineReducers({
    styles: stylesReducer,
    todos: state => {
        return { ...state };
    }
});

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, initialState, enhancers);

export default store;