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

  addItem = (event) =>{
      event.preventDefault();
      this.props.addItem(this.state.fields.name);
      this.props.history.push('/')
  }

  render(){

    console.log(this.props);
  


    return(
      <div>
      <form>
    <div className="form-group">
      <label for="forInputName">Name</label> 
      <input type="text" className="form-control" value={this.state.fields.name} onChange={(e)=>{this.nameChanged(e)}}/>
      </div>
      <div className="form-group">
      <label for="forInputType">Type</label> 
      <input type="text" className="form-control" value={this.state.fields.type} onChange={(e) => {this.typeChanged(e)}}/>
      </div>
      <div className="form-group">
      <label for="forInputQuantity">Quantity</label>
      <input type="text" className="form-control" value={this.state.fields.size} onChange={(e) =>{this.quantityChanged(e)}}/>
      </div>
      <button type="submit" class="btn btn-primary" onClick={(e)=>{this.addItem(e)}}>Submit</button>
      
      </form>
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