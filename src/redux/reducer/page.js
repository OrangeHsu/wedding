import { SET_PAGE } from "../action/page"

const DEFAULT_STATE = []

const findChildren = (data, parent) =>
  data
    .filter(el => el.parentId === parent)
    .filter(el => el.status === 0)
    .sort((a, b) => a.sortIndex - b.sortIndex)
    .map(el => ({ id: el.id, path: el.url, icon: el.icon, name: el.name, children: findChildren(data, el.id) }))

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_PAGE:
      return findChildren(action.payload, -1)
    default:
      return state
  }
}
