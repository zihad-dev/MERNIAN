

import { Route, Routes } from 'react-router'
import Layout from './Layout/Layout'
import HomePage from './Pages/HomePage'
import Store from './Pages/Store'
import Newsfeed from './Pages/Newsfeed'
import Friends from './Pages/Friends'
import About from './Pages/About'

function App() {

  return (
    <>
  <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<Store/>} />
        <Route path="/newsfeed" element={<Newsfeed />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/About" element={<About />} />

      </Route>
    </Routes>
    </>
  )
}

export default App
