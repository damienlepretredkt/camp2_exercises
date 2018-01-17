import { createStore, combineReducers } from 'redux';
import sendLogin, { sendMessage } from './sendWs.js'

const initialState = {
  messages: [],
  newMessage: '',
  loginInputValue: '',
  userName: null
}

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGINVALUE':
      return state = {...state, loginInputValue: action.loginInputValue}
    case 'LOGIN':
      sendLogin(state.loginInputValue)
      return state = {...state, userName: state.loginInputValue}
    default:
      return state
  }
}

function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case 'NEWMESSAGE':
      return state = {...state, newMessage: action.newMessage}
    case 'SENDMESSAGEANDRESET':
      sendMessage(state.userName, state.newMessage)
      return state = {...state, newMessage: ''}
    default:
      return state
  }
}

function incomingMessagesReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCOMINGMESSAGES':
      return state = {...state, messages: action.messages}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  login: loginReducer,
  message: messagesReducer,
  messages: incomingMessagesReducer
})

let store = createStore(rootReducer);

export default store
