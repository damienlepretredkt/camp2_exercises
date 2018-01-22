import { createStore, combineReducers } from 'redux';
import sendLogin, { sendMessage } from './Websocket'


const initialState = {
  login: {
    loginInputValue: '',
    userName: null
  },
  message: {
    newMessage: ''
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
      sendLogin(state.loginInputValue)
      return state = {...state, userName: state.loginInputValue}
    default:
      return state
  }
}

function messagesReducer(state = initialState.message, action) {
  switch (action.type) {
    case 'NEWMESSAGE':
      return state = {...state, newMessage: action.newMessage}
    case 'SENDMESSAGEANDRESET':
      sendMessage(store.getState().login.userName, state.newMessage)
      return state = {...state, newMessage: ''}
    default:
      return state
  }
}

function incomingMessagesReducer(state = initialState.messages, action) {
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

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store
