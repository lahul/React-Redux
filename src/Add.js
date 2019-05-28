import React from 'react'
import { connect } from 'react-redux';
import { addEmp } from './Services/action.js';

class Add extends React.Component{

  state = {
    fields :{
    name :"",
    type :"",
    quantity :""
    }
  }
nameChanged = (e) =>{
    this.setState({
      fields :{
      name  : e.target.value,
      type  : this.state.fields.type,
      quantity : this.state.fields.quantity
      }
    })
  }

  typeChanged = (e) =>{
    this.setState({
      fields :{
      name  : this.state.fields.name,
      type  : e.target.value,
      quantity : this.state.fields.quantity
      }
    })
  }

  quantityChanged = (e) =>{
    this.setState({
      fields :{
      name  : this.state.fields.name,
      type  : this.state.fields.type,
      quantity : e.target.value
      }
    })
  }    

  addItem = () =>{
      this.props.addItem(this.state.fields.name);
      this.props.history.push('/')
  }

  render(){

    console.log(this.props);
  


    return(
    <div>
      Name : <input type="text" value={this.state.fields.name} onChange={(e)=>{this.nameChanged(e)}}/>
      Type : <input type="text" value={this.state.fields.type} onChange={(e) => {this.typeChanged(e)}}/>
      Quantity : <input type="text" value={this.state.fields.size} onChange={(e) =>{this.quantityChanged(e)}}/>
      <button onClick={() =>{this.addItem()}}>Add Item</button>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
    return{
        addItem : (item) => {dispatch(addEmp(item))}
    }
}

function mapStateToProps(state) {
    return{
        items : state 
       }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Add);