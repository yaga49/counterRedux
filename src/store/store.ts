
import { combineReducers, createStore } from 'redux'
import {settingReducer} from "./state/settingReducer";


const rootReducer = combineReducers({
    settingReducer,

})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store