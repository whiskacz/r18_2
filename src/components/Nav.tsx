import React from 'react'
import { navMenuTitle } from '../data/data';
import { navMenuIcon } from '../data/data';

import logo from  "../images/logo.svg"


function Nav() {

  

  return (
    <div className='fixed flex row justify-around bg-slate-100 px-100 w-full h-20 '>
      <img src={logo} alt="logo" className='h-8 items self-center'/>
      <div className='flex row justify-between'>
      {navMenuTitle.map((element) =>(
        <div className='mx-2 self-center text-xl' key={element}>
          {element}
        </div>
      ))}
      </div>
      <div className='flex row justify-between items-center '>
        {navMenuIcon.map((element) => {
          const {id, link, Icon} = element
          return (
            <a href={link} key={id} className='mx-2'> 
            <Icon className=' w-7 h-7'  />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Nav