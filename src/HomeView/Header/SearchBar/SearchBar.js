import { useContext, useState } from 'react'
import HomeContext from '../../HomeContext'
import { searchPlants } from '../../../apiCalls'

const SearchBar = ({ handleFetch }) => {
  const [userInput, setUserInput] = useState('')
  // const context = useContext(HomeContext)
  
  const fetchQueryResults = (event) => {
    console.log('fetch query results')
    event.preventDefault()
    searchPlants(userInput)
      .then(data => handleFetch(data.data))
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