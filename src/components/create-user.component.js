import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      emailid:'',
      contact:''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value

    })
  }

  
  onChangeEmail(e) {
    this.setState({
      emailid: e.target.value

    })
  }

  
  onChangeContact(e) {
    this.setState({
      contact: e.target.value

    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      emailid:this.state.emailid,
      contact:this.state.contact
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      emailid:'',
      contact:''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>

          <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.emailid}
                onChange={this.onChangeEmail}
                />
          </div>

          <div className="form-group"> 
            <label>Contact No: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.contact}
                onChange={this.onChangeContact}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Contact" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}