import { combineReducers } from 'redux'

export default combineReducers({
  headlines: require('./headlines').reducer,
  sources: require('./sources').reducer
})
