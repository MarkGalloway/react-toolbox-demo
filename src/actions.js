import moment from 'moment';
import { uniqueId } from 'underscore';

import appraisals from './appraisals.json';

export const TOGGLE_DRAWER_ACTIVE = 'app/TOGGLE_DRAWER_ACTIVE';
export const SET_DRAWER_ACTIVE = 'app/SET_DRAWER_ACTIVE';
export const SET_APPRAISALS = 'appraisals/SET_APPRAISALS';
export const UPDATE_APPRAISAL = 'appraisals/UPDATE_APPRAISAL';
export const ADD_APPRAISAL = 'appraisals/ADD_APPRAISAL';

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER_ACTIVE,
    payload: null
  }
}

export function closeDrawer() {
  return {
    type: SET_DRAWER_ACTIVE,
    payload: false
  }
}

export function setAppraisals(appraisals=[]) {
  return {
    type: SET_APPRAISALS,
    payload: appraisals
  }
}

export function updateAppraisal(appraisal_id, data) {
  return {
    type: UPDATE_APPRAISAL,
    payload: {...data, id: appraisal_id, updated: moment().valueOf()}
  }
}

export function addAppraisal(data) {
  const now = moment().valueOf();

  return {
    type: ADD_APPRAISAL,
    payload: {
      ...data,
      id: uniqueId(),
      created: now,
      updated: now,
      cbb_status: "Incomplete",
      status: "needsNumbers"
    }
  }
}

export function loadInitialData() {
  return function(dispatch) {
    return Promise.resolve(
      dispatch(setAppraisals(appraisals.appraisals))
    )
  }
}
