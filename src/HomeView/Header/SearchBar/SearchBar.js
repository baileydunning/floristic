import { useContext, useState } from 'react'
import HomeContext from '../../HomeContext'
import { searchPlants } from '../../../apiCalls'

const SearchBar = () => {
  const [userInput, setUserInput] = useState('')
  const context = useContext(HomeContext)
  
  const fetchQueryResults = () => {
    searchPlants(userInput)
  }

  return (
    <form onSubmit={fetchQueryResults}>
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