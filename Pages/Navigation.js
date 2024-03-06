import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts'
import ContactUs from './ContactUs'
export default function Navigation() {
  return (
    <div>
        <Route Component={Home} path='/Home'/>
        <Route Component={Contacts} path='/Contacts'/>
        <Route Component={ContactUs} path='/ContactUs'/>
    </div>
  )
}
