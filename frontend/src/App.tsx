
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {  Posts } from './pages/Posts'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Post } from './pages/Post'
import{ Publish } from './pages/Publish'

function App() {
  return (
   <div className=''>
          <BrowserRouter>
            <Routes>
              <Route path='/posts'element={<Posts/>}/>
              <Route path='/signin' element={<Signin/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/post/:id' element={<Post/>}/>
              <Route path='/publish' element={<Publish/>}/>
            </Routes>
          </BrowserRouter>
   </div>
  )
}

export default App
