
import './App.css';

import { useDispatch } from 'react-redux';

import {addcart,removetocart,emptcart} from './Action';
import Header from './Header';
import Login from './Loginproject/Login';
import Home from './Loginproject/Home';
import Registration from './Loginproject/Registration';
import {Routes,BrowserRouter,Router,Route} from 'react-router-dom'
import { useState } from 'react';



function App() {
  const [value,setvalue]=useState(0)
  function incre(){
    setvalue(go=>go+1)
  }


  
  return (
    <>

    <button onClick={incre}> </button>
    <h1> increment number {value}</h1>

    
{/* <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home/>} /> 
    <Route path='/login' element={<Login/>}/> 
    <Route path='/registration'element={<Registration/>} /> 
  </Routes>
    
   
    </BrowserRouter> */}
    </>
    
  );
}

export default App;
