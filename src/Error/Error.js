import { Link } from 'react-router-dom'
import './Error.scss'

const Error = () => {
  return (
    <section>
      <h2>Oops!</h2>
      <h3>We were unable to find the plant you were looking for.</h3>
      <p>Please navigate back <Link to='/'>home</Link> and select a different plant.</p>
    </section>
  )
}

export default Error