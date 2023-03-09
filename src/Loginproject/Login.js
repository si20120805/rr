
import './css/login.css'
import { useState } from 'react'
import axios from 'axios'
import {NavLink } from "react-router-dom"


function Login() {

    const register=()=>{
    console.log('inside_Login')
    const {name,password}=user;


    if(name&&password){
        axios.post('http://localhost:8000/login', user).then((data)=>{
          alert(data.data.msg)
        })
        

    }else{

        alert('Failed to load ')
    }


    }

    const handchange=(e)=>{


        const {name,value}=e.target;
        console.log('erer',e.target)
        userstate({

            ...user,
            [name]:value
        })
    }

    const [user,userstate]=useState({
        name:'',
        password:'',
        
    })
  return (
    
   <>
   {console.log(user)}
   <div className='login'>
   <div style={{padding:'20px', color:'red'}}><b>Login</b></div>

    <input type="text" placeholder='Name' name='name' value={user.name} onChange={handchange}></input>
    <input type="text" placeholder='Password' name='password' value={user.password} onChange={handchange}></input>
    <div className='button' onClick={register}> Login</div>
    <div>or</div>
    <div className='button' ><NavLink to='/registration' >Register</NavLink> </div>
    
    
   </div>
   </>
  )
}

export default Login