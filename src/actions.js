import appraisals from './appraisals.json';

export const TOGGLE_DRAWER_ACTIVE = 'app/TOGGLE_DRAWER_ACTIVE';
export const SET_DRAWER_ACTIVE = 'app/SET_DRAWER_ACTIVE';
export const SET_APPRAISALS = 'appraisals/SET_APPRAISALS';
export const UPDATE_APPRAISAL = 'appraisals/UPDATE_APPRAISAL';

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
    payload: {...data, id: appraisal_id}
  }
}

export function loadInitialData() {
  return function(dispatch) {
    return Promise.resolve(
      dispatch(setAppraisals(appraisals.appraisals))
    )
  }
}
