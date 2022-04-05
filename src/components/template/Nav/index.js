import React from 'react'
import MenuNavegtion from './MenuNavegtion'
import './nav.css'

export default props =>{
    
  const  clearLocalStoge=()=>{
        localStorage.removeItem("@user")
        window.location.reload('/')
    }
    return(
        <aside className="menu-area">
            <nav className="menu" >
                <MenuNavegtion way="/" icon="home" title="Inicio" />
                <MenuNavegtion way="/newproject" icon="users" title="new projector" />
                <a style={{color:'#fff'}} onClick={e=>clearLocalStoge()} >Exit</a>
            </nav>
        </aside>)}
