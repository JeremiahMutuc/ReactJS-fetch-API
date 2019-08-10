import React, { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
     posts: []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => (res.json()))
    .then((data) => {
      this.setState({posts:data})
    });
  }

  render(){
    
    return (
      <div className="container">
        {this.state.posts.map((pst) => (
          <table className = "table">
          <thead>
              <tr>
                <th>Title</th>
                <th>Post</th>
              </tr>
              <tr>
                  <td>{pst.title}</td>
                  <td>{pst.body}</td>
              </tr>

          </thead>
         </table>

        ))}
         
      </div>
    );
  }
  
}

export default App;
