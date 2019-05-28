const ADD = 'add';
const REMOVE = 'remove';



const addEmp = (item) =>{
  return {
    type : ADD,
    item : item
  }
}
const removeEmp = (item) =>{
  console.log(item);
    return {
      type : REMOVE,
      item : item
    }
  }


export {addEmp, removeEmp}

