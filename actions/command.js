const SET_HANDLERS = 'SET_HANDLERS'

function setHandlers (value) {
  return {
    type: SET_HANDLERS,
    value
  }
}

module.exports = {
  setHandlers,
  SET_HANDLERS
}
