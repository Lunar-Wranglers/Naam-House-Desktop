import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Home from './pages/Home'

import './App.css'


function App(props) {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
