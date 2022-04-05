import React from 'react'
import { Routes, Route } from 'react-router'

import Home from './components/Home'
import Project from './components/CreateProject'


export default ({logado}) =>
        <Routes >
            <Route exact path="/" element={<Home  />} />          
            <Route  path="/newproject" element={<Project  />} />
        </Routes>