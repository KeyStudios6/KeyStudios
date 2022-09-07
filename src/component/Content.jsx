import React from 'react'
import wave from '../img/wave.png'
import me from '../img/me.jpeg'

function Content() {
  return (
    <div className='content'>
      <main>
        <div>
          <h1>Hi <img src={wave} alt="wave" width={50} /></h1>
          <h1 className='intro'>I'm <p className='me'>_Key</p>.</h1>
          <h1>Software Engineer</h1>
          <p>I strive to develop experiences that make life just a little better day by day. 
            I work with Swift, SwiftUI, SpriteKit, Java, C#, JavaScript, React, and REST.</p>
        </div>
        <div className='buttons'>
          <button className="cta hire">HIRE ME</button>
          <button className="cta project">SEE MY PROJECTS</button>
          
        </div>
        <p>Site under construction...</p>
      </main>
      <figure>
        <img src={me} alt="Dwayne (Key) Williams" className='me-img' width={350} />
        <div className='img-bg'></div>
      </figure>
    </div>
  )
}

export default Content