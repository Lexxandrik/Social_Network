import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';


let reducers = combineReducers ({
    dialogs : dialogsReducer , 
    profile : profileReducer
});

let store = createStore(reducers);

window.state = store;

export default store;