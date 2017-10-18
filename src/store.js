import {createStore} from 'redux'
import getRootReducer from './reducers'

export default function getStore(navReducer){
    return store = createStore(getRootReducer(navReducer))
}