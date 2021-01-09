import { combineReducers } from 'redux'

import navigation from './navigation'
import pending from './pending'

export default combineReducers({
  navigation,
  pending
})
