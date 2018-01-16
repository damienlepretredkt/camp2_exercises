import { createStore, combineReducers } from 'redux';

const initialState = {title: 'My Counter', counter: 0}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
        return {...state,
                counter: state.counter + 1
              }

    case 'DECREMENT':
    return {...state,
            counter: state.counter - 1
          }

    default:
      return state
  }
}

function titleReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE':
        return {...state,
                title: state.title + "!"
              }
      break;
    default:
      return state
  }
}

const rootReducer = combineReducers({counter: counterReducer, title: titleReducer})

let store = createStore(rootReducer)

export default store
