import React, { Component } from 'react';
import axios from "axios";

export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")  
        .then(res=>{
            this.setState({posts:res.data
            })
        })
    }

    
  render() {
    return <div>
        <ul>
            {this.state.posts.map(user=><li key={user}>{user.name}</li>)}
        </ul>
    </div>;
  }
}

