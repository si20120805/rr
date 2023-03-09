import React, { useState } from 'react'
import axios from "axios";


import './css/registration.css'
import { NavLink } from 'react-router-dom';



const Registration = () => {

  // const useff = useEffect()




  const register = () => {
    console.log('inside')

    const { name, email, password, repassword } = user;

    if (name && email && password && (password === repassword)) {

     
      axios.post('http://localhost:8000/registration', user)
      alert("API done ")


    } else {
      alert('invalid')

     
    }
  }








  const handlechange = (e) => {

    const { name, value } = e.target
    console.log(name, value)
    userstate({
      ...user,
      [name]: value
    })

  }

  const [user, userstate] = useState({
    name: '',
    email: '',
    password: '',
    repassword: ''



  })
  return (
    <>
      {console.log(user)}
      <div className='registration'>
        <div style={{ padding: '20px', color: 'red' }}><b>Registration</b></div>

        <input type="text" name='name' value={user.name} placeholder='Name' onChange={handlechange}></input>
        <input type='text' name='email' value={user.email} placeholder='Email' onChange={handlechange}></input>
        <input type="password" name='password' value={user.password} placeholder='Password' onChange={handlechange}></input>
        <input type="password" name='repassword' value={user.repassword} placeholder=' REPassword' onChange={handlechange}></input>
        <div className='button'> <NavLink to='/login'>Login</NavLink></div>
        <div>or</div>
        <div className='button' onClick={register}>Register</div>
      </div>
    </>
  )
}

export default Registration