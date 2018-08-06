import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Router from './Router';
import store from './store/store';
 
render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app')
)