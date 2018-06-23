const {
  SET_HANDLERS,
  SET_ALIAS_MAP,
  SET_DEFAULT_COMMAND,
  RESET_COMMAND,
  FREEZE_COMMAND,
  UNFREEZE_COMMAND
} = require('../actions/command')
const initialState = {
  handlers: {},
  aliasMap: {},
  defaultCommand: undefined
}

function setHandlers (state = initialState, value) {
  return Object.assign({}, state, {handlers: value})
}

function setAliasMap (state = initialState, value) {
  return Object.assign({}, state, {aliasMap: value})
}

function setDefaultCommand (state = initialState, value) {
  return Object.assign({}, state, {defaultCommand: value})
}

function resetCommand (state = initialState) {
  return {
    handlers: {},
    aliasMap: {},
    defaultCommand: undefined,
    frozen: state.frozen
  }
}

function freezeCommand (state = initialState) {
  return Object.assign({}, state, {
    frozen: {
      handlers: state.handlers,
      aliasMap: state.aliasMap,
      defaultCommand: state.defaultCommand
    }
  })
}

function unfreezeCommand (state = initialState) {
  const nextState = Object.assign({}, state, state.frozen)
  delete nextState.frozen
  return nextState
}

module.exports = function commandReducer (state = initialState, action = {}) {
  switch (action.type) {
    case SET_HANDLERS:
      return setHandlers(state, action.value)
    case SET_ALIAS_MAP:
      return setAliasMap(state, action.value)
    case SET_DEFAULT_COMMAND:
      return setDefaultCommand(state, action.value)
    case RESET_COMMAND:
      return resetCommand(state)
    case FREEZE_COMMAND:
      return freezeCommand(state)
    case UNFREEZE_COMMAND:
      return unfreezeCommand(state)
    default:
      return state
  }
}
