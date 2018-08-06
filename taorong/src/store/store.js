
import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as home from './home/reducer';
import * as ui from './ui/reducer';
import * as user from './user/reducer';
import * as mall from './mall/reducer';
import * as goods from './goods/reducer';

import thunk from 'redux-thunk';
const version = sessionStorage.taorongVersion;
const loadState = () => {
    try { // 也可以容错一下不支持localStorage的情况下，用其他本地存储
        const serializedState = localStorage.getItem(version);
        if (serializedState === null) {
            return undefined;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (err) {
        // ... 错误处理
        return undefined;
    }
}
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(version, serializedState);
    } catch (err) {
        // ...错误处理
    }
};
window.onbeforeunload = (e) => {
    const states = store.getState();
    saveState(states);
};

let store = createStore(
    combineReducers({ ...home, ...ui, ...user,...mall,...goods }),
    loadState(),
    applyMiddleware(thunk)
);

export default store;