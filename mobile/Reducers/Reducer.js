import {combineReducers} from 'redux';
import {GET_IMAGES} from '../Actions/Action.js';

export function images(state = {
  name: '',
  temp: null,
  error: 0,
  isFetching: 0
}, action) {
  switch (action.type) {
    case GET_IMAGES:
      return Object.assign({}, state, {
        id: action.id,
        title: action.title,
        link: action.link,
        error: 0,
        isFetching: 0
      });
    default:
      return state
  }
}

const epictureApp = combineReducers({
  images
});

export default epictureApp;