import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from '../src/App';
import { createStore, combineReducers } from 'redux';
import { dispatch } from 'C:/Users/cavein/AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs';


//Actions
const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: "CREATE_CLAIM",
        payload: {
            name,
            amountOfMoneyToCollect
        }
    }
}

const createPolicy = (name) => {
    return {
        type: "CREATE_POLICY",
        payload: {
            name,
            amount:20
        }
    }
}

const deletePolicy = (name) => {
    return {
        type: "DELETE_POLICY",
        payload: {
            name
        }
    };
}


//reducers
const claimsHistory = (oldListOfClaim = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaim, action.payload]
    }
    return oldListOfClaim;
};

const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
}

const policy = (listofpolicies =[], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listofpolicies, action.payload.name]
    } else if (action.type === "DELETE_POLICY") {
        return listofpolicies.filter(policy => policy !== action.payload.name);
    }
    return listofpolicies;
}

const ourDepartment = combineReducers({
    claimsHistory,
    accounting,
    policy
});

const store = createStore(ourDepartment)

//dispatch

store.dispatch(createPolicy('Alex'));
store.dispatch(createClaim('Alex', 30));
console.log(store.getState());
ReactDOM.render(
        <App />,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
