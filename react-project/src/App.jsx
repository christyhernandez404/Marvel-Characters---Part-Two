import './styles/App.css'
import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CharacterList from './components/CharacterList'
import NotFound from './components/NotFound'
import CharacterDetail from './components/CharacterDetail'
import ComicsList from './components/ComicsList'


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />

        <Route path="/comics" element={<ComicsList />} />


        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App;
