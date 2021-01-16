import { useState } from 'react'
import { searchPlants } from '../../../apiCalls'

const SearchBar = ({ handleFetch }) => {
  const [userInput, setUserInput] = useState('')
  
  const fetchQueryResults = (event) => {
    event.preventDefault()
    searchPlants(userInput)
    .then(data => {
      handleFetch(data.data)
      setUserInput('')
      console.log('fetch query results')
    })
    .catch(error => console.log(error))
  }

  return (
    <form onSubmit={(event) => fetchQueryResults(event)}>
      <label>
        Search for plants by scientific name, common name, location, or whatever you want.
      <input 
        type='text'
        placeholder='search plants'
        onChange={(event) => setUserInput(event.target.value)}
        value={userInput}
      />
      </label>
      <input
        type='submit'
        value='go'
      />
    </form>
  )
}

export default SearchBar