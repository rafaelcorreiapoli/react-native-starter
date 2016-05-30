/* @flow */

const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM'


export default function sideMenu(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return {
        ..state,
        selectedItem: action.payload.item
      }
    default:
      return state
  }
}

export const setSelectedItem = () => ({
  type: SET_SELECTED_ITEM,
})
