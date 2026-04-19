import { Home, View } from 'lucide-react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pricing from './pages/Pricing'
import Projects from './pages/Projects'
import MyProjects from './pages/MyProjects'
import Preview from './pages/Preview'
import Community from './pages/Community'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/pricing' element ={<Pricing/>} />
        <Route path='/projects/:projectId' element ={<Projects/>} />
        <Route path='/projects' element ={<MyProjects/>}/>
        <Route path='/preview/:projectId' element ={<Preview />} />
        <Route path='/preview/:projectId/:versionId' element ={<MyProjects/>} />
        <Route path='/community' element ={<Community/>}/>
        <Route path='/view/:projectId' element ={<View/>}/>
      </Routes>
    </div>
  )
}
