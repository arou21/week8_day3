import React, { useState, useEffect } from "react"
import { Navigate } from 'react-router-dom'



export default function SignIn({logMeIn}) {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;
   

    const reqBody = {
      email: email,
      password: password
    }
    console.log(reqBody)

    const url = 'http://localhost:5000/login'
    const options = {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(email+":" + password)
      }
    //   body: JSON.stringify(reqBody),
    //   headers: {
    //     "Content-Type": 'application/json'
    //   }
    }
    console.log(options)


    const res = await fetch(url, options);
    const success = res.status == 200
    const data = await res.json()
    if (success) {
    logMeIn(data.user)
      setRedirect(true)
      
    }

  }
  if (redirect) {
    return < Navigate replace to='/'></Navigate>
  }
  return (
    <div>

      
      <div className='text-center my-5'>
      <h1>Log In</h1>
      <div className='d-flex justify-content-center text-center'>
      <form className='col-4' onSubmit={handleSubmit}>

        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>


        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"></input>
        </div>

        <button type="submit" class="btn btn-primary">SignIn</button>
      </form>
      </div>
      </div>
    </div>

  )
}

