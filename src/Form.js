import React from 'react';
import addEmp  from './action'
import { connect } from 'react-redux';


class Form extends React.Component{

  submit = () =>{
  let dispatch = this.props.store.dispatch;
  dispatch(addEmp(document.getElementById('txt').value));
  console.log(this.props.store.getState())
  console.log(this.state);
  }

  render(){

    const items = this.props.store.getState();
    const display = items.map((item)=> item);
    
    return(
      <div>
      {display}
      <input type="input" id="txt"/>
      <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

function mapStateToProps(state){return { items: state }};

export default connect(mapStateToProps)(Form);