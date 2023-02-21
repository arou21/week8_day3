import React, { useState, useEffect } from "react"
import { Navigate } from 'react-router-dom'
import Login from "./Login";

export default function SignUp() {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target)
    console.log(e.target[0].value)
    const first_name = e.target[0].value;
    const last_name = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const confirmPassword = e.target[4].value;

    const reqBody = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    }
    console.log(reqBody)

    const url = 'http://localhost:5000/signup'
    const options = {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": 'application/json'
      }
    }
    if (password !== confirmPassword) {
      console.log('password does not match')
    }


    const res = await fetch(url, options);
    const success = res.status == 200
    if (success) {
      setRedirect(true)
    }

  }
  if (redirect) {
    return < Navigate replace to='/signIn'></Navigate>
  }
  return (
    <div>

      
      <div className='text-center my-5'>
      <h1>Sign Up</h1>
      <div className='d-flex justify-content-center text-center'>
      
      <form className='col-4' onSubmit={handleSubmit}>
        

        <label for="exampleInputFirstName" class="form-label">First Name</label>
        <input type="firstName" class="form-control" id="exampleInputFirstName" aria-describedby="emailHelp"></input>
        <label for="exampleInputLastName" class="form-label">Last Name</label>
        <input type="lastName" class="form-control" id="exampleInputLastName" aria-describedby="emailHelp"></input>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>


        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"></input>
          <label for="confirmPassword" class="form-label">Confirm Password</label>
          <input type="conifrmPassword" class="form-control" id="ConfirmPassword"></input>
        </div>

        <button type="submit" class="btn btn-primary">Sign Up</button>
      </form>
    </div>
    </div>
    </div>

  )
}
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const username =e.target.username.value;
//   const email =e.target.email.value;
//   const password =e.target.password.value;
//   const confirmPassword =e.target.confirmPassword.value;

// }

// import React, { Component } from 'react'
// import { json } from 'react-router';

// export default class Signup extends Component {
//     constructor(){
//         super();
//         this.state = {
//           first_name: '',
//           last_name: '',
//           email: '',
//           password: '', 
//           confirmPassword: ''

//         }

//     }
// makepost= async function (){
//   let res= await fetch('http://127.0.0.1:5000/signup', {
//     method: 'POST', body: JSON.stringify({
//       first_name: this.state.first_name,
//       last_name: this.state.last_name,
//       email: this.state.email,
//       password: this.state.password
//     })
//   })

// }

// render() {
// return (


// <div>
//   <h1>Sign Up</h1>
//   <form onSubmit={handleSubmit}>
//     <input name='username'/>
//     <input name='email'/>
//     <input name='password'/>
//     <input name='confirmPassword'/>
//     <button type='submit'>Sign Up</button>
//   </form>

{/* {/* <h1>SignUp</h1> */ }
{/* <form onSubmit={this.makepost} className="container col-4">
          <div className="row-auto">
          <input type="first_name" className="form-control" id="inputfirstName" placeholder="first name"></input>
          <input type="last_name" className="form-control" id="inputlastName" placeholder="last name"></input>
          <input type="email" className="form-control" id="inputEmail" placeholder="Email"></input>
            
          </div>
          <div className="-auto"> 
            <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
            <input type="password" className="form-control" id="inputPassword2" placeholder="Password"></input>
            <input type="password" className="form-control" id="inputPassword2" placeholder="Confirm Password"></input>
          </div> 
          <div className="row-auto"> 
            <button type="submit" className="btn btn-primary mb-3">SignUp</button>
          </div>
        </form> */}
{/* </div> 
    )
  }
} */}

