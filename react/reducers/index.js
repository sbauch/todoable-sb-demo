import { combineReducers } from 'redux'
import todos from './listItemsReducer';
import lists from './listReducer';

const rootReducer = combineReducers({
  todos,
  lists
})

export default rootReducer
