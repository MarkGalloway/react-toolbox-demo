import { combineReducers } from 'redux';

import {
  TOGGLE_DRAWER_ACTIVE, SET_DRAWER_ACTIVE, SET_APPRAISALS
} from './actions';


const APP_INITIAL_STATE = {
  drawerActive: false
};


function appReducer(state = APP_INITIAL_STATE, action) {
  switch(action.type) {
    case TOGGLE_DRAWER_ACTIVE:
      return { ...state, drawerActive: !state.drawerActive }
    case SET_DRAWER_ACTIVE:
      return { ...state, drawerActive: action.payload }
    default:
      return state
  }
}


const APPRAISALS_INITIAL_STATE = {
  appraisals: []
};


function appraisalsReducer(state = APPRAISALS_INITIAL_STATE, action) {
  switch(action.type) {
    case SET_APPRAISALS:
      return { ...state, appraisals: action.payload }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  app: appReducer,
  appraisals: appraisalsReducer
});


export default rootReducer;
