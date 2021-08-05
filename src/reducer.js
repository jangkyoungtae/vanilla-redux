import { createStore } from 'redux';

const reducer = (state = 0,action) => {
  if (action.type ==="ADD") {
       return state+1;
  } else if (action.type ==="MINUS") {
       return state-1;
  } else {
       return state;
  }
};
const store = createStore(reducer);

export default store;