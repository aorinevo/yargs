const {
  SET_HANDLERS
} = require('../actions/command')
const initialState = {
  handlers: []
}

function setHandlers (state = initialState) {
  return state
}

module.exports = function commandReducer (state = initialState, action = {}) {
  switch (action.type) {
    case SET_HANDLERS:
      return setHandlers()
    default:
      return state
  }
}
