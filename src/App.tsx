import './App.css'
import backgroundImage from './background.jpeg'
import ClickCounter from './ClickCounter'
import TwitterIcon from './twitter.svg'

const App = () => {
  return (
    <>
      <h1>hello world</h1>
      <img src={backgroundImage} alt='background' />
      <div className='logo'>
        <TwitterIcon />
      </div>
      <ClickCounter />
    </>
  )
}

export default App
