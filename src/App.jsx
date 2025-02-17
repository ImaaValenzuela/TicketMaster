import { useState } from 'react'
import Navbar from './components/navbar'
import Events from './components/Events'
import './App.css'

function App() {

  const [searchTerm, setSearchTerm] = useState('')

  const handleNavbarOnSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <>
      <Navbar onSearch = {handleNavbarOnSearch}/>
      <Events searchTerm = {searchTerm} />
    </>
  )
}

export default App
