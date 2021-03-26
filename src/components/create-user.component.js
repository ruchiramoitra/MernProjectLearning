import React, { Component } from 'react';
import axios from 'axios';
export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: ""
        };
      }

      onChangeUsername = (e) => {
        this.setState({
          username: e.target.value,
        });
      };
      
      onSubmit = (e) => {
 
        e.preventDefault();
        const { username } = this.state;
        const user = {
          username
        };
        axios.post("http://localhost:5000/users/add",user)
        .then(res => console.log(res.data))
        console.log(user);
    
        // window.location = "/";
      };
    render(){
        return (
            <div>
              <h3>Creat User</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
            <label>Username: </label>
            <input
              type="test"
              required
              className="form-control"
              value={this.state.user}
              onChange={this.onChangeUsername}
            />
             <div className="form-group">
              <input type="submit" value="Create Excercise Log" className="btn btn-primary" />
          </div>
            </div>
                </form>
                </div>

        )
    }
}