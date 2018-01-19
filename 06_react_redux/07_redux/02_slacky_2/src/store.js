import { createStore, combineReducers, applyMiddleware } from 'redux';
import sendLogin, { sendMessage } from './sendWs.js'

import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'


const initialState = {
  login: {
    loginInputValue: '',
    userName: null
  },
  message: {
    newMessage: '',
    currentChannel: ''
  },
  messages : {
    messages: []
  }



}

function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case 'LOGINVALUE':
      return state = {...state, loginInputValue: action.loginInputValue}
    case 'LOGIN':
      sendLogin(state.loginInputValue);
      return {...state, userName: state.loginInputValue}
    default:
      return state
  }
}

function messagesReducer(state = initialState.message, action) {
  switch (action.type) {
    case 'NEWMESSAGE':
      return state = {...state, newMessage: action.newMessage}
    case 'SENDMESSAGEANDRESET':
      sendMessage(store.getState().login.userName, state.currentChannel ,state.newMessage)
      return {...state, newMessage: ''}
    case 'CHAN_CHANGE':
      return {...state, currentChannel: action.currentChannel}
    default:
      return state
  }
}

function incomingMessagesReducer(state = initialState.messages, action) {
  switch (action.type) {
    case 'INCOMINGMESSAGES':
      return {...state, messages: action.messages}
    default:
      return state
  }
}


const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)


const rootReducer = combineReducers({
  login: loginReducer,
  message: messagesReducer,
  messages: incomingMessagesReducer,
  router: routerReducer
})

let store = createStore(rootReducer, applyMiddleware(middleware));

export default store
export { history }
