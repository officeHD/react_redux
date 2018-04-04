import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { initData } from './actions'
import InstructionContainer from './containers/InstructionContainer'

const Step1Container = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/Step1Container').default);
    }, 'Step1Container');
} 
const Step2Container = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/Step2Container').default);
    }, 'Step2Container');
} 
const Step3Container = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/Step3Container').default);
    }, 'Step3Container');
} 
const Step4Container = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/Step4Container').default);
    }, 'Step4Container');
} 
const middleware = [ thunk ]
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(initData())

render(
  <Provider store={store}>
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={InstructionContainer}/>
      <Route path="/step1" getComponent={Step1Container}/>
      <Route path="/step2" getComponent={Step2Container}/>
      <Route path="/step3" getComponent={Step3Container}/>
      <Route path="/step4" getComponent={Step4Container}/>
    </Router>
  </Provider>,
  document.getElementById('app')
)