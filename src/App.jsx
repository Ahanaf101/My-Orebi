import React from 'react'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Layout from './components/Layout'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Journal from './pages/Journal'
let multipage = (createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='shop' element={<Shop/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='contact' element={<Contacts/>}></Route>
    <Route path='journal' element={<Journal/>}></Route>
  </Route>
)))
const App = () => {
  return (
   <RouterProvider router={multipage}/>
  )

}

export default App