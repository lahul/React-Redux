const ADD = 'add';

const addEmp = (item) =>{
  return {
    type : ADD,
    item : item
  }
}

export default addEmp;