import React, { useState } from 'react'
import { motion } from 'framer-motion'
import MainSite from '../component/MainSite'
import NewPortfolio from '../component/NewPortfolio'
import WeatherProject from '../component/WeatherProject'
import CloneCording from '../component/CloneCording'
import Nav from '../Nav/Nav'

import '../css/viewPortfolio/viewportfolio.css'

function ViewPortfolio() {

  const [selectedProject, setSelectedProject] = useState('mainSite')

  const handleClick = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className='viewportfolioWrap'>

      {selectedProject === 'mainSite' && <MainSite />}
      {selectedProject === 'newPortfolio' && <NewPortfolio />}
      {selectedProject === 'weatherProject' && <WeatherProject />}
      {selectedProject === 'cloneCording' && <CloneCording />}

      <div className='induce'>
        <motion.span initial={{ y: 0 }} animate={{ y: 45 }} transition={{ duration: 1.5, delay: 2, repeat: Infinity }}></motion.span>
      </div>

      <div className='projectsWrap'>
        <h1>포트폴리오 보기</h1>

        <ul>
          <li className={selectedProject === 'mainSite' ? 'clicked' : ''}><button onClick={() => handleClick('mainSite')}>
            <div className='thumbNail'>
              <figure>
                <img src="/mainSiteImg.PNG" alt="mainSiteImg" />
              </figure>
            </div>
            <h2 className='eng'>Main Site</h2>
          </button></li> 

          <li className={selectedProject === 'newPortfolio' ? 'clicked' : ''}><button onClick={() => handleClick('newPortfolio')}>
            <div className='thumbNail'>
              <figure className='newProjectImg'>
                {/* <img src="" alt="" /> */}
              </figure>
            </div>
            <h2 className='eng'>New Project</h2>
          </button></li>

          <li className={selectedProject === 'weatherProject' ? 'clicked' : ''}><button onClick={() => handleClick('weatherProject')}>
            <div className='thumbNail'>
              <figure>
                <img src="/weatherProjectImg.PNG" alt="weatherProjectImg" />
              </figure>
            </div>
            <h2 className='eng'>Weather Project</h2>
          </button></li>

          <li className={selectedProject === 'cloneCording' ? 'clicked' : ''}><button onClick={() => handleClick('cloneCording')}>
            <div className='thumbNail'>
              <figure>
                <img src="/cloneCordingImg.PNG" alt="cloneCordingImg" />
              </figure>
            </div>
            <h2 className='eng'>Clone Cording</h2>
          </button></li>

        </ul>
      </div>

      <Nav />



    </div>
  )
}

export default ViewPortfolio;