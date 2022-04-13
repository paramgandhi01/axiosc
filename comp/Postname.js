import React, { Component } from 'react';
import axios from "axios";

export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state={
            name:""
        }
    }
    change=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
  handle=(e)=>{
    e.preventDefault();
    const user={
        name:this.state.name,
    };
    axios.post("https://jsonplaceholder.typicode.com/users",{user})
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })

  }
    
  render() {
    return <div>
        <form onSubmit={this.handle}>
            <label>person name:</label>
            <input type="text" name="name" onChange={this.change}/>
            <button type="submit">add</button>
        </form>
    </div>;
  }
}