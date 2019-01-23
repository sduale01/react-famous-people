import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const famousPeople = [
    {name: 'Tom Brady', role: 'Quarterback'},
    {name: 'Aaron Rodgers', role: 'Dancer'}
]

const personReducer = (state = famousPeople, action) => {
    if (action.type === 'ADD_FAMOUS_PERSON') {
        return [...state, action.payload]
    }

    return state
}


// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        personReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
