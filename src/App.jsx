import { useState } from 'react'
import './App.css'
import MainPage from './Pages/MainPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StartProjects from './Pages/StartProjects'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<MainPage />} />
            <Route path='/start/project' element={<StartProjects />} />
          </Route>
        </Routes>
      </Router>

      
    </>
  )
}

export default App
