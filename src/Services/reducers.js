import React from 'react';

const reducer = (state = ['a','b'], action) =>{
  let newState = Object.assign(state);
  console.log(action.item);
  if(action.type == 'add' && action.item != null && action.item != ""){
    newState = [...newState, action.item];

  }
  else if(action.type == 'remove'){
    console.log(action.item);
    newState = state.filter(item =>item != action.item);

  }

  else if(action.type == 'error'){
    return newState;
  }
  return newState;
}

export default reducer;