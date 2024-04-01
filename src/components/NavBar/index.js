import './index.css'

const NavBar = props => {
  const {gameScore, gameTimer} = props

  return (
    <nav className="navClass">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="score-timer-container">
        <p className="score-styling">
          Score: <span className="score-color">{gameScore}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="time-style">{gameTimer} Sec</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
