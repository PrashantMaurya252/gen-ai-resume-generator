import React from 'react'
import "../styles/home.scss"

const Home = () => {
  return (
    <main className='home'>
        <div className="interview-input-group">
            <div className='left'>
            <textarea name='jobDescription' id='jobDescription' placeholder='Enter your Job Description Here'/>
        </div>
        <div className="right">
            <div className="input-group">
                <label className='file-label' htmlFor='resume'>Upload your resume</label>
                <input type='file' name='resume' id='resume' accept='.pdf'/>
            </div>
            <div className="input-group">
                <label htmlFor='selfDescription'>Self Description</label>
                <textarea name='selfDescription' id='selfDescription' placeholder='Enter your self Description Here'/>
            </div>
            <button className='generate-btn'>Generate Interview Report</button>
        </div>
        </div>
        
    </main>
  )
}

export default Home