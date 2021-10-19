import { createStore, combineReducers } from 'redux';
import homeReducer from './home-reducer';
import dialogsReducer from './dialogs-reducer';
import friendReducer from './friend-reducer';
import photoReducer from './photo-reducer';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  homePage: homeReducer,
  friendPage: friendReducer,
  photoPage: photoReducer,
});

let store = createStore(reducers);

export default store;
