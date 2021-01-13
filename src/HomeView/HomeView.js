import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import ToggleCardView from '../ToggleCardView/ToggleCardView'
import CardContainer from '../CardContainer/CardContainer'
import { getPlantList } from '../apiCalls'

const HomeView = () => {
  const [plantList, setPlantList] = useState([])

  useEffect(() => {
    getPlantList()
    .then(data => setPlantList(data.data))
    .catch(error => console.log(error))
  }, [plantList])

  return (
    <section>
      <Header />
      <ToggleCardView />
      <CardContainer />
    </section>
  )
}

export default HomeView