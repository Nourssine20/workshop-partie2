
import {createStore} from 'redux'
import {counterReducers} from './reducers'

export default createStore(counterReducers);