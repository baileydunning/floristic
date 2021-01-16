import { useState } from 'react'
import { searchPlants } from '../../../apiCalls'
import './SearchBar.scss'

const SearchBar = ({ handleFetch }) => {
  const [userInput, setUserInput] = useState('')

  const fetchQueryResults = (event) => {
    event.preventDefault()
    searchPlants(userInput)
      .then(data => {
        handleFetch(data.data)
        setUserInput('')
      })
      .catch(error => console.log(error))
  }

  return (
    <form
      className='search-form'
      onSubmit={(event) => fetchQueryResults(event)}>
      <label>search for plants by name, location, or whatever you want.
      <input
          type='text'
          className='search-input'
          placeholder='search...'
          onChange={(event) => setUserInput(event.target.value)}
          value={userInput}
        />
        <input
          className='submit'
          type='submit'
          value='GO'
        />
      </label>
    </form>
  )
}

export default SearchBar