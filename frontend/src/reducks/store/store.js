import { 
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk';

import {PostsReducer} from '../posts/reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            posts: PostsReducer,
       }),
       compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
        // DEBUG MODE
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       )
    )
}

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux';
import thunk from 'redux-thunk';

import { CategoriesReducer } from '../category/reducers';
import { TransactionsReducer } from '../transactions/reducers';
import { UserReducer } from '../users/reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            user: UserReducer,
            transactions: TransactionsReducer,
            categories: CategoriesReducer,
       }),
       compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
        // DEBUG MODE
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       )
    );
}