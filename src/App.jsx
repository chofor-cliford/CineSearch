import { useState } from "react"
import Search from "./components/Search"

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <div className='pattern'>
      <div className='wrapper'>

      <header>
        <img src="./hero.png" alt="Hero Banner" />
        <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy without the Hassle</h1>
      </header>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  )
}

export default App