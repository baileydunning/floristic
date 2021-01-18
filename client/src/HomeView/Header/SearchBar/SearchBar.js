import { useState } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import './SearchBar.scss'

const SearchBar = ({ updateSearch }) => {
  const [userInput, setUserInput] = useState('')
  
  const submitSearch = (event) => {
    event.preventDefault()
    updateSearch(userInput)
    setUserInput('')
  }

  return (
    <form className='search-form'>
  
      <label>search for plants by name, location, or whatever you want.
        <input
          type='text'
          className='search-input'
          placeholder='search...'
          onChange={(event) => setUserInput(event.target.value)}
          value={userInput}
        />
        {userInput &&
          <Link to={`/search/${userInput}`}>GO</Link>
        }
      </label>
    </form>
  )
}

export default SearchBar