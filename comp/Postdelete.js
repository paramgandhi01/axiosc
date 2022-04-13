import React, { Component } from 'react';
import axios from "axios";

export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state={
            id:0
        }
    }
    change=(e)=>{
        this.setState({
            id:e.target.value
        })
    }
  handle=(e)=>{
    e.preventDefault();
    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })

  }
    
  render() {
    return <div>
        <form onSubmit={this.handle}>
            <label>id delete:</label>
            <input type="text" name="name" onChange={this.change}/>
            <button type="submit">add</button>
        </form>
    </div>;
  }
}