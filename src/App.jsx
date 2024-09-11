
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/home/Home'
import Service from './pages/services/Service'
import Blog from './pages/blogs/Blog'

function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='services' element={<Service/>}/>
        <Route path='blogs' element={<Blog/>}/>
      </Route>
    </Routes>
   </>
  )
}

export default App
