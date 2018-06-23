const SET_HANDLERS = 'SET_HANDLERS'
const SET_ALIAS_MAP = 'SET_ALIAS_MAP'
const SET_DEFAULT_COMMAND = 'SET_DEFAULT_COMMAND'
const ADD_HANDLER = 'ADD_HANDLER'
const RESET_COMMAND = 'RESET_COMMAND'
const FREEZE_COMMAND = 'FREEZE_COMMAND'
const UNFREEZE_COMMAND = 'UNFREEZE_COMMAND'

function setHandlers (value) {
  return {
    type: SET_HANDLERS,
    value
  }
}

function setAliasMap (value) {
  return {
    type: SET_ALIAS_MAP,
    value
  }
}

function setDefaultCommand (value) {
  return {
    type: SET_DEFAULT_COMMAND,
    value
  }
}

function addHandler (value) {
  return {
    type: ADD_HANDLER,
    value
  }
}

function resetCommand () {
  return {
    type: RESET_COMMAND
  }
}

function freezeCommand () {
  return {
    type: FREEZE_COMMAND
  }
}

function unfreezeCommand () {
  return {
    type: UNFREEZE_COMMAND
  }
}

module.exports = {
  setHandlers,
  setAliasMap,
  setDefaultCommand,
  addHandler,
  resetCommand,
  freezeCommand,
  unfreezeCommand,
  SET_HANDLERS,
  SET_ALIAS_MAP,
  SET_DEFAULT_COMMAND,
  ADD_HANDLER,
  RESET_COMMAND,
  FREEZE_COMMAND,
  UNFREEZE_COMMAND
}
