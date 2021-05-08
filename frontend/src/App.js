import './index.css'
import bike from './images/bike.png'
import Map from './components/Map'

function App() {
  return (
    <div className='parent-grid-container'>
      <div className='grid-container'>
        <div className='header'>
          <h1>bikeshare-data</h1>
          <img src={bike} className='bike-img' alt='bike emoji'></img>
        </div>
        <div className='main'>

        </div>
        <div className='footer'>
          <h1>Created during TOHacks 2021</h1>
          <a className='link' href='https://github.com/vince1444/TOHacks_TeamEpicGamers'>github</a>
        </div>
      </div>
    </div>




















  );
}

export default App;
