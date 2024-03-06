import React from 'react'
import '../CSS/index.css'

export default function Tabbar() {

  return (
    <div className='tab_container flex justify-content-space-between bg-blue-500 text-white p-4'>
      <div>
        <h1>CallerApp</h1>
      </div>
      <div className='flex'>
        <div className='tab_item'>
            <i className='fas fa home'/>
            <span>Home</span>
        </div>
        <div className='tab_item'>
            <i className='fas fa home'/>
            <span>Contacts</span>
        </div>
        <div className='tab_item'>
            <i className='fas fa home'/>
            <span>Contact Us</span>
        </div>
        </div>
    </div>
  )
}
