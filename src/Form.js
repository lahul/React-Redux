import React from 'react';
import  { addEmp }   from './Services/action.js'
import {removeEmp} from './Services/action'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';


class Form extends React.Component{

  state = {
    
  }

  submit = () =>{
  let val = document.getElementById('txt').value;

  let dispatch = this.props.dispatch;
  dispatch(addEmp(val));

  }

  remove = (item) => {
    console.log(item);
    let dispatch = this.props.dispatch;
    dispatch(removeEmp(item));
  }

  gotoAdd = () =>{
      this.props.history.push('/add');
    }

  render(){
    console.log(this.props);
    const items = this.props.items;
    const display = items.map((item)=>
    
    <li className="item" key={item}><span className="itemName">{item}</span><button className="itemButton" onClick={() => {this.remove(item)}}>Remove</button></li>);
    
    
    return(
      <div>
      <ul className="list">
      {display}
      </ul>
      <span className="addItem">
      <button onClick={this.gotoAdd} className='addButton'>Add</button>
      <span id="error"></span>
      </span>
      </div>
    )
  }
}

function mapStateToProps(state){return { items: state }};

export default connect(mapStateToProps)(Form);

//export default Form;