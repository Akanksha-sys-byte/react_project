import React from 'react'
import "./App.css"

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Signup from './component/Signup'
import CreateUser from './component/CreateUser'
import Navbar from './component/Navbar'
import Alluser from './component/Alluser'
import Login from './component/Login'
import Edit from './component/Edit'

function AdminOnly() {
  return localStorage.getItem('isAdmin') === 'true'
    ? <Alluser />
    : <Navigate to="/login" replace />;
}

function App(){
    return(
        <div className="container">
            <BrowserRouter>

        <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/createUser' element={<CreateUser/>}/>
                    <Route path='/all' element={<AdminOnly/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/edit/:id' element ={<Edit></Edit>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App