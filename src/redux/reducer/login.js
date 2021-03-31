import { SET_LOGIN, SET_LOGOUT } from "../action/login"
// import parseJwt from "util/getJwtObj"

const DEFAULT_STATE = {
  login: null,
  userId: "",
  role: "",
  authorization: "",
  menu: []
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN:
      // console.log(action)
      // const jwt = parseJwt(action.payload.authorization)
      return {
        ...state,
        login: true,
        userId: action.payload.admin.username,
        role: action.payload.admin.roles,
        authorization: action.payload.admin.token,
        menu: action.payload.menus
      }
    case SET_LOGOUT:
      return {
        ...state,
        login: false,
        userId: "",
        role: "",
        authorization: ""
      }
    default:
      return state
  }
}
