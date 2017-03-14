import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  TOGGLE_DRAWER_ACTIVE, SET_DRAWER_ACTIVE, SET_APPRAISALS,
  UPDATE_APPRAISAL, ADD_APPRAISAL
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
    case ADD_APPRAISAL:
      return { ...state, appraisals: [ ...state.appraisals, action.payload ] }
    case UPDATE_APPRAISAL:
      return {
        ...state,
        appraisals: state.appraisals.map(appraisal =>
          appraisal.id === action.payload.id
            ? {...appraisal, ...action.payload}
            : appraisal
        )
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  app: appReducer,
  appraisals: appraisalsReducer,
  form: formReducer
});


export default rootReducer;
