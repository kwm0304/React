import React from 'react'
import quiz from '../../assets/quiz.png'
import scheduler from '../../assets/scheduler.png'
import weather from '../../assets/weather.png'


function Portfolio() {
    return(
        <div className="Projects">

  <div className="card">
    <div className="cardImgLink">
    <h2 className='cardTitle'>Weather App</h2>
      <a href="https://kwm0304.github.io/Weather-App/"><img className="cardImg" src={weather} style={{width: "33%"}}alt="weather forecast" /></a>
    </div>
      <div className="card-description">
        This weather app was made using javascript and basic fetch methods to return a 5-day forecast for cities in the U.S.
      </div>
  </div>

  <div className="card">
    <div className="cardImgLink">
    <h2 className='cardTitle'>Coding Quiz</h2>
      <a href="https://kwm0304.github.io/Coding-quiz-app/"><img className="cardImg" src={quiz} style={{width: "20%"}} alt="computer quiz" /></a>
    </div>
      <div className="card-description">
        This simple quiz game was made with vanilla javascript.
      </div>
  </div>

  <div className="card">
    <div className="cardImgLink">
    <h2 className='cardTitle'>Work Day Scheduler</h2>
      <a href="https://kwm0304.github.io/Day-Scheduler/"><img className="cardImg" src={scheduler} style={{width:"20%"}} alt="day planner" /></a>
    </div>
      <div className="card-description">
        Made using moment.js and jquery, this provides app provides a real-time work day schedule to keep the user on track.
      </div>
  </div>
</div>
    )
}

export default Portfolio;