import './Loading.scss'

const Loading = () => {
  return (
    <section className='loading-section' data-testid='loading'>
      <h2 className='loading-txt'>Excuse me while I fetch<br />the data you requested</h2>
      <div className="loading">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default Loading