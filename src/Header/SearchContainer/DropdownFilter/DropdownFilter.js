import { useEffect, useState } from 'react'
import { getLocations } from '../../../apiCalls'

const DropdownFilter = () => {
  const [locations, setLocations] = useState(null)

  useEffect(() => {
    if (!locations) {
      getLocations()
        .then(data => setLocations(data.data))
        .catch(error => console.log(error))
    }
  }, [locations])

  return (
    <form>
      <select>
        <option>Family</option>
      </select>
    </form>
  )
}

export default DropdownFilter