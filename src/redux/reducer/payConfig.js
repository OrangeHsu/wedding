import { SET_PAY_TYPE_LIST, SET_PAY_TYPE, SET_PAY_TYPE_INFO, SET_PAY_BRAND_INFO, SET_BRANDS } from "../action/payConfig"

const DEFAULT_STATE = {
  payTypeList: [],
  payTypeInfo: [],
  payBrandInfo: {},
  brands: []
}

export default (state = DEFAULT_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PAY_TYPE_LIST:
      return {
        ...state,
        payTypeList: payload
      }
    case SET_PAY_TYPE:
      return {
        ...state,
        payType: payload
      }
    case SET_PAY_TYPE_INFO:
      return {
        ...state,
        payTypeInfo: payload
      }
    case SET_PAY_BRAND_INFO:
      return {
        ...state,
        payBrandInfo: payload
      }
    case SET_BRANDS:
      return {
        ...state,
        brands: payload
      }
    default:
      return state
  }
}
