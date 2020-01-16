import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';


const reducer = (state, action) => {
    if (action.type === 'UPDATE_NAME') {
        return { name: action.payload.name } 
    }
}
const store = createStore(reducer)



store.dispatch({ type: 'UPDATE_NAME', payload: { name: 'Martin' } })
console.log(store.getState())




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
