import React from 'react'
import quiz from '../../assets/quiz.png'
import scheduler from '../../assets/scheduler.png'
import weather from '../../assets/weather.png'
import generator from '../../assets/employee-generator.png'
import password from '../../assets/password.png'
import backend from '../../assets/backend.png'


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
 
  <div className="card">
    <div className="cardImgLink">
    <h2 className='cardTitle'>Employee Generator</h2>
      <a href="https://kwm0304.github.io/Employee-Generator/"><img className="cardImg" src={generator} style={{width:"20%"}} alt="day planner" /></a>
    </div>
      <div className="card-description">
        This command line application generates an overview of a company's employees.
      </div>
  </div>
  
  <div className="card">
    <div className="cardImgLink">
    <h2 className='cardTitle'>Password Generator</h2>
      <a href="https://kwm0304.github.io/Random-Password-Generator/"><img className="cardImg" src={password} style={{width:"20%"}} alt="day planner" /></a>
    </div>
      <div className="card-description">
        This random password generator was made using vanilla javascript.
      </div>
  </div>
  <div className="card">
    <div className="cardImgLink">
    <h2 className='cardTitle'>Social-Network-API</h2>
      <a href="https://github.com/kwm0304/Social-Network-API"><img className="cardImg" src={backend} style={{width:"20%"}} alt="day planner" /></a>
    </div>
      <div className="card-description">
        This project constructed the backend for a social network site using express and mongoose.
      </div>
  </div>
</div>
    )
}

export default Portfolio;