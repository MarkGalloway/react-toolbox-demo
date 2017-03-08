
export const TOGGLE_DRAWER_ACTIVE = 'app/TOGGLE_DRAWER_ACTIVE';
export const SET_DRAWER_ACTIVE = 'app/SET_DRAWER_ACTIVE';


export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER_ACTIVE
})


export const closeDrawer = () => ({
  type: SET_DRAWER_ACTIVE,
  payload: false
})
