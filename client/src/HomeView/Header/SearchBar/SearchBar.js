import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './SearchBar.scss'
const SearchBar = ({ updateSearch }) => {
  const [userInput, setUserInput] = useState('')
  const history = useHistory()

  const submitSearch = (event) => {
    event.preventDefault()
    updateSearch(userInput)
    history.push(`/search/${userInput}/1`)
    setUserInput('')
  }

  return (
    <form
      onSubmit={(event) => submitSearch(event)}
      className='search-form'>
      <label>search for plants by name, location, or whatever you want.
        <input
          type='text'
          className='search-input'
          placeholder='search...'
          onChange={(event) => setUserInput(event.target.value)}
          value={userInput}
        />
        {userInput &&
          <button onClick={(event) => submitSearch(event)}>
            GO
          </button>
        }
      </label>
    </form>
  )
}

export default SearchBar