import React from 'react'
import picture from '../../assets/IMG_3988.JPEG'
function About() {
    return (
      <section className="my-5">
        <h1 id="about">About</h1>
        <div className='introImg'>
        <img src={picture} className="my-2"  alt="me" />
        </div>
        <div className="flex-row">
          <div className='abouttext'>
          <p>
            My name is Kenan McKenzie, I live in Concord, NC. I am a full-stack/no-stack developer who hopes to get a programming job where I can continue to learn and grow. 
          </p>
        </div>
        </div>
      </section>
    );
  }

  export default About;