import { createStore, combineReducers, applyMiddleware } from 'redux';
import homeReducer from './home-reducer';
import dialogsReducer from './dialogs-reducer';
import friendReducer from './friend-reducer';
import photoReducer from './photo-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  homePage: homeReducer,
  friendPage: friendReducer,
  photoPage: photoReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;
