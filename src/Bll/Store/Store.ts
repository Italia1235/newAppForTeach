import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {PupilsReducer} from "../Reducer/PupilsReducer";

const rootReducer = combineReducers({
pupils:PupilsReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;