const reducer = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        isDark: !state.isDark,
      }
    case "SET_MODE":
      return {
        isDark: action.payload !== "false",
      }
    default:
      return state
  }
}

export default reducer
