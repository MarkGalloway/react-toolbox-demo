import appraisals from './appraisals.json';

export const TOGGLE_DRAWER_ACTIVE = 'app/TOGGLE_DRAWER_ACTIVE';
export const SET_DRAWER_ACTIVE = 'app/SET_DRAWER_ACTIVE';
export const SET_APPRAISALS = 'appraisals/SET_APPRAISALS';

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

export function setAppraisals(appraisails=[]) {
  return {
    type: SET_APPRAISALS,
    payload: appraisails
  }
}

export function loadInitialData() {
  return function(dispatch) {
    return Promise.resolve(
      dispatch(setAppraisals(appraisals.appraisals))
    )
  }
}
