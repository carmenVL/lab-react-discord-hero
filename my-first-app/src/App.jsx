import { useState } from 'react'
import menuIcon from './assets/menu-icon.png'
import discordLogo from './assets/discord-logo-white.png'
import discordBackground from './assets/discord-background.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
          <img src={discordLogo} className="logo" alt="Discord logo" />
          <img src={menuIcon} className="menu" alt="Menu icon" />
      </div>
      <h1>IMAGINE A PLACE...</h1>
      <p className="description">
      ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
      </p>
      <div className="card">
        <button>
        Download for Mac
        </button>
        <button className="button-2">
        Open Discord in your browser
        </button>
      </div>
      <div className="footer">
          <img src={discordBackground} className="background" alt="Discord background" />
      </div>
    </>
  )
}

export default App
