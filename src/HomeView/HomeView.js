import Header from '../Header/Header'
import SearchContainer from '../SearchContainer/SearchContainer'
import ToggleCardView from '../ToggleCardView/ToggleCardView'
import CardContainer from '../CardContainer/CardContainer'

const HomeView = () => {
  return (
    <section>
      <Header />
      <SearchContainer />
      <ToggleCardView />
      <CardContainer />
    </section>
  )
}

export default HomeView