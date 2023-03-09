import React from 'react'
import {useSelector} from 'react-redux'


import './razer.css'

import p1 from './img/sr.png'

const Header = () => {
    const sst=useSelector((state)=>state.cartdata)
    
    console.log(sst)
  return (
    <>
    <div className='game'>
        <div className='cart'>
            <span>{sst.length}</span>
            <img  className='imt' src={p1} alt='imge'/>
        </div>
    </div>
    
    </>
  )
}

export default Header