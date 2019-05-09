import React from 'react';

const reducer = (state = ['a','b'], action) =>{
  if(action.type == 'add')
      return [...state, action.item];
  return state;
}

export default reducer;