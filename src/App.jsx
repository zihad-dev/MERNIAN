import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './Layout/Layout'
import HomePage from './Pages/HomePage'
import Store from './Pages/Store'
import Newsfeed from './Pages/Newsfeed'

function App() {

  return (
    <>
  <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<Store/>} />
        <Route path="/newsfeed" element={<Newsfeed />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
