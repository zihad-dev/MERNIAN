import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './Layout/Layout'
import HomePage from './Pages/HomePage'
import Store from './Pages/Store'
import Newsfeed from './Pages/Newsfeed'
import Friends from './Pages/Friends'

function App() {

  return (
    <>
  <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<Store/>} />
        <Route path="/newsfeed" element={<Newsfeed />} />
        <Route path="/Friends" element={<Friends />} />

      </Route>
    </Routes>
    </>
  )
}

export default App
