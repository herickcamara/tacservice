import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './app.css'
import React from 'react'
import{ BrowserRouter } from 'react-router-dom'

import {NameForm} from '../components/Login'
import Logo from '../components/template/Logo'
import Routes from '../Routes.js'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
let logado = localStorage.getItem('@user') === null ? false : JSON.parse(localStorage.getItem('@user'))

export default props =>{
    return(
        <BrowserRouter >
       {logado?
       <div className="app">
           
       <Logo />
       <Nav/>
      <Routes />
       <Footer/>
       </div>
       :
       <NameForm />       
    }
        </BrowserRouter>
    )
}