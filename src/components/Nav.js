import React, { Component } from 'react'
import { json, Link } from 'react-router-dom';
import LogOutButton from './LogOutButton';

export default class Nav extends Component {
  render() {
    const loggedin=Object.keys(this.props.user).length>0
        console.log(this.props.user)
    console.log(loggedin)
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid"><a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/profile">Profile</Link>
              <Link className="nav-link" to="/signIn">Signin</Link>
              <Link className="nav-link" to="/signUp">Sign up</Link>
              <Link className="nav-link" to="/todo">To Do List</Link>
              <div className="nav-link"> 
              { this.props.user && this.props.user.first_name}
              { loggedin && <LogOutButton logMeOut={this.props.logMeOut}/>}
              </div>
            </div>
          </div>
        </div>
      </nav>



    )
  }
};