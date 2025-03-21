import React from 'react'
import { Routes,Route } from 'react-router-dom';
import App from './App';
import AboutMe from './pages/AboutMe';
import ViewPortfolio from './pages/ViewPortfolio';
import Skill from './pages/Skill';

function Root() {
  return (
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/aboutMe' element={<AboutMe/>}>
        <Route path='viewPortfolio' element={<ViewPortfolio/>}/>
        <Route path='skill' element={<Skill/>}/>
      </Route>
    </Routes>
  )
}

export default Root;