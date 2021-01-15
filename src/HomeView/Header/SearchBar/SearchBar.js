import { useState } from 'react'
import { searchPlants } from '../../../apiCalls'

const SearchBar = ({ handleFetch }) => {
  const [userInput, setUserInput] = useState('')
  
  const fetchQueryResults = (event) => {
    event.preventDefault()
    searchPlants(userInput)
    .then(data => {
      handleFetch(data.data)
      console.log('fetch query results')
    })
    .catch(error => console.log(error))
  }

  return (
    <form onSubmit={(event) => fetchQueryResults(event)}>
      <input 
        type='text'
        placeholder='search plants'
        onChange={(event) => setUserInput(event.target.value)}
        value={userInput}
      />
      <input
        type='submit'
        value='go'
      />
    </form>
  )
}

export default SearchBar