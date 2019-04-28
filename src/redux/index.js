import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import {API_URL} from '../config/';
import axios from 'axios';

axios.defaults.baseURL = API_URL;

const FETCH_QUERY = 'FETCH_QUERY';
const initState = [];

// ACTIONS:
const makeQuery = (str) => dispatch => {
        axios.get(encodeURIComponent(str))
        .then(res=>dispatch({
            type: FETCH_QUERY,
            data: res.data
        }))
        .catch((err) => {
            console.log('Sum Ting Wong says: ' + err);   
        })
} 


// REDUCERS:
const qReducer = (state=initState, action) => {
    switch(action.type) {
        case FETCH_QUERY:
        return {
            ...state,
            results: [action.data]
        }
        default:
        return state;
    }
}


// STORE:
const store = createStore(qReducer, initState, applyMiddleware(...middleware));

