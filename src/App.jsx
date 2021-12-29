import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Home from './pages/Home'
import Info from './pages/Info'

import './App.css'


function App(props) {
  const [page, setPage] = useState()
  return (
    <Layout page={page} id='layout'>
      <Routes>
        <Route path='/' element={<Home />} page='home'/>
        <Route path='/info' element={<Info />} />
      </Routes>
    </Layout>
  )
}

export default App
