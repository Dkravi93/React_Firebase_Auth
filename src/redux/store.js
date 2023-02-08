import { createStore, combineReducers } from 'redux';
import recipeReducer from './reducers';
const rootReducer = combineReducers({
    recipes: recipeReducer
  });
  
  const store = createStore(rootReducer);
  
  export default store;