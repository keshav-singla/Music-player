import { combineReducers } from 'redux'
import apiDataReducer from './apiDataReducer'

const allReducer = combineReducers({
    data: apiDataReducer
})

export default allReducer;
